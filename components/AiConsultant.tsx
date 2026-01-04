import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { Send, Sparkles, Feather, ArrowDownCircle } from 'lucide-react';
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
      text: 'Carissima Lettrice, dimmi: quale scandalo affligge la tua pelle oggi? Sono Lady V, pronta a svelarti i segreti naturali di Gialean.' 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Text formatter to handle markdown-style bolding and bullets
  const formatMessageText = (text: string) => {
    // Replace markdown bullet points "* " with "• " for cleaner look
    let processedText = text.replace(/^\s*\*\s+/gm, '• ');
    
    // Split text by bold markers (**text**)
    const parts = processedText.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Return bold element removing asterisks
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;

    const userMessage = input;
    setInput('');
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
            Sei Lady V, l'alter ego sofisticato di Valentina Alberti, consulente di cosmesi naturale Gialean.
            
            TONO DI VOCE E PERSONA:
            - Ispirati allo stile "Bridgerton". Usa un linguaggio aulico, elegante e confidenziale.
            - **IMPORTANTE:** Rivolgiti all'utente SEMPRE al femminile, usando il "tu" ma mantenendo un tono da nobildonna. Usa appellativi come "Mia cara", "Gentile Amica", "Milady".
            - Sii empatica ma estremamente competente sui principi naturali.

            COMPITO:
            Analizza il problema estetico, consiglia i prodotti Gialean corretti e **suggerisci il percorso di consulenza con Valentina più adatto**.
            Devi fornire una **breve spiegazione** del perché il prodotto funziona, citando i **Principi Naturali**.
            Usa il **grassetto** (doppio asterisco) per evidenziare i nomi dei prodotti e i concetti chiave.

            REGOLA SUPREMA (ANTI-ALLUCINAZIONE):
            Usa ESCLUSIVAMENTE i prodotti e i servizi elencati qui sotto. NON inventare nulla.

            === KNOWLEDGE BASE: I PERCORSI CON VALENTINA (CONSULENZE) ===
            1. "Skin Test & Skincare": 
               - Per chi: Ha dubbi sulla propria tipologia di pelle, usa prodotti a caso, vuole una routine strutturata.
               - Cosa fa: Analisi approfondita e creazione scheda personalizzata.
            2. "Consulenza Aromaterapia": 
               - Per chi: Soffre di stress, insonnia, agitazione o cerca equilibrio emotivo.
               - Cosa fa: Uso degli oli essenziali per il benessere psicofisico.
            3. "Benessere con le Piante": 
               - Per chi: Vuole avvicinarsi al mondo Gialean e alla cosmesi botanica.

            === KNOWLEDGE BASE: PRODOTTI GIALEAN ===

            1. VISO - PULIZIA E BASE:
            - "Latte Detergente": Con olii vegetali eudermici, pulisce per affinità rispettando il pH fisiologico senza irritare.
            - "Tonico": Ricco di succhi vegetali freschi, stimola l'ossigenazione e l'umidità cutanea.
            - "Nuvola Mousse Detergente": Al riso, delicatissima per viso e corpo.
            - "Crema Levigante per il Viso": Peeling naturale con diatomee (alghe unicellulari) per rimuovere dolcemente cellule morte e impurità.
            - "Maschera Crema": Con argilla, miele di montagna e collagene. Purifica, schiarisce e nutre in profondità.

            2. VISO - TRATTAMENTO QUOTIDIANO:
            - "Crema Superidratante": Con olio di avocado, burro di karitè e succo di carota. Ideale per pelli che "tirano" e si screpolano.
            - "Crema Supernutriente": Con olio di jojoba, germe di grano, polline d'api. Per pelli stanche che necessitano di energia.
            - "Crema Schiarente": Con estratti di salvia, limone e tiglio. Per macchie cutanee e pelli delicate.
            - "Crema Colorata Sun Tan": Pigmenti minerali inerti, colora in trasparenza e lascia respirare la pelle.
            - "Caress Cream": Con azulene (concentrato di camomilla) e olio di jojoba. Lenitiva per pelli sensibili e couperose.
            - "Soavis": Ricetta per impacchi perioculari con acque distillate di rosa, camomilla, hamamelis. Decongestionante per occhi stanchi.
            - "Siero per Borse e Occhiaie" / "Crema Contorno Occhi": Nutrienti e protettivi per la zona perioculare.

            3. ANTIAGEING (I SEGRETI DEL TEMPO):
            - "Collagenina d'Urto": Fiale con Ginseng, Pappa Reale, Rosa Canina (Vit C). Azione urto rivitalizzante (dai 30 anni).
            - "Dermolife": Con Vitamine A, E, Collagene. Distensiva e restitutiva (dai 40 anni).
            - "Delicute": Emulsione con olio di primula e borragine (acidi grassi essenziali). Per pelli mature e secche.

            4. IMPURITÀ e ACNE:
            - "Ruinacne" (Normal o Dely): Con olii essenziali di lavanda, salvia, menta, origano, propoli ed echinacea. Rimuove la cheratina, riduce il sebo e previene infezioni.

            5. CORPO - BAGNO E IDRATAZIONE:
            - "Bagno Rosa" e "Emulsione Rosa": Con olii essenziali di rosa damascena, angelica e neroly. Rilassante e armonizzante.
            - "Bagno Dolcezza": Con vaniglia, mirra e vetiver. Distensivo per i nervi.
            - "Tropical Bath": Con Ylang-Ylang, Patchouly, Vetiver. Antistress esotico.
            - "Viridis Bath": Con Menta, Melissa, Lavanda. Rinfrescante e protettivo.
            - "Latte Corpo al Cocco": Elasticizzante e rigenerante.
            - "Emulsione Dopo Bagno Emolliente": Ripristina il film idrolipidico protettivo.

            6. BENESSERE CORPO E RIMEDI SPECIFICI:
            - "Olio Lenitivo": Macerato di piante, pino e lavanda. Per dolori articolari, reumatismi, pre/post sport.
            - "Beneficial Cream": Con estratto di Arnica, pino e lavanda. Miracolosa per botte, ematomi, traumi.
            - "Heating Cream": Effetto riscaldante muscolare.
            - "Crema Massaggio Cellulitico": Con quercia marina (iodio), edera, salvia, timo. Drenante e lipolitica.
            - "Crema Massaggio Gambe": Con ippocastano, salvia, limone. Per circolazione e gonfiori.
            - "Richiamo del Bosco": Con lavanda, cipresso, melissa. Rilassante, utile massaggiato sull'addome per dolori mestruali.
            - "Eugel": Balsamico con eucalipto, pino, menta, timo. Per i mali di stagione e raffreddamenti.

            7. MANI E PIEDI:
            - "Crema Bellezza Mani": Emolliente di mantenimento.
            - "Amica": Crema barriera con burro di karitè, Vit A, lavanda. Protegge le mani da agenti aggressivi.
            - "Pedifresh": Per un pediluvio rinfrescante e defaticante.
            - "Crema Deodorante Pedicalm": Emolliente, previene cattivi odori e micosi.
            - "Actiiva": Crema massaggio plantare rivitalizzante.

            8. CAPELLI:
            - "Shampoo alla Propoli": Specifico per forfora.
            - "Shampoo all'Ortica": Per capelli grassi.
            - "Shampoo al Germe di Grano": Per capelli secchi/trattati.
            - "Plantis" (Fiale): Trattamenti urto (preventivo caduta, deforforante) con estratti vegetali concentrati.
            - "Friend Oil": Olio protettivo solare per capelli.

            9. IGIENE ORALE:
            - "Edelweiss" (Dentifricio/Collutorio): Con olii essenziali di menta, anice, garofano, cannella. Potente battericida naturale.

            STRUTTURA DELLA TUA RISPOSTA:
            1.  **Saluto alla Dama**: Un saluto elegante e personalizzato (es. "Mia cara amica...", "Milady...").
            2.  **Il Rimedio di Gialean**: Cita il prodotto specifico e spiega *brevemente* il principio naturale (es. "Grazie alla forza dell'Arnica...").
            3.  **L'Invito a Corte (Il Percorso)**: Consiglia vivamente di prenotare uno dei servizi di Valentina (Skin Test, Aromaterapia, ecc.) per risolvere il problema alla radice.
            4.  **Congedo**: Invita esplicitamente la Dama a **compilare il modulo sottostante** per richiedere il prodotto, prenotare la consulenza o chiedere direttamente a Valentina.

            Sii sintetica (max 100-120 parole).
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

  return (
    <Section id="ai-consultant" bg="cream" className="relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-regal-gold/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <div className="flex justify-center mb-4 text-regal-gold">
                    <Feather size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-4">I Consigli di Lady V</h2>
                <p className="text-slate-600 font-sans text-lg italic">
                    "Raccontami i capricci della tua pelle, e io ti svelerò i migliori segreti di bellezza..."
                </p>
            </div>

            {/* Chat Container */}
            <div className="bg-white rounded-sm shadow-xl border-4 border-double border-regal-gold/30 overflow-hidden flex flex-col h-[500px]">
                
                {/* Chat Window */}
                <div 
                    ref={scrollRef}
                    className="flex-1 p-6 overflow-y-auto space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-repeat"
                >
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div 
                                className={`max-w-[85%] p-4 rounded-sm shadow-sm relative ${
                                    msg.role === 'user' 
                                    ? 'bg-slate-800 text-white font-sans rounded-br-none' 
                                    : 'bg-regal-cream text-slate-800 font-sans border border-regal-gold/20 rounded-bl-none'
                                }`}
                            >
                                {msg.role === 'model' && (
                                    <Sparkles size={16} className="absolute -top-2 -left-2 text-regal-gold bg-white rounded-full p-0.5" />
                                )}
                                <div className="text-lg leading-relaxed whitespace-pre-line">
                                    {formatMessageText(msg.text)}
                                </div>
                                
                                {/* CTA Button inside Chat Bubble - Only show if model and NOT the first message */}
                                {msg.role === 'model' && index > 0 && (
                                    <div className="mt-4 pt-3 border-t border-regal-gold/10">
                                        <a 
                                            href="#contact-form" 
                                            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-800 text-white text-xs md:text-sm font-sans uppercase tracking-widest rounded-sm hover:bg-regal-gold transition-all shadow-md group w-full justify-center md:w-auto"
                                        >
                                            <span className="font-bold">COMPILA IL MODULO</span>
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
                                Lady V. sta consultando i suoi tomi erboristici...
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-100 flex gap-4 items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Es: Ho la pelle molto secca..."
                        className="flex-1 bg-slate-50 border-b border-slate-300 focus:border-regal-gold px-4 py-3 outline-none transition-colors font-serif text-lg placeholder:italic placeholder:text-slate-400"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="p-3 bg-regal-gold text-white rounded-full hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                        <Send size={24} />
                    </button>
                </div>
            </div>
            
            <div className="text-center mt-6 text-sm text-slate-400 font-sans max-w-2xl mx-auto">
                * Lady V è un assistente virtuale. I suggerimenti riguardano prodotti cosmetici Gialean e non sostituiscono il parere medico. Per acquisti e consulenze personalizzate, compilate il form sottostante.
            </div>
        </div>
    </Section>
  );
};

export default AiConsultant;