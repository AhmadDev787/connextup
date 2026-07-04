// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
// import Banner from "./components/banner";
// import { useEffect, useState } from "react";
// import Header from "../components/header";

// const services = [
//   {
//     id: "lead-generation",
//     number: "01",
//     title: "LEAD GENERATION",
//     short: "Lead Generation",
//     description:
//       "Costruiamo sistemi di acquisizione che intercettano il pubblico giusto e lo trasformano in contatti qualificati.",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     id: "gestione-commerciale",
//     number: "02",
//     title: "GESTIONE COMMERCIALE",
//     short: "Gestione Commerciale",
//     description:
//       "Ottimizziamo processi commerciali e strategie di vendita con workflow intelligenti e performance tracking.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     id: "consulenza-strategica",
//     number: "03",
//     title: "CONSULENZA STRATEGICA",
//     short: "Consulenza Strategica",
//     description:
//       "Strategie moderne, analisi dati e crescita scalabile per aziende che vogliono dominare il mercato.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     id: "formazione-sviluppo",
//     number: "04",
//     title: "FORMAZIONE & SVILUPPO",
//     short: "Formazione & Sviluppo",
//     description:
//       "Percorsi di formazione avanzata per team moderni, orientati a performance, leadership e innovazione.",
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
//   },
// ];

// export default function WorkProcessSection() {
//   const [activeSection, setActiveSection] = useState(services[0].id);

//   // useEffect(() => {
//   //   const sections = services
//   //     .map((service) => document.getElementById(service.id))
//   //     .filter(Boolean);

//   //   const observer = new IntersectionObserver(
//   //     (entries) => {
//   //       entries.forEach((entry) => {
//   //         if (entry.isIntersecting) {
//   //           setActiveSection(entry.target.id);
//   //         }
//   //       });
//   //     },
//   //     {
//   //       threshold: 0.5,
//   //       rootMargin: "-20% 0px -20% 0px",
//   //     },
//   //   );

//   //   sections.forEach((section) => observer.observe(section));

//   //   return () => {
//   //     sections.forEach((section) => observer.unobserve(section));
//   //   };
//   // }, []);
//   const reorderedServices = [
//     services.find((s) => s.id === activeSection),
//     ...services.filter((s) => s.id !== activeSection),
//   ];
//   return (
//     <>
//       <Header />
//       <section className="relative pt-30 overflow-hidden bg-cu-dark-gray py-16 sm:py-20 lg:py-28">
//         {/* Background Blur */}
//         {/* <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" /> */}
//         {/* <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" /> */}

//         <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="max-w-2xl"
//           >
//             <h2 className="text-4xl font-black leading-none tracking-tight text-cu-blue sm:text-5xl lg:text-6xl">
//               Come lavoriamo <br /> davvero
//             </h2>

//             <p className="mt-6 text-base leading-relaxed text-cu-blue sm:text-lg">
//               Sai già che generiamo lead qualificati e colleghiamo marketing e
//               vendite. Qui trovi come lo facciamo — metodologia, deliverable
//               concreti, KPI monitorati e strumenti usati per ogni servizio.
//             </p>

//             <button className="group mt-8 inline-flex items-center gap-3 border-b border-[#081a46] pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#081a46] transition-all hover:gap-5">
//               Scopri ora
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//               />
//             </button>
//           </motion.div>

//           {/* Sticky Tabs */}
//           {/* <div className="sticky top-0 z-50 mt-14 overflow-x-auto rounded-t-[28px] border border-white/10 bg-cu-blue backdrop-blur-2xl">
//             <div className="flex min-w-max items-center px-2 sm:px-4">
//               {services.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={(e) => {
//                     e.preventDefault();

//                     const element = document.getElementById(item.id);

//                     if (element) {
//                       element.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start",
//                       });
//                     }
//                   }}
//                   className={`group relative flex-1 whitespace-nowrap px-5 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 sm:text-xs ${
//                     activeSection === item.id
//                       ? "text-white font-bold"
//                       : "text-white/50 hover:text-white/80"
//                   }`}
//                 >
//                   <span className="mr-2 opacity-50">{item.number}</span>
//                   {item.short}
//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${
//                       activeSection === item.id
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </a>
//               ))}
//             </div>
//           </div> */}
//           <div className="sticky top-0 z-50 mt-14 overflow-x-auto rounded-t-[28px] border border-white/10 bg-cu-blue backdrop-blur-2xl">
//             <div className="flex min-w-max items-center px-2 sm:px-4">
//               {services.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveSection(item.id)}
//                   className={`group relative flex-1 whitespace-nowrap px-5 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 sm:text-xs ${
//                     activeSection === item.id
//                       ? "font-bold text-white"
//                       : "text-white/50 hover:text-white/80"
//                   }`}
//                 >
//                   <span className="mr-2 opacity-50">{item.number}</span>
//                   {item.short}

