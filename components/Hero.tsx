
import React from 'react';

const CheckIcon = () => (
    <svg className="h-6 w-6 text-cyan-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const Hero: React.FC = () => {
  const uspItems = [
    { title: "Proprietary Ethical AI (HILARA™)", description: "The heart of the platform is HILARA™, a custom-built AI that performs real-time ethical validation on all user interactions (posts, messages, transactions). This core feature is unique to HUMANOSVERSE™ and requires every other module to be built in tight integration with it." },
    { title: "Proprietary Security (ID-QR™, H-Vault™, SENTINEL™)", description: "The project's security model is based on unique, in-house technologies, including the rotating QR code authentication system (ID-QR™) and the end-to-end encrypted storage (H-Vault™). Relying on external authentication or storage services would compromise the platform's core security principles." },
    { title: "Deep Integration (H-Social, H-Messenger)", description: "While standard social and chat features exist, the HUMANOSVERSE™ modules are more than just functional equivalents. They are designed from the ground up to be interwoven with the HILARA™ ethical AI and the SENTINEL™ security system. This deep integration ensures that every action within the ecosystem is secure, verified, and ethically sound—a guarantee that cannot be made when using third-party components." }
  ];

  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-700/10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold leading-7 text-cyan-400">Core Philosophy & USP</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            A Self-Contained Digital Ecosystem
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The fundamental principle of the HUMANOSVERSE™ project is to create a 100% self-contained and proprietary digital ecosystem, providing unparalleled security, privacy, and ethical governance.
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-4">
                <CheckIcon/>
                <h2 className="text-2xl font-bold text-white">Unique Selling Proposition</h2>
            </div>
            <p className="mt-4 text-slate-400">
              The USP of HUMANOSVERSE™ lies in its proprietary, deeply integrated technologies that cannot be replicated with off-the-shelf solutions.
            </p>
            <div className="mt-8 space-y-6">
              {uspItems.map((item, index) => (
                <div key={index} className="p-6 bg-slate-900/60 rounded-lg border border-slate-700">
                    <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                    <p className="mt-2 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
             <p className="mt-8 text-center text-slate-400 italic">
                This self-contained architecture is what makes HUMANOSVERSE™ a truly next-generation digital platform.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
