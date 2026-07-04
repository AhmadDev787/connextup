"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock3, Upload } from "lucide-react";
import Header from "../components/header";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function page() {
  return (
    <>
      <Header />
      <section
        className="bg-white pt-44 pb-12"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-7xl px-5 mb-8 md:px-8">
          {/* TOP CONTENT */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-cu-blue"
            >
              Non hai trovato quello che cerchi?
            </h2>

            <p className="mt-5 text-cu-blue leading-relaxed">
              Invia una candidatura spontanea: sarà nostra cura contattarti
              appena ricercheremo un profilo compatibile.
            </p>
          </motion.div>

          {/* FORM */}

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mt-14 max-w-5xl"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-[#08132D]">
                  Nome
                </label>

                <input
                  type="text"
                  className="h-14 w-full rounded-2xl border-2 border-[#08132D] bg-transparent px-5 outline-none transition-all duration-300 focus:border-[#05B0FA] focus:ring-4 focus:ring-[#05B0FA]/15"
                />
              </div>

              {/* Surname */}

              <div>
                <label className="mb-2 block text-sm text-[#08132D]">
                  Cognome
                </label>

                <input
                  type="text"
                  className="h-14 w-full rounded-2xl border-2 border-[#08132D] bg-transparent px-5 outline-none transition-all duration-300 focus:border-[#05B0FA] focus:ring-4 focus:ring-[#05B0FA]/15"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm text-[#08132D]">
                  Email
                </label>

                <input
                  type="email"
                  className="h-14 w-full rounded-2xl border-2 border-[#08132D] bg-transparent px-5 outline-none transition-all duration-300 focus:border-[#05B0FA] focus:ring-4 focus:ring-[#05B0FA]/15"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm text-[#08132D]">
                  Telefono
                </label>

                <input
                  type="tel"
                  className="h-14 w-full rounded-2xl border-2 border-[#08132D] bg-transparent px-5 outline-none transition-all duration-300 focus:border-[#05B0FA] focus:ring-4 focus:ring-[#05B0FA]/15"
                />
              </div>
            </div>

            {/* Presentation */}

            <div className="mt-6">
              <label className="mb-2 block text-sm text-[#08132D]">
                Presentazione (opzionale)
              </label>

              <textarea
                rows={5}
                className="w-full rounded-2xl border-2 border-[#08132D] bg-transparent px-5 py-4 outline-none transition-all duration-300 focus:border-[#05B0FA] focus:ring-4 focus:ring-[#05B0FA]/15"
              />
            </div>

            {/* Upload */}

            <div className="mt-6">
              <label
                htmlFor="cv"
                className="group flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-[#08132D]/30 p-5 transition-all hover:border-[#05B0FA]"
              >
                <Upload size={20} className="text-[#05B0FA]" />

                <span className="text-[#08132D]">Carica CV</span>

                <input id="cv" type="file" className="hidden" />
              </label>
            </div>
          </motion.form>

          {/* CONTACT INFO */}

          <div className="mt-24">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-4xl font-bold text-[#08132D]">
                Parliamo di performance
              </h3>

              <p className="mt-4 text-[#4F566B]">
                Raccontaci il tuo progetto. Valutiamo insieme se e come possiamo
                supportarti.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {/* ADDRESS */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-[#D5D9E2] bg-white/60 backdrop-blur-sm p-8"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#05B0FA]" />
                  <h4 className="text-3xl font-bold text-[#08132D]">
                    Dove trovarci:
                  </h4>
                </div>

                <div className="mt-6 space-y-4 text-[#08132D]">
                  <p>Milano - Via Bagutta 13, 20121</p>
                  <p>Avellino - Corso Vittorio Emanuele 155</p>
                  <p>Tirana - Kavaja St.</p>
                </div>
              </motion.div>

              {/* PHONE */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-[#D5D9E2] bg-white/60 backdrop-blur-sm p-8"
              >
                <div className="flex items-center gap-3">
                  <Phone className="text-[#05B0FA]" />

                  <h4 className="text-3xl font-bold text-[#08132D]">
                    Telefono:
                  </h4>
                </div>

                <p className="mt-6 text-[#08132D]">+39 0825 459127</p>
              </motion.div>

              {/* HOURS */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-[#D5D9E2] bg-white/60 backdrop-blur-sm p-8"
              >
                <div className="flex items-center gap-3">
                  <Clock3 className="text-[#05B0FA]" />

                  <h4 className="text-3xl font-bold text-[#08132D]">Orari:</h4>
                </div>

                <p className="mt-6 text-[#08132D]">Lun - Ven: 09:00 - 18:00</p>
              </motion.div>
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
