import Image from "next/image";
import { motion } from "framer-motion";
import blog from "../assets/images/article-2.png";
import blog2 from "../assets/images/notify2.png";
import blog3 from "../assets/images/blog3.png";

const steps = [
  {
    img: blog,
    title: "Inserisci un input",
    desc: "Digita un argomento o titolo e lascia che il nostro sistema faccia il resto.",
  },
  {
    img: blog3,
    title: "Generazione automatica",
    desc: "SN24 crea un articolo completo con immagini pertinenti e testo ottimizzato.",
  },
  {
    img: blog2,
    title: "Pubblica con un click",
    desc: "Modifica, personalizza e pubblica il contenuto in pochi secondi.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-trasparent py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8">
        <p className="text-center text-base font-semibold text-[#1299e6]">
          Semplice e Veloce
        </p>
        <h2 className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Come Funziona?
        </h2>
        <p className="mt-6 text-center text-2xl text-gray-600">
          Tre semplici passaggi per trasformare la tua presenza sui social media
        </p>
        <div className="mt-10 grid gap-10 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
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
                <h3 className="mt-4 text-2xl font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-lg text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
