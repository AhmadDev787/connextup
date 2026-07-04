"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const videos = [
  "/homeVideos/eng1.mp4",
  "/homeVideos/enel1.mp4",
  "/homeVideos/empara1.mp4",
  "/homeVideos/formab1.mp4",
  "/homeVideos/tim1.mp4",
  "/homeVideos/eng2.mp4",
  "/homeVideos/enel2.mp4",
  "/homeVideos/empara2.mp4",
  "/homeVideos/formab2.mp4",
  "/homeVideos/tim2.mp4",
];

export default function VideoCarousel() {
  return (
    <section className="relative mx-6 md:mx-10 py-10">
      <div className="mx-auto max-w-[95vw]">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={1200}
          autoplay={{
            delay: 2500,
            // disableOnInteraction: ,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[11/16] overflow-hidden rounded-3xl">
                  <video
                    src={video}
                    // autoPlay
                    loop
                    controls={true}
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 "
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
