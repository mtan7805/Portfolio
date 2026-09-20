import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Github } from "./BrandIcons";
import avatarImg from "../assets/image1.jpg";
import avatarImg2 from "../assets/image2.png";

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-stage">
        <a
          href="https://github.com/mtan7805"
          target="_blank"
          rel="noreferrer"
          className="polaroid polaroid-code"
          aria-label="Khám phá GitHub của Minh Tân"
        >
          <div className="portrait-photo">
            <img
              src={avatarImg2}
              alt=""
              width="354"
              height="472"
              fetchPriority="high"
            />
          </div>
          <span className="polaroid-caption">
            from idea to interface <ArrowUpRight size={14} />
          </span>
          <span className="polaroid-tape" aria-hidden="true" />
        </a>

        <div className="hero-copy">
          <p className="hero-hello">
            Hello, I’m Minh Tân{" "}
            <span className="hello-spark" aria-hidden="true">
              <i />
              <i />
            </span>
          </p>
          <h1 id="hero-title">Frontend Developer</h1>
          <p className="hero-description">
            Xây dựng những trải nghiệm web hiện đại bằng sự kết hợp giữa công
            nghệ và sáng tạo.
          </p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href="https://github.com/mtan7805"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} /> GitHub <ArrowUpRight size={16} />
            </a>
            <a className="button button-blue" href="#projects">
              Xem dự án <ArrowDown size={18} />
            </a>
          </div>
        </div>

        <figure className="polaroid polaroid-portrait">
          <div className="portrait-photo">
            <img
              src={avatarImg}
              alt="Chân dung Lê Minh Tân"
              width="354"
              height="472"
              fetchPriority="high"
            />
          </div>
          <figcaption className="polaroid-caption">
            yep, that’s me! <span aria-hidden="true">☺</span>
          </figcaption>
          <span className="portrait-location">
            <MapPin size={12} /> Hà Nội, Việt Nam
          </span>
          <span className="polaroid-tape" aria-hidden="true" />
        </figure>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 260" preserveAspectRatio="xMidYMid slice">
          <defs>
            <path id="welcome-curve" d="M -240 -30 Q 720 450 1680 -30" />
          </defs>
          <text textLength="3200" lengthAdjust="spacing">
            <textPath href="#welcome-curve" startOffset="-200">
              {"WELCOME TO MY PORTFOLIO ✦ ".repeat(5)}
              {!reducedMotion && (
                <animate
                  attributeName="startOffset"
                  from="-200"
                  to="-840"
                  dur="24s"
                  repeatCount="indefinite"
                />
              )}
            </textPath>
          </text>
        </svg>
      </div>
      <a className="hero-scroll" href="#about">
        a little more about me <ArrowDown size={14} />
      </a>
    </section>
  );
}
