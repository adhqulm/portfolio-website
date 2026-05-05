import { Profile, Experience, Education, Project, Certification } from './types/types';

export const PROFILE_DATA: Profile = {
  name: "Kristina Ganina",
  title: "Full Stack Developer",
  summary: "Full Stack Software Engineer with experience building and maintaining web applications and data-driven systems. Strong background in backend development, REST APIs, and data processing workflows. Experienced in working with cross-functional teams to deliver reliable, scalable solutions and improve system performance and data quality.",
  summary2: `
My name is Kristina and I am described as a determined, self-motivated, and ambitious developer by my peers.
I have several hobbies that keep me busy while I'm not programming, these include: making music and playing video games. 
I'm always looking for new passions and hobbies to explore and learn about. I am currently completing my education in an American University where I specialize in Computer Science.
A great piece of software is never finished, it is only improved upon continually. Coding is an art form and a science all at once.
I strive to take any project I work on to new heights, striving to create the most useful and well executed solutions I can.`,
  contact: {
    phone: "+995 555 540 926",
    phone2: "+7 993 324 15 55",
    email: "adhqulm@gmail.com",
    location: "Tbilisi, Georgia",
  },
  social: {
      github: "https://github.com/adhqulm",
  }
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Data Engineer, Data Analyst (Remote)",
    company: "BWorldArt, Peski, Dmitrovsky District, Russia",
    period: "Jul 2025 - Present",
    companyUrl: "https://bworldart.com/",
    imageUrl: "/experience/bworldart.png",
    description: [
      "Designed and maintained data pipelines for collecting, processing, and analyzing structured data.",
      "Improved data processing workflows to increase efficiency and reduce errors.",
      "Analyzed datasets to support product, marketing, and business decisions.",
      "Worked closely with cross-functional teams to align data insights with business goals.",
    ],
  },
  {
    role: "Software Engineer, Full Stack Developer",
    company: "Kobuleti Geo, Kobuleti, Georgia",
    period: "Jan 2025 - Jul 2025",
    companyUrl: "https://kobuletigeo.com/",
    imageUrl: "/experience/kobuleti.png",
    description: [
      "Developed and maintained web applications serving municipal operations and public-facing services.",
      "Collaborated with stakeholders to gather requirements and deliver tailored software solutions.",
      "Implemented new features and resolved issues across the full stack.",
      "Supported deployment pipelines and contributed to code reviews in an agile workflow.",
    ],
  },
  {
    role: "Software Engineer, Full Stack Developer (Remote)",
    company: "USABridge, Watertown, MA, USA",
    period: "Jul 2024 - Jan 2025",
    companyUrl: "https://usabridge.net/",
    imageUrl: "/experience/bridge.png",
    description: [
      "Built and supported client-facing web applications using modern frontend and backend technologies.",
      "Integrated third-party services and APIs.",
      "Fixed bugs, implemented new features, and supported deployment processes.",
      "Worked in an agile environment with regular planning and review cycles.",
    ],
  },
];

export const PROJECTS_DATA: Project[] = [

    {
        title: "FöreUpp",
        description: "A collaborative productivity desktop app built with React, TypeScript, and Tauri. Features a shared calendar with real-time sync across users via Firebase, color-coded event management, personal trackers, countdowns, and a Kanban board. Designed for small teams or households to stay organized together.",
        tags: ["React", "TypeScript", "Tauri", "Firebase", "Vite", "Tailwind CSS", "Desktop App"],
        imageUrl: "/projects/foreupp.png",
        liveUrl: "https://github.com/adhqulm/foreupp",
    },

    {
        title: "Foodgram",
        description: "The purpose of this website is to allow users to create and store recipes on an online platform. In addition, users can download a list of ingredients needed to prepare a dish, view their friends’ recipes, and add favorite recipes to a favorites list.",
        tags: ["Python", "Django", "Django Rest Framework", "Djoser", "Authentication & Authorization", "JavaScript", "HTML", "CSS", "PostgreSQL", "Docker"],
        imageUrl: "/projects/foodgram.png",
        liveUrl: "https://foodgram.bar/",
    },
    {
        title: "Virtual Proposals",
        description: "A modern, and cute website for proposing to your loved ones digitally, making use of SSR for secure encryption / decryption of request tokens and PDF generation.",
        tags: ["NextJs", "TypeScript", "Vercel", "REST API", "CI/CD", "Entra ID", "Github Actions"],
        imageUrl: "/projects/image.png",
        liveUrl: "https://www.virtualproposals.com/",
    },
    {
        title: "Portfolio Website :)",
        description: "Personal portfolio website built to showcase projects, skills, and professional experience. Features smooth animations, bilingual support, and a contact form.",
        tags: ["TypeScript", "JavaScript", "CSS", "JSON", "Markdown"],
        imageUrl: "/projects/portfolio.png",
        liveUrl: "https://kristinaganina.com/",
    },
    {
        title: "BREACH",
        description: "A narrative puzzle game played through a simulated Linux terminal. Break through layers of corporate security, manage a rising detection meter, and uncover a hidden story with multiple endings and CRT visual effects (inspired by Outer Wilds. This was created as a birthday gift and isn't for everyone.)",
        tags: ["JavaScript", "Vite", "HTML5", "Canvas", "CSS", "Web Audio API"],
        imageUrl: "/projects/BREACH.png",
        liveUrl: "https://github.com/adhqulm/BREACH",
    },
    {
        title: "Graphing Calculator",
        description: "A lightweight Python tool using Tkinter and Matplotlib that focuses on plotting mathematical functions from user input, and basic algebraic calculations.",
        tags: ["Python", "Tkinter", "Matplotlib", "NumPy"],
        imageUrl: "/projects/calculator.png",
        liveUrl: "https://github.com/adhqulm/Calculator",
    },
    {
        title: "py2js-mini",
        description: "Tiny Python → JavaScript transpiler. Parse Python, lower it, emit JS, and run with a mini runtime.",
        tags: ["Python", "JavaScript", "Transpiler", "Powershell"],
        imageUrl: "/projects/transpiler.png",
        liveUrl: "https://github.com/adhqulm/py2js-mini",
    },
    {
        title: "File Type Converter",
        description: "Telegram bot that converts files between most major formats like images, documents, audio, video, and PDFs.",
        tags: ["Telegram", "Bot", "Python"],
        imageUrl: "/projects/bot.png",
        liveUrl: "https://t.me/filetypeconverter_bot",
    },

];

export const PROGRAMMINGLANGUAGES: string[] = [
  "C#", "JavaScript", "TypeScript", "Python", "SQL"
];

export const FRAMEWORKS: string[] = [
  ".NET", "React", "Next.js", "ASP.NET Core", "Tailwind CSS", "Django", "Flask", "Electron"
];

export const DATABASES: string[] = [
  "SQL Server", "PostgreSQL", "MySQL"
];

export const CLOUD: string[] = [
  "AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "Linux"
];

export const API: string[] = [
  "CSS/HTML", "REST APIs", "FAST API"
];

export const CORE_SKILLS: string[] = [
  "Agile Methodologies", "Excellent collaboration skills", "Database design & Query optimization", "Test Driven Development"
];

export const LANGUAGES: string[] = ["English: Native", "Russian: Native"];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "University of People, USA",
    degree: "Bachelor of Computer Science",
    period: "2026 - 2030",
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "Advanced Python Development",
    issuer: "Yandex Practicum",
    date: "May 2025 - July 2026",
  },
  {
    name: "Advanced C# and .Net Development",
    issuer: "Yandex Practicum",
    date: "July 2026 - January 2027",
  },
];
