"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function LuxuryContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      nome: "",
      cognome: "",
      telefono: "",
      email: "",
      azienda: "",
      obiettivo: "",
      fatturato: "",
      privacy: false,
    },
  });

  const [message, setMessage] = useState("");
  // const onSubmit = async (formData) => {
  //   if (!formData.privacy) {
  //     setMessage("Please accept the privacy policy.");
  //     return;
  //   }
  //   console.log("formdata", formData);

  //   setMessage("");
  //   const fd = new FormData();

  //   Object.entries(formData).forEach(([key, value]) => {
  //     fd.append(key, value);
  //   });

  //   try {
  //     const res = await fetch("/contact.php", {
  //       method: "POST",
  //       body: fd,
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       setMessage("Message sent successfully.");
  //       reset();
  //     } else {
  //       setMessage(data.message || "Something went wrong.");
  //     }
  //   } catch (err) {
  //     setMessage("Server Error");
  //   }
  // };
  const onSubmit = async (formData) => {
    if (!formData.privacy) {
      setMessage("Please accept the privacy policy.");
      return;
    }

    setMessage("");

    const fd = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value);
    });

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();

      if (data.success) {
        setMessage(data.message);
        reset();
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server Error");
    }
  };
  return (
    <main className="relative mb-6 pb-4">
      {/* White 90% */}
      {/* <div className="absolute inset-0 h-[90%] bg-cu-gray" /> */}

      {/* Blue 10% */}
      <div className="absolute bottom-0 -z-10 left-0 h-[15%] w-full bg-cu-blue" />
      <section
        id="contact"
        className="w-full z-20 bg-cu-gray rounded-[30px] md:rounded-[70px] mb-12 overflow-hidden"
      >
        {/* Background */}
        {/* <div className="absolute inset-0">
        <div className="h-[70%] -z-50  bg-cu-blue" />
        <div className="h-[28%] bg-white" />
      </div> */}

        {/* CONTACT SECTION */}
        <div className="px-4 sm:px-6  py-12 lg:px-10 pt-10 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto max-w-7xl  px-5 sm:px-10  md:px-16    overflow-hidden"
          >
            {/* background glow
          <div className="absolute -top-40 -right-40 h-[350px] w-[350px] rounded-full bg-[#0a1d49]/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-white/40 blur-[120px]" /> */}

            <div className="relative z-10">
              {/* Heading */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                className="max-w-2xl"
              >
                <h2 className="text-2xl  uppercase tracking-tight text-[#081735] sm:text-3xl font-black md:text-4xl">
                  Parliamo di Performance
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-[#3d4b66] sm:text-base">
                  Raccontaci il tuo progetto. Valutiamo insieme se e come
                  possiamo supportarti.
                </p>
              </motion.div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#081735]">
                    Nome
                  </label>
                  <input
                    type="text"
                    {...register("nome", {
                      required: "Nome è obbligatorio",
                    })}
                    placeholder="Inserisci Nome"
                    className="h-14 w-full rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#7a8499] focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                  />
                  {errors.nome && (
                    <p className="mt-1 ml-2 text-xs text-red-500">
                      {errors.nome.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#081735]">
                    Cognome
                  </label>
                  <input
                    type="text"
                    placeholder="Inserisci Cognome"
                    {...register("cognome", {
                      required: "Cognome è obbligatorio",
                    })}
                    className="h-14 w-full rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#7a8499] focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                  />
                  {errors.cognome && (
                    <p className="mt-1 ml-2 text-xs text-red-500">
                      {errors.cognome.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#081735]">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    {...register("telefono", {
                      required: "Telefono è obbligatorio",
                    })}
                    placeholder="Inserisci Telefono"
                    className="h-14 w-full rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#7a8499] focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                  />
                  {errors.telefono && (
                    <p className="mt-1 ml-2 text-xs text-red-500">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#081735]">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email è obbligatorio",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email non valida",
                      },
                    })}
                    placeholder="Inserisci Email"
                    className="h-14 w-full rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#7a8499] focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                  />
                  {errors.email && (
                    <p className="mt-1 ml-2 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#081735]">
                    Azienda
                  </label>
                  <input
                    type="text"
                    {...register("azienda")}
                    placeholder="Inserisci Azienda"
                    className="h-14 w-full rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#7a8499] focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                  />
                </div>

                {/* Selects */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={8}
                >
                  <label className="mb-2 block text-sm font-semibold text-[#081735]">
                    Obiettivo principale
                  </label>

                  <div className="relative">
                    <select
                      className="h-14 w-full appearance-none rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-[#081735] outline-none backdrop-blur-md transition-all duration-300 focus:border-[#0a1d49] focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                      {...register("obiettivo", {
                        required: "Obiettivo è obbligatorio",
                      })}
                    >
                      <option>Lead, Vendite, Scalabilità...</option>
                      <option>Brand Awareness</option>
                      <option>Marketing</option>
                      <option>Automation</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cu-blue" />
                  </div>
                  {errors.obiettivo && (
                    <p className="mt-1 ml-2 text-xs text-red-500">
                      {errors.obiettivo.message}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={9}
                >
                  <label className="mb-2 block text-sm font-semibold text-cu-blue">
                    Fatturato annuo aziendale
                  </label>

                  <div className="relative">
                    <select
                      className="h-14 w-full appearance-none rounded-2xl border border-[#0a1d49]/20 bg-white/70 px-5 text-sm text-cu-blue outline-none backdrop-blur-md transition-all duration-300 focus:border-cu-blue focus:bg-white focus:shadow-[0_0_30px_rgba(10,29,73,0.12)]"
                      {...register("fatturato", {
                        required: "Fatturato è obbligatorio",
                      })}
                    >
                      <option>Seleziona</option>
                      <option>10K - 50K</option>
                      <option>50K - 100K</option>
                      <option>100K+</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cu-blue" />
                  </div>
                  {errors.fatturato && (
                    <p className="mt-1 ml-2 text-xs text-red-500">
                      {errors.fatturato.message}
                    </p>
                  )}
                </motion.div>

                {/* checkbox */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={10}
                  className="md:col-span-2 mt-2  gap-3"
                >
                  <div className="flex items-center gap-3 ">
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-cu-blue"
                      {...register("privacy", {
                        required:
                          "Si prega di accettare l'informativa sulla privacy.",
                      })}
                    />

                    <p className="text-xs leading-relaxed text-cu-blue">
                      Acconsento al trattamento dei miei dati personali per
                      essere ricontattato in relazione alla mia richiesta
                      secondo quanto indicato nella Privacy Policy.
                    </p>
                  </div>
                  {errors.privacy && (
                    <p className="mt-1 ml-2 text-xs text-red-500">
                      {errors.privacy.message}
                    </p>
                  )}
                </motion.div>

                {/* button */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={11}
                  className="md:col-span-2"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.015,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="group relative mb-10 mt-3 h-14 w-full overflow-hidden rounded-2xl bg-cu-blue text-sm font-bold uppercase tracking-[0.2em] text-white hover:cursor-pointer transition-all duration-500"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Iniziamo a Parlare"}
                    </span>

                    <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                    <span className="absolute inset-0 z-20 flex  items-center justify-center text-cu-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Iniziamo a Parlare
                    </span>
                  </motion.button>
                  {message && (
                    <p className="mt-3 text-center font-bold text-base text-green-600">
                      {message}
                    </p>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
      </section>
    </main>
  );
}
