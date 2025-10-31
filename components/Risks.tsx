
import React from 'react';
import Section from './Section';
import type { Risk } from '../types';

const risksData: Risk[] = [
  { risk: 'Technical Complexity: The project involves complex and cutting-edge technologies, which could lead to unforeseen technical challenges.', likelihood: 'High', impact: 'High', mitigation: 'We will conduct thorough research and prototyping to validate the technical feasibility of the proposed solutions. We will also engage with experts in the field to get their insights and guidance.' },
  { risk: 'Security Breaches: The platform will handle sensitive user data, which makes it a prime target for security breaches.', likelihood: 'Medium', impact: 'High', mitigation: 'We will implement a multi-layered security approach, including encryption, access control, and regular security audits. We will also conduct penetration testing to identify and address any vulnerabilities.' },
  { risk: 'Scalability Issues: The platform needs to be able to handle a large number of users and transactions, and any scalability issues could impact the user experience.', likelihood: 'Medium', impact: 'High', mitigation: 'We design the architecture for scalability from the ground up, using technologies such as microservices, load balancing, and auto-scaling. We will also conduct load testing to ensure that the platform can handle the expected traffic.' },
  { risk: 'Talent Acquisition: The project requires a highly skilled and experienced team, and it may be challenging to find and retain the right talent.', likelihood: 'Medium', impact: 'Medium', mitigation: 'We will offer competitive compensation and benefits packages, and we will create a positive and supportive work environment. We will also leverage our network to find the best talent in the industry.' },
  { risk: 'Scope Creep: The project scope may expand over time, which could impact the project timeline and budget.', likelihood: 'Medium', impact: 'Medium', mitigation: 'We will establish a clear and concise project scope, and we will use a change control process to manage any changes to the scope.' },
];

const RiskLevelBadge: React.FC<{ level: 'High' | 'Medium' | 'Low' }> = ({ level }) => {
    const levelClasses = {
        High: 'bg-red-100 text-red-800',
        Medium: 'bg-yellow-100 text-yellow-800',
        Low: 'bg-green-100 text-green-800',
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${levelClasses[level]}`}>{level}</span>;
}


const Risks: React.FC = () => {
  return (
    <Section title="AI-Augmented Risk Management" id="risks">
        <div className="max-w-6xl mx-auto">
            <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                ⚠️ We proactively identify and mitigate risks, augmented by our proprietary AI. <span className="font-bold text-cyan-600">SENTINEL™</span> continuously monitors for threats, dynamically adjusting risk assessments and suggesting mitigation strategies to stay ahead of potential issues.
            </p>
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
                <table className="w-full text-left">
                    <thead className="border-b border-gray-200 text-sm text-gray-500">
                        <tr>
                            <th className="p-4 w-1/3">Risk</th>
                            <th className="p-4 text-center">Likelihood</th>
                            <th className="p-4 text-center">Impact</th>
                            <th className="p-4 w-1/3">Mitigation Strategy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {risksData.map((item, index) => (
                            <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                                <td className="p-4 text-sm align-top">{item.risk}</td>
                                <td className="p-4 text-center align-top"><RiskLevelBadge level={item.likelihood} /></td>
                                <td className="p-4 text-center align-top"><RiskLevelBadge level={item.impact} /></td>
                                <td className="p-4 text-sm align-top">{item.mitigation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </Section>
  );
};

export default Risks;