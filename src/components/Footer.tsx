import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Github, ReactIcon, TailwindIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-intro">
            <a href="#home" className="footer-name">
              Lê Minh Tân
            </a>
            <p>
              Frontend & Fullstack Developer. Yêu thích giao diện tinh tế, mã
              nguồn dễ hiểu và những sản phẩm thực sự hữu ích.
            </p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <a href="#home">Home</a>
            <a href="#about">About me</a>
            <a href="#skills">Tech stack</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="footer-contact">
            <h2>Let’s make something good.</h2>
            <a href="mailto:tanledhcn@gmail.com">
              <Mail size={17} /> tanledhcn@gmail.com <ArrowUpRight size={15} />
            </a>
            <a href="tel:+84348901578">
              <Phone size={16} /> (+84) 34 890 1578
            </a>
            <p>
              <MapPin size={16} /> Cầu Diễn, Hà Nội
            </p>
            <a
              className="footer-github"
              href="https://github.com/mtan7805"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub của Minh Tân"
            >
              <Github size={21} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-built">
            Built with <ReactIcon size={19} />
            <TailwindIcon size={22} />
            <span className="footer-ts">TS</span>
            <span className="sr-only">React, Tailwind CSS và TypeScript</span>
          </div>
          <span>© {new Date().getFullYear()} Minh Tân. Made with care.</span>
          <a href="#home" className="back-to-top" aria-label="Về đầu trang">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
