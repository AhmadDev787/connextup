"use client";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="relative mt-[-50px] bg-cu-blue px-5 pb-12 pt-24 sm:px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <Image
              src={"/logoWhite.png"}
              height={200}
              width={200}
              alt="connextup's logo"
              className="h-40 w-40"
            />
          </motion.div>

          {/* LINKS */}
          {[
            {
              title: "HOME",
              items: [
                { name: "Chi siamo", link: "/" },
                { name: "Servizi", link: "/servizi" },
                { name: "Team", link: "/team" },
                { name: "Case study", link: "/case-study" },
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
            >
              <h3 className="text-base font-bold tracking-[0.2em] text-white">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item.link}
                    className="cursor-pointer text-sm text-[#aab3c8] transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          {[
            {
              title: "SERVIZI",
              items: [
                "Performance Advertising",
                "Funnel & Conversion Design",
                "Marketing Automation",
                "CRM & Sales Integration",
                "Tracking & Analytics",
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
            >
              <h3 className="text-base font-bold tracking-[0.2em] text-white">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer text-sm text-[#aab3c8] transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <Link href={"/servizi"}>{item}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            <h3 className="text-base font-bold tracking-[0.2em] text-white">
              CONTATTI
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white">
              <a href={"mailto:info@connextup.it"}>info@connextup.it</a>
              <br />
              <a href="tel:+390825459127">+39 0825 459127</a>

              <div className="pt-4">
                <h4 className="mb-2 font-semibold text-white">ORARI</h4>

                <p>Lun - Ven</p>
                <p>09:00 - 18:00</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex flex-col text-white items-center justify-between gap-6 border-t border-white/10 pt-8 text-center"
        >
          <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-white">
            © 2026 Connext SRL. P.IVA 10997890966 <br />
            Via Bagutta 13, 20121 Milano / Corso Vittorio Emanuele 155, 83100
            Avellino/ Tirana - Kavaja St.
          </p>
          <p className="text-xs sm:text-sm">
            <Link href={"/privacy"}>Privacy</Link> |{" "}
            <Link href={"/privacy"}>Cookie</Link>
          </p>

          <div className="flex items-center gap-4">
            {[
              {
                img: "/linkedin.png",
                link: "https://www.linkedin.com/company/connext-srl/",
              },
              {
                img: "/facebook.png",
                link: "https://www.facebook.com/share/1DU7oSiBM5/?mibextid=wwXIfr",
              },
              {
                img: "/instagram.png",
                link: "https://www.instagram.com/connext_up?igsh=anRwMHV5Mnlra3ox",
              },
              {
                img: "/tiktok.png",
                link: "https://www.tiktok.com/@connextup?_r=1&_t=ZN-97jIJu3CDcV",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                {/* <Icon size={18} /> */}
                <Link href={item.link}>
                  <Image
                    src={item.img}
                    className="h-5 w-5"
                    height={50}
                    width={50}
                    alt="social logos"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
