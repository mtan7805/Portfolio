import {
  Braces,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { ReactIcon, TailwindIcon } from "./BrandIcons";
import { skillsData } from "../data/skillsData";
import "./Skills.css";

function SkillLogo({ name }: { name: string }) {
  switch (name) {
    case "ReactJS":
      return <ReactIcon size={36} aria-hidden="true" />;
    case "Next.js":
      return (
        <span className="skills-next-logo" aria-hidden="true">
          N
        </span>
      );
    case "TypeScript":
      return (
        <span className="skills-ts-logo" aria-hidden="true">
          TS
        </span>
      );
    case "Tailwind CSS":
      return <TailwindIcon size={38} aria-hidden="true" />;
    case "HTML5 / CSS3 / JS":
      return <Globe size={31} color="#e46c38" aria-hidden="true" />;
    case "NestJS":
      return (
        <span className="skills-nest-logo" aria-hidden="true">
          nest
        </span>
      );
    case "Node.js & Express":
      return <Braces size={33} color="#59a146" aria-hidden="true" />;
    case "PostgreSQL & SQL":
      return <Database size={31} color="#3d6c93" aria-hidden="true" />;
    case "MongoDB NoSQL":
      return <Database size={31} color="#45974d" aria-hidden="true" />;
    case "RESTful APIs":
      return <Server size={31} color="#595ba8" aria-hidden="true" />;
    case "Git & GitHub":
      return <GitBranch size={31} color="#ed6042" aria-hidden="true" />;
    case "Docker Basics":
      return <Layers size={31} color="#2999d5" aria-hidden="true" />;
    case "Postman API":
      return <Terminal size={31} color="#ef7d46" aria-hidden="true" />;
    case "Vite & Build Tools":
      return <Zap size={32} color="#925cdb" aria-hidden="true" />;
    default:
      return <Workflow size={31} color="#687482" aria-hidden="true" />;
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-container">
        <div className="skills-track">
          {[0, 1].map((copy) => (
            <ul
              className="skills-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {skillsData.map((name) => (
                <li className="skills-item" key={name}>
                  <span className="skills-logo">
                    <SkillLogo name={name} />
                  </span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
