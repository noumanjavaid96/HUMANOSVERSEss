
import React from 'react';
import Section from './Section';
import type { Sprint } from '../types';

const timelineData: Sprint[] = [
    {
      sprint: 'Sprint 1',
      duration: '2 Weeks',
      title: 'Core Architecture & Foundation',
      goals: [
        'Define microservices architecture.',
        'Set up CI/CD pipeline.',
        'Establish database schema.',
      ],
      deliverables: [
        'Technical architecture document.',
        'Initial project scaffolding.',
        'Authenticated API gateway.',
      ],
    },
    {
      sprint: 'Sprint 2-3',
      duration: '4 Weeks',
      title: 'Ethical AI Core (HILARA™) - Phase 1',
      goals: [
        'Develop core ethical validation algorithms.',
        'Train initial AI models on test data.',
        'Create AI model serving infrastructure.',
      ],
      deliverables: [
        'HILARA™ v0.1 API endpoint.',
        'Internal dashboard for AI monitoring.',
        'Report on initial model accuracy.',
      ],
    },
    {
      sprint: 'Sprint 4-5',
      duration: '4 Weeks',
      title: 'Security Stack (ID-QR™ & H-Vault™)',
      goals: [
        'Implement dynamic QR code authentication.',
        'Build end-to-end encrypted storage solution.',
        'Integrate security modules with user service.',
      ],
      deliverables: [
        'Functional ID-QR™ login flow.',
        'H-Vault™ SDK for internal services.',
        'Initial security audit report.',
      ],
    },
    {
      sprint: 'Sprint 6-8',
      duration: '6 Weeks',
      title: 'H-Social & H-Messenger (MVP)',
      goals: [
        'Develop core social features (posts, profiles, etc.).',
        'Implement real-time messaging.',
        'Integrate HILARA™ for content moderation.',
      ],
      deliverables: [
        'Internal MVP of H-Social & H-Messenger.',
        'Demonstration of real-time ethical validation.',
        'User-facing UI components library.',
      ],
    },
];

const CheckIcon = () => (
    <svg className="w-6 h-6 text-cyan-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const GoalIcon = () => (
    <svg className="w-6 h-6 text-cyan-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);


const Timeline: React.FC = () => {
  return (
    <Section title="High-Level Timelines & Deliverables" id="timeline" className="bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                The project is structured into two-week sprints, allowing for an agile and iterative development process. This timeline provides a <strong>very high-level overview</strong> of the key phases and major deliverables.
            </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 w-1 h-full bg-gray-200 rounded"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12 mb-16">
              {/* Dot */}
              <div className="absolute left-4 top-2 -ml-2.5 w-6 h-6 rounded-full bg-cyan-500 border-4 border-white"></div>
              
              <div className="mb-4">
                  <span className="bg-cyan-100 text-cyan-800 text-lg font-semibold mr-3 px-4 py-1.5 rounded-full">{item.sprint}</span>
                  <span className="text-lg text-gray-500 font-medium">{item.duration}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">{item.title}</h3>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 bg-white p-6 rounded-lg border border-gray-200">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Goals:</h4>
                  <ul className="space-y-3">
                    {item.goals.map((goal, i) => (
                      <li key={i} className="flex items-center text-lg text-gray-700">
                        <GoalIcon />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Deliverables:</h4>
                  <ul className="space-y-3">
                    {item.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center text-lg text-gray-700">
                        <CheckIcon />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;