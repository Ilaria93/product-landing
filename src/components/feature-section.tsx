import { ShieldCheck, Rocket, Lock, Server } from "lucide-react";

const features = [
  {
    icon: <Rocket className="size-10 text-[#1299e6]" />,
    title: "Velocità e Automazione",
    desc: "Generazione istantanea di contenuti per il tuo blog o sito web.",
  },
  {
    icon: <Lock className="size-10 text-[#1299e6]" />,
    title: "Sicurezza Avanzata",
    desc: "Protezione dei tuoi dati e contenuti con le migliori tecnologie.",
  },
  {
    icon: <Server className="size-10 text-[#1299e6]" />,
    title: "Scalabilità",
    desc: "Soluzione flessibile per adattarsi a qualsiasi necessità di crescita.",
  },
  {
    icon: <ShieldCheck className="size-10 text-[#1299e6]" />,
    title: "Affidabilità",
    desc: "Articoli di alta qualità ottimizzati per SEO e coinvolgenti per i lettori.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-lg font-semibold text-[#1299e6]">
            Le Nostre Features
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Tutto ciò di cui hai bisogno per creare contenuti straordinari
          </p>
          <p className="mt-6 text-2xl text-gray-600">
            Il nostro sistema automatizzato garantisce contenuti di qualità,
            funzionalità potenti per semplificare il flusso di lavoro di
            creazione dei contenuti e ottimizzati per il web e pronti per essere
            pubblicati.
          </p>
        </div>

        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-10 bg-[#f1faff] rounded-lg shadow-lg shadow-[#00588a]/50"
              >
                <dt className="text-2xl font-semibold text-gray-900 text-left">
                  <div className="mb-4 items-center justify-center ">
                    {feature.icon}
                  </div>
                  <div className="mr-16">{feature.title}</div>
                </dt>
                <dd className="mt-2 text-xl text-gray-600 text-left mr-16">
                  {feature.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
