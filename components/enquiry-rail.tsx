"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Phone,
  User,
  X,
} from "lucide-react";

interface EnquiryRailProps {
  hidden?: boolean;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function EnquiryRail({
  hidden = false,
}: EnquiryRailProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [status, setStatus] = useState<Status>("idle");

  const openPanel = () => {
    setIsOpen(true);
  };

  const closePanel = () => {
    if (status !== "loading") {
      setIsOpen(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("loading");

    try {
      const payload = new FormData();

      /*
       * Replace this access key with your EcoVista Web3Forms key
       * if you have a separate one.
       */
      payload.append(
        "access_key",
        "1451740e-965b-41de-b42d-eed139082b34"
      );

      payload.append(
        "subject",
        "New EcoVista Site Visit Enquiry"
      );

      payload.append(
        "from_name",
        "EcoVista Website"
      );

      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: payload,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData(initialFormData);

        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 2200);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING ENQUIRY RAIL
      ===================================================== */}

      <AnimatePresence>
        {!hidden && !isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 35,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-1/2 z-40 -translate-y-1/2"
          >
            <div className="flex flex-col overflow-hidden rounded-l-sm shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
              {/* =================================================
                  BOOK A VISIT
              ================================================= */}

              <button
                type="button"
                onClick={openPanel}
                aria-label="Open book a site visit form"
                className="group relative flex h-[145px] w-12 items-center justify-center overflow-hidden bg-[#d2af68] transition-colors duration-300 hover:bg-[#dfc17c] sm:h-[155px] sm:w-[52px]"
              >
                {/* Subtle shine */}
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10 [writing-mode:vertical-rl] rotate-180 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f21]">
                  Book a Visit
                </span>
              </button>

              {/* =================================================
                  WHATSAPP
              ================================================= */}

              <a
                href="https://wa.me/917488613737"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact EcoVista on WhatsApp"
                className="group flex h-12 w-12 items-center justify-center bg-[#1d8c57] transition-colors duration-300 hover:bg-[#25a866] sm:h-[52px] sm:w-[52px]"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-white transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M16.04 2.01C8.31 2.01 2.04 8.28 2.04 16.01c0 2.82.74 5.55 2.16 7.97L2 30l6.21-2.16c2.33 1.28 4.96 1.97 7.83 1.97 7.72 0 14-6.27 14-13.99.01-7.74-6.26-13.81-13.99-13.81zm0 25.3c-2.62 0-5.1-.77-7.23-2.23l-.52-.33-3.7 1.3 1.27-3.6-.34-.56a12.42 12.42 0 0 1-1.88-6.6c0-6.86 5.57-12.43 12.43-12.43s12.43 5.57 12.43 12.43c0 6.86-5.58 12.42-12.46 12.42zm7.14-9.33c-.39-.2-2.3-1.14-2.66-1.27-.36-.13-.62-.2-.87.2-.26.39-1 1.27-1.23 1.54-.23.26-.46.29-.85.1-.39-.2-1.64-.6-3.13-1.91-1.16-1.03-1.94-2.3-2.17-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.87-2.1-1.2-2.88-.32-.78-.66-.67-.87-.67-.23 0-.49-.03-.75-.03-.26 0-.69.1-1.06.49-.36.39-1.39 1.36-1.39 3.32 0 1.97 1.42 3.87 1.62 4.14.2.26 2.8 4.27 6.81 5.99 4.01 1.72 4.01 1.15 4.72 1.08.72-.07 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          ENQUIRY PANEL
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* =================================================
                BACKDROP
            ================================================= */}

            <motion.button
              type="button"
              aria-label="Close enquiry panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={closePanel}
              className="fixed inset-0 z-50 cursor-default bg-[#071c13]/65 backdrop-blur-[3px]"
            />

            {/* =================================================
                SLIDING PANEL
            ================================================= */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[60] h-[100dvh] w-full overflow-y-auto bg-[#102f21] text-[#f5f0df] shadow-[-20px_0_70px_rgba(0,0,0,0.25)] sm:max-w-[470px]"
            >
              {/* Decorative circles */}
              <div
                className="pointer-events-none absolute -right-32 -top-28 h-80 w-80 rounded-full border border-[#d2af68]/15"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -right-16 -top-12 h-52 w-52 rounded-full border border-[#d2af68]/10"
                aria-hidden="true"
              />

              {/* =================================================
                  PANEL CONTENT
              ================================================= */}

              <div className="relative z-10 flex min-h-full flex-col px-6 py-7 sm:px-9 sm:py-9">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#d2af68]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d2af68]">
                        EcoVista Township
                      </span>
                    </div>

                    <h2 className="font-serif text-4xl leading-[0.9] tracking-[-0.025em] sm:text-5xl">
                      Book a
                      <br />
                      <span className="text-[#d2af68]">
                        site visit.
                      </span>
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={closePanel}
                    aria-label="Close enquiry form"
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 hover:border-[#d2af68]/60 hover:text-[#d2af68]"
                  >
                    <X
                      size={19}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Intro */}
                <p className="mt-7 max-w-[370px] text-[13px] leading-6 text-white/55 sm:text-sm sm:leading-7">
                  Tell us a little about yourself and our team will
                  get in touch to arrange your EcoVista visit.
                </p>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-white/10" />

                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-1 flex-col"
                >
                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="ecovista-name"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/50"
                      >
                        Full Name
                      </label>

                      <div className="relative">
                        <User
                          size={16}
                          strokeWidth={1.4}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d2af68]/70"
                          aria-hidden="true"
                        />

                        <input
                          id="ecovista-name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="h-12 w-full border border-white/10 bg-white/[0.045] px-11 text-sm text-[#f5f0df] outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#d2af68]/70 focus:bg-white/[0.07]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="ecovista-email"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/50"
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail
                          size={16}
                          strokeWidth={1.4}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d2af68]/70"
                          aria-hidden="true"
                        />

                        <input
                          id="ecovista-email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="h-12 w-full border border-white/10 bg-white/[0.045] px-11 text-sm text-[#f5f0df] outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#d2af68]/70 focus:bg-white/[0.07]"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="ecovista-phone"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/50"
                      >
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone
                          size={16}
                          strokeWidth={1.4}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d2af68]/70"
                          aria-hidden="true"
                        />

                        <input
                          id="ecovista-phone"
                          type="tel"
                          name="phone"
                          required
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit phone number"
                          className="h-12 w-full border border-white/10 bg-white/[0.045] px-11 text-sm text-[#f5f0df] outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#d2af68]/70 focus:bg-white/[0.07]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="ecovista-message"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/50"
                      >
                        Message
                      </label>

                      <div className="relative">
                        <MessageSquare
                          size={16}
                          strokeWidth={1.4}
                          className="absolute left-4 top-4 text-[#d2af68]/70"
                          aria-hidden="true"
                        />

                        <textarea
                          id="ecovista-message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help..."
                          className="w-full resize-none border border-white/10 bg-white/[0.045] px-11 py-3 text-sm leading-6 text-[#f5f0df] outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#d2af68]/70 focus:bg-white/[0.07]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      SUBMIT
                  ================================================= */}

                  <div className="mt-7">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex h-13 w-full items-center justify-center gap-3 bg-[#d2af68] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f21] transition-all duration-300 hover:bg-[#dfc17c] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === "loading"
                        ? "Sending..."
                        : "Request a Site Visit"}

                      {status !== "loading" && (
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.6}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      )}
                    </button>

                    {/* Success */}
                    <AnimatePresence mode="wait">
                      {status === "success" && (
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="mt-4 text-center text-xs text-[#8fd6a9]"
                        >
                          Your enquiry has been submitted successfully.
                        </motion.p>
                      )}

                      {/* Error */}
                      {status === "error" && (
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="mt-4 text-center text-xs text-[#e7a0a0]"
                        >
                          Something went wrong. Please try again.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* =================================================
                      CONTACT
                  ================================================= */}

                  <div className="mt-auto pt-8">
                    <div className="border-t border-white/10 pt-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                        Prefer to speak directly?
                      </p>

                      <a
                        href="tel:+917488613737"
                        className="mt-3 inline-flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-[#d2af68]"
                      >
                        <Phone
                          size={15}
                          strokeWidth={1.4}
                          className="text-[#d2af68]"
                          aria-hidden="true"
                        />

                        +91 74886 13737
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}