"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    alt: "Contemporary luxury residence surrounded by greenery",
    title: "Architecture",
    category: "The Residence",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=85",
    alt: "Landscaped garden and outdoor living space",
    title: "Landscape",
    category: "The Green",
    className: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
    alt: "Modern residential community surrounded by trees",
    title: "Community",
    category: "The Neighbourhood",
    className: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    alt: "Elegant contemporary interior",
    title: "Interiors",
    category: "The Home",
    className: "md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    alt: "Luxury living space with garden views",
    title: "Living",
    category: "Everyday Life",
    className: "md:col-span-3",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#f4efdf] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        {/* Decorative line */}
        <div className="absolute left-0 top-0 h-px w-full bg-[#123d2b]/15" />

        <div className="mx-auto max-w-[1500px]">
          {/* Header */}
          <div className="mb-16 grid gap-10 md:grid-cols-12 md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#c9a45c]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#123d2b]/60">
                  06 — Gallery
                </span>
              </div>

              <h2 className="max-w-3xl font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-[#123d2b]">
                A glimpse of
                <br />
                <span className="italic text-[#123d2b]/70">
                  life at EcoVista.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-4 md:col-start-9"
            >
              <p className="max-w-md text-sm leading-7 text-[#123d2b]/65">
                Spaces shaped around greenery, community and a slower rhythm of
                living. Explore the visual character envisioned for EcoVista.
              </p>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[240px]">
            {images.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(index)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                }}
                className={`group relative overflow-hidden text-left ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d14]/75 via-transparent to-transparent opacity-80" />

                {/* Top number */}
                <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center border border-white/40 text-[10px] tracking-widest text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.3em] text-white/60">
                      {image.category}
                    </p>

                    <h3 className="font-serif text-2xl text-white md:text-3xl">
                      {image.title}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-all duration-300 group-hover:border-[#d2af68] group-hover:bg-[#d2af68] group-hover:text-[#123d2b]">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex flex-col justify-between gap-6 border-t border-[#123d2b]/15 pt-7 md:flex-row md:items-center"
          >
            <p className="max-w-xl font-serif text-xl leading-relaxed text-[#123d2b] md:text-2xl">
              Not just a place to live.
              <br />
              <span className="italic text-[#123d2b]/60">
                A place to belong.
              </span>
            </p>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[#123d2b]"
            >
              Book a Site Visit
              <span className="flex h-10 w-10 items-center justify-center border border-[#123d2b]/25 transition-all duration-300 group-hover:border-[#123d2b] group-hover:bg-[#123d2b] group-hover:text-[#f4efdf]">
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071d14]/95 p-5 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-[#d2af68] hover:text-[#d2af68] md:right-8 md:top-8"
              aria-label="Close gallery"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative h-[75vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />

              <div className="absolute bottom-0 left-0">
                <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-white/50">
                  {images[selectedImage].category}
                </p>

                <h3 className="font-serif text-3xl text-white md:text-4xl">
                  {images[selectedImage].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
