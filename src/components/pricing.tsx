"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Generazione articoli limitata",
      "Supporto base",
      "Accesso alle immagini standard",
    ],
  },
  {
    name: "Pro",
    price: "$19.99/mese",
    features: [
      "Generazione articoli illimitata",
      "Supporto prioritario",
      "Accesso a immagini premium",
    ],
  },
  {
    name: "Enterprise",
    price: "Personalizzato",
    features: ["Soluzione su misura", "Integrazioni API", "Supporto dedicato"],
  },
];

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-5 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-8">Piani Tariffari</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-xl font-bold text-[#1299e6] mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-700 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <Button className="bg-[#1299e6] text-white px-6 py-2 rounded-full">
                Seleziona
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
