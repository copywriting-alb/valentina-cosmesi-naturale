import React from 'react';
import Section from './Section';
import { MessageCircle, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contatti" bg="cream">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        {/* Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-serif text-slate-800 mb-6">Iniziamo il Tuo Viaggio</h2>
          <p className="text-slate-600 mb-8 font-sans leading-relaxed text-lg">
            Se desideri prenotare una consulenza o hai semplicemente una curiosità sul mondo della cosmesi naturale, scrivimi su WhatsApp o seguimi sui social. Sarà un piacere leggerti.
          </p>
          
          <div className="space-y-6">
             <a 
               href="https://wa.me/393456717626" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-4 text-slate-700 group w-fit"
             >
               <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm text-regal-gold group-hover:bg-regal-gold group-hover:text-white transition-all">
                 <MessageCircle size={20} />
               </div>
               <span className="font-serif text-lg group-hover:text-regal-gold transition-colors">3456717626</span>
             </a>
             <a 
               href="https://www.instagram.com/valentina_cosmesinaturale" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-4 text-slate-700 group w-fit"
             >
               <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm text-regal-gold group-hover:bg-regal-gold group-hover:text-white transition-all">
                 <Instagram size={20} />
               </div>
               <span className="font-serif text-lg group-hover:text-regal-gold transition-colors">@valentina_cosmesinaturale</span>
             </a>
          </div>
        </div>

        {/* Form */}
        <div id="contact-form" className="bg-white p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-regal-gold">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            alert("Richiesta inviata con successo! Valentina ti contatterà al più presto.");
          }}>
            <div>
              <label className="block text-sm uppercase tracking-widest text-slate-500 mb-2">Nome *</label>
              <input 
                required 
                type="text" 
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-regal-gold transition-colors text-lg" 
                placeholder="Il tuo nome" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm uppercase tracking-widest text-slate-500 mb-2">Email *</label>
                <input 
                  required 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-regal-gold transition-colors text-lg" 
                  placeholder="la-tua@email.it" 
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-slate-500 mb-2">Telefono *</label>
                <input 
                  required 
                  type="tel" 
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-regal-gold transition-colors text-lg" 
                  placeholder="Il tuo numero" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest text-slate-500 mb-2">Di cosa hai bisogno? *</label>
              <select 
                required 
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-regal-gold transition-colors text-slate-700 text-lg"
              >
                <option value="">Seleziona un servizio...</option>
                <option value="skin-test">Skin Test & Skincare</option>
                <option value="aromaterapia">Aromaterapia</option>
                <option value="piante">Benessere Piante</option>
                <option value="workshop">Workshop & Eventi</option>
                <option value="generali">Info Generali</option>
              </select>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest text-slate-500 mb-2">Messaggio (Opzionale)</label>
              <textarea 
                rows={4} 
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-regal-gold transition-colors text-lg" 
                placeholder="Raccontami brevemente..."
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-slate-800 text-white font-serif uppercase tracking-widest rounded-sm hover:bg-slate-700 transition-all shadow-lg text-lg">
              Invia Richiesta
            </button>
            <p className="text-xs text-slate-400 text-center">* Campi obbligatori</p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;