"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("nome", nome);
  formData.append("cognome", cognome);
  formData.append("telefono", telefono);
  formData.append("email", email);
  formData.append("azienda", azienda);
  formData.append("obiettivo", obiettivo);
  formData.append("fatturato", fatturato);
  formData.append("privacy", privacy ? "1" : "");
  formData.append("website", ""); // Honeypot

  const res = await fetch("/contact.php", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (data.success) {
    alert("Message Sent!");
  } else {
    alert(data.message);
  }
};

export default function LuxuryContactSection() {
  return (
    <main className="relative mb-6 pb-4">
      {/* White 90% */}
      {/* <div className="absolute inset-0 h-[90%] bg-cu-gray" /> */}

      {/* Blue 10% */}
      <div className="absolute bottom-0 -z-10 left-0 h-[15%] w-full bg-cu-blue" />
      <section
        id="contact"
        className="w-full z-20 bg-cu-gray rounded-[30px] md:rounded-[70px] mb-12 overflow-hidden"
      >
        {/* Background */}
        {/* <div className="absolute inset-0">
        <div className="h-[70%] -z-50  bg-cu-blue" />
        <div className="h-[28%] bg-white" />
      </div> */}

        {/* CONTACT SECTION */}
        <div className="px-4 sm:px-6  py-12 lg:px-10 pt-10 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto max-w-7xl  px-5 sm:px-10  md:px-16    overflow-hidden"
          >
            {/* background glow
          <div className="absolute -top-40 -right-40 h-[350px] w-[350px] rounded-full bg-[#0a1d49]/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-white/40 blur-[120px]" /> */}

            <div className="relative z-10">
              {/* Heading */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                className="max-w-2xl"
              >
                <h2 className="text-2xl  uppercase tracking-tight text-[#081735] sm:text-3xl font-black md:text-4xl">
                  Parliamo di Performance
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-[#3d4b66] sm:text-base">
                  Raccontaci il tuo progetto. Valutiamo insieme se e come
                  possiamo supportarti.
                </p>
              </motion.div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                {[
                  "Nome",
                  "Cognome",
                  "Numero di telefono",
                  "E-mail",
                  "Azienda",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={index + 2}
                    className={
                      item === "Numero di telefono" ||
                      item === "E-mail" ||
                      item === "Azienda"
                        ? "md:col-span-2"
                        : ""
                    }
                  >
                    <label className="mb-2 block text-sm font-semibold text-[#081735]">
                      {item}
                    </label>

                    <input
                      type="text"
                      placeholder={`Inserisci ${item}`}
                      className="h-14 w-full rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#7a8499] focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                    />
                  </motion.div>
                ))}

                {/* Selects */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={8}
                >
                  <label className="mb-2 block text-sm font-semibold text-[#081735]">
                    Obiettivo principale
                  </label>

                  <div className="relative">
                    <select className="h-14 w-full appearance-none rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]">
                      <option>Lead, Vendite, Scalabilità...</option>
                      <option>Brand Awareness</option>
                      <option>Marketing</option>
                      <option>Automation</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cu-blue" />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={9}
                >
                  <label className="mb-2 block text-sm font-semibold text-cu-blue">
                    Fatturato annuo aziendale
                  </label>

                  <div className="relative">
                    <select className="h-14 w-full appearance-none rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-cu-blue outline-none backdrop-blur-md transition-all duration-300 focus:border-cu-blue focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]">
                      <option>Seleziona</option>
                      <option>10K - 50K</option>
                      <option>50K - 100K</option>
                      <option>100K+</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cu-blue" />
                  </div>
                </motion.div>

                {/* checkbox */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={10}
                  className="md:col-span-2 mt-2 flex items-start gap-3"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded border-cu-blue"
                  />

                  <p className="text-xs leading-relaxed text-cu-blue">
                    Acconsento al trattamento dei miei dati personali per essere
                    ricontattato in relazione alla mia richiesta secondo quanto
                    indicato nella Privacy Policy.
                  </p>
                </motion.div>

                {/* button */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={11}
                  className="md:col-span-2"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.015,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group relative mb-10 mt-3 h-14 w-full overflow-hidden rounded-2xl bg-cu-blue text-sm font-bold uppercase tracking-[0.2em] text-white hover:cursor-pointer transition-all duration-500"
                  >
                    <span className="relative z-10">Iniziamo a Parlare</span>

                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                    <span className="absolute inset-0 z-20 flex  items-center justify-center text-cu-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Iniziamo a Parlare
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
      </section>
    </main>
  );
}
