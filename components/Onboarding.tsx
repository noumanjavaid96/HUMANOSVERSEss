
import React, { useState } from 'react';
import Section from './Section';

const onboardingSteps = [
  {
    step: 1,
    title: 'Personalized Welcome',
    description: 'Begin your journey with a warm welcome that introduces the core values of HUMANOSVERSE™: security, privacy, and ethical engagement.',
    icon: '👋'
  },
  {
    step: 2,
    title: 'Ecosystem Overview',
    description: 'Get a concise tour of the integrated modules: H-Social, H-Messenger, and the ultra-secure H-Vault for your digital assets.',
    icon: '🌌'
  },
  {
    step: 3,
    title: 'ID-QR™ Authentication Setup',
    description: 'Experience our proprietary, unbreachable security. A guided, interactive process helps you set up your dynamic ID-QR™ for secure, passwordless access.',
    icon: '🛡️'
  },
  {
    step: 4,
    title: 'Ethical Commitment',
    description: 'Finalize your setup by reviewing and accepting the ethical guidelines, enforced in real-time by our HILARA™ AI to ensure a respectful and safe community.',
    icon: '✅'
  }
];

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = onboardingSteps.length;

  const handleNext = () => {
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };
  
  return (
    <Section title="Interactive Onboarding Experience" id="onboarding">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-lg text-slate-400 max-w-3xl mx-auto mb-12">
          Our onboarding is more than just a setup process; it's an introduction to a new standard of digital interaction, ensuring every user understands and embraces our commitment to security and ethics from the very first moment.
        </p>
        <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700"></div>
            <div className="absolute top-1/2 left-0 h-0.5 bg-cyan-400 transition-all duration-500" style={{width: `${((currentStep-1)/(totalSteps-1)) * 100}%`}}></div>
            <div className="relative flex justify-between">
                {onboardingSteps.map(item => (
                    <div key={item.step} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${currentStep >= item.step ? 'bg-cyan-400 border-cyan-400 text-slate-900' : 'bg-slate-800 border-slate-600 text-slate-400'}`}>
                           {item.step}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center flex flex-col items-center min-h-[280px]">
            <div className="flex-shrink-0 bg-slate-700 w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4">
                {onboardingSteps[currentStep - 1].icon}
            </div>
            <h4 className="font-bold text-white text-2xl mt-4 mb-2">Step {currentStep}: {onboardingSteps[currentStep - 1].title}</h4>
            <p className="text-slate-400 text-base flex-grow max-w-2xl mx-auto">{onboardingSteps[currentStep - 1].description}</p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
            <button onClick={handlePrev} disabled={currentStep === 1} className="px-6 py-2 rounded-md bg-slate-700 text-white font-semibold hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors">Previous</button>
            <button onClick={handleNext} disabled={currentStep === totalSteps} className="px-6 py-2 rounded-md bg-cyan-500 text-white font-semibold hover:bg-cyan-600 disabled:bg-cyan-500/30 disabled:cursor-not-allowed transition-colors">Next</button>
        </div>
      </div>
    </Section>
  );
};

export default Onboarding;