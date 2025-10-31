
import React from 'react';
import Section from './Section';
import type { Sprint } from '../types';

const mvpScope = [
    "H-Social: Social feed, user profiles, and content creation",
    "H-Messenger: Real-time chat and media sharing",
    "H-Vault (Tresor™): Secure file storage and encryption",
    "ID–QR™ Authentication: Dynamic QR code-based authentication",
    "HILARA™: AI-powered ethical validation",
    "SENTINEL™: AI-powered security and threat detection",
];

const timelineData: Sprint[] = [
  { sprint: 'Sprint 1', duration: 'Weeks 1-2', focus: 'Foundation & Authentication', goals: ['Set up development environment and CI/CD pipeline', 'Design and implement core database schema', 'Develop ID–QR™ authentication system', 'Implement user registration and login flows'], deliverables: ['Secure and scalable infrastructure', 'Functional user authentication system', 'API documentation for authentication endpoints'] },
  { sprint: 'Sprint 2', duration: 'Weeks 3-4', focus: 'H-Social & User Profiles', goals: ['Develop H-Social feed for creating and viewing posts', 'Implement user profiles (pictures, bios, connections)', 'Develop content creation and management functionalities'], deliverables: ['Functional social feed', 'Ability to create, edit, and delete user profiles', 'Ability to create, edit, and delete posts'] },
  { sprint: 'Sprint 3', duration: 'Weeks 5-6', focus: 'H-Messenger & Real-time Communication', goals: ['Develop H-Messenger module for real-time chat', 'Implement media sharing (images and videos)', 'Integrate push notifications for new messages'], deliverables: ['Real-time chat application', 'Ability to send and receive text messages and media files', 'Push notifications for new messages'] },
  { sprint: 'Sprint 4', duration: 'Weeks 7-8', focus: 'H-Vault & Secure Storage', goals: ['Develop H-Vault (Tresor™) for secure file storage', 'Implement AES-512 encryption for all files', 'Develop file upload, download, and management functionalities'], deliverables: ['Secure and encrypted file storage system', 'Ability to upload, download, and delete files', 'API documentation for H-Vault endpoints'] },
  { sprint: 'Sprint 5', duration: 'Weeks 9-10', focus: 'HILARA™ & SENTINEL™ Integration', goals: ['Integrate HILARA™ AI engine for ethical validation', 'Integrate SENTINEL™ AI engine for security and threat detection', 'Develop AI-powered content moderation and user behavior analysis'], deliverables: ['AI-powered ethical validation system', 'AI-powered security and threat detection system', 'Content moderation system to flag and remove inappropriate content'] },
  { sprint: 'Stabilization', duration: 'Week 11', focus: 'Testing & Deployment', goals: ['Conduct end-to-end testing of the platform', 'Fix any bugs or issues identified', 'Deploy the MVP to production environment'], deliverables: ['Stable and bug-free MVP', 'Live and accessible HUMANOSVERSE™ platform'] },
];


const Timeline: React.FC = () => {
  return (
    <Section title="Project Timeline: MVP" id="timeline" className="bg-slate-900/70">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-white mb-4">🎯 Core MVP Functionalities</h3>
            <ul className="text-left text-slate-300 space-y-2">
                {mvpScope.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        <p className="text-slate-400 mb-8">The MVP development will be divided into five two-week sprints, followed by a one-week stabilization and deployment phase.</p>

        <div className="space-y-8">
            {timelineData.map((sprint) => (
                <div key={sprint.sprint} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-left md:flex md:items-start md:gap-6 hover:border-cyan-400/50 transition-colors duration-300">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                        <h4 className="text-xl font-bold text-cyan-400">{sprint.sprint}</h4>
                        <p className="text-sm text-slate-400">{sprint.duration}</p>
                        <p className="text-md font-semibold text-white mt-2">{sprint.focus}</p>
                    </div>
                    <div className="md:w-3/4 grid md:grid-cols-2 gap-6">
                        <div>
                            <h5 className="font-semibold text-slate-300 mb-2">Key Goals</h5>
                            <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                                {sprint.goals.map((goal, i) => <li key={i}>{goal}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-300 mb-2">Deliverables</h5>
                            <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                                {sprint.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
         <p className="mt-12 text-center text-slate-500 italic text-sm max-w-3xl mx-auto">
            📝 Note: This timeline is a high-level estimate. HILARA™ provides AI-driven analysis during each sprint to forecast potential ethical implications of new features, ensuring our development stays true to our principles.
        </p>

      </div>
    </Section>
  );
};

export default Timeline;