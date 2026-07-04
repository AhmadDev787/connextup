"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { caseStudyEnel4, caseStudyEnel5 } from "../../../components/paths.json";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ContentSection() {
  return (
    <section
      aria-label="Case Study Overview"
      className="relative overflow-hidden  py-16 sm:py-20 lg:py-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-slate-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-slate-300/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-3 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:gap-24">
          {/* ROW 1 */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Content */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-cu-blue lg:text-4xl">
                Il contesto
              </h2>

              <div className="mt-8 space-y-3 md:space-y-6 text-cu-blue leading-relaxed text-sm md:text-base">
                <p>
                  Il mercato libero dell'energia è uno dei verticali più saturi
                  su Meta e TikTok: ogni operatore compete sulle stesse
                  audience, con le stesse promesse, spesso con budget
                  importanti. Entrare in questo contesto con l'obiettivo di
                  generare lead qualificati a costi sostenibili non è semplice,
                  neanche quando il brand gode già di notorietà. 
                </p>

                <p>
                  All'inizio il CPL si aggirava intorno ai €22. Non era un
                  problema di budget, né di prodotto. Era un problema di
                  approccio.
                </p>
              </div>
            </motion.article>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={caseStudyEnel4}
                height={500}
                width={500}
                alt="an image of phone in pocket"
              />
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Image
                src={caseStudyEnel5}
                height={500}
                width={500}
                alt="la
                sfida
                image"
              />
            </motion.div>

            {/* Content */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-semibold text-cu-blue lg:text-4xl">
                La sfida
              </h2>

              <div className="mt-8 space-y-3  md:space-y-6 text-cu-blue leading-relaxed text-sm md:text-base">
                <p>
                  Il brand veniva comunicato esattamente come lo comunicano
                  tutti gli altri operatori del settore: offerta in evidenza,
                  risparmio in bolletta, call to action diretta. Funzionava, ma
                  non abbastanza. In un'asta pubblicitaria dove tutti dicono le
                  stesse cose, anche il brand più forte paga il prezzo della
                  confusione.
                </p>

                <p>
                  In parallelo, il funnel di acquisizione era costruito in modo
                  piatto: tutto il budget concentrato sulla domanda fredda,
                  nessun lavoro strutturato sul traffico caldo (chi aveva già
                  visto una campagna, visitato una landing, interagito con un
                  contenuto) Una quantità enorme di segnali preziosi ignorati
                  ogni giorno.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
