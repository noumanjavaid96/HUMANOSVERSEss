// Fix: Correctly type JSX elements by importing ReactNode from react to resolve "Cannot find namespace 'JSX'" error.
import type { ReactNode } from 'react';

export interface Principle {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  role: string;
  responsibility: string;
}

export interface Risk {
  risk: string;
  likelihood: 'High' | 'Medium' | 'Low';
  impact: 'High' | 'Medium' | 'Low';
  mitigation: string;
}

export interface Sprint {
  sprint: string;
  duration: string;
  focus: string;
  goals: string[];
  deliverables: string[];
}