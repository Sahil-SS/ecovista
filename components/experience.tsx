"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Cable,
  Car,
  Check,
  Droplets,
  Dumbbell,
  Flower2,
  Lamp,
  Recycle,
  ShieldCheck,
  Users,
  Baby,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------------------------------------
   BRAND TOKENS (Eco Vista colour palette)
   Primary Green   #082F27   Header / Hero
   Secondary Green #174C3C   Sections / Cards
   Champagne Gold  #C9A45C   Buttons / Highlights
   Light Gold      #DFC587   Accents / Icons
   Warm Ivory      #F7F4EC   Background
   Warm White      #FFFFFF   Text on dark
---------------------------------------------------------------- */

const clubhouseImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=82";

const gardenImage =
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=82";

const playImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=82";

const fitnessImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=82";

const ease = [0.22, 1, 0.36, 1] as const;

type Experience = {
  id: string;
  title: string;
  description: string;
  amenities: string[];
  icon: LucideIcon;
  image: string;
  alt: string;
};

const experiences: Experience[] = [
  {
    id: "clubhouse",
    title: "Club House & Pool",
    description:
      "A refined social space for gathering, unwinding and spending time together.",
    amenities: ["Clubhouse", "Swimming Pool"],
    icon: Users,
    image: clubhouseImage,
    alt: "Club house with an inviting social space",
  },
  {
    id: "parks",
    title: "Parks & Pathways",
    description:
      "Landscaped parks and wide internal roads, with more than 25% of the township kept green and open.",
    amenities: ["Landscaped Parks", "Wide Internal Roads"],
    icon: Flower2,
    image: gardenImage,
    alt: "Landscaped garden pathway",
  },
  {
    id: "play",
    title: "Play & Family",
    description:
      "Spaces for children to explore, play and grow within a connected community.",
    amenities: ["Kids Play Area"],
    icon: Baby,
    image: playImage,
    alt: "Family-friendly living space",
  },
  {
    id: "fitness",
    title: "Fitness",
    description:
      "A dedicated open-air space to keep movement and wellbeing close to home.",
    amenities: ["Open Gym"],
    icon: Dumbbell,
    image: fitnessImage,
    alt: "Fitness and open gym area",
  },
];

const essentials: { label: string; Icon: LucideIcon }[] = [
  { label: "24×7 Security", Icon: ShieldCheck },
  { label: "Water Supply", Icon: Droplets },
  { label: "Sewage Treatment Plant", Icon: Recycle },
  { label: "Underground Utilities", Icon: Cable },
  { label: "Street Lighting", Icon: Lamp },
  { label: "Ample Parking", Icon: Car },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.85, delay, ease },
        };

  const current = experiences[active];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-[#082F27] text-white"
    >
      {/* Background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-24 h-[500px] w-[500px] rounded-full border border-[#DFC587]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-40 h-[380px] w-[380px] rounded-full border border-[#DFC587]/10"
      />

      <div className="relative mx-auto max-w-[1360px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        {/* =====================================================
            INTRO
        ===================================================== */}
        <motion.div {...reveal(0)}>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9A45C]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#DFC587] sm:text-xs">
              The Eco Vista Experience
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <h2
              id="experience-heading"
              className="font-serif text-[clamp(2.8rem,6vw,5.6rem)] font-medium leading-[1] tracking-[-0.035em]"
            >
              Life, shaped
              <span className="block text-[#C9A45C]">around you.</span>
            </h2>

            <p className="max-w-[460px] border-l border-[#C9A45C]/60 pl-5 text-[15px] leading-8 text-white/70 sm:text-base">
              From quiet green spaces to places to gather, play and stay
              active, Eco Vista is envisioned as an environment where every
              part of everyday life has its place.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            INTERACTIVE SHOWCASE
        ===================================================== */}
        <motion.div
          {...reveal(0.05)}
          className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8"
        >
          {/* ---------- Image stage ---------- */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_40px_90px_-35px_rgba(0,0,0,0.8)] lg:aspect-auto lg:min-h-[600px]">
            {experiences.map((item, i) => (
              <Image
                key={item.id}
                src={item.image}
                alt={item.alt}
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 56vw"
                className={`object-cover object-center transition-opacity duration-700 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== active}
              />
            ))}

            {/* Green wash for the caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#082F27]/90 via-[#082F27]/10 to-transparent" />

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#DFC587]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DFC587]">
                  Designed for everyday living
                </span>
              </div>

              <p className="mt-4 max-w-[520px] font-serif text-3xl leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.8rem]">
                Where the everyday feels a little more alive.
              </p>
            </div>
          </div>

          {/* ---------- Selector list ---------- */}
          <ul className="flex flex-col gap-3" aria-label="Lifestyle experiences">
            {experiences.map((item, i) => {
              const isActive = i === active;
              const Icon = item.icon;

              return (
                <li key={item.id} className="flex-1">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group flex h-full w-full flex-col rounded-2xl border p-5 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC587] sm:p-6 ${
                      isActive
                        ? "border-[#C9A45C]/70 bg-[#174C3C]"
                        : "border-white/10 bg-[#082F27] hover:border-[#C9A45C]/40 hover:bg-[#174C3C]/40"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isActive
                            ? "border-[#C9A45C] bg-[#C9A45C] text-[#082F27]"
                            : "border-[#C9A45C]/50 text-[#DFC587]"
                        }`}
                      >
                        <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                      </span>

                      <span className="font-serif text-xl tracking-[-0.01em] text-white sm:text-2xl">
                        {item.title}
                      </span>
                    </span>

                    {/* Expanded details */}
                    <span
                      className={`grid transition-all duration-500 ease-out ${
                        isActive
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block text-sm leading-7 text-white/70">
                          {item.description}
                        </span>

                        <span className="mt-4 flex flex-wrap gap-2">
                          {item.amenities.map((amenity) => (
                            <span
                              key={amenity}
                              className="inline-flex items-center gap-1.5 rounded-full border border-[#DFC587]/30 px-3 py-1.5 text-[11px] font-medium text-[#F7F4EC]"
                            >
                              <Check
                                size={12}
                                strokeWidth={2}
                                aria-hidden="true"
                                className="text-[#DFC587]"
                              />
                              {amenity}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Screen-reader announcement of the active experience */}
        <p className="sr-only" aria-live="polite">
          Showing {current.title}
        </p>

        {/* =====================================================
            ESSENTIALS
        ===================================================== */}
        <motion.div
          {...reveal(0.05)}
          className="mt-20 overflow-hidden rounded-[24px] border border-[#DFC587]/20 bg-[#174C3C]/40 sm:mt-24"
        >
          <div className="flex flex-col gap-4 border-b border-[#DFC587]/15 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p className="font-serif text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
              Built for comfort,
              <span className="text-[#DFC587]"> behind the scenes too.</span>
            </p>

            <Link
              href="#amenities"
              className="group inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-[0.2em] text-[#DFC587] transition-colors duration-300 hover:text-white sm:self-auto"
            >
              View all amenities
              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {essentials.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-3 border-b border-r border-white/10 px-4 py-8 text-center [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 lg:border-b-0"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C]/50 text-[#DFC587]">
                  <Icon size={21} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="text-xs font-medium leading-snug text-[#F7F4EC]/90 sm:text-[13px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}