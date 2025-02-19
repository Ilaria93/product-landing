import { ShieldCheck, Rocket, Lock, Server } from "lucide-react";

const features = [
  {
    icon: <Rocket className="size-6 text-white" />,
    title: "Velocità e Automazione",
    desc: "Generazione istantanea di contenuti per il tuo blog o sito web.",
    bgColor: "bg-blue-600",
  },
  {
    icon: <Lock className="size-6 text-white" />,
    title: "Sicurezza Avanzata",
    desc: "Protezione dei tuoi dati e contenuti con le migliori tecnologie.",
    bgColor: "bg-green-600",
  },
  {
    icon: <Server className="size-6 text-white" />,
    title: "Scalabilità",
    desc: "Soluzione flessibile per adattarsi a qualsiasi necessità di crescita.",
    bgColor: "bg-purple-600",
  },
  {
    icon: <ShieldCheck className="size-6 text-white" />,
    title: "Affidabilità",
    desc: "Articoli di alta qualità ottimizzati per SEO e coinvolgenti per i lettori.",
    bgColor: "bg-yellow-600",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-blue-600">
            Le Nostre Features
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Tutto ciò di cui hai bisogno per creare contenuti straordinari
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Il nostro sistema automatizzato garantisce contenuti di qualità,
            ottimizzati per il web e pronti per essere pubblicati.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div
                    className={`absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg ${feature.bgColor}`}
                  >
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
