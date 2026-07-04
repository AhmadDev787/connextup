"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import {
  caseStudyElectric4,
  caseStudyElectric5,
} from "../../../components/paths.json";
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
              {/* <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <TrendingUp size={22} />
                </div>

                <span className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Case Study
                </span>
              </div> */}

              <h2 className="text-3xl font-semibold text-slate-900 md:text-3xl xl:text-4xl">
                Il contesto
              </h2>

              <div className="mt-8 space-y-3 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Il mercato libero dell’energia in Italia conta oggi oltre 30
                  milioni di utenze domestiche. La guerra delle offerte è
                  feroce: ogni operatore compete sulle stesse keyword, gli
                  stessi segmenti di pubblico, spesso con proposte commerciali
                  simili.
                </p>

                <p>
                  In questo scenario, fare lead generation efficiente non è
                  questione di budget, è questione di struttura, ottimizzazione
                  e capacità di leggere i dati in tempo reale.
                </p>

                <p>
                  Il nostro mandato era chiaro: generare un flusso costante di
                  lead qualificati per operatori del settore, abbassando il
                  costo per acquisizione e migliorando il tasso di
                  contattabilità.
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
                src={caseStudyElectric4}
                height={500}
                width={500}
                alt="an image of virtually connecting the world"
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
                src={caseStudyElectric5}
                height={500}
                width={500}
                alt="an image of eye looking at the code"
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
              <h2 className="text-3xl font-semibold text-slate-900  lg:text-4xl">
                La sfida
              </h2>

              <div className="mt-8 space-y-3 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  La struttura delle campagne risultava frammentata, con account
                  Meta e TikTok non segmentati correttamente per audience e
                  intent, causando una dispersione del budget su pubblici troppo
                  ampi e un CPL iniziale superiore a €20 su alcuni cluster.
                </p>

                <p>
                  A questo si aggiungeva un form di acquisizione sovraccarico,
                  che richiedeva dati tecnici già nella fase di primo contatto e
                  generava un tasso di abbandono superiore al 70% prima
                  dell’invio.
                </p>

                <p>
                  Inoltre, le campagne ottimizzavano esclusivamente sul lead
                  grezzo, senza segnali sulla qualità reale dei contatti e senza
                  alcuna integrazione tra CRM e Meta/TikTok Ads per trasmettere
                  feedback utili all’ottimizzazione.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
