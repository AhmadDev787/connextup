// // "use client";

// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ArrowUpRight } from "lucide-react";
// // import { banner1, banner2, banner3, banner4 } from "./paths.json";
// // import Link from "next/link";
// // const slides = [
// //   {
// //     id: 1,
// //     title: "LEAD GENERATION",
// //     description:
// //       "Costruiamo sistemi di acquisizione che intercettano il pubblico giusto e lo trasformano in contatti qualificati.",
// //     image: banner1,
// //   },
// //   {
// //     id: 2,
// //     title: "GESTIONE COMMERCIALE",
// //     description:
// //       "Abbiamo un team commerciale di oltre 20 venditori qualificati che gestiscono in modo diretto il contatto con il potenziale cliente, fino alla vendita.",
// //     image: banner2,
// //   },
// //   {
// //     id: 3,
// //     title: "CONSULENZA STRATEGICA",
// //     description:
// //       "Affianchiamo le aziende nella costruzione e gestione della loro presenza digitale: social media, advertising e produzione contenuti video.",
// //     image: banner3,
// //   },
// //   {
// //     id: 4,
// //     title: "FORMAZIONE E SVILUPPO",
// //     description:
// //       "Dalla gestione delle campagne alla creazione dei contenuti fino all’ottimizzazione delle performance.",
// //     image: banner4,
// //   },
// // ];

// // export default function LuxuryLeadSection() {
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative overflow-hidden bg-cu-blue py-20 lg:py-28">
// //       {/* Background Split */}
// //       <div className="absolute inset-0">
// //         <div className="h-[72%] bg-cu-blue" />
// //         <div className="h-[28%] bg-white" />
// //       </div>

// //       {/* Glow */}
// //       <div className="absolute left-1/2 top-32 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cu-blue blur-[120px]" />

// //       <div className="relative z-10 mx-auto max-w-7xl px-5">
// //         {/* Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 70 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.9 }}
// //           viewport={{ once: true }}
// //           className="mx-auto mb-14 max-w-4xl text-center"
// //         >
// //           <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
// //             Connext scala i volumi e aumenta le vendite
// //           </h2>

// //           <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-xl">
// //             Il mercato della lead generation e della customer acquisition
// //             digitale è saturo di offerte orientate al volume più che alla
// //             qualità: molti contatti, ma tassi di chiusura bassi.
// //           </p>
// //         </motion.div>

// //         {/* Slider Card */}
// //         <div className="group relative mx-auto h-[500px] w-full max-w-6xl overflow-hidden rounded-[35px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={slides[current].id}
// //               initial={{ opacity: 0, scale: 1.08 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 1.05 }}
// //               transition={{ duration: 1 }}
// //               className="absolute inset-0"
// //             >
// //               {/* Image */}
// //               <img
// //                 src={slides[current].image}
// //                 alt={slides[current].title}
// //                 className="h-full w-full object-cover"
// //               />

// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-r from-cu-blue via-[#03163D]/45 to-transparent" />

// //               {/* Glass Effect */}
// //               <div className="absolute inset-0 backdrop-blur-[1px]" />

// //               {/* Content */}
// //               <div className="absolute left-0 top-0 flex h-full w-full items-center">
// //                 <div className="max-w-xl px-7 sm:px-14">
// //                   <motion.h3
// //                     initial={{ opacity: 0, x: -40 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ delay: 0.2, duration: 0.7 }}
// //                     className="text-4xl font-extrabold tracking-wide text-white sm:text-6xl"
// //                   >
// //                     {slides[current].title}
// //                   </motion.h3>

// //                   <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.3, duration: 0.6 }}
// //                     className="
// //   overflow-hidden
// //   opacity-100
// //   max-h-[300px]

// //   md:max-h-0
// //   md:opacity-0
// //   md:group-hover:max-h-[300px]
// //   md:group-hover:opacity-100

// //   transition-all
// //   duration-500
// //   ease-out
// // "
// //                   >
// //                     <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-xl">
// //                       {slides[current].description}
// //                     </p>

