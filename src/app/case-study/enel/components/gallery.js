"use client";

import { motion } from "framer-motion";

// const videos = [
//   "/homeVideos/enel1.mp4",
//   "/homeVideos/enel2.mp4",
//   "/homeVideos/enel3.mp4",
// ];

export default function Gallery() {
  return (
    <section className=" pb-10 ">
      <div className="mx-auto  px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={video}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[11/16]">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
