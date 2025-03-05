"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Generazione limitata a 30 articoli",
      "Supporto base",
      "Accesso alle immagini standard",
    ],
  },
  {
    name: "Pro",
    price: "$9.99/mese",
    features: [
      "Generazione limitata a 120 articoli",
      "Supporto prioritario",
      "Accesso a immagini premium",
    ],
  },
  {
    name: "Enterprise",
    price: "Personalizzato a partire da $29.99/mese",
    features: [
      "Soluzione su misura a partire da 150 articoli",
      "Integrazioni API",
      "Supporto dedicato",
    ],
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string>("Pro");

  const handleSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-5 py-20 text-center bg-white"
    >
      <h2 className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Scegli il tuo piano
      </h2>
      <p className="mt-6 mb-16 text-center text-2xl text-gray-600">
        Inizia gratuitamente, aggiorna man mano che cresci
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card
              className={`bg-white p-10 text-left rounded-3xl shadow-lg shadow-[#00588a]/50 h-full ${
                selectedPlan === plan.name ? "border-4 border-[#1299e6]" : ""
              }`}
            >
              <h3 className="text-4xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold text-[#1299e6] mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-700 mb-6 text-xl">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <Check className="h-7 w-7 text-[#1299e6] mr-4" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full text-2xl font-semibold px-6 py-6 rounded-lg  hover:bg-[#00588a] hover:text-white hover:border-[#00588a] ${
                  selectedPlan === plan.name
                    ? "bg-trasparent border-4 border-[#1299e6] bg-[#1299e6] text-white"
                    : "border-[#1299e6] bg-trasparent border-4 border-[#1299e6] text-[#1299e6]"
                }`}
                onClick={() => handleSelect(plan.name)}
              >
                Seleziona
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
