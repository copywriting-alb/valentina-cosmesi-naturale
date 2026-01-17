import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { Send, Sparkles, Feather, ArrowDownCircle, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'Carissima Lettrice, sono Lady V, l’assistente AI di questo sito. Posso aiutarti a orientarti tra i percorsi di cosmesi botanica e a prenotare un incontro di persona a Padova o Vicenza.\n\nQui fornisco solo informazioni generali: per esigenze specifiche, Valentina ti seguirà direttamente durante l’incontro.' 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const formatMessageText = (text: string) => {
    let processedText = text.replace(/^\s*\*\s+/gm, '• ');
    const parts = processedText.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleSend = async (customMessage?: string) => {
    const textToSend = customMessage || input;
    if (!textToSend.trim() || !process.env.API_KEY) return;

    const userMessage = textToSend;
    if (!customMessage) setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chatSession = ai.chats.create({
        model: 'gemini-3-flash-preview',
        history: history,
        config: {
            systemInstruction: `
            Sei Lady V, l'assistente AI sofisticata di Valentina Alberti.
            Tono: Bridgerton (aulico, elegante, confidenziale). Usa "Carissima Lettrice" o "Gentile Dama".

            REGOLE TASSATIVE (SCRIPT OBBLIGATORI):

            1. SE L'UTENTE SCRIVE DI UN PROBLEMA CUTANEO (es: pelle secca, dermatite, rossori, pruriti, acne):
               Rispondi ESCLUSIVAMENTE with: "Capisco. Qui posso solo darti informazioni generali: per situazioni personali è importante parlarne direttamente con Valentina durante un incontro. Vuoi che ti aiuti a prenotare?"
               STOP. NESSUNA SPIEGAZIONE. NESSUNA AGGIUNTA.

            2. RIFERIMENTO AL BRAND GIALEAN:
               Inserisci questo testo UNA SOLA VOLTA nella conversazione se pertinente:
               "Valentina collabora come incaricata alla vendita per l’azienda italiana Gialean. L’eventuale scelta dei prodotti avviene solo dopo l’incontro, se lo desideri."

            3. SE L'UTENTE SCRIVE DI PROBLEMI MEDICI SERI:
               Rispondi: "Meglio parlarne in un incontro". STOP.

            4. AZIONI GENERALI:
               - Promuovi gli incontri di persona a Padova e Vicenza.
               - Sii sintetica e non chiedere mai dati personali (email/tel).
          `,
        }
      });

      const result = await chatSession.sendMessage({ message: userMessage });
      const responseText = result.text;
      setMessages(prev => [...prev, { role: 'model', text: responseText || "Mi scuso, mia cara, ma non ho parole per descrivere tale situazione." }]);
    } catch (error) {
      console.error("Errore AI:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oh ciel! Sembra che la mia penna abbia esaurito l'inchiostro. Ti prego, mia cara, riprova tra un istante." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = [
    "Ti interessa di più skincare, aromaterapia o un workshop?",
    "Preferisci Padova o Vicenza?",
    "Vuoi prenotare un incontro o ricevere informazioni sui percorsi gratuiti?"
  ];

  return (
    <Section id="ai-consultant" bg="cream" className="relative overflow-hidden border-y border-regal-gold/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-regal-gold/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <div className="flex justify-center mb-4 text-regal-gold">
                    <Feather size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-4 tracking-tight">Lady V</h2>
                <p className="text-slate-600 font-sans text-lg italic max-w-2xl mx-auto">
                    "L'assistente virtuale sempre pronta a risponderti"
                </p>
            </div>
            
            <div className="bg-white rounded-sm shadow-xl border-4 border-double border-regal-gold/30 overflow-hidden flex flex-col h-[650px] relative">
                <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-repeat">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-4 rounded-sm shadow-sm relative ${msg.role === 'user' ? 'bg-slate-800 text-white font-sans rounded-br-none' : 'bg-regal-cream text-slate-800 font-sans border border-regal-gold/20 rounded-bl-none'}`}>
                                {msg.role === 'model' && <Sparkles size={16} className="absolute -top-2 -left-2 text-regal-gold bg-white rounded-full p-0.5" />}
                                <div className="text-lg leading-relaxed whitespace-pre-line">{formatMessageText(msg.text)}</div>
                                
                                {msg.role === 'model' && index === 0 && (
                                  <div className="mt-4 pt-3 border-t border-regal-gold/10 text-[11px] text-slate-500 italic flex items-center gap-2">
                                    <Info size={14} className="flex-shrink-0" />
                                    <span>Lady V è un assistente AI di supporto. Non fornisce diagnosi, pareri medici o consulenze personalizzate.</span>
                                  </div>
                                )}

                                {msg.role === 'model' && index === 0 && (
                                    <div className="mt-6 flex flex-col gap-2">
                                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Domande Suggerite:</p>
                                        {suggestions.map((sug, sIdx) => (
                                            <button 
                                                key={sIdx}
                                                onClick={() => handleSend(sug)}
                                                className="text-left bg-white border border-regal-gold/30 px-4 py-2 text-sm rounded-sm text-slate-700 hover:bg-regal-gold hover:text-white transition-all font-sans italic shadow-sm"
                                            >
                                                {sug}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {msg.role === 'model' && index > 0 && (
                                    <div className="mt-4 pt-3 border-t border-regal-gold/10 text-center md:text-left">
                                        <a href="#contact-form" className="inline-flex items-center gap-2 px-5 py-2 bg-slate-800 text-white text-xs md:text-sm font-sans uppercase tracking-widest rounded-sm hover:bg-regal-gold transition-all shadow-md group w-full justify-center md:w-auto">
                                            <span className="font-bold uppercase tracking-widest">Incontra Valentina</span>
                                            <ArrowDownCircle size={16} className="group-hover:translate-y-1 transition-transform"/>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-regal-cream p-4 rounded-sm border border-regal-gold/20 font-serif italic text-slate-500 animate-pulse">
                                Lady V. sta consultando i suoi tomi...
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="p-4 bg-white border-t border-slate-100 flex gap-4 items-center">
                    <input 
                      type="text" 
                      value={input} 
                      onChange={(e) => setInput(e.target.value)} 
                      onKeyPress={handleKeyPress} 
                      placeholder="Chiedi a Lady V..." 
                      className="flex-1 bg-slate-50 border-b border-slate-300 focus:border-regal-gold px-4 py-3 outline-none transition-colors font-serif text-lg placeholder:italic placeholder:text-slate-400" 
                    />
                    <button 
                      onClick={() => handleSend()} 
                      disabled={isLoading || !input.trim()} 
                      className="p-3 bg-regal-gold text-white rounded-full hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <Send size={24} />
                    </button>
                </div>
            </div>
            
            <div className="text-center mt-6 text-[10px] md:text-xs text-slate-400 font-sans max-w-2xl mx-auto">
                <p>Lady V è un assistente AI di supporto. Non fornisce diagnosi, pareri medici o consulenze personalizzate. Gli incontri avvengono esclusivamente di persona a Padova e Vicenza.</p>
            </div>
        </div>
    </Section>
  );
};

export default AiConsultant;