//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${
//                       activeSection === item.id
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Banner Sections */}
//           <div className="">
//             {reorderedServices.map((item, index) => (
//               <motion.div
//                 id={item.id}
//                 key={item.id}
//                 initial={{ opacity: 0, y: 80 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="group relative overflow-hidden  bg-[#081a46]"
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#081a46]/95 via-[#081a46]/70 to-black/20" />
//                 </div>

//                 {/* Glow */}
//                 <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

//                 {/* Content */}
//                 <div className="relative z-10 flex min-h-[580px] items-center px-6 py-16 sm:px-10 lg:min-h-[720px] lg:px-20">
//                   <div className="max-w-3xl">
//                     <motion.span
//                       initial={{ opacity: 0, x: -40 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="block text-5xl font-black text-white/90 sm:text-6xl lg:text-8xl"
//                     >
//                       {item.number}
//                     </motion.span>

//                     <motion.h3
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.1, duration: 0.6 }}
//                       className="mt-6 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
//                     >
//                       {item.title}
//                     </motion.h3>

//                     <motion.p
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2, duration: 0.6 }}
//                       className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl"
//                     >
//                       {item.description}
//                     </motion.p>

//                     {/* Buttons */}
//                     {/* <motion.div
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3, duration: 0.6 }}
//                       className="mt-10 flex flex-wrap gap-4"
//                     >
//                       <button className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#081a46] transition-all duration-300 hover:scale-105">
//                         Get Started
//                       </button>

//                       <button className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#081a46]">
//                         Learn More
//                         <ChevronRight
//                           size={16}
//                           className="transition-transform duration-300 group-hover:translate-x-1"
//                         />
//                       </button>
//                     </motion.div> */}
//                   </div>
//                 </div>

//                 {/* Border */}
//                 <div className="absolute inset-0 border border-white/10" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Banner />
//     </>
//   );
// }

// ++++++++++++++++++++++

// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
// import Banner from "./components/banner";
// import { useEffect, useState } from "react";
// import Header from "../components/header";

// const cards = [
//   {
//     id: 0,
//     number: "01",
//     title: "LEAD GENERATION",
//     short: "Lead Generation",
//     description:
//       "Costruiamo sistemi di acquisizione che intercettano il pubblico giusto e lo trasformano in contatti qualificati.",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     id: 1,
//     number: "02",
//     title: "GESTIONE COMMERCIALE",
//     short: "Gestione Commerciale",
//     description:
//       "Ottimizziamo processi commerciali e strategie di vendita con workflow intelligenti e performance tracking.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     number: "03",
//     title: "CONSULENZA STRATEGICA",
//     short: "Consulenza Strategica",
//     description:
//       "Strategie moderne, analisi dati e crescita scalabile per aziende che vogliono dominare il mercato.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     number: "04",
//     title: "FORMAZIONE & SVILUPPO",
//     short: "Formazione & Sviluppo",
//     description:
//       "Percorsi di formazione avanzata per team moderni, orientati a performance, leadership e innovazione.",
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
//   },
// ];

// export default function WorkProcessSection() {
//   const [active, setActive] = useState(0);

//   const orderedCards = cards;
//   const [previous, setPrevious] = useState(0);

//   const handleChange = (id) => {
//     if (id === active) return;

//     setPrevious(active);
//     setActive(id);
//   };
//   const getPosition = (id) => {
//     const position = (id - active + cards.length) % cards.length;

//     return position;
//   };
//   return (
//     <>
//       <Header />
//       <section className="relative pb-10 pt-30 overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
//         <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="max-w-2xl"
//           >
//             <h2 className="text-4xl font-black leading-none tracking-tight text-cu-blue sm:text-5xl lg:text-6xl">
//               Come lavoriamo <br /> davvero
//             </h2>

//             <p className="mt-6 text-base leading-relaxed text-cu-blue sm:text-lg">
//               Sai già che generiamo lead qualificati e colleghiamo marketing e
//               vendite. Qui trovi come lo facciamo — metodologia, deliverable
//               concreti, KPI monitorati e strumenti usati per ogni servizio.
//             </p>

//             <button className="group mt-8 inline-flex items-center gap-3 border-b border-[#081a46] pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#081a46] transition-all hover:gap-5">
//               Scopri ora
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//               />
//             </button>
//           </motion.div>

