"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const aboutImage =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2200&q=85";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4efdf] text-[#123d2b]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16 lg:pb-24 lg:pt-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a45c] sm:w-14" />

            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8c7138] sm:text-xs">
              About EcoVista
            </span>
          </div>

          <span className="font-serif text-5xl leading-none text-[#123d2b]/10 sm:text-6xl lg:text-7xl">
            01
          </span>
        </motion.div>

        {/* =======================================================
            HEADING + DESCRIPTION
        ======================================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className="font-serif text-[clamp(3.8rem,8vw,8.5rem)] font-medium leading-[0.8] tracking-[-0.045em]"
          >
            More than a
            <br />
            piece of <span className="text-[#a48345]">land.</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="lg:pb-1"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a45c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8c7138]">
                A place called home
              </span>
            </div>

            <p className="max-w-[430px] text-[15px] leading-7 text-[#123d2b]/65 sm:text-base sm:leading-8">
              At EcoVista Township, we believe a home is more than just a
              piece of land. It is a place thoughtfully shaped around nature,
              community and beautiful living.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          MAIN IMAGE COMPOSITION
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="relative">
          {/* =====================================================
              IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease,
            }}
            className="group relative h-[470px] overflow-hidden sm:h-[590px] lg:h-[650px]"
          >
            <Image
              src={aboutImage}
              alt="Lush green landscape representing the EcoVista vision"
              fill
              loading="lazy"
              quality={82}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 92vw"
              className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
            />

            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071c13]/75 via-[#071c13]/5 to-transparent" />

            {/* Left caption */}
            <div className="absolute bottom-7 left-6 sm:bottom-9 sm:left-9 lg:bottom-10 lg:left-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#d2af68] sm:w-12" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white sm:text-[11px]">
                  Nature meets beautiful life
                </span>
              </div>
            </div>

            {/* Image number */}
            <div className="absolute right-6 top-5 sm:right-9 sm:top-7 lg:right-10 lg:top-8">
              <span className="font-serif text-7xl leading-none text-white/15 sm:text-8xl lg:text-9xl">
                01
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              FLOATING INFORMATION PANEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease,
            }}
            className="relative mx-4 -mt-20 sm:mx-8 sm:-mt-24 lg:absolute lg:bottom-[-45px] lg:right-8 lg:mx-0 lg:mt-0 lg:w-[445px]"
          >
            <div className="relative overflow-hidden bg-[#123d2b] px-7 py-8 shadow-[0_25px_65px_rgba(0,0,0,0.2)] sm:px-9 sm:py-10 lg:px-11 lg:py-11">
              {/* Decorative circles */}
              <div
                className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#d2af68]/20"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full border border-[#d2af68]/15"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Eyebrow */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#d2af68]">
                    The EcoVista philosophy
                  </span>

                  <span className="font-serif text-2xl text-[#d2af68]/60">
                    01
                  </span>
                </div>

                {/* Heading */}
                <h3 className="max-w-[360px] font-serif text-[2.35rem] leading-[0.95] tracking-[-0.025em] text-[#f5f0df] sm:text-[2.8rem]">
                  Invest in your own piece of earth.
                </h3>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-white/10" />

                {/* Philosophy */}
                <div className="grid gap-5 sm:grid-cols-3 sm:gap-4">
                  {/* Nature */}
                  <div>
                    <span className="font-serif text-xl text-[#d2af68]">
                      01
                    </span>

                    <h4 className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5f0df]">
                      Nature
                    </h4>

                    <p className="mt-2 text-[11px] leading-5 text-white/50">
                      A setting shaped around greenery.
                    </p>
                  </div>

                  {/* Community */}
                  <div>
                    <span className="font-serif text-xl text-[#d2af68]">
                      02
                    </span>

                    <h4 className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5f0df]">
                      Community
                    </h4>

                    <p className="mt-2 text-[11px] leading-5 text-white/50">
                      Spaces created for connection.
                    </p>
                  </div>

                  {/* Tomorrow */}
                  <div>
                    <span className="font-serif text-xl text-[#d2af68]">
                      03
                    </span>

                    <h4 className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5f0df]">
                      Tomorrow
                    </h4>

                    <p className="mt-2 text-[11px] leading-5 text-white/50">
                      A vision for thoughtful living.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="#experience"
                    className="group inline-flex items-center gap-3 border-b border-[#d2af68]/50 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f0df] transition-colors duration-300 hover:border-[#d2af68] hover:text-[#d2af68]"
                  >
                    Discover the experience

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM STATEMENT
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-28 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-[0.25fr_1fr_0.3fr] lg:items-end lg:gap-12">
          {/* Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="font-serif text-6xl leading-none text-[#123d2b]/10 sm:text-7xl">
              01
            </span>

            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8c7138]">
              Our beginning
            </p>
          </motion.div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease,
            }}
          >
            <p className="font-serif text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.92] tracking-[-0.035em]">
              A home should give you{" "}
              <span className="text-[#a48345]">room to breathe.</span>
            </p>
          </motion.div>

          {/* Supporting copy */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease,
            }}
          >
            <p className="text-[13px] leading-6 text-[#123d2b]/55 sm:text-sm sm:leading-7">
              A place where nature, space and everyday life come together.
            </p>

            <Link
              href="#experience"
              className="group mt-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#123d2b] transition-colors duration-300 hover:text-[#8c7138]"
            >
              Explore the lifestyle

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          NEXT SECTION INDICATOR
      ========================================================= */}

      <div className="flex justify-center pb-10 sm:pb-12">
        <Link
          href="#experience"
          aria-label="Continue to EcoVista experience"
          className="group flex flex-col items-center gap-3 text-[#123d2b]/35 transition-colors duration-300 hover:text-[#8c7138]"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
            Experience
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123d2b]/15 transition-colors duration-300 group-hover:border-[#c9a45c]">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={14} strokeWidth={1.4} aria-hidden="true" />
            </motion.span>
          </span>
        </Link>
      </div>
    </section>
  );
}