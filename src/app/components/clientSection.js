// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import LogoCard from "./logoCard";
// import { useState, useEffect } from "react";

// const ALL_LOGOS = [
//   "/clientLogos/1.png",
//   "/clientLogos/2.png",
//   "/clientLogos/3.png",
//   "/clientLogos/4.png",
//   "/clientLogos/5.png",
//   "/clientLogos/6.png",
//   "/clientLogos/7.png",
//   "/clientLogos/8.png",
//   "/clientLogos/9.png",
//   "/clientLogos/10.png",
//   "/clientLogos/11.png",
//   "/clientLogos/12.png",
//   "/clientLogos/13.png",
//   "/clientLogos/14.png",
//   "/clientLogos/15.png",
//   "/clientLogos/16.png",
//   "/clientLogos/17.png",
//   "/clientLogos/18.png",
//   "/clientLogos/19.png",
//   "/clientLogos/20.png",
//   "/clientLogos/21.png",
//   "/clientLogos/22.png",
//   "/clientLogos/23.png",
// ];

// export default function ClientsSection() {
//   const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

//   const shuffled = shuffle(ALL_LOGOS);

//   const [topRow, setTopRow] = useState(shuffled.slice(0, 6));

//   const [bottomRow, setBottomRow] = useState(shuffled.slice(6, 12));
//   // const updateRow = (row) => {
//   //   const next = [...row];

//   //   const randomCard = Math.floor(Math.random() * next.length);

//   //   const available = ALL_LOGOS.filter((logo) => !next.includes(logo));

//   //   if (!available.length) return row;

//   //   next[randomCard] = available[Math.floor(Math.random() * available.length)];

//   //   return next;
//   // };
//   const updateRow = (currentRow, otherRow) => {
//     const next = [...currentRow];

//     const randomCard = Math.floor(Math.random() * next.length);

//     const usedLogos = [...next, ...otherRow];

//     const available = ALL_LOGOS.filter((logo) => !usedLogos.includes(logo));

//     if (!available.length) return currentRow;

//     next[randomCard] = available[Math.floor(Math.random() * available.length)];

//     return next;
//   };
//   useEffect(() => {
//     let timeout;

//     const run = () => {
//       timeout = setTimeout(
//         () => {
//           setTopRow((prev) => updateRow(prev, bottomRow));

//           run();
//         },
//         4000 + Math.random() * 4000,
//       );
//     };

//     run();

//     return () => clearTimeout(timeout);
//   }, []);
//   useEffect(() => {
//     let timeout;

//     const run = () => {
//       timeout = setTimeout(
//         () => {
//           setBottomRow((prev) => updateRow(prev, topRow));

//           run();
//         },
//         3000 + Math.random() * 2000,
//       );
//     };

//     run();

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <section
//       className="relative overflow-hidden  py-16 md:py-24"
//       aria-label="Clients and Services"
//     >
//       {/* TOP LOGO MARQUEE */}
//       <div className="relative mb-20 overflow-hidden">
//         {/* blur sides */}
//         <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 " />
//         <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 " />

//         {/* ROW 1 */}
//         <motion.div
//           initial={{ x: 0 }}
//           animate={{ x: "-50%" }}
//           transition={{
//             repeat: Infinity,
//             duration: 22,
//             ease: "linear",
//           }}
//           className="mb-4 flex w-max gap-4"
//         >
//           {[...topRow].map((logo, i) => {
//             return (
//               <LogoCard
//                 key={i}
//                 logos={logo}
//                 // initialIndex={i % topLogos.length}
//               />
//             );
//           })}
//         </motion.div>

//         {/* ROW 2 */}
//         <motion.div
//           initial={{ x: "-50%" }}
//           animate={{ x: 0 }}
//           transition={{
//             repeat: Infinity,
//             duration: 26,
//             ease: "linear",
//           }}
//           className="flex w-max gap-4"
//         >
//           {[...bottomRow].map((logo, i) => (
//             <LogoCard
//               key={i}
//               logos={logo}
//               // initialIndex={i % bottomLogos.length}
//             />
//           ))}
//         </motion.div>
//       </div>

