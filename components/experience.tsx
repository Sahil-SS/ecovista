"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Dumbbell,
  Flower2,
  Users,
  Baby,
} from "lucide-react";

const experienceImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85";

const gardenImage =
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=82";

const clubhouseImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82";

const fitnessImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=82";

const ease = [0.22, 1, 0.36, 1] as const;

const experiences = [
  {
    number: "01",
    title: "Club House",
    description:
      "A refined social space designed for gathering, unwinding and spending time together.",
    icon: Users,
    image: clubhouseImage,
  },
  {
    number: "02",
    title: "Garden & Paths",
    description:
      "Thoughtfully landscaped surroundings where greenery becomes part of everyday life.",
    icon: Flower2,
    image: gardenImage,
  },
  {
    number: "03",
    title: "Play & Family",
    description:
      "Spaces created for children to explore, play and grow within a connected community.",
    icon: Baby,
    image: experienceImage,
  },
  {
    number: "04",
    title: "Fitness",
    description:
      "A dedicated environment to keep movement, health and wellbeing close to home.",
    icon: Dumbbell,
    image: fitnessImage,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0c2d20] text-[#f5f0df]"
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div
        className="pointer-events-none absolute right-[-180px] top-[120px] h-[500px] w-[500px] rounded-full border border-[#d2af68]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[-120px] top-[180px] h-[380px] w-[380px] rounded-full border border-[#d2af68]/10"
        aria-hidden="true"
      />

      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16 lg:pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#d2af68] sm:w-14" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d2af68] sm:text-[11px]">
              The EcoVista Experience
            </span>
          </div>

          <span className="font-serif text-5xl leading-none text-white/10 sm:text-6xl lg:text-7xl">
            02
          </span>
        </motion.div>

        {/* =======================================================
            HEADING
        ======================================================= */}

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.55fr] lg:items-end lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease,
            }}
            className="max-w-[1000px] font-serif text-[clamp(3.7rem,8vw,8.5rem)] font-medium leading-[0.8] tracking-[-0.045em]"
          >
            Life, shaped
            <br />
            around <span className="text-[#d2af68]">you.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="lg:pb-2"
          >
            <p className="border-l border-[#d2af68]/60 pl-5 text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              From quiet green spaces to places to gather, play and stay active
              — EcoVista is envisioned as an environment where every part of
              everyday life has its place.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          FEATURE IMAGE
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease,
          }}
          className="group relative h-[440px] overflow-hidden sm:h-[570px] lg:h-[640px]"
        >
          <Image
            src={experienceImage}
            alt="Contemporary living surrounded by greenery"
            fill
            loading="lazy"
            quality={82}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 92vw"
            className="object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061c12]/90 via-[#061c12]/10 to-transparent" />

          {/* Top label */}
          <div className="absolute left-6 top-6 sm:left-9 sm:top-9 lg:left-10 lg:top-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#d2af68] sm:w-12" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Designed for everyday living
              </span>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="absolute bottom-7 left-6 max-w-[600px] sm:bottom-10 sm:left-9 lg:bottom-12 lg:left-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease,
              }}
              className="font-serif text-3xl leading-[0.95] tracking-[-0.02em] text-[#f5f0df] sm:text-4xl lg:text-5xl"
            >
              Where the everyday
              <br />
              feels a little more <span className="text-[#d2af68]">alive.</span>
            </motion.p>
          </div>

          {/* Number */}
          <span className="absolute right-6 top-5 font-serif text-7xl leading-none text-white/15 sm:right-9 sm:top-7 sm:text-8xl lg:right-10 lg:top-8 lg:text-9xl">
            02
          </span>
        </motion.div>
      </div>

      {/* =========================================================
          EXPERIENCE GRID
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 sm:pb-28 sm:pt-20 lg:px-16 lg:pb-36 lg:pt-24">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className="group relative overflow-hidden bg-[#0c2d20]"
              >
                {/* Image */}
                <div className="relative h-[270px] overflow-hidden sm:h-[300px] lg:h-[330px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    quality={78}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-[#071c13]/25 transition-colors duration-500 group-hover:bg-[#071c13]/10" />

                  {/* Number */}
                  <span className="absolute left-5 top-5 font-serif text-2xl text-white/75">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#d2af68]">
                    <Icon
                      size={17}
                      strokeWidth={1.4}
                      className="text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-6 py-6 sm:px-7 sm:py-7">
                  <h3 className="font-serif text-2xl tracking-[-0.02em] text-[#f5f0df] sm:text-[1.7rem]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-white/45 sm:text-[13px]">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-white/10" />

                  <Link
                    href="#amenities"
                    className="group/link mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d2af68]"
                  >
                    Explore
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
