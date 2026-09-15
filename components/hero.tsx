"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#0c2d20]"
    >
      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Modern home surrounded by greenery"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          IMAGE OVERLAYS
      ===================================================== */}

      {/* Left-side readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071c13]/90 via-[#071c13]/55 to-[#071c13]/15" />

      {/* Bottom cinematic fade */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#071c13]/95 via-[#071c13]/40 to-transparent" />

      {/* Subtle overall tint */}
      <div className="absolute inset-0 bg-[#0b3323]/10 mix-blend-multiply" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pb-10 pt-32 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
        <div className="max-w-[900px]">
          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#c9a45c] sm:w-14" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#dfc17c] sm:text-[11px]">
              EcoVista Township
            </span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.85] tracking-[-0.035em] text-[#f5f0df]"
          >
            A greener way
            <br />
            <span className="text-[#dfc17c]">to come home.</span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-[520px] text-sm font-medium leading-7 text-white/80 sm:text-base"
          >
            More than a piece of land. A place thoughtfully shaped around
            nature, community and beautiful living.
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#c9a45c] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f21] shadow-[0_5px_20px_rgba(0,0,0,0.15)] transition-colors duration-300 hover:bg-[#dfc17c]"
            >
              Book a Site Visit

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#about"
              className="group inline-flex items-center justify-center gap-3 border border-white/35 bg-black/10 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-[2px] transition-all duration-300 hover:border-white/60 hover:bg-black/20"
            >
              Discover EcoVista

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          className="mt-10 flex items-center justify-between border-t border-white/15 pt-5"
        >
          {/* Desktop information */}
          <div className="hidden items-center gap-8 sm:flex">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/50">
                Designed around
              </p>

              <p className="mt-1 text-xs font-medium text-white/80">
                Nature & Community
              </p>
            </div>

            <div className="h-7 w-px bg-white/20" />

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/50">
                A place to
              </p>

              <p className="mt-1 text-xs font-medium text-white/80">
                Live • Grow • Belong
              </p>
            </div>
          </div>

          {/* Discover */}
          <Link
            href="#about"
            aria-label="Discover EcoVista"
            className="group ml-auto flex items-center gap-3 text-white/75 transition-colors duration-300 hover:text-white sm:ml-0"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
              Discover
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 group-hover:border-[#c9a45c]">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}