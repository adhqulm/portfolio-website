import { Profile, Experience, Education, Project } from './types/types';

export const PROFILE_DATA: Profile = {
  name: "Kristina Ganina",
  title: "Full Stack Developer",
  summary: "A versatile and innovative fullstack developer with a passion for continuous learning. I specialize in building scalable, high-quality solutions using a diverse tech stack that includes React, TypeScript, and .NET, while also leveraging unique expertise in IBM mainframe technologies.",
  summary2: `
My name is Kristina and I am described as a determined, self-motivated, and ambitious developer by my peers.
I have several hobbies that keep me busy while I'm not programming, these include: making music and playing video games. 
I'm always looking for new passions and hobbies to explore and learn about. I completed my education in Abu Dhabi and attended university where I specialized in Engineering and Physics, then promptly moved back to Russia in 2024.
A great piece of software is never finished, it is only improved upon continually. Coding is an art form and a science all at once.
I strive to take any project I work on to new heights, striving to create the most useful and well executed solutions I can.`,
  contact: {
    phone: "+7 (993) 324-14-55",
    email: "adhqulm@gmail.com",
    location: "Moscow, Russia",
  },
  social: {
      github: "https://github.com/adhqulm",
      linkedin: "https://www.linkedin.com"
  }
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Data Engineer & Analyst",
    company: "BWorldArt",
    period: "2025 - Present",
    description: [
      "Design, build, and maintain scalable data pipelines and architectures to support business intelligence and advanced analytics.",
      "Develop and optimize ETL processes, ensuring accuracy, consistency, and efficiency of large datasets across multiple platforms.",
      "Perform in-depth data analysis to identify trends, generate actionable insights, and support data-driven decision making.",
      "Collaborate with cross-functional teams to translate complex data requirements into practical solutions and reporting tools.",
    ],
  },
  {
    role: "Python Developer Consultant",
    company: "Yandex Practicum",
    period: "2024 - 2025",
    description: [
      "Design and implement efficient Python applications and scripts tailored to client requirements, focusing on performance and scalability.",
      "Provide expert consulting on software architecture, best practices, and integration of Python-based solutions into existing systems.",
      "Develop automation tools, APIs, and data processing workflows to streamline business operations and reduce manual effort.",
      "Collaborate with stakeholders to gather requirements, deliver technical guidance, and ensure successful project outcomes.",
    ],
  }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "Virtual Proposals",
        description: "A modern, and cute website for proposing to your loved ones digitally, making use of SSR for secure encryption / decryption of request tokens and PDF generation.",
        tags: ["NextJs", "TypeScript", "Vercel", "REST API", "CI/CD", "Entra ID", "Github Actions"],
        imageUrl: "/image.png",
        liveUrl: "https://www.virtualproposals.com/",
    },
    {
        title: "Portfolio Website :)",
        description: "A simple personal portfolio website built to showcase projects and skills.",
        tags: ["TypeScript", "JavaScript", "CSS", "JSON", "Markdown"],
        imageUrl: "/portfolio.png",
        liveUrl: "https://kristinaganina.com/",
    },
    {
        title: "Graphing Calculator",
        description: "A lightweight Python tool using Tkinter and Matplotlib that focuses on plotting mathematical functions from user input, and basic algebraic calculations.",
        tags: ["Python", "Tkinter", "Matplotlib", "NumPy"],
        imageUrl: "/calculator.png",
        liveUrl: "https://github.com/adhqulm/Calculator",
    },
    {
        title: "py2js-mini",
        description: "A tiny Python → JavaScript transpiler. Parse Python, lower it, emit JS, and run with a mini runtime.",
        tags: ["Python", "JavaScript", "Transpiler", "Powershell"],
        imageUrl: "/transpiler.png",
        liveUrl: "https://github.com/adhqulm/py2js-mini",
    },


];

export const TECHNOLOGIES: string[] = [
  ".NET", "React", "Next.js", "TypeScript", "JavaScript", "ASP.Net Core", "Rest APIs", "Azure", "COBOL", 
  "SQL Server", "JCL", "SQL", "Python", "HTML/CSS", "Tailwind CSS", "Git", "Docker"
];

export const CORE_SKILLS: string[] = [
  "Agile Methodologies", "CI/CD",
  "Excellent collaboration skills", "Database design & Query optimization",
  "Test Driven Development"
];

export const LANGUAGES: string[] = ["Russian: Native", "English: Native"];
