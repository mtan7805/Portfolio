import { Laptop, Server, Settings } from "lucide-react";
import type { SkillCategory } from "../types/skill";

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Frontend Development",
    category: "frontend",
    icon: <Laptop className="text-emerald-400" size={22} />,
    hoverBorder: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    tagHoverBorder: "hover:border-emerald-500/40",
    skills: [
      { name: "ReactJS" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3 / JS" },
    ],
  },
  {
    title: "Backend & Databases",
    category: "backend",
    icon: <Server className="text-indigo-400" size={22} />,
    hoverBorder: "hover:border-indigo-500/30 hover:shadow-indigo-500/5",
    tagHoverBorder: "hover:border-indigo-500/40",
    skills: [
      { name: "NestJS" },
      { name: "Node.js & Express" },
      { name: "PostgreSQL & SQL" },
      { name: "MongoDB NoSQL" },
      { name: "RESTful APIs" },
    ],
  },
  {
    title: "Tools & Methods",
    category: "tools",
    icon: <Settings className="text-cyan-400" size={22} />,
    hoverBorder: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
    tagHoverBorder: "hover:border-cyan-500/40",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker Basics" },
      { name: "Postman API" },
      { name: "Vite & Build Tools" },
      { name: "Agile / Scrum" },
    ],
  },
];
