import React from 'react';
import Section from './Section';
import { MapPin } from 'lucide-react';

const categories = [
  { name: 'Viso', img: 'https://i.postimg.cc/QCdQsXgW/6.png' },
  { name: 'Corpo', img: 'https://i.postimg.cc/6qbdpDz7/7.png' },
  { name: 'Capelli', img: 'https://i.postimg.cc/VvZjk34X/8.png' },
  { name: 'Oli essenziali', img: 'https://i.postimg.cc/2ySQmzdz/4.png' },
];

const Products: React.FC = () => {
  return (
    <Section id="prodotti" bg="cream">
      {/* Bridge Sentence */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <p className="font-serif italic text-xl md:text-2xl text-slate-700 leading-relaxed border-b border-regal-gold/20 pb-8">
          “Al termine degli incontri, chi lo desidera può acquistare i prodotti Gialean tramite la mia attività di incaricata alla vendita.”
        </p>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-4">La Selezione Gialean</h2>
        <p className="text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed text-lg">
          Collaboro come incaricata alla vendita per l’azienda italiana <strong>Gialean</strong>, distribuendo prodotti per la cura cosmetica quotidiana. Li ho scelti dopo un percorso personale di riequilibrio della pelle e oggi li propongo a chi cerca formule botaniche essenziali, rispettose e dal valore equo, per un rituale di bellezza naturale ogni giorno.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {categories.map((cat) => (
          <div key={cat.name} className="group relative cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-sm bg-slate-200">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
               <h3 className="text-white font-serif text-xl md:text-2xl tracking-wider border-b border-white/0 group-hover:border-white/100 transition-all pb-1 text-center px-4">
                 {cat.name}
               </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        {/* Delivery Info */}
        <div className="bg-white p-8 rounded-sm border border-slate-100 shadow-sm flex items-start gap-6">
          <div className="text-regal-gold flex-shrink-0">
            <MapPin size={32} />
          </div>
          <div>
            <h4 className="font-serif text-2xl text-slate-800 mb-2">Consegna a domicilio</h4>
            <p className="text-lg text-slate-600 font-sans">
              Effettuo personalmente la consegna dei prodotti Gialean nelle zone di <strong>Padova e Vicenza</strong>, garantendo cura e attenzione per ogni ordine.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 p-6 rounded-sm border border-slate-200 text-center max-w-3xl mx-auto">
        <p className="text-sm md:text-base text-slate-500 font-sans">
          <strong>Nota Bene:</strong> I prodotti Gialean sono cosmetici naturali per uso esterno. Le indicazioni fornite sono suggerimenti di bellezza e benessere, non prescrizioni mediche.
        </p>
      </div>
    </Section>
  );
};

export default Products;