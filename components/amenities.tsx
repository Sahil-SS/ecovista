"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Bike,
  Dumbbell,
  Flower2,
  Gamepad2,
  Heart,
  Home,
  Leaf,
  PersonStanding,
  Users,
  Waves,
} from "lucide-react";

const mainImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85";

const secondaryImage =
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=82";

const ease = [0.22, 1, 0.36, 1] as const;

const amenities = [
  {
    number: "01",
    title: "Walking & Jogging",
    description: "Paths designed for unhurried mornings and active evenings.",
    icon: PersonStanding,
  },
  {
    number: "02",
    title: "Club House",
    description: "A place to gather, relax and spend time together.",
    icon: Home,
  },
  {
    number: "03",
    title: "Community Hall",
    description: "A shared space for celebrations and community moments.",
    icon: Users,
  },
  {
    number: "04",
    title: "Senior Citizen Area",
    description: "A comfortable setting for quiet time and connection.",
    icon: Heart,
  },
  {
    number: "05",
    title: "Cycling Track",
    description: "A dedicated space to keep movement close to home.",
    icon: Bike,
  },
  {
    number: "06",
    title: "Indoor Games",
    description: "Recreation spaces for relaxed moments with family.",
    icon: Gamepad2,
  },
  {
    number: "07",
    title: "Children's Play Area",
    description: "A place for children to play, explore and grow.",
    icon: Users,
  },
  {
    number: "08",
    title: "Yoga & Meditation",
    description: "Spaces for stillness, balance and everyday wellbeing.",
    icon: Leaf,
  },
  {
    number: "09",
    title: "Swimming Pool",
    description: "A refreshing space to slow down and unwind.",
    icon: Waves,
  },
  {
    number: "10",
    title: "Gymnasium",
    description: "A dedicated space for fitness and movement.",
    icon: Dumbbell,
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-[#f4efdf] text-[#123d2b]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-24 sm:px-10 sm:pb-16 sm:pt-28 lg:px-16 lg:pb-20 lg:pt-32">
        {/* Section header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a45c] sm:w-14" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7138] sm:text-[11px]">
              Amenities
            </span>
          </div>

          <span className="font-serif text-5xl leading-none text-[#123d2b]/10 sm:text-6xl lg:text-7xl">
            03
          </span>
        </motion.div>

        {/* =======================================================
            HEADING
        ======================================================= */}

        <div className="mt-11 grid gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-end lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className="font-serif text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.79] tracking-[-0.045em]"
          >
            A little more
            <br />
            of <span className="text-[#a48345]">everything.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="max-w-[400px] border-l border-[#c9a45c] pl-5 text-[14px] leading-7 text-[#123d2b]/60 sm:text-[15px] sm:leading-8"
          >
            From active mornings to relaxed evenings, EcoVista brings
            thoughtfully planned spaces together to make everyday living more
            complete.
          </motion.p>
        </div>
      </div>

      {/* =========================================================
          MAIN COMPOSITION
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =====================================================
              LEFT IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className="group relative h-[480px] overflow-hidden sm:h-[570px] lg:h-[690px]"
          >
            <Image
              src={mainImage}
              alt="Contemporary residential space surrounded by greenery"
              fill
              loading="lazy"
              quality={82}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071c13]/75 via-transparent to-[#071c13]/10" />

            {/* Image label */}
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#d2af68] sm:w-12" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  Life beyond four walls
                </span>
              </div>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8">
              <p className="max-w-[430px] font-serif text-3xl leading-[0.95] tracking-[-0.025em] text-[#f5f0df] sm:text-4xl">
                Spaces designed
                <br />
                for{" "}
                <span className="text-[#d2af68]">
                  living well.
                </span>
              </p>
            </div>

            {/* Number */}
            <span className="absolute right-6 top-5 font-serif text-7xl leading-none text-white/15 sm:right-8 sm:top-7 sm:text-8xl">
              03
            </span>
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <div className="bg-[#123d2b] text-[#f5f0df]">
            {/* Heading */}
            <div className="border-b border-white/10 px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#d2af68]">
                    The collection
                  </p>

                  <h3 className="mt-2 font-serif text-3xl leading-none sm:text-4xl">
                    Designed around life
                  </h3>
                </div>

                <span className="font-serif text-2xl text-white/20">
                  10
                </span>
              </div>
            </div>

            {/* =================================================
                AMENITY LIST
            ================================================= */}

            <div className="grid sm:grid-cols-2">
              {amenities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.035,
                      ease,
                    }}
                    className="group relative flex min-h-[108px] items-center gap-4 border-b border-white/10 px-6 py-5 transition-colors duration-300 hover:bg-white/[0.035] sm:px-7 lg:min-h-[116px] lg:px-8"
                  >
                    {/* Number */}
                    <span className="w-6 shrink-0 self-start pt-1 font-serif text-sm text-[#d2af68]/70">
                      {item.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#d2af68]/60 group-hover:bg-[#d2af68]">
                      <Icon
                        size={15}
                        strokeWidth={1.3}
                        className="text-white/60 transition-colors duration-300 group-hover:text-[#123d2b]"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-semibold text-[#f5f0df] sm:text-[14px]">
                        {item.title}
                      </h4>

                      <p className="mt-1 max-w-[220px] text-[11px] leading-5 text-white/35">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.3}
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d2af68]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          THREE PILLARS
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 sm:pb-28 sm:pt-20 lg:px-16 lg:pb-32 lg:pt-24">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          {/* Secondary image */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="group relative h-[260px] overflow-hidden sm:h-[320px]"
          >
            <Image
              src={secondaryImage}
              alt="Landscaped garden and greenery"
              fill
              loading="lazy"
              quality={78}
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-[#123d2b]/20" />

            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d2af68]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                Nature at every turn
              </span>
            </div>
          </motion.div>

          {/* Pillars */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="mb-8 max-w-[500px] font-serif text-3xl leading-[1] tracking-[-0.025em] sm:text-4xl"
            >
              Three things make a place feel like{" "}
              <span className="text-[#a48345]">
                home.
              </span>
            </motion.p>

            <div className="border-t border-[#123d2b]/10">
              {/* Nature */}
              <div className="flex items-center justify-between border-b border-[#123d2b]/10 py-5 sm:py-6">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-lg text-[#c9a45c]">
                    01
                  </span>

                  <span className="text-[12px] font-bold uppercase tracking-[0.18em]">
                    Nature
                  </span>
                </div>

                <Flower2
                  size={17}
                  strokeWidth={1.3}
                  className="text-[#a48345]"
                  aria-hidden="true"
                />
              </div>

              {/* Wellness */}
              <div className="flex items-center justify-between border-b border-[#123d2b]/10 py-5 sm:py-6">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-lg text-[#c9a45c]">
                    02
                  </span>

                  <span className="text-[12px] font-bold uppercase tracking-[0.18em]">
                    Wellness
                  </span>
                </div>

                <Heart
                  size={17}
                  strokeWidth={1.3}
                  className="text-[#a48345]"
                  aria-hidden="true"
                />
              </div>

              {/* Community */}
              <div className="flex items-center justify-between border-b border-[#123d2b]/10 py-5 sm:py-6">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-lg text-[#c9a45c]">
                    03
                  </span>

                  <span className="text-[12px] font-bold uppercase tracking-[0.18em]">
                    Community
                  </span>
                </div>

                <Users
                  size={17}
                  strokeWidth={1.3}
                  className="text-[#a48345]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}