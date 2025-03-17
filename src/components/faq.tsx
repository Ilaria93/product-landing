import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Come funziona Sn24?",
    answer:
      "Sn24 utilizza un'intelligenza artificiale avanzata per generare articoli basati su un input di testo. Analizza il tema scelto e produce contenuti originali con immagini pertinenti.",
  },
  {
    question: "Quali piani tariffari sono disponibili?",
    answer:
      "Offriamo tre piani: Base (per piccoli blog), Pro (per aziende e agenzie) e Enterprise (per grandi volumi di contenuti). Ogni piano ha funzionalità specifiche per le tue esigenze.",
  },
  {
    question: "Che tipo di immagini vengono generate?",
    answer:
      "Le immagini vengono selezionate automaticamente da fonti royalty-free o generate tramite AI per essere pertinenti al contenuto dell'articolo.",
  },
  {
    question: "Posso personalizzare il tono e lo stile degli articoli?",
    answer:
      "Sì! Puoi scegliere tra vari stili di scrittura, dal formale al creativo, e ottimizzare i contenuti per SEO o per un pubblico specifico.",
  },
  {
    question: "Quali sono i vantaggi rispetto a un copywriter umano?",
    answer:
      "Sn24 garantisce velocità, costi ridotti e contenuti sempre ottimizzati per SEO. È ideale per chi ha bisogno di un flusso costante di articoli di qualità.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Domande Frequenti
        </h2>
        <p className="text-2xl text-gray-600 my-8">
          Qui trovi le risposte alle domande più comuni su Sn24.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-[#1299e6]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-left text-lg text-gray-600 mt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
