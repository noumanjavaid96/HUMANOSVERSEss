
import React, { useState } from 'react';
import Section from './Section';

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
    </svg>
);
const AiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h.5a1.5 1.5 0 011.5 1.5v1.25a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v.25a1.5 1.5 0 01-1.5 1.5H5.5A1.5 1.5 0 014 9.25V8A1.5 1.5 0 015.5 6.5H6a1 1 0 001-1v-.5a1.5 1.5 0 013 0V3.5z" />
        <path d="M10 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM1.588 12.316a1.5 1.5 0 012.324 1.328 3.5 3.5 0 00.52 1.476 1.5 1.5 0 01-2.274 1.534 5.5 5.5 0 01-.892-2.348 1.5 1.5 0 01.322-1.33zm14.824 0a1.5 1.5 0 011.002 2.658 5.503 5.503 0 01-.892 2.348 1.5 1.5 0 01-2.274-1.534 3.5 3.5 0 00.52-1.476 1.5 1.5 0 011.322-1.328z" />
    </svg>
);


const Profile: React.FC = () => {
    const privacyLevels = ['Public', 'Connections Only', 'Private'];
    const [proPrivacy, setProPrivacy] = useState(0);
    const [linksPrivacy, setLinksPrivacy] = useState(1);

    const cyclePrivacy = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        setter(prev => (prev + 1) % privacyLevels.length);
    };

  return (
    <Section title="Enhanced User Profiles" id="profile" className="bg-gray-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h3 className="text-2xl font-bold text-gray-900">Your Digital Identity, Perfected</h3>
          <p className="mt-4 text-gray-600">
            User profiles in HUMANOSVERSE™ are more than just a collection of information. They are a secure, ethically-validated representation of your digital self, with unparalleled control over your privacy.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
                <span className="bg-cyan-100 text-cyan-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold text-xs">1</span>
                <div>
                    <h4 className="font-semibold text-gray-900">Advanced Customization</h4>
                    <p className="text-gray-600">Share your personal interests and professional background with confidence. Our system allows for rich, detailed profiles that reflect who you are.</p>
                </div>
            </li>
            <li className="flex items-start">
                <span className="bg-cyan-100 text-cyan-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold text-xs">2</span>
                <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Ethical Validation <AiIcon/></h4>
                    <p className="text-gray-600">Every piece of information you add is validated by HILARA™ to ensure it aligns with community guidelines, preventing misinformation and harmful content proactively.</p>
                </div>
            </li>
            <li className="flex items-start">
                <span className="bg-cyan-100 text-cyan-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold text-xs">3</span>
                 <div>
                    <h4 className="font-semibold text-gray-900">Granular Privacy Controls <LockIcon/></h4>
                    <p className="text-gray-600">You decide who sees what. With intuitive, per-field privacy toggles, your data remains under your exclusive control, secured end-to-end by H-Vault™.</p>
                </div>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center space-x-4">
                <img className="h-20 w-20 rounded-full border-2 border-cyan-500" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                <div>
                    <h4 className="text-xl font-bold text-gray-900">Alex Ryder</h4>
                    <p className="text-sm text-gray-500">@alex_ryder_hv</p>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Personal Interests</h5>
                <div className="flex flex-wrap gap-2 mt-2">
                    {['Ethical AI', 'Quantum Computing', 'Decentralized Systems', 'Sci-Fi Literature'].map(interest => (
                         <span key={interest} className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800">{interest}</span>
                    ))}
                </div>
                 <p className="text-xs text-gray-500 mt-3 italic">HILARA™ can suggest new interests based on your secure and ethical activity within the verse.</p>
            </div>
             <div className="mt-6 border-t border-gray-200 pt-6">
                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
                    <span>Professional Background</span>
                    <button onClick={() => cyclePrivacy(setProPrivacy)} className="text-xs text-gray-700 flex items-center bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md transition-colors">
                        {privacyLevels[proPrivacy]}<LockIcon/>
                    </button>
                </h5>
                 <div className="mt-3 space-y-3">
                    <p className="text-sm text-gray-700">Lead AI Ethicist @ H-Corp</p>
                    <p className="text-sm text-gray-700">Research Scientist @ QuantumLeap Inc.</p>
                 </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
                    <span>External Links</span>
                     <button onClick={() => cyclePrivacy(setLinksPrivacy)} className="text-xs text-gray-700 flex items-center bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md transition-colors">
                        {privacyLevels[linksPrivacy]}<LockIcon/>
                    </button>
                </h5>
                <div className="mt-3 space-y-2">
                     <p className="text-sm text-cyan-600 hover:underline cursor-pointer flex items-center">Personal Blog <AiIcon/></p>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">All linked content is pre-scanned by HILARA™ for ethical compliance.</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;