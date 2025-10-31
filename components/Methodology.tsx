
import React from 'react';
import Section from './Section';

const Methodology: React.FC = () => {
    const communicationChannels = [
        "Sprint Planning Meetings",
        "Sprint Review Meetings",
        "Sprint Retrospective Meetings",
        "Weekly Stakeholder Meetings",
        "Project Management Tool (Jira/Trello)",
        "Slack/Discord Channel for real-time collaboration"
    ];
  return (
    <Section title="Development & Communication" id="methodology">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 text-left">
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                <h3 className="text-2xl font-bold text-white">Agile/Scrum Approach</h3>
            </div>
            <p className="mt-4 text-slate-400">
                We will adopt an Agile development methodology, specifically Scrum, to ensure a flexible, iterative, and collaborative approach. This allows us to adapt to changing requirements, deliver value quickly, and continuously improve the platform based on feedback.
            </p>
            <p className="mt-4 text-slate-400 font-semibold text-cyan-400">
                Development is divided into a series of two-week sprints, each focused on delivering specific features and functionalities.
            </p>
        </div>
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="flex items-center gap-3">
                 <span className="text-3xl">💬</span>
                <h3 className="text-2xl font-bold text-white">Communication Plan</h3>
            </div>
            <p className="mt-4 text-slate-400">
                Effective communication is critical. We will establish the following channels to ensure all stakeholders are informed and engaged:
            </p>
            <ul className="mt-4 space-y-2">
                {communicationChannels.map((channel, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-slate-300">{channel}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </Section>
  );
};

export default Methodology;