// //                     <motion.button
// //                       whileHover={{ scale: 1.04 }}
// //                       whileTap={{ scale: 0.97 }}
// //                       className="group/btn mt-9 inline-flex items-center gap-3 border-b border-white pb-1 text-lg font-semibold text-white"
// //                     >
// //                       <Link href={"/servizi"}>Scopri ora</Link>
// //                       <ArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
// //                     </motion.button>
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </AnimatePresence>

// //           {/* Bottom Accent Line */}
// //           <motion.div
// //             animate={{
// //               x: ["-100%", "100%"],
// //             }}
// //             transition={{
// //               repeat: Infinity,
// //               duration: 5,
// //               ease: "linear",
// //             }}
// //             className="absolute bottom-0 h-[3px] w-[40%] bg-cu-blue"
// //           />

// //           {/* Floating Blur */}
// //           <div className="absolute -right-16 top-10 h-52 w-52 rounded-full cu-blue blur-[100px]" />
// //         </div>

// //         {/* Indicators */}
// //         <div className="mt-8 flex items-center justify-center gap-3">
// //           {slides.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setCurrent(index)}
// //               className={`h-2.5 rounded-full transition-all duration-500 ${
// //                 current === index ? "w-10 bg-cu-blue" : "w-2.5 bg-white/40"
// //               }`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { useRef, useEffect, useState } from "react";
// import Link from "next/link";
// import { banner1, banner2, banner3, banner4 } from "./paths.json";

// const slides = [
//   {
//     id: 1,
//     title: "LEAD GENERATION",
//     description:
//       "Costruiamo sistemi di acquisizione che intercettano il pubblico giusto e lo trasformano in contatti qualificati.",
//     image: banner1,
//   },
//   {
//     id: 2,
//     title: "GESTIONE COMMERCIALE",
//     description:
//       "Abbiamo un team commerciale di oltre 20 venditori qualificati che gestiscono in modo diretto il contatto con il potenziale cliente, fino alla vendita.",
//     image: banner2,
//   },
//   {
//     id: 3,
//     title: "CONSULENZA STRATEGICA",
//     description:
//       "Affianchiamo le aziende nella costruzione e gestione della loro presenza digitale: social media, advertising e produzione contenuti video.",
//     image: banner3,
//   },
//   {
//     id: 4,
//     title: "FORMAZIONE E SVILUPPO",
//     description:
//       "Dalla gestione delle campagne alla creazione dei contenuti fino all’ottimizzazione delle performance.",
//     image: banner4,
//   },
// ];

// export default function LuxuryLeadSection() {
//   const carouselRef = useRef(null);
//   const [dragWidth, setDragWidth] = useState(0);

//   useEffect(() => {
//     const calculateWidth = () => {
//       if (!carouselRef.current) return;

//       const scrollWidth = carouselRef.current.scrollWidth;
//       const offsetWidth = carouselRef.current.offsetWidth;

//       setDragWidth(scrollWidth - offsetWidth);
//     };

//     calculateWidth();

//     window.addEventListener("resize", calculateWidth);

//     return () => window.removeEventListener("resize", calculateWidth);
//   }, []);
//   return (
//     <section className="relative overflow-hidden bg-cu-blue py-20 lg:py-28">
//       {/* Background Split */}
//       <div className="absolute inset-0">
//         <div className="h-[72%] bg-cu-blue" />
//         <div className="h-[28%] bg-white" />
//       </div>

//       {/* Glow */}
//       <div className="absolute left-1/2 top-32 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cu-blue blur-[120px]" />

//       <div className="relative z-10 w-full">
//         <div className="mx-auto max-w-7xl px-5">
//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="mx-auto mb-14 max-w-4xl text-center"
//           >
//             <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
//               Connext scala i volumi e aumenta le vendite
//             </h2>

