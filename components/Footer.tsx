import React from 'react';

const Footer: React.FC = () => {
  const policyLink = "https://docs.google.com/document/d/1Wb9lmaLS2zCskA9R4Dp7bcAKJwP3K5w3BRlxdRONK1Q/edit";
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl text-white mb-6">Valentina Alberti</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-sans uppercase tracking-widest">
          <a 
            href={policyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href={policyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Cookie Policy
          </a>
        </div>
        <p className="font-serif italic text-sm opacity-60">
          © {new Date().getFullYear()} Valentina Alberti. Tutti i diritti riservati. P.IVA 05471860287
        </p>
      </div>
    </footer>
  );
};

export default Footer;