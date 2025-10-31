
import React from 'react';
import Section from './Section';
import type { Principle } from '../types';

const principlesData: Principle[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.602-3.751m-.227-1.007A11.966 11.966 0 0018.75 6c-.313 0-.623.028-.927.082" />
      </svg>
    ),
    title: 'Ethical AI Governance',
    description: 'All systems and processes will be designed to uphold the highest standards of ethical AI, with a focus on user privacy, data security, and responsible AI-driven decision-making.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Security by Design',
    description: 'The platform will be built with a security-first mindset, incorporating advanced encryption, dynamic authentication, and proactive threat detection to protect user data and maintain system integrity.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 12l-3.75 2.25" />
      </svg>
    ),
    title: 'Scalability and Performance',
    description: 'The architecture will be designed for massive scalability, with the ability to support millions of users and high volumes of concurrent transactions without compromising performance.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.28a4.5 4.5 0 00-1.875-.575A4.5 4.5 0 005.25 15.375m1.875-.575c.345.034.694.053 1.043.053m0 0c.345 0 .694-.019 1.043-.053m0 0l.256-.012A4.5 4.5 0 0113.5 13.5m0 0V6.75m0 6.75a4.5 4.5 0 00-1.875-.575m1.875-.575a4.5 4.5 0 001.875.575m-1.875.575V13.5m0 0V6.75m0 6.75a4.5 4.5 0 00-1.875-.575M12 13.5A4.5 4.5 0 007.5 9m4.5 4.5a4.5 4.5 0 014.5-4.5m-4.5 4.5V9m0 4.5a4.5 4.5 0 00-4.5-4.5m4.5 4.5a4.5 4.5 0 014.5-4.5" />
      </svg>
    ),
    title: 'User-Centric Design',
    description: 'The user experience will be at the forefront of all design and development decisions, with a focus on creating intuitive, engaging, and accessible interfaces across all devices.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345h5.364c.518 0 .734.664.348.97l-4.336 3.158a.563.563 0 00-.182.557l1.635 5.048c.158.487-.427.917-.84.588l-4.398-3.26a.563.563 0 00-.65 0l-4.398 3.26c-.413.329-1-.101-.84-.588l1.635-5.048a.563.563 0 00-.182-.557l-4.336-3.158c-.386-.28-.17-.97.348-.97h5.364a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Transparency and Trust',
    description: 'The platform will be built on a foundation of transparency and trust, with clear and concise communication with users about how their data is used and protected.',
  },
];

const PrincipleCard: React.FC<{ principle: Principle }> = ({ principle }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors duration-300">
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 bg-slate-700 p-3 rounded-md text-cyan-400">
        {principle.icon}
      </div>
      <h3 className="text-xl font-bold text-white">{principle.title}</h3>
    </div>
    <p className="mt-4 text-slate-400">{principle.description}</p>
  </div>
);

const Principles: React.FC = () => {
  return (
    <Section title="Guiding Principles" id="principles" className="bg-slate-900/70">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {principlesData.slice(0, 3).map((p, i) => (
          <PrincipleCard key={i} principle={p} />
        ))}
        <div className="lg:col-span-3 grid md:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
        {principlesData.slice(3).map((p, i) => (
          <PrincipleCard key={i} principle={p} />
        ))}
        </div>
      </div>
    </Section>
  );
};

export default Principles;
