import React from 'react';
import Section from './Section';
import { FileText, Download, Sparkles } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  filename: string;
}

const resources: Resource[] = [
  {
    title: 'Oli Essenziali',
    description: "L'anima delle piante in gocce. Una guida pratica all'uso sicuro ed efficace per il tuo benessere.",
    filename: 'guida-oli-essenziali.pdf',
  },
  {
    title: 'Skincare Botanica',
    description: 'I segreti per una pelle radiosa. La tua routine quotidiana passo dopo passo, secondo natura.',
    filename: 'guida-skincare-botanica.pdf',
  },
  {
    title: 'Piante del Benessere',
    description: 'Scopri i principi attivi della natura più preziosi per il tuo equilibrio quotidiano.',
    filename: 'piante-del-benessere.pdf',
  },
];

const DownloadResources: React.FC = () => {
  const handleDownload = (title: string) => {
    // In un ambiente reale, qui ci sarebbe il link al file statico
    alert(`Preparazione del download per: ${title}\n(Questa è una demo, il file reale verrà collegato in fase di pubblicazione).`);
  };

  return (
    <Section id="risorse" bg="white" className="border-t border-regal-gold/10">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4 text-regal-gold">
          <Sparkles size={32} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-4">Guide omaggio per Te</h2>
        <p className="text-slate-600 font-sans text-lg max-w-2xl mx-auto italic">
          "Carissima Lettrice, ho redatto con cura questi piccoli saggi omaggio affinché possano illuminare i tuoi primi passi nel giardino della cosmesi botanica."
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((res, index) => (
          <div 
            key={index} 
            className="group bg-regal-cream p-8 rounded-sm border border-regal-gold/10 hover:border-regal-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-regal-gold mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl font-serif text-slate-800 mb-3">{res.title}</h3>
            <p className="text-slate-600 font-sans mb-8 leading-relaxed">
              {res.description}
            </p>
            <button 
              onClick={() => handleDownload(res.title)}
              className="mt-auto flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-serif italic rounded-sm hover:bg-regal-gold transition-all shadow-md group/btn"
            >
              <Download size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
              <span>Scarica PDF</span>
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default DownloadResources;