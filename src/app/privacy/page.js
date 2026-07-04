"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Mail, Cookie } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Introduction",
    text: "We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose and safeguard your data when you visit our website.",
  },
  {
    icon: Database,
    title: "Information We Collect",
    text: "We may collect personal information such as your name, email address, phone number, booking details, payment information and any information you voluntarily provide through contact forms.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    text: "Your information is used to process reservations, improve our services, communicate with you, comply with legal obligations and enhance your experience on our website.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    text: "Our website may use cookies and similar technologies to improve functionality, analyze traffic and personalize your browsing experience. You can manage cookies through your browser settings.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    text: "We implement appropriate technical and organizational security measures to protect your information against unauthorized access, disclosure, alteration or destruction.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    text: "If you have any questions regarding this Privacy Policy or your personal data, please contact us through our official contact page or email.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

export default function page() {
  return (
    <main className="bg-white text-cu-blue">
      {/* Hero */}

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              Legal Information
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-8 text-cu-blue">
              Your privacy matters to us. This page explains what information we
              collect, why we collect it, and how we keep it secure.
            </p>

            <p className="mt-6 text-sm text-cu-blue">Last Updated: June 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section, i) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-3xl border border-black/10 bg-black/[0.03] p-8 backdrop-blur-sm transition "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-cu-green transition group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>

                <p className="leading-8 text-cu-blue">{section.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Extra */}

      <section className="border-y border-black/10 bg-black/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold">Your Rights</h2>

            <p className="mt-6 leading-8 text-cu-blue">
              Depending on your location, you may have the right to access,
              update, correct or delete your personal information. You may also
              request a copy of the information we hold or object to certain
              types of processing.
            </p>

            <ul className="mt-8 space-y-4 text-cu-blue">
              <li>• Access your personal information</li>
              <li>• Request correction of inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Withdraw consent at any time</li>
              <li>• Request data portability where applicable</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-full bg-emerald-500/10 p-5 text-cu-green">
            <Shield size={38} />
          </div>

          <h2 className="mt-8 text-3xl font-bold">We Value Your Privacy</h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-cu-blue">
            We continuously review our privacy practices to ensure your
            information remains protected and handled responsibly.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
