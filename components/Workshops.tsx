import React from 'react';
import Section from './Section';
import { Users, Zap, Calendar, Sparkle } from 'lucide-react';

const Workshops: React.FC = () => {
  return (
    <Section id="workshop" bg="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="relative aspect-square rounded-sm overflow-hidden shadow-2xl border-8 border-regal-cream">
            <img 
              src="https://picsum.photos/id/453/800/800" 
              alt="Workshop di cosmesi naturale" 
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-regal-gold/5 pointer-events-none"></div>
          </div>
          {/* Floating detail */}
          <div className="absolute -bottom-6 -left-6 bg-slate-800 text-white p-6 shadow-xl rounded-sm hidden md:block max-w-[240px]">
            <Sparkle size={24} className="text-regal-gold mb-3" />
            <p className="font-serif italic text-lg leading-tight">
              "La bellezza fiorisce meglio quando è condivisa in buona compagnia."
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <div>
            <span className="text-regal-gold font-sans uppercase tracking-[0.3em] text-sm block mb-2">natura condivisa</span>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-6">Workshop & Eventi</h2>
            <p className="text-slate-600 font-sans text-lg leading-relaxed">
              Oltre alle consulenze singole, porto l'eleganza e i segreti di Gialean nei vostri spazi preferiti. Che sia un pomeriggio tra amiche o un evento esclusivo in boutique, trasformeremo la skincare in un'esperienza sensoriale collettiva.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-regal-cream rounded-full flex items-center justify-center text-regal-gold border border-regal-gold/20">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-slate-800 mb-2">Atelier di Bellezza (Workshop)</h4>
                <p className="text-slate-600 text-lg">
                  Laboratori pratici per piccoli gruppi dove imparare i riti della bellezza naturale, l'uso degli oli essenziali e la creazione di una routine perfetta.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-regal-cream rounded-full flex items-center justify-center text-regal-gold border border-regal-gold/20">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-slate-800 mb-2">Consulenze Speed</h4>
                <p className="text-slate-600 text-lg">
                  L'ideale per eventi, inaugurazioni o giornate speciali in negozio. Analisi rapide e mirate per regalare un tocco di consapevolezza Gialean ai tuoi ospiti.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href="#contatti" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-regal-gold text-white font-serif italic rounded-sm hover:bg-yellow-600 transition-all shadow-lg text-xl group"
            >
              <Calendar size={20} />
              <span>Organizza un evento con me</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Workshops;