import { Globe, FileJson, Cpu, Code2, Database, Terminal, Settings } from "lucide-react";
import { ReactIcon, NextjsIcon, TypescriptIcon, TailwindIcon, NestjsIcon, NodejsIcon, GitIcon, DockerIcon } from "./BrandIcons";
import ScrollReveal from "./ScrollReveal";
import { skillCategoriesData } from "../data/skillsData";

export default function Skills() {

  const getIcon = (name: string) => {
    switch (name) {
      case "ReactJS":
        return <ReactIcon size={18} />;
      case "Next.js":
        return <NextjsIcon size={18} />;
      case "TypeScript":
        return <TypescriptIcon size={18} />;
      case "Tailwind CSS":
        return <TailwindIcon size={18} />;
      case "HTML5 / CSS3 / JS":
        return <Globe className="text-orange-400" size={18} />;
      case "NestJS":
        return <NestjsIcon size={18} />;
      case "Node.js & Express":
        return <NodejsIcon size={18} />;
      case "PostgreSQL & SQL":
        return <Database className="text-blue-400" size={18} />;
      case "MongoDB NoSQL":
        return <FileJson className="text-emerald-400" size={18} />;
      case "RESTful APIs":
        return <Cpu className="text-indigo-400" size={18} />;
      case "Git & GitHub":
        return <GitIcon size={18} />;
      case "Docker Basics":
        return <DockerIcon size={18} />;
      case "Postman API":
        return <Terminal className="text-orange-500" size={18} />;
      case "Vite & Build Tools":
        return <Code2 className="text-purple-400" size={18} />;
      case "Agile / Scrum":
        return <Settings className="text-cyan-400" size={18} />;
      default:
        return <Code2 className="text-gray-400" size={18} />;
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen lg:min-h-screen flex flex-col justify-start pt-20 lg:pt-28 pb-20 overflow-hidden bg-brand-dark"
    >
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-bg opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
              Kỹ Năng Công Nghệ
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-2 max-w-xl mx-auto text-xs sm:text-sm">
              Công nghệ, ngôn ngữ và công cụ tôi sử dụng thường xuyên trong phát triển Web.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skillCategoriesData.map((category, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 150}
              className="h-full"
            >
              <div
                className={`flex flex-col bg-gray-900/30 border border-white/5 rounded-2xl p-6 glass-effect glass-effect-hover transition-all duration-300 h-full ${category.hoverBorder}`}
              >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                <div className="p-2 bg-gray-950/80 rounded-lg border border-gray-800">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-col gap-2.5 w-full">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-950/40 border border-white/5 hover:bg-gray-900/70 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer w-full ${category.tagHoverBorder}`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                      {getIcon(skill.name)}
                    </div>
                    <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
