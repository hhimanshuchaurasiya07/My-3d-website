"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const FACES = [
  "rotateY(0deg)",
  "rotateY(90deg)",
  "rotateY(180deg)",
  "rotateY(-90deg)",
  "rotateX(90deg)",
  "rotateX(-90deg)",
];

function Cube({ size }: { size: number }) {
  const h = size / 2;
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size, transformStyle: "preserve-3d" }}
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{ duration: 28, ease: "linear", repeat: Infinity }}
    >
      {FACES.map((t) => (
        <div
          key={t}
          className="absolute inset-0 rounded-2xl border border-primary/40 bg-primary/10 backdrop-blur-[2px]"
          style={{ transform: `${t} translateZ(${h}px)` }}
        />
      ))}
    </motion.div>
  );
}

/** Pointer-tilted, scroll-parallaxed layer of floating 3D objects. */
export function FloatingShapes() {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const { scrollY } = useScroll();
  const lift = useTransform(scrollY, [0, 800], [0, -160]);
  const sink = useTransform(scrollY, [0, 800], [0, 120]);
  const rotY = useTransform(mx, [-1, 1], [-14, 14]);
  const rotX = useTransform(my, [-1, 1], [10, -10]);

  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, mx, my]);

  return (
    <div
      ref={wrap}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: 1100 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      >
        <motion.div style={{ y: lift }} className="absolute right-[10%] top-[18%]">
          <motion.div
            animate={reduce ? undefined : { y: [0, -24, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cube size={120} />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: sink }} className="absolute left-[6%] top-[58%]">
          <motion.div
            className="size-28 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd6c9,#3b4bff_70%)] shadow-2xl"
            animate={reduce ? undefined : { y: [0, 30, 0], x: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div style={{ y: lift }} className="absolute bottom-[12%] right-[22%]">
          <motion.div
            className="size-36 rounded-full border-[14px] border-primary/30"
            style={{ transformStyle: "preserve-3d" }}
            animate={reduce ? undefined : { rotateX: [60, 120, 60], rotateZ: [0, 180, 360] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
