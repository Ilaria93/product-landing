import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import squirrel from "../assets/images/scoiattolo.png";

export default function HeroSection() {
  return (
    <div className="text-center py-40 pl-40 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-white to-[#a5daf9]">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">
          Genera Articoli Professionali in Pochi Secondi
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          SN24 utilizza l’intelligenza artificiale per creare articoli su
          qualsiasi argomento con immagini pertinenti.
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="w-fit bg-[#1299e6] hover:bg-[#00588a] text-white p-10 rounded-lg text-3xl shadow-sm shadow-[#00588a]/90 font-semibold">
            Provalo Gratis
          </Button>
        </motion.div>
      </div>
      <div className="w-1/2 flex justify-end items-center mb-6 md:mb-0 overflow-hidden">
        <Image src={squirrel} alt="Demo Image" className="w-2/3 h-full" />
      </div>
    </div>
  );
}
