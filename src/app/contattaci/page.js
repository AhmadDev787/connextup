"use client";

import React, { useState } from "react";
import { MapPin, Phone, Plus, Minus, Clock3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/header";

const faqData = [
  {
    id: 1,
    question: "Quali servizi offrite?",
    answer:
      "Offriamo soluzioni digitali moderne, sviluppo web, branding, UI/UX design e supporto completo per aziende e startup.",
  },
  {
    id: 2,
    question: "Quanto tempo richiede un progetto?",
    answer:
      "Dipende dalla complessità del progetto, ma generalmente tra 2 e 8 settimane.",
  },
  {
    id: 3,
    question: "Lavorate anche da remoto?",
    answer:
      "Sì, collaboriamo con clienti internazionali completamente da remoto.",
  },
  {
    id: 4,
    question: "Offrite supporto post-lancio?",
    answer:
      "Assolutamente sì. Offriamo manutenzione, aggiornamenti e supporto tecnico continuo.",
  },
];

const contactCards = [
  {
    icon: MapPin,
    title: "Dove trovarci:",
    content: [
      "Milano - Via Bagutta 13, 20121",
      "Avellino - Corso Vittorio Emanuele 155, 83100",
      "Tirana - Kavaja St.",
    ],
  },
  {
    icon: Phone,
    title: "Telefono:",
    content: ["+39 0825 459127"],
  },
  {
    icon: Clock3,
    title: "Orari:",
    content: ["Lun - Ven: 09:00 - 18:00"],
  },
];

export default function page() {
  const [active, setActive] = useState(1);

  const toggleFAQ = (id) => {
    setActive(active === id ? 0 : id);
  };

  return (
    <>
      <Header />
      <section className="relative pt-44 overflow-hidden bg-[#f5f5f5] pb-10  lg:pt-48">
        {/* Background Blur */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />
        {/* <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#dcd4d4] blur-3xl" /> */}
        <div className="mx-auto container px-4 lg:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight text-cu-blue sm:text-4xl">
              Parliamo di performance
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cu-blue sm:text-base">
              Raccontaci il tuo progetto. Valutiamo insieme se e come possiamo
              supportarti.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-[#d7dbe3] bg-white/70 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="mb-6 text-2xl font-bold text-[#081530]">
                      {card.title}
                    </h3>

                    <div className="space-y-4">
                      {card.content.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm text-[#1d2a44] sm:text-base"
                        >
                          <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10">
                            <Icon size={14} className="text-cu-green" />
                          </div>

                          <p className="leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-28 grid gap-14 lg:grid-cols-2 lg:gap-24">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-cu-blue sm:text-5xl">
                Domande frequenti
              </h2>
            </motion.div>

            {/* Right FAQ */}
            <div className="space-y-4">
              {faqData.map((faq, index) => {
                const isOpen = active === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    viewport={{ once: true }}
                    className={`overflow-hidden rounded-[24px] border border-[#0f1f45]/20 bg-[#02133a] transition-all duration-500 ${
                      isOpen
                        ? "shadow-[0_15px_60px_rgba(0,14,55,0.35)]"
                        : "hover:translate-y-[-3px]"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cu-green text-sm font-bold text-white shadow-lg shadow-cyan-500/30">
                          {faq.id}
                        </div>

                        <h3 className="text-base font-semibold text-white sm:text-lg">
                          {faq.question}
                        </h3>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white"
                      >
                        {isOpen ? (
                          <Minus size={28} strokeWidth={1.7} />
                        ) : (
                          <Plus size={28} strokeWidth={1.7} />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-[4.5rem]">
                            <p className="max-w-xl text-sm leading-relaxed text-[#c5cfdf] sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174.8810354874269!2d9.195674243615175!3d45.467858591404706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b072d2bf55%3A0x5b60d1be6ce9417f!2sVia%20Bagutta%2C%2013%2C%2020121%20Milano%20MI!5e0!3m2!1sen!2sit!4v1781829811544!5m2!1sen!2sit"
          width="100%"
          height="500"
          style={{ border: 0, marginTop: 10 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
