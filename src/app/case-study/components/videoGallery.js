// "use client";

// import { motion } from "framer-motion";

// const videos = [
//   "/homeVideos/enel1.mp4",
//   "/homeVideos/enel2.mp4",
//   "/homeVideos/enel3.mp4",
//   "/homeVideos/eng1.mp4",
// ];

// export default function Gallery() {
//   return (
//     <section className=" pb-10 ">
//       <div className="mx-auto  px-5">
//         <div className="grid gap-6 md:grid-cols-3">
//           {videos.map((video, index) => (
//             <motion.div
//               key={video}
//               initial={{ opacity: 0, scale: 0.92 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.2,
//               }}
//               className="group relative overflow-hidden rounded-3xl"
//             >
//               <div className="relative aspect-[11/16]">
//                 <video
//                   src={video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ++++++++++++
"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Gallery({ videos }) {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [autoplay.current],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const videos = emblaApi
      .slideNodes()
      .map((slide) => slide.querySelector("video"))
      .filter(Boolean);

    videos.forEach((video) => {
      const handlePlay = () => {
        autoplay.current.stop();
      };

      const handlePause = () => {
        autoplay.current.reset();
      };

      const handleEnded = () => {
        autoplay.current.reset();
      };

      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("ended", handleEnded);

      video._cleanup = () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("ended", handleEnded);
      };
    });

    return () => {
      videos.forEach((video) => video._cleanup?.());
    };
  }, [emblaApi]);

  return (
    <section className="pb-10">
      <div className="relative mx-auto px-5">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition hover:scale-110 md:flex"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition hover:scale-110 md:flex"
        >
          <ChevronRight size={22} />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {videos.map((video, index) => (
              <div
                key={video}
                className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[11/16]">
                    <video
                      src={video}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full cursor-pointer object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
