import React from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  { name: 'Giulia R.', text: 'Valentina ha trasformato la mia pelle, ma soprattutto il mio approccio allo specchio. Mai più senza la sua routine.', role: 'Cliente Skin Test' },
  { name: 'Elena M.', text: 'Cercavo un rimedio naturale per lo stress. L’aromaterapia consigliata è stata una rivelazione delicata e potente.', role: 'Cliente Aromaterapia' },
  { name: 'Sofia L.', text: 'Gentilezza e competenza rare. Non ti vende prodotti, ti insegna a scegliere il meglio per te.', role: 'Cliente Skincare' },
  { name: 'Marta B.', text: 'Ho imparato a leggere l’INCI e a capire cosa serve davvero alla mia pelle. Grazie di cuore.', role: 'Cliente Workshop' },
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonianze" bg="white">
      <div className="text-center mb-16">
        <span className="font-serif italic text-slate-500 text-xl">"Cara Lettrice, le voci di chi ha scelto di fiorire..."</span>
        <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mt-2">Dicono di Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-regal-cream p-8 rounded-sm relative">
            <Quote className="absolute top-6 left-6 text-regal-gold/20" size={48} />
            <div className="relative z-10">
              <p className="font-serif text-slate-700 text-xl leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-slate-800 font-sans tracking-wide text-lg">{t.name}</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;