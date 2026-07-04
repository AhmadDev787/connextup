"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  servicesPageBanner1,
  servicesPageBanner2,
  servicesPageBanner3,
} from "../../components/paths.json";
const cards = [
  {
    id: 1,
    number: "01",
    title: "LEAD GENERATION",
    short: "Lead Generation",
    description:
      "Costruiamo sistemi di acquisizione che intercettano il pubblico giusto e lo trasformano in contatti qualificati. Utilizziamo campagne su Meta, TikTok e Google, integrate con funnel, creatività e automazioni, per generare domanda reale e scalabile.",
    image: servicesPageBanner1,
  },
  {
    id: 2,
    number: "02",
    title: "GESTIONE COMMERCIALE",
    short: "Gestione Commerciale",
    description:
      "Nel nostro staff è presente un team commerciale di oltre 40 venditori qualificati che gestiscono in modo diretto il contatto con il potenziale cliente, fino alla vendita.Non lasciamo le opportunità sospese tra marketing e azienda: le portiamo a risultato, con processi strutturati, script ottimizzati e gestione costante delle trattative.",
    image: servicesPageBanner2,
  },
  {
    id: 3,
    number: "03",
    title: "CONSULENZA STRATEGICA",
    short: "Consulenza Strategica",
    description:
      "Affianchiamo le aziende nella costruzione e gestione della loro presenza digitale. Non eseguiamo attività isolate, progettiamo sistemi coerenti dove ogni componente lavora per un unico obiettivo: la crescita del business.",
    image: banner3,
  },
  {
    id: 4,
    number: "04",
    title: "FORMAZIONE & SVILUPPO",
    short: "Formazione & Sviluppo",
    description:
      "Affianchiamo le aziende nello sviluppo di competenze interne, trasferendo metodo, processi e strumenti sul lavoro quotidiano: dalla gestione delle campagne alla creazione dei contenuti fino all’ottimizzazione delle performance.L’obiettivo è rendere i team progressivamente autonomi, ridurre la dipendenza da consulenze esterne e costruire una crescita stabile e continuativa nel tempo.",
    image: servicesPageBanner3,
  },
];

function Card({ card, index, progress, totalCards }) {
  /**
   * Example:
   *
   * card 0 => 0   -> 0.25
   * card 1 => 0.25 -> 0.50
   * card 2 => 0.50 -> 0.75
   * card 3 => 0.75 -> 1
   */

  const step = 1 / totalCards;

  const start = index * step;
  const end = start + step;

  /**
   * Card enter animation
   */

  const y = useTransform(progress, [start, end], ["100%", "0%"]);

  /**
   * Previous cards stack upward
   */

  const stackOffset = index * 22;

  const stackedY = useTransform(
    progress,
    [end, 1],
    [`0px`, `-${stackOffset}px`],
  );

  /**
   * Scale effect
   */

  const stackedScale = useTransform(progress, [end, 1], [1, 1 - index * 0.04]);

  return (
    <motion.div
      style={{
        y,
        zIndex: index + 1,
      }}
      className="absolute  inset-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          y: stackedY,
          scale: stackedScale,
        }}
        className="
          w-[92vw]
          md:w-[88vw]
          max-w-[1700px]
          h-[82vh]
          md:h-[88vh]
          lg:h-[96vh]
          rounded-[28px]
          shadow-2xl
          relative
          overflow-hidden
        "
      >
        <Image
          src={card.image}
          alt={`${card.title} service`}
          fill
          sizes="(max-width:768px)"
          className="object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        {/* Content */}

        <div className="absolute top-0 inset-0 flex flex-col justify-center items-start p-6 md:p-10 lg:p-14">
          <article className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {card.title}
            </h3>

            <p className="text-white text-sm md:text-lg leading-relaxed max-w-xl">
              {card.description}
            </p>
          </article>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function StackedCards() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="
      mt-[-500px]
        relative
        h-[450vh]
        absolute
        top-0
      "
    >
      <div
        className="
        
          sticky
          top-0
          h-screen
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >
        {[...cards].reverse().map((card, reverseIndex) => {
          const realIndex = cards.length - 1 - reverseIndex;

          return (
            <Card
              key={card.id}
              card={card}
              index={realIndex}
              totalCards={cards.length}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}
