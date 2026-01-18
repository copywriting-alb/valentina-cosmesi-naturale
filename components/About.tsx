import React from 'react';
import Section from './Section';
import { Heart, Feather, Sun, Leaf, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="chi-sono" bg="white">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Col: Image Grid */}
        <div className="md:col-span-5 relative">
          <div className="grid grid-cols-2 gap-4">
             <img 
              src="https://i.postimg.cc/PJ5Whtb5/2.png" 
              alt="Dettaglio botanico e fiori" 
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
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-2">
              Chi sono
            </h2>
            <p className="text-regal-gold font-sans uppercase tracking-widest text-sm mb-6">Cosmesi botanica</p>
          </div>
          
          <div className="space-y-6 font-sans text-slate-600 leading-relaxed text-lg">
             <p>
               Sono Valentina Alberti, e credo fermamente nel potere rigenerante della natura. Il mio viaggio nel mondo della cosmesi naturale non è nato solo da una passione estetica, ma da un desiderio profondo di riconnessione con i ritmi lenti e gentili che spesso dimentichiamo.
             </p>
             <div className="bg-slate-50 p-6 border border-slate-100 rounded-sm">
               <h4 className="font-serif text-xl text-slate-800 mb-3 flex items-center gap-2">
                 <Award size={20} className="text-regal-gold" /> Professionalità e Formazione
               </h4>
               <p className="italic">
                 Oltre alla mia attività come <strong>incaricata alla vendita per l'azienda italiana Gialean</strong>, ho coltivato una <strong>formazione indipendente in aromaterapia, fitoterapia e massaggio estetico</strong>. Questa sinergia di competenze mi permette di offrirti un <strong>approccio olistico alla cosmesi</strong>, che va oltre la semplice superficie della pelle.
               </p>
             </div>
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
                <span className="text-base font-semibold text-slate-700">Ascolto empatico</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full text-regal-gold"><Sun size={24}/></div>
                <span className="text-base font-semibold text-slate-700">Costanza gentile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full text-regal-gold"><Leaf size={24}/></div>
                <span className="text-base font-semibold text-slate-700">Pura naturalezza</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full text-regal-gold"><Heart size={24}/></div>
                <span className="text-base font-semibold text-slate-700">Rituale su misura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;