"use client";

import { motion } from "framer-motion";
import { Settings2, ClipboardCheck, RefreshCcw } from "lucide-react";

const cards = [
  {
    title: "01 / STRUTTURA ACCOUNT",
    icon: Settings2,
    text: [
      "Superato il target generalista per concentrarci su nicchie specifiche. Separazione netta tra prospecting, retargeting e lookalike sui clienti attivi.",
      "Ogni segmento ha ricevuto un messaggio coerente con la fase del funnel — CPL abbassato già nelle prime settimane, senza toccare i creative.",
    ],
  },
  {
    title: "02 / OTTIMIZZAZIONE FORM",
    icon: ClipboardCheck,
    text: [
      "Stop alla comunicazione centrata solo sull'offerta: focus su fiducia, solidità e storia del brand. Su TikTok, formato nativo con tono diretto, costruito per fermare lo scroll nei primi 3 secondi.Impatto immediato su CTR e, di conseguenza, sul CPL.",
    ],
  },
  {
    title: "03 / FEEDBACK LOOP",
    icon: RefreshCcw,
    text: [
      "SIntegrazione CRM con le piattaforme pubblicitarie. L'algoritmo ha iniziato a ottimizzare sui contratti reali, non sui semplici form compilati. Risultato: CPL sceso a €9, tasso di conversione al 16%.",
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
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl bg-[#021B35] p-8 text-white shadow-xl"
                >
                  <Icon className="mb-5 h-8 w-8 text-cu-green" />

                  <h3 className="mb-6 text-xl font-semibold text-cu-green">
                    {card.title}
                  </h3>
                  {/* <h3 className="mb-6 text-xl font-semibold text-cu-green"> */}
                  {card.text.map((para, idx) => {
                    return (
                      <p key={idx} className="text-white mb-2 text-sm">
                        {para}
                      </p>
                    );
                  })}
                  {/* </h3> */}

                  {/* <ul className="space-y-1 text-sm leading-relaxed text-white">
                    {card.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul> */}
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
            In uno dei mercati più competitivi d'Italia, avere un brand forte
            non basta. Serve una strategia.
          </motion.h2>
        </div>
      </section>
    </>
  );
}
