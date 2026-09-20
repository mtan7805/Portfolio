import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const navItems = [
  { label: "About me", id: "about" },
  { label: "Projects", id: "projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    for (const id of ["home", "about", "projects", "contact"]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node))
        setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 601px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav
        ref={navigationRef}
        className="navigation"
        aria-label="Điều hướng chính"
      >
        <a
          className="monogram"
          href="#home"
          aria-label="Minh Tân — Trang chủ"
          onClick={() => setIsOpen(false)}
        >
          <img className="nav-logo" src={logo} alt="" width="49" height="49" />
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "nav-active" : ""}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div id="mobile-nav" className="mobile-nav" hidden={!isOpen}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Let’s talk <ArrowUpRight size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
