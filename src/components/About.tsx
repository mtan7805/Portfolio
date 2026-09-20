import { useEffect, useRef, useState } from "react";
import { Code2, FolderCode, GraduationCap, X } from "lucide-react";
import { projectsData } from "../data/projectsData";
import "./About.css";

const letterLines = [
  "Xin chào, tôi là Tân!",
  "Tôi yêu thích việc biến một ý tưởng thành sản phẩm có thể sử dụng mỗi ngày. Với tôi, một website tốt bắt đầu từ việc hiểu người dùng, rồi chăm chút cho từng chi tiết — từ giao diện đến những dòng code phía sau.",
  "Tôi đang học Công nghệ thông tin tại Đại học Công nghiệp Hà Nội và theo đuổi hướng Frontend & Fullstack. Các dự án thực tế là cách tôi học: tự tìm hiểu, thử nghiệm, giải quyết vấn đề và liên tục cải thiện.",
  "Tôi muốn xây dựng những ứng dụng dễ dùng, nhanh và đáng tin cậy. Tôi cũng luôn sẵn sàng lắng nghe, học hỏi và cùng mọi người làm ra điều gì đó có ích.",
  "Cảm ơn bạn đã ghé qua,",
  "Minh Tân",
];
const totalCharacters = letterLines.join("").length;
const typingDelay = 220;
const characterDuration = 18;

function LetterContent() {
  const [visibleCharacters, setVisibleCharacters] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? totalCharacters
      : 0,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const startedAt = performance.now() + typingDelay;
    let frameId: number;

    const typeNextCharacters = (now: number) => {
      const count = motionPreference.matches
        ? totalCharacters
        : Math.min(
            totalCharacters,
            Math.max(0, Math.floor((now - startedAt) / characterDuration)),
          );
      setVisibleCharacters(count);
      if (count < totalCharacters)
        frameId = requestAnimationFrame(typeNextCharacters);
    };

    frameId = requestAnimationFrame(typeNextCharacters);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const renderLine = (text: string, index: number, className?: string) => {
    const start = letterLines.slice(0, index).join("").length;
    const count = Math.max(0, visibleCharacters - start);

    return (
      <p key={index} className={className}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          <span className="about-letter-typed">{text.slice(0, count)}</span>
          <span className="about-letter-untyped">{text.slice(count)}</span>
        </span>
      </p>
    );
  };

  return (
    <>
      <div className="about-letter-content">
        {letterLines.slice(0, -2).map((text, index) => renderLine(text, index))}
      </div>
      {renderLine(letterLines[4], 4, "about-letter-signoff")}
      {renderLine(letterLines[5], 5, "about-letter-signature")}
    </>
  );
}

export default function About() {
  const letterRef = useRef<HTMLDialogElement>(null);
  const [letterOpen, setLetterOpen] = useState(false);

  useEffect(() => {
    if (!letterOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [letterOpen]);

  const openLetter = () => {
    letterRef.current?.showModal();
    if (letterRef.current) letterRef.current.scrollTop = 0;
    setLetterOpen(true);
  };

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-container">
        <div className="about-intro">
          <span className="about-flower" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <h2 id="about-title" className="about-title">
            About Me
          </h2>
          <svg className="about-spark" viewBox="0 0 100 100" aria-hidden="true">
            <g stroke="currentColor" strokeWidth="15">
              <path d="M50 4v92M4 50h92M17 17l66 66M17 83l66-66" />
            </g>
          </svg>
          <button
            type="button"
            className="about-folder-button"
            onClick={openLetter}
            aria-label="Mở lá thư về tôi và cách tôi làm việc"
            aria-haspopup="dialog"
          >
            <span className="about-folder" aria-hidden="true">
              <span className="about-folder-back" />
              <span className="about-folder-paper">
                <span>hello, you.</span>
              </span>
              <span className="about-folder-front" />
            </span>
            <span className="about-folder-prompt">Click me!</span>
          </button>
          <p className="about-folder-hint">
            Một chút về tôi, phía sau những dòng code.
          </p>
        </div>

        <div className="about-details">
          <article className="about-detail">
            <h3>
              <span className="about-detail-icon">
                <GraduationCap size={21} />
              </span>
              Education
            </h3>
            <p className="about-detail-lead">Đại học Công nghiệp Hà Nội</p>
            <p>Công nghệ thông tin · 2023 — 2027</p>
            <p className="about-detail-note">Sinh viên 4 · GPA: 3.2 / 4.0</p>
          </article>
          <article className="about-detail">
            <h3>
              <span className="about-detail-icon">
                <Code2 size={20} />
              </span>
              My Focus
            </h3>
            <p className="about-detail-lead">
              Frontend & Fullstack Development
            </p>
            <p>
              Giao diện chỉn chu, mã nguồn dễ bảo trì và trải nghiệm sử dụng
              mượt mà.
            </p>
            <p className="about-detail-note">
              ReactJS · Next.js · TypeScript · NestJS
            </p>
          </article>
          <article className="about-detail">
            <h3>
              <span className="about-detail-icon">
                <FolderCode size={20} />
              </span>
              Hands-on Projects
            </h3>
            <p className="about-detail-lead">Học bằng cách xây dựng</p>
            <p>
              Từ ứng dụng video ngắn, đặt phòng khách sạn đến API thương mại
              điện tử.
            </p>
            <a className="about-projects-link" href="#projects">
              Khám phá {projectsData.length} dự án của tôi{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>

      <dialog
        ref={letterRef}
        className="about-letter-dialog"
        aria-labelledby="about-letter-title"
        onClose={() => setLetterOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) letterRef.current?.close();
        }}
      >
        <div className="about-letter">
          <button
            type="button"
            className="about-letter-close"
            aria-label="Đóng lá thư"
            onClick={() => letterRef.current?.close()}
            autoFocus
          >
            <X size={22} />
          </button>
          <span className="about-letter-eyebrow">A LITTLE NOTE FROM ME</span>
          <h2 id="about-letter-title">My Philosophy</h2>
          {letterOpen && <LetterContent />}
        </div>
      </dialog>
    </section>
  );
}
