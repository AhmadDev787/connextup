// "use client";

// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { useRef } from "react";
// import TeamCard from "./teamCard";
// import Link from "next/link";

// const teamImages = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[4%] left-[2%] w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] md:w-[110px] md:h-[150px] lg:w-[130px] lg:h-[180px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[28%] left-[2%] w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] md:w-[110px] md:h-[150px] lg:w-[130px] lg:h-[180px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[2%] left-[14%] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] md:w-[130px] md:h-[170px] lg:w-[150px] lg:h-[200px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[29%] left-[14%] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] md:w-[130px] md:h-[170px] lg:w-[150px] lg:h-[200px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[14%] left-[27%] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] md:w-[130px] md:h-[170px] lg:w-[150px] lg:h-[200px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[10%] left-[40%] w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] md:w-[120px] md:h-[160px] lg:w-[140px] lg:h-[185px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[15%] left-[52%] w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] md:w-[120px] md:h-[160px] lg:w-[140px] lg:h-[185px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[3%] right-[24%] w-[75px] h-[105px] sm:w-[100px] sm:h-[140px] md:w-[130px] md:h-[170px] lg:w-[150px] lg:h-[200px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[13%] right-[11%] w-[75px] h-[105px] sm:w-[100px] sm:h-[140px] md:w-[130px] md:h-[170px] lg:w-[150px] lg:h-[200px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[4%] right-[0%] w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] md:w-[110px] md:h-[150px] lg:w-[130px] lg:h-[180px]",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//     className:
//       "top-[28%] right-[0%] w-[70px] h-[100px] sm:w-[90px] sm:h-[130px] md:w-[110px] md:h-[150px] lg:w-[130px] lg:h-[180px]",
//   },
// ];

// export default function Banner() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end center"],
//   });

//   const progress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 25,
//   });
//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#f8f8f8] py-20 sm:py-24 lg:py-32"
//     >
//       {/* Background Lines */}
//       <div className="absolute inset-0 z-0 flex justify-between px-4 sm:px-10 opacity-30">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="h-full w-px border-l border-dashed border-zinc-300"
//           />
//         ))}
//       </div>

//       {/* Glow Effects */}
//       <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
//       <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="relative flex min-h-[700px] items-center justify-center sm:min-h-[850px] lg:min-h-[760px]">
//           {/* Floating Images */}
//           {teamImages.map((item, index) => (
//             <TeamCard
//               key={index}
//               item={item}
//               index={index}
//               progress={progress}
//             />
//           ))}

//           {/* Center Content */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             viewport={{ once: true }}
//             className="relative z-20 mx-auto mt-80 max-w-3xl px-4 text-center"
//           >
//             {/* Heading */}
//             <h2 className="text-2xl font-black uppercase leading-[0.95] tracking-tight text-cu-blue sm:text-5xl md:text-4xl lg:text-5xl">
//               COSTRUIAMO IL TUO SISTEMA
//               <br />
//               <span className="text-cu-green">DI ACQUISIZIONE</span>
//             </h2>

//             {/* Description */}
//             <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cu-blue sm:text-base lg:text-lg">
//               Prendi decisioni di acquisizione basate su dati reali, non su
//               ipotesi. Analizziamo la tua situazione in una call strategica
//               gratuita.
//             </p>

//             {/* CTA */}
//             <Link className="hover:cursor-pointer" href={"/#contact"}>
//               <button className="group hover:cursor-pointer mt-8 inline-flex items-center gap-3 border-b border-[#081a46] pb-1 text-xs font-bold uppercase tracking-[0.15em] text-cu-blue transition-all duration-300 hover:gap-5 sm:text-sm">
//                 Richiedi un confronto strategico
//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import TeamCard from "./teamCard";
import Link from "next/link";

const teamImages = [
  {
    image: "/team/ceo.png",
    className:
      "hidden md:block top-[12%] left-[2%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/opsDir.png",
    className:
      "hidden md:block top-[40%] left-[2%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/opsCord.png",
    className:
      "hidden md:block top-[1%] left-[14%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/adsSpec.png",
    className:
      "hidden md:block top-[29%] left-[14%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/smMng.png",
    className:
      "hidden md:block top-[14%] left-[27%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/advertiseSpec.png",
    className:
      "hidden md:block top-[10%] left-[40%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/adsSpec2.png",
    className:
      "hidden md:block top-[15%] left-[52%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/des.png",
    className:
      "hidden md:block top-[3%] right-[24%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/markSpec.png",
    className:
      "hidden md:block top-[13%] right-[11%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/accMng.png",
    className:
      "hidden md:block top-[4%] right-[0%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
  {
    image: "/team/salesAccMng.png",
    className:
      "hidden md:block top-[31%] right-[0%] w-[110px] h-[150px] lg:w-[130px] lg:h-[180px]",
  },
];

const mobileCards = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    className: "top-4 left-4 w-[70px] h-[100px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    className: "top-4 right-4 w-[70px] h-[100px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    className: "top-28 left-12 w-[80px] h-[115px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
    className: "top-29 right-12 w-[80px] h-[115px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
    className: "top-2 right-30 w-[80px] h-[115px]",
  },
];

export default function Banner() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 95%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f8f8] py-16 sm:py-24 lg:py-12"
    >
      {/* Background Lines */}

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="flex h-full justify-between px-4 md:hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-full w-px border-l border-dashed border-zinc-300"
            />
          ))}
        </div>

        <div className="hidden h-full justify-between px-10 md:flex">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-full w-px border-l border-dashed border-zinc-300"
            />
          ))}
        </div>
      </div>

      {/* Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[620px] sm:min-h-[850px] lg:min-h-[650px] items-center justify-center">
          {/* Desktop Cards */}

          {teamImages.map((item, index) => (
            <TeamCard
              key={index}
              item={item}
              index={index}
              progress={progress}
            />
          ))}

          {/* Mobile Cards */}

          <div className="absolute inset-0 md:hidden">
            {mobileCards.map((item, index) => (
              <TeamCard
                key={index}
                item={item}
                index={index}
                progress={progress}
              />
            ))}
          </div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative z-20
              mx-auto
              max-w-3xl
              px-4
              text-center
              md:mt-36
              
              pt-[230px]
              sm:pt-[420px]
              md:pt-[460px]
              lg:pt-40
            "
          >
            {/* // text-[30px] // sm:text-[38px] // md:text-[44px] // lg:text-[50px] */}
            <h2
              className="
             text-2xl
             sm:text-3xl
                md:text-4xl
                font-bold
                uppercase
                leading-[0.95]
                tracking-tight
                text-cu-blue
              "
            >
              COSTRUIAMO IL TUO SISTEMA
              <br />
              <span className="text-cu-green">DI ACQUISIZIONE</span>
            </h2>
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
                text-cu-blue
              "
            >
              Prendi decisioni di acquisizione basate su dati reali, non su
              ipotesi. Analizziamo la tua situazione in una call strategica
              gratuita.
            </p>
            <Link href="/contattaci">
              <button
                className="
                  group
                  mt-8
                  hover:cursor-pointer
                  inline-flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2
                  sm:gap-3
                  border-b
                  border-[#081a46]
                  pb-1
                  text-center
                  text-[9px]
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-cu-blue
                  transition-all
                  duration-300
                  hover:gap-5
                "
              >
                Richiedi un confronto strategico
                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
