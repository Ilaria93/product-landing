export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-[#b7e5ff] to-[#00588a] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Inizia oggi con Sn24
        </h1>
        <p className="my-16 text-2xl text-gray-200">
          Genera articoli originali e pubblicali in pochi secondi. Sfrutta la
          potenza dell'intelligenza artificiale per creare contenuti di qualità
          senza sforzo.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-6 text-2xl font-semibold text-[#00588a] shadow-sm hover:text-white hover:bg-[#00588a] transition"
          >
            Prova Gratis
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border-4 border-[#00588a] px-10 py-6 text-2xl font-semibold text-white hover:bg-[#00588a] transition"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </section>
  );
}
