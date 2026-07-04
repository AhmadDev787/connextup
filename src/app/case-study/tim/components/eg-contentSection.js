"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { tim4, caseStudyEnel5 } from "../../../components/paths.json";
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
                  Il settore delle telecomunicazioni è uno dei mercati più
                  affollati su Meta e TikTok: budget alti, audience contese,
                  messaggi spesso indistinguibili tra un operatore e l'altro.
                </p>

                <p>
                  In questo scenario, tra gennaio e aprile 2026 la lead
                  generation per TIM si attestava su circa 6.000 lead al mese,
                  con un CPL medio di 4€ e un tasso di conversione da lead a
                  cliente del 7,8%. Numeri solidi, ma con un limite evidente:
                  non scalavano.
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
                src={tim4}
                height={500}
                width={500}
                alt="an image of person of tim"
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
                  Ogni tentativo di aumentare il budget per generare più volume
                  si scontrava con lo stesso problema: il CPL medio saliva, e
                  con esso scendeva la qualità dei contatti raccolti.
                  <br />
                  Più budget non significava più risultati, significava spendere
                  di più per ottenere di meno — un classico segnale di
                  saturazione dell'audience e di un funnel non ancora pronto a
                  reggere volumi più alti mantenendo la qualità.
                </p>

                <p>
                  L'obiettivo non era "spendere di più", ma trovare il modo di
                  far scalare il sistema senza comprometterne l'efficienza.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
