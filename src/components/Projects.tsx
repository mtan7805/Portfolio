import { useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Github } from "./BrandIcons";
import backendApiImage from "../assets/Backend-API.png";
import hotelBookingImage from "../assets/hotel-booking.png";
import shortVideoImage from "../assets/video-short.png";
import { projectsData } from "../data/projectsData";
import type { Project } from "../types/project";
import "./Projects.css";

const categoryLabels: Record<Project["category"], string> = {
  frontend: "FRONTEND DEVELOPMENT",
  fullstack: "FULLSTACK DEVELOPMENT",
  backend: "BACKEND DEVELOPMENT",
};

const projectPreviews = {
  video: {
    src: shortVideoImage,
    alt: "Giao diện trang hồ sơ Short Video App",
    width: 2560,
    height: 1332,
  },
  hotel: {
    src: hotelBookingImage,
    alt: "Trang chủ ứng dụng Hotel Booking",
    width: 2510,
    height: 1326,
  },
  api: {
    src: backendApiImage,
    alt: "Tài liệu Swagger của E-Commerce API",
    width: 2528,
    height: 1324,
  },
};

function ProjectPreview({ kind }: { kind: Project["preview"] }) {
  return (
    <div className={`project-preview project-preview-image project-preview-${kind}`}>
      <img
        {...projectPreviews[kind]}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const total = projectsData.length;

  if (total === 0) return null;

  function selectProject(index: number) {
    setActiveIndex((index + total) % total);
    setExpandedIndex(null);
  }

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="projects-ribbon" aria-label="Problem solver, team player, fast learner, detail oriented">
        <div className="projects-ribbon-track" aria-hidden="true">
          {[0, 1].map((copy) => <span key={copy}>PROBLEM SOLVER <b>✦</b> TEAM PLAYER <b>✦</b> FAST LEARNER <b>✦</b> DETAIL ORIENTED <b>✦</b></span>)}
        </div>
      </div>

      <div className="section-container projects-container">
        <div className="projects-heading-wrap">
          <span className="projects-eyebrow">A FEW THINGS I'VE BUILT</span>
          <h2 id="projects-heading">Projects<span>.</span></h2>
          <p>Từ những ý tưởng nhỏ đến trải nghiệm thực tế.</p>
        </div>

        <div
          className="projects-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Các dự án nổi bật"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              selectProject(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
          onTouchStart={(event) => {
            touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
          }}
          onTouchEnd={(event) => {
            if (!touchStart.current) return;
            const dx = event.changedTouches[0].clientX - touchStart.current.x;
            const dy = event.changedTouches[0].clientY - touchStart.current.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
              selectProject(activeIndex + (dx < 0 ? 1 : -1));
            }
            touchStart.current = null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
        >
          <div className="projects-stage">
            {projectsData.map((project, index) => {
              const offset = (index - activeIndex + total) % total;
              const position = offset === 0 ? "active" : offset === 1 ? "next" : offset === total - 1 ? "previous" : "hidden";
              const isActive = index === activeIndex;
              const isExpanded = expandedIndex === index;

              return (
                <article className={`project-card project-card-${position}`} key={project.title} role="group" aria-roledescription="slide" aria-label={`${index + 1} / ${total}: ${project.title}`}>
                  <div className="project-card-content" inert={!isActive}>
                    <ProjectPreview kind={project.preview} />
                    <div className="project-card-body">
                      <div className="project-card-meta"><span>{categoryLabels[project.category]}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <button className="project-features-toggle" type="button" aria-expanded={isExpanded} aria-controls={`project-features-${index}`} tabIndex={isActive ? 0 : -1} onClick={() => setExpandedIndex(isExpanded ? null : index)}>Điểm nổi bật <ArrowDown size={12} className={isExpanded ? "project-features-arrow-open" : ""} /></button>
                      <div id={`project-features-${index}`} className="project-features-panel" data-open={isExpanded} aria-hidden={!isExpanded} inert={!isExpanded}>
                        <div className="project-features-clip">
                          <ul className="project-features">{project.features.map((feature) => <li key={feature}><Check size={13} /><span>{feature}</span></li>)}</ul>
                        </div>
                      </div>
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noreferrer" tabIndex={isActive ? 0 : -1}><Github size={15} /> {project.category === "backend" ? "API source" : "GitHub"}<ArrowUpRight size={13} /></a>
                        {project.demo !== project.github && <a className="project-demo" href={project.demo} target="_blank" rel="noreferrer" tabIndex={isActive ? 0 : -1}>Live demo <ArrowUpRight size={15} /></a>}
                      </div>
                    </div>
                  </div>
                  {!isActive && <button type="button" className="project-card-select" tabIndex={-1} aria-label={`Xem dự án ${project.title}`} onClick={() => selectProject(index)} />}
                </article>
              );
            })}
          </div>

          <div className="projects-controls" hidden={total < 2}>
            <button type="button" className="projects-arrow projects-arrow-previous" aria-label="Dự án trước" onClick={() => selectProject(activeIndex - 1)}><ArrowLeft size={19} /></button>
            <div className="projects-pagination" aria-label="Chọn dự án">{projectsData.map((project, index) => <button key={project.title} type="button" className={index === activeIndex ? "projects-dot projects-dot-active" : "projects-dot"} aria-label={`Xem ${project.title}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => selectProject(index)}><span /></button>)}</div>
            <button type="button" className="projects-arrow projects-arrow-next" aria-label="Dự án tiếp theo" onClick={() => selectProject(activeIndex + 1)}><ArrowRight size={19} /></button>
          </div>
          <p className="projects-announcement" role="status" aria-live="polite">Dự án {activeIndex + 1} trên {total}: {projectsData[activeIndex]?.title}</p>
        </div>
      </div>
    </section>
  );
}