//             <p className="mx-auto mt-5 max-w-3xl text-small leading-relaxed text-white/80 sm:text-base">
//               Il mercato della lead generation e della customer acquisition
//               digitale è saturo di offerte orientate al volume più che alla
//               qualità: molti contatti, ma tassi di chiusura bassi.
//             </p>
//           </motion.div>

//           {/* Carousel */}
//           <div className="relative overflow-hidden">
//             <motion.div ref={carouselRef} className="overflow-hidden">
//               <motion.div
//                 drag="x"
//                 dragConstraints={{
//                   left: -dragWidth,
//                   right: 0,
//                 }}
//                 dragElastic={0.08}
//                 whileTap={{ cursor: "grabbing" }}
//                 className="flex gap-4 md:gap-6 cursor-grab"
//               >
//                 {slides.map((slide) => (
//                   <motion.div
//                     key={slide.id}
//                     whileHover={{
//                       y: -8,
//                     }}
//                     transition={{
//                       duration: 0.3,
//                     }}
//                     className="
//             group
//             relative
//             shrink-0
//             overflow-hidden
//             rounded-[24px]
//             md:rounded-[35px]
//             border border-white/10

//             w-[92%]
//             sm:w-[88%]
//             md:w-[82%]
//             lg:w-[78%]

//             h-[380px]
//             sm:h-[430px]
//             md:h-[500px]

//           "
//                   >
//                     {/* Image */}
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="
//               absolute
//               inset-0
//               h-full
//               w-full
//               object-cover
//               transition-transform
//               duration-700
//               group-hover:scale-105
//             "
//                     />

//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-cu-blue via-[#03163D]/60 to-transparent" />

//                     {/* Content */}
//                     <div className="absolute inset-0 flex items-center">
//                       <div className="px-5 sm:px-8 md:px-12 lg:px-14 max-w-xl">
//                         <h3
//                           className="
//                   text-2xl
//                   sm:text-3xl
//                   md:text-4xl
//                   lg:text-5xl
//                   font-extrabold
//                   text-white
//                 "
//                         >
//                           {slide.title}
//                         </h3>

//                         <div
//                           className="
//                   mt-4
//                   opacity-100

//                   lg:opacity-0
//                   lg:group-hover:opacity-100

//                   transition-all
//                   duration-500
//                 "
//                         >
//                           <p
//                             className="
//                     text-sm
//                     sm:text-base
//                     md:text-lg
//                     leading-relaxed
//                     text-white/85
//                     max-w-lg
//                   "
//                           >
//                             {slide.description}
//                           </p>

//                           <Link
//                             href="/servizi"
//                             className="
//                     group/btn
//                     mt-6
//                     inline-flex
//                     items-center
//                     gap-2
//                     border-b
//                     border-white
//                     pb-1
//                     text-base
//                     md:text-lg
//                     font-semibold
//                     text-white
//                   "
//                           >
//                             Scopri ora
//                             <ArrowUpRight
//                               className="
//                       transition-transform
//                       duration-300
//                       group-hover/btn:translate-x-1
//                       group-hover/btn:-translate-y-1
//                     "
//                             />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Animated Line */}
//                     <motion.div
//                       animate={{
//                         x: ["-100%", "100%"],
//                       }}
//                       transition={{
//                         repeat: Infinity,
//                         duration: 5,
//                         ease: "linear",
//                       }}
//                       className="
//               absolute
//               bottom-0
//               h-[3px]
//               w-[40%]
//               bg-cu-blue
//             "
//                     />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ++++++++++++++++++++++++

// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { banner1, banner2, banner3, banner4 } from "./paths.json";
// import Link from "next/link";
// const slides = [
//   {
//     id: 1,
//     title: "LEAD GENERATION",
//     description:
//       "Costruiamo sistemi di acquisizione che intercettano il pubblico giusto e lo trasformano in contatti qualificati.",
//     image: banner1,
//   },
//   {
//     id: 2,
//     title: "GESTIONE COMMERCIALE",
//     description:
//       "Abbiamo un team commerciale di oltre 20 venditori qualificati che gestiscono in modo diretto il contatto con il potenziale cliente, fino alla vendita.",
//     image: banner2,
//   },
//   {
//     id: 3,
//     title: "CONSULENZA STRATEGICA",
//     description:
//       "Affianchiamo le aziende nella costruzione e gestione della loro presenza digitale: social media, advertising e produzione contenuti video.",
//     image: banner3,
//   },
//   {
//     id: 4,
//     title: "FORMAZIONE E SVILUPPO",
//     description:
//       "Dalla gestione delle campagne alla creazione dei contenuti fino all’ottimizzazione delle performance.",
//     image: banner4,
//   },
// ];

