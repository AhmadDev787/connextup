"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  caseStudyElectric,
  enel,
  empara,
  formab,
  tim,
} from "../../components/paths.json";
export default function Relatedstudies() {
  const studies = [
    {
      id: 1,
      title: "Settore ENERGIA",
      image: caseStudyElectric,
      href: "/case-study/energia-generico",
    },
    {
      id: 2,
      title: "-59% CPL, 300 lead al giorno, 20% di conversione",
      image: enel,
      href: "/case-study/enel",
    },
    {
      id: 3,
      title: "Settore  TELEFONIA",
      image: empara,
      href: "/case-study/empara",
    },
    {
      id: 4,
      title: "Settore  TELEFONIA",
      image: formab,
      href: "/case-study/formab",
    },
    {
      id: 5,
      title: "Settore  TELEFONIA",
      image: tim,
      href: "/case-study/tim",
    },
  ];
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    //     <section className="relative mx-2 py-20">
    //       <div className="mb-10 flex items-center justify-between">
    //         <div>
    //           <h2 className="text-2xl text-cu-blue font-bold md:text-4xl">
    //             More Success Stories
    //           </h2>
    //         </div>
    //       </div>
    //       {/* scrolls */}
    //       <div className="absolute gap-3 top-[55%] left-0 z-20">
    //         <button
    //           onClick={scrollLeft}
    //           className="rounded-full text-white hover:cursor-pointer border p-3 transition hover:scale-105"
    //         >
    //           <ChevronLeft className="" size={20} />
    //         </button>
    //       </div>
    //       <div className=" absolute gap-3 top-[55%] right-0 z-20">
    //         <button
    //           onClick={scrollRight}
    //           className="rounded-full text-white hover:cursor-pointer  border p-3 transition hover:scale-105"
    //         >
    //           <ChevronRight className="" size={20} />
    //         </button>
    //       </div>
    //       {/* scrolls */}
    //       {/* <div
    //         ref={sliderRef}
    //         className="
    //           flex gap-6 overflow-x-auto
    //           scroll-smooth
    //           hide-scrollbar
    //           pb-2
    //         "
    //       > */}
    //       <div
    //         ref={sliderRef}
    //         className="
    //     flex gap-6
    //     overflow-x-auto
    //     scroll-smooth
    //     snap-x snap-mandatory
    //     hide-scrollbar
    //     pb-2
    //   "
    //       >
    //         {studies.map((study, index) => (
    //           <motion.div
    //             key={study.id}
    //             initial={{ opacity: 0, y: 60 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //             transition={{
    //               duration: 0.6,
    //               delay: index * 0.08,
    //             }}
    //             whileHover={{
    //               y: -8,
    //             }}
    //             // className="
    //             //   min-w-[300px]
    //             //   sm:min-w-[350px]
    //             //   lg:min-w-[400px]
    //             //   flex-shrink-0
    //             // "
    //             className="
    //   snap-start
    //   shrink-0
    //   w-[88%]
    //   sm:w-[70%]
    //   md:w-[calc((100%-24px)/2)]
    //   lg:w-[calc((100%-48px)/3)]
    // "
    //           >
    //             <Link href={study.href}>
    //               <article className="group relative overflow-hidden rounded-[10px] shadow-sm">
    //                 {/* <div className="relative h-[250px] overflow-hidden"> */}
    //                 <div className="relative h-[320px] lg:h-[380px] overflow-hidden rounded-2xl">
    //                   {/* <Image
    //                     src={study.image}
    //                     alt={study.title}
    //                     fill
    //                     className="
    //                       object-cover
    //                       transition-all
    //                       duration-700

    //                     "
    //                   /> */}
    //                   <Image
    //                     src={study.image}
    //                     alt={study.title}
    //                     fill
    //                     className="
    //     object-cover
    //     transition-transform
    //     duration-700
    //     group-hover:scale-110
    //   "
    //                   />
    //                 </div>
    //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    //                 {/* <div className="p-6 absolute bottom-3">
    //                   <h3
    //                     className="
    //                       mb-4
    //                       line-clamp-2
    //                       text-xl
    //                       font-semibold
    //                       transition
    //                       text-white
    //                     "
    //                   >
    //                     {study.title}
    //                   </h3>
    //                 </div> */}
    //                 <div className="absolute bottom-0 p-8">
    //                   <h3 className="text-2xl font-bold text-white leading-tight">
    //                     {study.title}
    //                   </h3>

    //                   <div className="mt-5 flex items-center gap-2 text-white">
    //                     <span>Scopri di più</span>
    //                     <ArrowRight size={18} />
    //                   </div>
    //                 </div>
    //               </article>
    //             </Link>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </section>
    <section className="py-20 container mx-auto">
      <div className="mb-10 ml-5">
        <h2 className="text-2xl md:text-4xl font-bold text-cu-blue">
          More Success Stories
        </h2>
      </div>

      <div className="relative flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="
      hidden md:flex
      h-12 w-12
      shrink-0
      items-center
      ml-5
      justify-center
      rounded-full
      border
      bg-white
      shadow-lg
      hover:scale-110
      transition
      z-20
    "
        >
          <ChevronLeft size={22} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
        flex-1
        overflow-x-auto
        scroll-smooth
        snap-x
        snap-mandatory
        hide-scrollbar
      "
        >
          <div className="flex gap-6 mx-2">
            {studies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ scale: +1.001 }}
                className="
              snap-start
              shrink-0

              basis-full
              md:basis-[calc(50%-12px)]
              lg:basis-[calc(33.333%-16px)]
            "
              >
                <Link href={study.href}>
                  <article className="group relative overflow-hidden rounded-2xl">
                    <div className="relative h-[320px] lg:h-[380px] overflow-hidden rounded-2xl">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 p-8">
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {study.title}
                      </h3>

                      <div className="mt-5 flex items-center gap-2 text-white">
                        <span>Scopri di più</span>
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="
      hidden md:flex
      h-12 w-12
      mr-5
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      bg-white
      shadow-lg
      hover:scale-110
      transition
      z-20
    "
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
