"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import Header from "../components/header";

const teamMembers = [
  {
    name: "GUIDO IANDORIO",
    role: "CEO",
    image: "/team/ceo.png",
  },
  {
    name: "SIMONE REDA",
    role: "Operations & Business Director",
    image: "/team/opsDir.png",
  },
  {
    name: "GIOVANNA PREZIOSI",
    role: "Operations Coordinator",
    image: "/team/opsCord.png",
  },
  {
    name: "OLGA PICARIELLO",
    role: "SENIOR ADS SPECIALIST",
    image: "/team/adsSpec.png",
  },
  {
    name: "MIRIAM BARBONE",
    role: "Social Media Manager",
    image: "/team/smMng.png",
  },
  {
    name: "CARMEN PAGANO",
    role: "Advertising Specialist",
    image: "/team/advertiseSpec.png",
  },
  {
    name: "PASQUALINA IANNACCONE",
    role: "Senior ADS Specialist",
    image: "/team/adsSpec2.png",
  },
  {
    name: "PAOLO D. COCOZZA",
    role: "Senior Graphic & Web Designer",
    image: "/team/des.png",
  },
  {
    name: "MARTINA SCALA",
    role: "Marketing Specialist",
    image: "/team/markSpec.png",
  },
  {
    name: "CARLOTTA TUCCI",
    role: "Account Manager",
    image: "/team/accMng.png",
  },
  {
    name: "VALENTINA TOZZA",
    role: "Sales Account Manager",
    image: "/team/salesAccMng.png",
  },
  {
    name: "FABIOLA DE SANTIS",
    role: "Backoffice",
    image: "/team/backoffice.png",
  },
  {
    name: "NICOLE OLCESE",
    role: "Junior Graphic Designer",
    image: "/team/juniorDes.png",
  },
  {
    name: "ELENA PARISO",
    role: "HR Generalist",
    image: "/team/salesAccMng2.png",
  },
  {
    name: "TIZIANA",
    role: "Customer Account Manager Senior",
    image: "/team/markSpec2.png",
  },
  {
    name: "VERONICA Stornajuolo",
    role: "Customer Account Manager",
    image: "/team/custAccMng.png",
  },
  {
    name: "Alessia Filadoro",
    role: "Administrative Assistant",
    image: "/team/adminAssist.png",
  },
  {
    name: "GIUSY DENTE",
    role: "Backoffice",
    image: "/team/backoffice2.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function page() {
  return (
    <main className="bg-white">
      <Header />
      <section className="relative mt-28 lg:mt-16 overflow-hidden  py-16 sm:py-20 lg:py-28">
        {/* Background Glow */}
        {/* <div className="absolute left-0 top-0 h-72 w-72 rounded-full  blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full  blur-3xl" /> */}

        <div className="mx-auto container px-5 sm:px-4 lg:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <h2 className="text-4xl font-black tracking-tight text-cu-blue sm:text-5xl lg:text-6xl">
              Il nostro team
            </h2>

            <p className="mt-4 text-base leading-relaxed text-cu-blue sm:text-lg">
              Dietro ogni progetto c’è un team di professionisti con competenze
              diverse ma un obiettivo comune: creare strategie che funzionano.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[12px] border border-white/50 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_70px_rgba(0,0,0,0.12)]"
              >
                {/* Image */}
                <div className="relative h-[420px] overflow-hidden sm:h-[500px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                  {/* Floating Icons */}
                  {/* <div className="absolute right-5 top-5 flex translate-y-4 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur transition hover:scale-110">
                    Linkedin
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur transition hover:scale-110">
                    <Mail size={18} />
                  </button>
                </div> */}

                  {/* Name */}
                  <div className="absolute m-4 bottom-0 left-0 w-full p-6">
                    <div className="translate-y-6 transition-all duration-500 group-hover:translate-y-0">
                      <div className="mb-3 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <div className="h-[2px] w-10 bg-white" />
                        <span className="text-xs uppercase tracking-[0.25em] text-white/80">
                          Team Member
                        </span>
                      </div>

                      <h3 className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-white/80">
                        {member.role}
                      </p>

                      {/* <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                      View Profile
                      <ArrowUpRight size={16} />
                    </button> */}
                    </div>
                  </div>
                </div>

                {/* Decorative Border Glow */}
                {/* <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/20" /> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
