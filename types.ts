import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'Languages' | 'ML/AI' | 'Tools' | 'Soft Skills';
  icon: React.ReactNode;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}