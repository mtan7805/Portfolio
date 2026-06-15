import { useState } from "react";
import { ExternalLink, Code, Database, Radio } from "lucide-react";
import { Github } from "./BrandIcons";
import { projectsData } from "../data/projectsData";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [filter, setFilter] = useState<
    "all" | "frontend" | "fullstack" | "backend"
  >("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-start pt-20 lg:pt-28 pb-10 overflow-hidden bg-gray-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
              Dự Án Nổi Bật
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(["all", "frontend", "fullstack", "backend"] as const).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800"
                  style={{
                    backgroundColor:
                      filter === cat ? "var(--color-emerald-500)" : "",
                    borderColor:
                      filter === cat ? "var(--color-emerald-400)" : "",
                    color: filter === cat ? "white" : "",
                  }}
                >
                  {cat === "all"
                    ? "Tất cả"
                    : cat === "frontend"
                      ? "Frontend"
                      : cat === "fullstack"
                        ? "Fullstack"
                        : "Backend"}
                </button>
              ),
            )}
          </div>
        </ScrollReveal>

        {/* Projects Grid Display (3 cards parallel showcase) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mx-auto items-stretch">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 150}
                className="h-full"
              >
                <div className="flex flex-col bg-gray-900/35 border border-white/5 rounded-2xl glass-effect glass-effect-hover p-6 shadow-xl transition-all duration-300 hover:border-emerald-500/20 hover:shadow-emerald-500/5 hover:-translate-y-1 text-left h-full">
                  {/* Visual Mockup inside card */}
                  <div className="relative h-40 w-full rounded-xl overflow-hidden bg-gray-950 border border-white/5 mb-5 flex-shrink-0">
                    {project.visualMockup}
                  </div>

                  {/* Project Details */}
                  <div className="flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/15">
                          {project.category}
                        </span>
                        <div className="text-gray-500">
                          {project.category === "frontend" ? (
                            <Code size={14} />
                          ) : project.category === "backend" ? (
                            <Database size={14} />
                          ) : (
                            <Radio size={14} />
                          )}
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <ul className="space-y-1 pt-1">
                        {project.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="text-[11px] text-gray-500 flex items-start gap-1.5"
                          >
                            <span className="text-emerald-500 font-bold">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 pt-3.5 border-t border-white/5">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-medium bg-gray-950 border border-gray-800 text-gray-400 px-1.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 text-xs font-semibold">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                          <Github size={14} />
                          Source Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-xs py-12 text-center">
            Chưa có dự án nào trong mục này.
          </p>
        )}
      </div>
    </section>
  );
}
