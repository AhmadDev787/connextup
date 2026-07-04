"use client";

import { motion } from "framer-motion";
// import CountUp from "react-countup";

export default function Results() {
  return (
    <section className="mt-16 pb-16 md:mt-28 md:pb-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-12 items-start px-10 lg:grid lg:gap-12 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 font-bold text-4xl sm:font-medium text-cu-blue">
              I risultati
            </h2>

            <p className="mt-3 text-cu-blue font-bold">
              Canali: Meta Ads • TikTok Ads
            </p>
          </div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            className="space-y-5"
          >
            <div>
              <div className="text-4xl font-bold text-cu-blue">
                9.000
                {/* <CountUp end={270} duration={3} /> */}
              </div>

              <p className=" text-cu-blue">Lead Generati in un mese</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cu-blue">da €22 a €9</div>

              <p className=" text-cu-blue">CPL </p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
          >
            <div className="text-4xl font-bold text-cu-blue">16%</div>

            <p className="mt-2 text-slate-600">Tasso di conversione da form</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
