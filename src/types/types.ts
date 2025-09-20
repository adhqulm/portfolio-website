export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  summary2: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  social: {
    github: string;
    linkedin: string;
  }
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}
