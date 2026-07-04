"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import {
  caseStudyElectric,
  caseStudytelefonia,
  enel,
  formab,
  empara,
  tim,
  enelLogo,
  formabLogo,
  emparaLogo,
  timLogo,
} from "../../components/paths.json";
export default function Grid() {
  return (
    <section className="bg-[#f2f2f2] mb-10 py-12">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          <Card
            image={caseStudyElectric}
            subtitle="Operatore energetico in crescita con +37% di vendite"
            title="Settore ENERGIA"
            link="/case-study/energia-generico"
          />

          <Card
            image={enel}
            logo={true}
            logoImg={enelLogo}
            title="-59% CPL"
            subtitle="300 lead al giorno, 
20% di conversione"
            link="/case-study/enel"
          />
          <Card
            image={caseStudytelefonia}
            title="Settore  TELEFONIA"
            subtitle="Da lead a cliente: +37% vendite "
            link=""
          />
          <Card
            image={formab}
            logo={true}
            logoImg={formabLogo}
            title=""
            subtitle=""
            link="/case-study/formab"
          />
          <Card
            image={empara}
            logo={true}
            logoImg={emparaLogo}
            title=""
            subtitle=""
            link="/case-study/empara"
          />
          <Card
            image={tim}
            logo={true}
            logoImg={timLogo}
            title=""
            subtitle=""
            link="/case-study/tim"
          />
        </motion.div>
      </div>
    </section>
  );
}