//           {/* Sticky Tabs */}

//           <div className="sticky top-0 z-50 mt-14 overflow-x-auto rounded-t-[28px] border border-white/10 bg-cu-blue backdrop-blur-2xl">
//             <div className="flex min-w-max items-center px-2 sm:px-4">
//               {cards.map((item) => (
//                 <button
//                   key={item.id}
//                   // onClick={() => setActiveSection(item.id)}
//                   onClick={() => {
//                     handleChange(item.id);
//                     // setActive(item.id);
//                   }}
//                   className={`group relative flex-1 whitespace-nowrap px-5 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 sm:text-xs ${
//                     active === item.id
//                       ? "font-bold text-white"
//                       : "text-white/50 hover:text-white/80"
//                   }`}
//                 >
//                   <span className="mr-2 opacity-50">{item.number}</span>
//                   {item.title}

//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${
//                       active === item.id ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Banner Sections */}
//           <div
//             className="relative h-[420px] sm:h-[500px] md:h-[500px] lg:h-[550px]"
//             style={{
//               perspective: "2000px",
//               transformStyle: "preserve-3d",
//             }}
//           >
//             <AnimatePresence mode="popLayout">
//               {orderedCards.map((card, index) => {
//                 // const Icon = card.icon;

//                 const scale = 1 - index * 0.05;
//                 const y = index * 28;
//                 const opacity = 1 - index * 0.15;

//                 return (
//                   <motion.div
//                     // key={`${card.id}-${active}`}
//                     key={`${card.id}`}
//                     layout
//                     transition={{
//                       duration: 0.6,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="absolute inset-0"
//                     style={{
//                       // zIndex: 100 - index,

//                       zIndex: card.id === active ? 100 : 100 - card.id,
//                     }}
//                   >
//                     <motion.div
//                       animate={{
//                         scale:
//                           card.id === active
//                             ? 1
//                             : card.id === previous
//                               ? 0.92
//                               : 0.88 - index * 0.03,

//                         y:
//                           card.id === active
//                             ? 0
//                             : card.id === previous
//                               ? 40
//                               : 70 + index * 25,

//                         rotateX: card.id === active ? 0 : -6,

//                         opacity: card.id === active ? 1 : 0.75,
//                       }}
//                       transition={{
//                         duration: 0.8,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                       className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
//                     >
//                       {/* Background Image */}
//                       {/* <img
//                       src={card.image}
//                       alt={card.title}
//                       className="absolute inset-0 h-full w-full object-cover"
//                     /> */}
//                       <Image
//                         src={card.image}
//                         alt={`${card.title} service`}
//                         fill
//                         priority={card.id === active}
//                         sizes="(max-width:768px) 100vw, 1200px"
//                         className="object-cover"
//                       />

//                       {/* Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

//                       {/* Content */}
//                       {card.id === active && (
//                         <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14">
//                           <article className="max-w-2xl">
//                             <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
//                               {/* <Icon size={28} className="text-white" /> */}
//                             </div>

//                             <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
//                               {card.title}
//                             </h3>

//                             <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl">
//                               {card.description}
//                             </p>
//                           </article>
//                         </div>
//                       )}
//                       {/* Stack Label */}
//                       {/* {index !== 0 && (
//                         <div className="absolute top-6 right-6 rounded-full bg-black/40 backdrop-blur-xl px-4 py-2 text-sm text-white">
//                           Layer {index + 1}
//                         </div>
//                       )} */}
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>
//       <Banner />
//     </>
//   );
// }

// +++++++++++++++++++++++++++++++++ 3rd
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
import Banner from "./components/banner";
import { useEffect, useState } from "react";
import Header from "../components/header";
import StackedCards from "../test/comp/stack";

export default function WorkProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Header />
      <section className="relative  pt-30 overflow-hidden bg-white sm:pt-20 lg:pt-28">
        <div className="mx-auto mt-16 container px-4  lg:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-black leading-none tracking-tight text-cu-blue sm:text-5xl lg:text-6xl">
              Come lavoriamo <br /> davvero
            </h2>

            <p className="mt-6 text-base leading-relaxed text-cu-blue sm:text-lg">
              Sai già che generiamo lead qualificati e colleghiamo marketing e
              vendite. Qui trovi come lo facciamo — metodologia, deliverable
              concreti, KPI monitorati e strumenti usati per ogni servizio.
            </p>

            <button className="group mt-8 inline-flex items-center gap-3 border-b border-[#081a46] pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#081a46] transition-all hover:gap-5">
              Scopri ora
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </div>
      </section>
      <StackedCards />
      <Banner />
    </>
  );
}
