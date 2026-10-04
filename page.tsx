"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { FloatingShapes } from "@/components/floating-shapes";
import { MagneticButton } from "@/components/magnetic-button";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

// Replace with your real projects.
const PROJECTS = [
  { src: u("1470071459604-3b5ec3a7fe05"), alt: "Fog rolling through a forested valley", title: "Low Country", subtitle: "Weather app for hikers",
    meta: [{ label: "Year", value: "2025" }, { label: "Role", value: "Design + build" }, { label: "Stack", value: "Next.js" }] },
  { src: u("1500534314209-a25ddb2bd429"), alt: "Sunlit dune ridge under blue sky", title: "Dry Season", subtitle: "Water-usage dashboard",
    meta: [{ label: "Year", value: "2025" }, { label: "Role", value: "Front end" }, { label: "Stack", value: "React" }] },
  { src: u("1441974231531-c6227db76b6e"), alt: "Sunlight through dense trees", title: "Understory", subtitle: "Forest survey tool",
    meta: [{ label: "Year", value: "2024" }, { label: "Role", value: "Design + build" }, { label: "Stack", value: "Next.js" }] },
  { src: u("1501785888041-af3ef285b470"), alt: "Mountain lake mirroring a ridgeline", title: "Still Water", subtitle: "Meditation timer",
    meta: [{ label: "Year", value: "2024" }, { label: "Role", value: "Product design" }, { label: "Stack", value: "Swift" }] },
  { src: u("1465101162946-4377e57745c3"), alt: "Light trails over a dark landscape", title: "Third Rail", subtitle: "Transit planner",
    meta: [{ label: "Year", value: "2023" }, { label: "Role", value: "Front end" }, { label: "Stack", value: "React" }] },
  { src: u("1519681393784-d120267933ba"), alt: "Snow-covered peak in morning sun", title: "Undertow", subtitle: "Ski conditions feed",
    meta: [{ label: "Year", value: "2023" }, { label: "Role", value: "Design + build" }, { label: "Stack", value: "Next.js" }] },
];

const HEADLINE = "I design and build interfaces that feel alive.".split(" ");

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative flex min-h-screen items-center px-6 md:px-16">
        <FloatingShapes />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
            {HEADLINE.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-8 max-w-md text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Your Name, design engineer. I turn product ideas into fast, tactile web experiences.
          </motion.p>
        </div>
        <motion.a
          href="#work"
          aria-label="Scroll to work"
          className="absolute bottom-10 left-6 md:left-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="size-6" />
        </motion.a>
      </section>

      <section id="work" className="py-24">
        <h2 className="px-6 text-3xl font-semibold tracking-tight md:px-16 md:text-5xl">
          Selected work
        </h2>
        <p className="mt-3 px-6 text-muted-foreground md:px-16">
          Drag, swipe, or use the arrow keys.
        </p>
        <div className="mt-10 overflow-hidden">
          <CoverflowCarousel slides={PROJECTS} showCaption showNavigation label="Selected projects" />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-2xl leading-relaxed md:text-3xl">
          I work at the seam between design and engineering, shipping interfaces
          where motion explains what changed and performance is part of the
          polish.
        </p>
      </section>

      <section id="contact" className="px-6 pb-32 pt-12 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-7xl">
          Have a project in mind?
        </h2>
        <div className="mt-10">
          <MagneticButton href="mailto:you@example.com">
            <Mail className="mr-2 size-5" /> Email me
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}
