
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;