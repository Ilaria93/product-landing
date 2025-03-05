import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import squirrel from "../assets/images/scoiattolo.png";

export default function HeroSection() {
  return (
    <div className="py-60 pl-40 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-white to-[#a5daf9]">
      <div className="w-1/2 flex flex-col justify-center items-start text-left">
        <h1 className="text-8xl font-bold mb-4">
          Genera Articoli professionali in pochi secondi
        </h1>
        <p className="text-2xl text-gray-600 my-6 max-w-2xl">
          SN24 utilizza l’intelligenza artificiale per creare articoli su
          qualsiasi argomento con immagini pertinenti.
        </p>
        <div className="flex justify-center items-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button className="w-fit bg-[#1299e6] hover:bg-[#00588a] text-white p-10 rounded-lg text-3xl shadow-sm shadow-[#00588a]/90 font-semibold my-8 mr-8">
              Provalo Gratis
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button className="w-fit bg-trasparent hover:bg-[#00588a] text-[#00588a] hover:text-white p-10 rounded-lg border-4 border-[#00588a] text-3xl font-semibold">
              Guarda una Demo
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center mt-6 md:mt-0 overflow-hidden">
        <Image src={squirrel} alt="Demo Image" className="w-2/3 h-full" />
      </div>
    </div>
  );
}
