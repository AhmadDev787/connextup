"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  caseStudyElectric6,
  caseStudyElectric,
  enel,
} from "../../../components/paths.json";
import Link from "next/link";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Insights() {
  return (
    <section className=" py-20 md:py-28">
      <div className="mx-auto container px-5 md:px-8">
        {/* TOP */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-cu-blue mb-8">
              Cosa abbiamo imparato
            </h2>

            <div className=" space-y-3 md:space-y-6 text-cu-blue leading-relaxed">
              <p>La barriera del form conta più del copy dell'annuncio.</p>

              <p>
                Abbassare i campi da 7 a 3 ha avuto un impatto sul CPL maggiore
                di qualsiasi ottimizzazione sulle keyword.
              </p>

              <p>
                La frizione si combatte prima della landing. Il feedback loop
                CRM è il vero moltiplicatore. Senza segnali di qualità reali,
                l’algoritmo ottimizza sul rumore.
              </p>

              <p>
                Con le conversioni offline, ha iniziato a trovare autonomamente
                i profili più propensi a firmare un contratto.
              </p>

              <p>
                La segmentazione per intent batte la segmentazione per prodotto.
              </p>

              <p>
                Su Meta e TikTok non esiste l’intent esplicito. Il segreto è
                costruire audience precise (lookalike da clienti attivi,
                retargeting per tempo di visualizzazione) e adattare il
                messaggio alla fase del funnel — awareness, considerazione,
                conversione.
              </p>
            </div>
          </motion.div>

          {/* TOP IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <Image
              src={caseStudyElectric6}
              alt="Case study image"
              width={900}
              height={900}
              className="h-[320px] md:h-[480px] w-full object-cover transition duration-700 group-hover:scale-105"
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
