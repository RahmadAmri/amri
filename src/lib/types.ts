export type EducationItem = {
  school: string;
  program: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  logo?: string;
  link?: string;
  extraLinks?: { label: string; url: string }[];
};

export type ExperienceItem = {
  role: string;
  type: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  technologies: string[];
  logo?: string;
  link?: string;
  website?: string;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  link?: string;
  image?: string;
  tags: string[];
};
