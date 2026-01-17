import React, { useState } from 'react';
import Section from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { question: 'Come funziona lo skin test?', answer: 'Lo skin test avviene tramite un’analisi visiva e un colloquio approfondito svolto di persona per determinare le necessità reali della tua pelle.' },
  { question: 'Dove si svolgono le consulenze?', answer: 'Le consulenze si svolgono esclusivamente di persona nelle zone di Padova e Vicenza. Questo mi permette di osservare al meglio la tua pelle e offrirti un supporto davvero personalizzato.' },
  { question: 'Quanto tempo serve per vedere risultati?', answer: 'La pelle ha un ciclo di rinnovamento di circa 28 giorni. Con la costanza, i primi benefici luminosi si notano già dopo 2-3 settimane.' },
  { question: 'L’aromaterapia è adatta a tutte?', answer: 'Sì, ma con precauzioni. Personalizzo ogni consiglio tenendo conto di gravidanze, allergie o sensibilità specifiche durante l\'incontro.' },
  { question: 'Posso acquistare i prodotti consigliati tramite te?', answer: 'Certamente. Al termine della consulenza riceverai una scheda e potrai ordinare i prodotti, che provvederò a consegnarti personalmente al tuo domicilio nelle zone di Padova e Vicenza.' },
  { question: 'Come si prenota e come avviene il follow-up?', answer: 'Puoi prenotare compilando il modulo qui sotto. Il follow-up è un breve check gratuito dopo 30 giorni per valutare i progressi insieme.' },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" bg="blue">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-10 text-center">Domande Frequenti</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-sm border border-slate-100 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-xl text-slate-800">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 font-sans text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;