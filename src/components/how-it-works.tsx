import Image from "next/image";
import { motion } from "framer-motion";
import blog from "../assets/images/articles.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const steps = [
  {
    img: blog2,
    title: "Inserisci un input",
    desc: "Digita un argomento o titolo e lascia che il nostro sistema faccia il resto.",
  },
  {
    img: blog3,
    title: "Generazione automatica",
    desc: "SN24 crea un articolo completo con immagini pertinenti e testo ottimizzato.",
  },
  {
    img: blog,
    title: "Pubblica con un click",
    desc: "Modifica, personalizza e pubblica il contenuto in pochi secondi.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-blue-600">
          Semplice e Veloce
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Come Funziona?
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white p-8 rounded-3xl shadow-lg`}
            >
              <div className="relative flex flex-col items-center text-center">
                <Image
                  src={step.img}
                  alt={step.title}
                  className="rounded-xl w-full h-auto object-cover"
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