// export default function LuxuryLeadSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-cu-blue py-20 lg:py-28">
//       {/* Background Split */}
//       <div className="absolute inset-0">
//         <div className="h-[72%] bg-cu-blue" />
//         <div className="h-[28%] bg-white" />
//       </div>

//       {/* Glow */}
//       <div className="absolute left-1/2 top-32 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cu-blue blur-[120px]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="mx-auto mb-14 max-w-4xl text-center"
//         >
//           <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
//             Connext scala i volumi e aumenta le vendite
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-xl">
//             Il mercato della lead generation e della customer acquisition
//             digitale è saturo di offerte orientate al volume più che alla
//             qualità: molti contatti, ma tassi di chiusura bassi.
//           </p>
//         </motion.div>

//         {/* Slider Card */}
//         <div className="group relative mx-auto h-[500px] w-full max-w-6xl overflow-hidden rounded-[35px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slides[current].id}
//               initial={{ opacity: 0, scale: 1.08 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.05 }}
//               transition={{ duration: 1 }}
//               className="absolute inset-0"
//             >
//               {/* Image */}
//               <img
//                 src={slides[current].image}
//                 alt={slides[current].title}
//                 className="h-full w-full object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cu-blue via-[#03163D]/45 to-transparent" />

//               {/* Glass Effect */}
//               <div className="absolute inset-0 backdrop-blur-[1px]" />

//               {/* Content */}
//               <div className="absolute left-0 top-0 flex h-full w-full items-center">
//                 <div className="max-w-xl px-7 sm:px-14">
//                   <motion.h3
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.2, duration: 0.7 }}
//                     className="text-4xl font-extrabold tracking-wide text-white sm:text-6xl"
//                   >
//                     {slides[current].title}
//                   </motion.h3>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3, duration: 0.6 }}
//                     className="
//   overflow-hidden
//   opacity-100
//   max-h-[300px]

//   md:max-h-0
//   md:opacity-0
//   md:group-hover:max-h-[300px]
//   md:group-hover:opacity-100

//   transition-all
//   duration-500
//   ease-out
// "
//                   >
//                     <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-xl">
//                       {slides[current].description}
//                     </p>

//                     <motion.button
//                       whileHover={{ scale: 1.04 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="group/btn mt-9 inline-flex items-center gap-3 border-b border-white pb-1 text-lg font-semibold text-white"
//                     >
//                       <Link href={"/servizi"}>Scopri ora</Link>
//                       <ArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Bottom Accent Line */}
//           <motion.div
//             animate={{
//               x: ["-100%", "100%"],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 5,
//               ease: "linear",
//             }}
//             className="absolute bottom-0 h-[3px] w-[40%] bg-cu-blue"
//           />

//           {/* Floating Blur */}
//           <div className="absolute -right-16 top-10 h-52 w-52 rounded-full cu-blue blur-[100px]" />
//         </div>

//         {/* Indicators */}
//         <div className="mt-8 flex items-center justify-center gap-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`h-2.5 rounded-full transition-all duration-500 ${
//                 current === index ? "w-10 bg-cu-blue" : "w-2.5 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  servicesPageBanner1,
  servicesPageBanner2,
  banner3,
  servicesPageBanner3,
} from "./paths.json";

