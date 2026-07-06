// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";

// const LogoCard = ({ img }) => {
//   return (
//     <motion.div
//       whileHover={{
//         y: -6,
//         scale: 1.03,
//       }}
//       transition={{ duration: 0.25 }}
//       className="
//         flex h-[120px] min-w-[180px] items-center justify-center
//         rounded-2xl bg-[#02153d] px-8
//         shadow-[0_10px_30px_rgba(0,0,0,0.12)]
//         md:h-[130px] md:min-w-[220px]
//       "
//     >
//       {/* <span
//         className="
//           whitespace-pre-line text-center
//           text-3xl font-black tracking-tight text-white
//           md:text-4xl
//         "
//       >
//         {text}
//       </span> */}
//       <Image src={img} alt="rebel logo" height={"100"} width={"100"} />
//     </motion.div>
//   );
// };

// export default LogoCard;
// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function LogoCard({ logos, initialIndex }) {
//   const [index, setIndex] = useState(initialIndex);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % logos.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [logos?.length]);

//   return (
//     <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl bg-cu-blue shadow-sm sm:h-28 sm:w-48 md:h-32 md:w-56">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={index}
//           src={logos[index]}
//           alt="logo"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           className="max-h-[55%] max-w-[70%] object-contain"
//         />
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoCard(logo) {
  // const [index, setIndex] = useState(initialIndex);
  // useEffect(() => {
  //   let timeout;

  //   const startDelay = Math.random() * 6000;

  //   timeout = setTimeout(() => {
  //     const run = () => {
  //       const randomDelay = 2000 + Math.random() * 5000;

  //       timeout = setTimeout(() => {
  //         setIndex((prev) => {
  //           let next;
  //           do {
  //             next = Math.floor(Math.random() * logos.length);
  //           } while (next === prev);

  //           return next;
  //         });

  //         run();
  //       }, randomDelay);
  //     };

  //     run();
  //   }, startDelay);

  //   return () => clearTimeout(timeout);
  // }, [logos]);

  // useEffect(() => {
  //   let timeout;

  //   const changeLogo = () => {
  //     const randomDelay = 5000 + Math.random() * 5000; // 2s - 7s

  //     timeout = setTimeout(() => {
  //       let nextIndex;

  //       do {
  //         nextIndex = Math.floor(Math.random() * logos.length);
  //       } while (nextIndex === index);

  //       setIndex(nextIndex);
  //       changeLogo(); // next random change schedule
  //     }, randomDelay);
  //   };

  //   changeLogo();

  //   return () => clearTimeout(timeout);
  // }, [index, logos]);

  return (
    <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl bg-cu-blue shadow-sm sm:h-28 sm:w-48 md:h-32 md:w-56">
      <AnimatePresence mode="wait">
        <motion.img
          key={logo.logos}
          src={logo.logos}
          alt="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-h-[55%] max-w-[70%] object-contain"
        />
      </AnimatePresence>
    </div>
  );
}
