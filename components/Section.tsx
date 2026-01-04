import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'cream' | 'blue';
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'cream' }) => {
  const bgClass = {
    white: 'bg-white',
    cream: 'bg-regal-cream',
    blue: 'bg-slate-50', // Very subtle cool white
  }[bg];

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;