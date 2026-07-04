"use client";

import { motion } from "framer-motion";
import { Settings2, ClipboardCheck, RefreshCcw } from "lucide-react";

const cards = [
  {
    title: "01 / STRUTTURA ACCOUNT",
    icon: Settings2,
    points: [
      "Audit completo degli account Meta e TikTok",
      "Separazione per prospecting, retargeting e lookalike",
      "Audience dedicate per segmento",
      "Periodo: Mese 1-2",
    ],
  },
  {
    title: "02 / OTTIMIZZAZIONE FORM",
    icon: ClipboardCheck,
    points: [
      "A/B test form da 7 a 3 campi",
      "Conversion rate dal 12% al 18%",
      "Qualificazione lead",
      "Periodo: Mese 2-3",
    ],
  },
  {
    title: "03 / FEEDBACK LOOP",
    icon: RefreshCcw,
    points: [
      "Integrazione CRM",
      "Dati reali di vendita",
      "Ottimizzazione continua",
      "Periodo: Mese 3-6",
    ],
  },
];

export default function Cards() {
  return (
    <>
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  viewport={{
                    once: true,
                    amount: 0.6, // 40% card viewport mein aaye tab animate ho
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl bg-cu-blue p-8 text-white shadow-xl"
                >
                  <Icon className="mb-5 h-8 w-8 text-cu-green" />

                  <h3 className="mb-6 text-xl font-semibold text-cu-green">
                    {card.title}
                  </h3>

                  <ul className="space-y-1 text-sm leading-relaxed text-white">
                    {card.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section className=" py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-4xl font-medium leading-tight text-cu-blue"
          >
            Con 30 milioni di utenze e offerte quasi identiche, nel mercato
            energetico italiano vince chi ottimizza meglio, non chi spende di
            più.
          </motion.h2>
        </div>
      </section>
    </>
  );
}
