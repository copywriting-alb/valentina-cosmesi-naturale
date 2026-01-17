import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-regal-cream overflow-hidden py-12 md:py-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-regal-blue rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-100 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Part 1: Header & Buttons */}
          <div className="order-1 text-center md:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 border border-slate-300 rounded-full text-sm tracking-[0.2em] text-slate-500 uppercase bg-white/50 backdrop-blur-sm">
              Cosmesi botanica
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight">
              Riscopri la tua <span className="italic text-slate-600">Bellezza</span> <br/>
              attraverso la Natura.
            </h1>

            <div className="space-y-4">
              <p className="font-serif text-xl md:text-2xl text-slate-600 italic">
                "Cara Lettrice, benvenuta in un luogo dove il tempo rallenta e la cura di sé diventa un rito quotidiano."
              </p>
              <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0">
                Ti guido verso una pelle luminosa e un benessere profondo attraverso rituali personalizzati, aromaterapia e la saggezza delle piante.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#servizi" className="px-8 py-3 bg-slate-800 text-white font-serif rounded-sm hover:bg-slate-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg">
                Scopri i percorsi gratuiti
              </a>
              <a href="#contatti" className="px-8 py-3 border border-slate-800 text-slate-800 font-serif rounded-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 text-lg">
                Contattami e prenota <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="order-2 md:row-span-2 relative">
             <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto rounded-t-[100px] rounded-b-lg overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://i.postimg.cc/9Mpdv47k/1.png" 
                  alt="Valentina Alberti - Cosmesi Naturale" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 shadow-xl rounded-sm max-w-[200px] hidden md:block border-l-4 border-regal-gold">
                <p className="font-serif italic text-slate-800 text-lg leading-snug">
                  "La bellezza non è perfezione, è armonia."
                </p>
             </div>
          </div>

          {/* Text Content - Part 2: Highlights */}
          <div className="order-3 md:order-2 pt-4 md:pt-0">
            <div className="border-t border-slate-200 pt-8 flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start text-sm md:text-base font-sans text-slate-500 tracking-wide uppercase">
              <span className="flex items-center gap-2">
                <Star size={16} className="text-regal-gold" /> skincare
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} className="text-regal-gold" /> Aromaterapia & Fitoterapia
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} className="text-regal-gold" /> Incaricata Gialean
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} className="text-regal-gold" /> Padova, Vicenza
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;