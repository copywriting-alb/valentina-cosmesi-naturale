import React from 'react';
import Section from './Section';
import { Truck, MapPin } from 'lucide-react';

const categories = [
  { name: 'Viso', img: 'https://picsum.photos/id/106/400/400' },
  { name: 'Corpo', img: 'https://picsum.photos/id/119/400/400' },
  { name: 'Capelli', img: 'https://picsum.photos/id/250/400/400' },
  { name: 'Oli essenziali', img: 'https://picsum.photos/id/312/400/400' },
];

const Products: React.FC = () => {
  return (
    <Section id="prodotti" bg="cream">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-4">La Selezione Gialean</h2>
        <p className="text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed text-lg">
          Per la tua cura quotidiana ho scelto l'eccellenza di <strong>Gialean</strong>, azienda italiana di cosmesi naturale personalizzata. 
          Ti propongo preparati da applicare sulla pelle, preziosi e con un prezzo equo, formulati per trasferire tutta la virtù degli estratti vegetali direttamente alla tua bellezza.
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

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Delivery Info */}
        <div className="bg-white p-6 rounded-sm border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="text-regal-gold flex-shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate-800 mb-1">Consegna a domicilio</h4>
            <p className="text-sm text-slate-600 font-sans">
              Effettuo personalmente la consegna nelle zone di <strong>Padova e Vicenza</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-sm border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="text-regal-gold flex-shrink-0">
            <Truck size={24} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate-800 mb-1">Altre città</h4>
            <p className="text-sm text-slate-600 font-sans">
              Per le altre province, la spedizione avviene tramite <strong>corriere espresso</strong> con un piccolo contributo spese.
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