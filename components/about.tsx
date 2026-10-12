"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Home,
  Leaf,
  MapPinned,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------------------------------------
   BRAND TOKENS (Eco Vista colour palette)
   Primary Green   #082F27   Header / Hero / dark panels
   Secondary Green #174C3C   Sections / Cards
   Champagne Gold  #C9A45C   Buttons / Highlights
   Light Gold      #DFC587   Accents / Icons
   Warm Ivory      #F7F4EC   Background
   Soft Cream      #EFEBD9   Section background
   Charcoal Green  #17241F   Headings / Text
   Warm White      #FFFFFF   Text on dark
---------------------------------------------------------------- */

// Place the file at /public/images/ecovista-entrance.jpg
const overviewImage = "/images/ecovista-entrance.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars: { label: string; Icon: LucideIcon }[] = [
  { label: "Premium Plots", Icon: MapPinned },
  { label: "Simplex Homes", Icon: Home },
  { label: "Green Living", Icon: Leaf },
  { label: "Modern Infrastructure", Icon: Route },
  { label: "Gated Community", Icon: ShieldCheck },
];

export default function About() {
  const reduce = useReducedMotion();

  // One orchestrated reveal for the whole section (disabled for reduced motion)
  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.85, delay, ease },
        };

  return (
    <section
      id="about"
      aria-labelledby="overview-heading"
      className="relative overflow-hidden bg-white text-[#17241F]"
    >
      {/* Soft cream wash behind the lower half */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[#EFEBD9]"
      /> */}

      {/* Decorative leaf, top-left (brand motif) */}
      <Leaf
        aria-hidden="true"
        strokeWidth={0.6}
        className="pointer-events-none absolute -left-10 top-10 h-56 w-56 -rotate-[25deg] text-[#174C3C]/[0.06] sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto max-w-[1420px] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32">
        {/* =====================================================
            OVERVIEW: TEXT + IMAGE
        ===================================================== */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* ---------- Text column ---------- */}
          <div>
            <motion.div {...reveal(0)} className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A45C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8c7138] sm:text-xs">
                About / Overview
              </span>
            </motion.div>

            <motion.h2
              id="overview-heading"
              {...reveal(0.08)}
              className="mt-7 font-serif text-[clamp(2.2rem,3.6vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em] text-[#17241F]"
            >
              A Thoughtfully Planned
              <span className="block text-[#B38E3F]">
                Address for a Better Tomorrow
              </span>
            </motion.h2>

            <motion.div
              {...reveal(0.16)}
              className="mt-8 max-w-[560px] space-y-5 text-[15px] leading-[1.85] text-[#17241F]/75 sm:text-base"
            >
              <p>
                Eco Vista Township is a thoughtfully envisioned{" "}
                <strong className="font-semibold text-[#082F27]">
                  30-acre premium residential development
                </strong>{" "}
                in Dhanbad, Jharkhand, bringing together premium residential
                plots and contemporary simplex homes within a secure,
                well-planned gated community.
              </p>

              <p>
                Designed for modern living, Eco Vista combines the freedom to
                own your land and create your dream home with landscaped green
                spaces, wide internal roads, modern infrastructure, security and
                thoughtfully planned lifestyle amenities.
              </p>

              <p>
                Here, nature, comfort and contemporary living come together to
                create an address designed for today and built with lasting
                value for generations.
              </p>
            </motion.div>
          </div>

          {/* ---------- Image column ---------- */}
          <motion.div {...reveal(0.12)} className="relative">
            {/* Offset gold frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[28px] border border-[#C9A45C]/60 sm:block"
            />

            <div className="group relative aspect-[1864/1084] w-full overflow-hidden rounded-[28px] shadow-[0_30px_70px_-20px_rgba(8,47,39,0.45)]">
              <Image
                src={overviewImage}
                alt="Eco Vista Township entrance surrounded by landscaped greenery"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                quality={82}
                className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              />

              {/* Light green gradient so the caption stays readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F27]/55 via-transparent to-transparent" />

              {/* Location tag */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#DFC587]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                    Dhanbad, Jharkhand
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            STATEMENT BAND + PILLARS
        ===================================================== */}
        <motion.div
          {...reveal(0.05)}
          className="relative mt-14 overflow-hidden rounded-[24px] bg-[#082F27] shadow-[0_24px_55px_-25px_rgba(8,47,39,0.3)] sm:mt-16"
        >
          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full border border-[#DFC587]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 h-64 w-64 rounded-full border border-[#DFC587]/10"
          />

          {/* Statement */}
          <div className="relative bg-gradient-to-r from-[#174C3C] to-[#082F27] px-7 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
            <p className="font-serif text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-[#DFC587]">
              30 Acres of Possibilities.
              <span className="block text-white">One Distinctive Address.</span>
            </p>
          </div>

          {/* Pillars */}
          <ul className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {pillars.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-4 border-t border-white/10 px-6 py-6 first:border-t-0 sm:px-8 lg:border-l lg:border-t-0 lg:first:border-l-0 lg:py-8"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A45C]/50 text-[#DFC587]">
                  <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="text-[13px] font-medium leading-snug text-[#F7F4EC] sm:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* =====================================================
            SIGN-OFF
        ===================================================== */}
        <motion.div
          {...reveal(0.05)}
          className="mx-auto mt-16 flex max-w-xl flex-col items-center text-center sm:mt-20"
        >
          <Leaf
            aria-hidden="true"
            size={26}
            strokeWidth={1.2}
            className="text-[#C9A45C]"
          />

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.34em] text-[#082F27] sm:text-[13px]">
            Eco Vista Township
          </p>

          <span className="mt-4 h-px w-14 bg-[#C9A45C]" />

          <p className="mt-5 font-serif text-3xl italic leading-tight text-[#B38E3F] sm:text-4xl">
            Where Land Becomes Legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
