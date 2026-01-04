import React from 'react';
import Section from './Section';
import { Heart, Feather, Sun, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="chi-sono" bg="white">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Col: Image Grid */}
        <div className="md:col-span-5 relative">
          <div className="grid grid-cols-2 gap-4">
             <img 
              src="https://picsum.photos/id/360/400/500" 
              alt="Dettaglio botanico" 
              className="rounded-sm shadow-md object-cover h-64 w-full mt-12"
            />
            <img 
              src="https://www.meda45.it/img/people/valentina_alberti.jpg" 
              alt="Ritratto di Valentina Alberti" 
              className="rounded-sm shadow-lg object-cover h-64 w-full"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-regal-gold rounded-full opacity-30 pointer-events-none"></div>
        </div>

        {/* Right Col: Text */}
        <div className="md:col-span-7 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800">
            Chi sono
          </h2>
          
          <div className="space-y-4 font-sans text-slate-600 leading-relaxed text-xl">
             <p>
               Sono Valentina Alberti, e credo fermamente nel potere rigenerante della natura. Il mio viaggio nel mondo della cosmesi naturale non è nato solo da una passione estetica, ma da un desiderio profondo di riconnessione con i ritmi lenti e gentili che spesso dimentichiamo.
             </p>
             <p>
               Come in una danza d'altri tempi, accompagno chi si affida a me alla scoperta di una bellezza che non grida, ma sussurra eleganza e salute.
             </p>
          </div>

          <div className="bg-regal-cream p-6 border-l-4 border-regal-gold rounded-r-sm">
            <p className="font-serif italic text-slate-700 text-xl">
              "Care Lettrici, il mio desiderio più grande è vedervi fiorire, offrendovi strumenti semplici ma preziosi per prendervi cura di voi stesse con gentilezza."
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-4 text-slate-800">Il mio approccio si fonda su:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full text-regal-gold"><Feather size={24}/></div>
                <span className="text-base font-semibold text-slate-700">Ascolto Empatico</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full text-regal-gold"><Sun size={24}/></div>
                <span className="text-base font-semibold text-slate-700">Costanza Gentile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full text-regal-gold"><Leaf size={24}/></div>
                <span className="text-base font-semibold text-slate-700">Pura Naturalezza</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full text-regal-gold"><Heart size={24}/></div>
                <span className="text-base font-semibold text-slate-700">Rituale Su Misura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;