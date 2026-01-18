import React from 'react';
import Section from './Section';
import { ServiceItem } from '../types';
import { Check } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: 'skintest',
    title: 'Skin Test & Skincare',
    promise: 'Un’analisi approfondita per comprendere il linguaggio unico della tua pelle.',
    includes: ['Analisi tipologia cutanea', 'Revisione beauty routine attuale', 'Suggerimenti personalizzati'],
    duration: '60 min',
  },
  {
    id: 'aromaterapia',
    title: 'Aromaterapia',
    promise: "Il potere degli oli essenziali, l'anima delle piante, per ritrovare equilibrio emotivo e fisico.",
    includes: ['Test olfattivo guidato', 'Informazione sugli oli essenziali', 'Possibilità di utilizzo quotidiano'],
    duration: '60 min',
  },
  {
    id: 'piante',
    title: 'Benessere con le Piante',
    promise: "Attraverso l'assorbimento cutaneo, i principi benefici delle piante portano giovamento al corpo.",
    includes: ['Sinergie fitocosmetiche', 'Tecniche di utilizzo', 'Rituali di bellezza botanica'],
    duration: '60 min',
  },
];

const Services: React.FC = () => {
  return (
    <Section id="servizi" bg="blue">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-4">I Percorsi Gratuiti di Bellezza</h2>
        <p className="text-slate-600 font-sans text-lg">
          Ogni viso ha una story, ogni corpo un vissuto incarnato, ogni persona un'esigenza unica. Scegli il percorso gratuito che risuona di più con il tuo sentire attuale.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col relative overflow-hidden group">
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-regal-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <h3 className="text-2xl font-serif text-slate-800 mb-3">{service.title}</h3>
            <p className="text-slate-600 italic font-serif text-base mb-6 min-h-[40px]">{service.promise}</p>
            
            <div className="flex-grow space-y-4 mb-8">
              <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold">Cosa Include</p>
              <ul className="space-y-3">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-base">
                    <Check size={18} className="text-regal-blue-dark mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-auto">
              <div className="flex justify-center items-center mb-6 text-base text-slate-500 font-semibold">
                <span>Durata: {service.duration}</span>
              </div>
              <a 
                href="#contatti"
                className="block w-full text-center py-3 border border-slate-800 text-slate-800 font-serif rounded-sm hover:bg-slate-800 hover:text-white transition-all uppercase tracking-wider text-base"
              >
                Prenota
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;