//       {/* CONTENT */}
//     </section>
//   );
// }
// ++++++++++++++++++++++++++
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LogoCard from "../components/logoCard";

const ALL_LOGOS = [
  "/clientLogos/1.png",
  "/clientLogos/2.png",
  "/clientLogos/3.png",
  "/clientLogos/4.png",
  "/clientLogos/5.png",
  "/clientLogos/6.png",
  "/clientLogos/7.png",
  "/clientLogos/8.png",
  "/clientLogos/9.png",
  "/clientLogos/10.png",
  "/clientLogos/11.png",
  "/clientLogos/12.png",
  "/clientLogos/13.png",
  "/clientLogos/14.png",
  "/clientLogos/15.png",
  "/clientLogos/16.png",
  "/clientLogos/17.png",
  "/clientLogos/18.png",
  "/clientLogos/19.png",
  "/clientLogos/20.png",
  "/clientLogos/21.png",
  "/clientLogos/22.png",
  "/clientLogos/23.png",
];

export default function ClientsSection() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  // 1. Ek hi state object use kiya hy taake stale closures ka issue na aye.
  // Hum 10 logos top mein aur 10 bottom mein rakh rahy hain (Total 20).
  // Baqi 3 logos reserve pool mein rahen ge dynamically swap hone k liye.
  const [logos, setLogos] = useState(() => {
    const shuffled = shuffle(ALL_LOGOS);
    return {
      top: shuffled.slice(0, 10),
      bottom: shuffled.slice(10, 20),
    };
  });

  // Top Row Logic
  useEffect(() => {
    let timeout;
    const runTop = () => {
      timeout = setTimeout(
        () => {
          setLogos((prev) => {
            const nextTop = [...prev.top];
            const randomIdx = Math.floor(Math.random() * nextTop.length);

            // Get ALL currently visible logos across both rows
            const usedLogos = [...nextTop, ...prev.bottom];

            // Find logos that are strictly NOT in the viewport right now
            const available = ALL_LOGOS.filter(
              (logo) => !usedLogos.includes(logo),
            );

            if (available.length > 0) {
              nextTop[randomIdx] =
                available[Math.floor(Math.random() * available.length)];
            }

            return { ...prev, top: nextTop };
          });
          runTop();
        },
        4000 + Math.random() * 4000,
      );
    };
    runTop();
    return () => clearTimeout(timeout);
  }, []); // Empty dependency theek hy kyun k state update functional (prev) hy

  // Bottom Row Logic
  useEffect(() => {
    let timeout;
    const runBottom = () => {
      timeout = setTimeout(
        () => {
          setLogos((prev) => {
            const nextBottom = [...prev.bottom];
            const randomIdx = Math.floor(Math.random() * nextBottom.length);

            const usedLogos = [...prev.top, ...nextBottom];
            const available = ALL_LOGOS.filter(
              (logo) => !usedLogos.includes(logo),
            );

            if (available.length > 0) {
              nextBottom[randomIdx] =
                available[Math.floor(Math.random() * available.length)];
            }

            return { ...prev, bottom: nextBottom };
          });
          runBottom();
        },
        3000 + Math.random() * 2000,
      );
    };
    runBottom();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      aria-label="Clients and Services"
    >
      <div className="relative mb-20 overflow-hidden">
        {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" /> */}

        {/* ROW 1 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="mb-4 flex w-max gap-4"
        >
          {/* Seamless loop k liye array ko do dafa spread karna zaruri hy */}
          {[...logos.top, ...logos.top].map((logo, i) => (
            <LogoCard key={`top-${i}`} logos={logo} />
          ))}
        </motion.div>

        {/* ROW 2 */}
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex w-max gap-4"
        >
          {[...logos.bottom, ...logos.bottom].map((logo, i) => (
            <LogoCard key={`bottom-${i}`} logos={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
