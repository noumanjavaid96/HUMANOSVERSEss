
import React from 'react';
import Section from './Section';
import type { TeamMember } from '../types';

const teamData: TeamMember[] = [
  { role: 'Project Manager', responsibility: 'Oversees the entire project, managing timeline, budget, and ensuring all project goals are met.' },
  { role: 'Product Owner', responsibility: 'Defines the product vision, prioritizes features, and ensures the development team is building the right product.' },
  { role: 'Business Analyst', responsibility: 'Facilitates the Scrum process, removes impediments, and ensures the development team is working effectively.' },
  { role: 'Lead Architect', responsibility: 'Designs the overall architecture of the platform, ensuring it is scalable, secure, and performant.' },
  { role: 'Backend Developers', responsibility: 'Build the server-side logic, APIs, and database infrastructure.' },
  { role: 'Frontend Developers', responsibility: 'Build the user interface and user experience of the web and mobile applications.' },
  { role: 'AI/ML Engineers', responsibility: 'Develop and train the AI models that will power the HILARA™ and SENTINEL™ systems.' },
  { role: 'QA Engineers', responsibility: 'Test the platform to ensure it is free of bugs and meets all quality standards.' },
  { role: 'DevOps Engineers', responsibility: 'Manage the infrastructure, CI/CD pipelines, and deployment processes.' },
  { role: 'HILARA™ (AI Team Member)', responsibility: 'Provides continuous ethical oversight and decision support for all team roles, ensuring project integrity.' },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className={`p-6 rounded-lg border text-left transition-all duration-300 ${member.role.includes('AI') ? 'bg-cyan-50 border-cyan-300/50 shadow-lg shadow-cyan-500/10' : 'bg-white border-gray-200 hover:border-cyan-500/50'}`}>
        <h4 className="font-bold text-gray-900 text-lg">{member.role}</h4>
        <p className="mt-2 text-gray-600 text-sm">{member.responsibility}</p>
    </div>
);

const Team: React.FC = () => {
  return (
    <Section title="Suggested Team Structure" id="team" className="bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;