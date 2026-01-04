import React from 'react';
import Section from './Section';

const Method: React.FC = () => {
  const steps = [
    { num: '01', title: 'Il Questionario', desc: 'Compili un breve questionario per raccontarmi le tue abitudini e desideri.' },
    { num: '02', title: 'L\'Analisi', desc: 'Durante la consulenza analizziamo insieme lo stato della tua pelle o le tue esigenze.' },
    { num: '03', title: 'Il Piano Rituale', desc: 'Ricevi una guida personalizzata con routine mattutina e serale, semplice ed efficace.' },
    { num: '04', title: 'Il Follow-up', desc: 'Restiamo in contatto per monitorare i progressi e affinare il percorso.' },
  ];

  return (
    <Section id="metodo" bg="white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-6">Il Metodo</h2>
           <p className="text-slate-600 mb-8 font-sans leading-relaxed text-lg">
             Il mio approccio non è mai standardizzato. Credo nella ritualità consapevole: pochi gesti, prodotti giusti e tanta costanza. Costruiamo insieme una routine che sia un piacere, non un dovere.
           </p>
           <div className="space-y-8">
             {steps.map((step) => (
               <div key={step.num} className="flex gap-6 group">
                 <div className="font-serif text-5xl text-regal-blue-dark/40 group-hover:text-regal-gold transition-colors font-bold">
                   {step.num}
                 </div>
                 <div>
                   <h4 className="font-serif text-2xl text-slate-800 mb-2">{step.title}</h4>
                   <p className="text-slate-600 text-lg">{step.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
        <div className="relative h-full min-h-[400px]">
           <img 
             src="https://picsum.photos/id/24/600/800" 
             alt="Mani che curano una pianta" 
             className="w-full h-full object-cover rounded-sm shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-regal-cream p-4 flex items-center justify-center rounded-full shadow-lg">
             <span className="font-serif italic text-center text-slate-700 text-base">Semplicità &<br/>Natura</span>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Method;