const slides = [
  {
    id: 1,
    title: "LEAD GENERATION",
    description:
      "Costruiamo sistemi di acquisizione che intercettano il pubblico giusto e lo trasformano in contatti qualificati. Utilizziamo campagne su Meta, TikTok e Google, integrate con funnel, creatività e automazioni, per generare domanda reale e scalabile.",
    image: servicesPageBanner1,
  },
  {
    id: 2,
    title: "GESTIONE COMMERCIALE",
    description:
      "Nel nostro staff è presente un team commerciale di oltre 40 venditori qualificati che gestiscono in modo diretto il contatto con il potenziale cliente, fino alla vendita.Non lasciamo le opportunità sospese tra marketing e azienda: le portiamo a risultato, con processi strutturati, script ottimizzati e gestione costante delle trattative.",
    image: servicesPageBanner2,
  },
  {
    id: 3,
    title: "CONSULENZA STRATEGICA",
    description:
      "Affianchiamo le aziende nella costruzione e gestione della loro presenza digitale. Non eseguiamo attività isolate, progettiamo sistemi coerenti dove ogni componente lavora per un unico obiettivo: la crescita del business.",
    image: banner3,
  },
  {
    id: 4,
    title: "FORMAZIONE E SVILUPPO",
    description:
      "Affianchiamo le aziende nello sviluppo di competenze interne, trasferendo metodo, processi e strumenti sul lavoro quotidiano: dalla gestione delle campagne alla creazione dei contenuti fino all’ottimizzazione delle performance.L’obiettivo è rendere i team progressivamente autonomi, ridurre la dipendenza da consulenze esterne e costruire una crescita stabile e continuativa nel tempo.",
    image: servicesPageBanner3,
  },
];

export default function LuxuryLeadSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="h-[97%]  bg-cu-blue" />
        {/* <div className="h-[28%] bg-white" /> */}
      </div>
      {/* Glow */}
      <div className="absolute left-1/2 top-32 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cu-blue blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h2
            id="services-heading"
            className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
          >
            Connext scala i volumi e aumenta le vendite
          </h2>

          <p className="mx-auto text-sm md:text-base mt-5 max-w-3xl text-white/80">
            Il mercato della lead generation e della customer acquisition
            digitale è saturo di offerte orientate al volume più che alla
            qualità: molti contatti, ma tassi di chiusura bassi.
          </p>
        </motion.header>

        {/*  Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5

            md:grid-cols-2

            xl:grid-cols-2
            xl:auto-rows-[460px]
          "
        >
          {/* Large Card */}
          <ServiceCard slide={slides[0]} className="" />

          <ServiceCard slide={slides[1]} />

          <ServiceCard slide={slides[2]} />

          <ServiceCard slide={slides[3]} className="" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ slide, className = "", compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`
        group
        relative
        min-h-[440px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-black/20
        backdrop-blur-sm
        ${className}
      `}
    >
      {/* Image */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        sizes="
          (max-width:768px) 100vw,
          (max-width:1280px) 50vw,
          33vw
        "
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/60
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          justify-end
          p-6
          md:p-8
          lg:p-10
        "
      >
        <h3
          className={
            compact
              ? "text-lg lg:text-xl font-bold text-white"
              : "text-xl lg:text-3xl font-bold text-white"
          }
        >
          {slide.title}
        </h3>

        <div
          className="
    overflow-hidden
    transition-all
    duration-500

    max-h-[240px]
    opacity-100

    lg:max-h-0
    lg:opacity-0

    lg:group-hover:max-h-[180px]
    lg:group-hover:opacity-100
  "
        >
          <p
            className="
      mt-4
      text-[12px]
      md:text-sm
      text-white/80
      leading-relaxed
      max-w-md
    "
          >
            {slide.description}
          </p>
        </div>

        <Link
          href="/servizi"
          className="
            mt-6
            inline-flex
            w-fit
            items-center
            gap-2
            font-semibold
            text-white
          "
        >
          Scopri ora
          <ArrowUpRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </Link>

        {/* Bottom Accent */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-white
            transition-all
            duration-700
            group-hover:w-full
          "
        />
      </div>
    </motion.article>
  );
}
