import { ArrowRight, Terminal, Code2, Cpu } from "lucide-react";
import avatarImg from "../assets/avater.jpg";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen flex items-center justify-center pt-20 lg:pt-0 pb-10 lg:pb-0 overflow-hidden bg-brand-dark"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/12 glow-bg opacity-80"></div>
      <div className="absolute bottom-1/4 right-1/10 glow-bg-indigo opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
          {/* Hero Left Content */}
          <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
            <ScrollReveal direction="left" className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-5 self-center sm:self-start">
              <Terminal size={12} />
              <span>Available for Internship</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              Xin chào, tôi là{" "}
              <span className="block mt-1 bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm font-display">
                Lê Minh Tân
              </span>
            </h1>

            {/* Mobile/Tablet Avatar Visual (Visible ONLY on mobile, right under the H1 name) */}
            <div className="sm:hidden flex justify-center items-center relative my-6">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 animate-float">
                {/* Outer Decorative Ring */}
                <div className="absolute inset-0 rounded-3xl border border-emerald-500/20 animate-[spin_40s_linear_infinite]"></div>
                <div className="absolute -inset-2.5 rounded-3xl border border-indigo-500/10 animate-[spin_60s_linear_infinite_reverse]"></div>
                <div className="absolute inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/10 to-indigo-500/10 blur-lg"></div>

                {/* Profile Image Frame */}
                <div className="absolute inset-2 rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-xl bg-gray-900 flex items-center justify-center">
                  <img
                    src={avatarImg}
                    alt="Lê Minh Tân"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg font-medium text-emerald-400/90 mb-3 font-display">
              Frontend & Fullstack Web Developer
            </p>

            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed">
              Sinh viên CNTT năm 3 định hướng Web Developer. Đam mê xây dựng ứng
              dụng web hiện đại, tối ưu hiệu năng bằng{" "}
              <strong>ReactJS, Next.js, TypeScript</strong> và{" "}
              <strong>NestJS</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mb-8">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-indigo-500 hover:from-emerald-400 hover:to-indigo-400 text-white text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                Xem dự án
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-900 pt-6 max-w-sm mx-auto sm:mx-0">
              <div className="text-center sm:text-left">
                <p className="text-2xl font-extrabold text-white font-display">
                  3
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                  Năm Đại học
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl font-extrabold text-emerald-400 font-display">
                  5+
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                  Dự án
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl font-extrabold text-indigo-400 font-display">
                  10+
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                  Công nghệ
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

          {/* Hero Right Avatar Visual (Desktop only) */}
          <div className="sm:col-span-5 hidden sm:flex justify-center items-center relative">
            <ScrollReveal direction="right" delay={200}>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 animate-float">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-3xl border border-emerald-500/20 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute -inset-3 rounded-3xl border border-indigo-500/10 animate-[spin_60s_linear_infinite_reverse]"></div>
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/10 to-indigo-500/10 blur-xl"></div>

              {/* Profile Image Frame */}
              <div className="absolute inset-3 rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/20 bg-gray-900 flex items-center justify-center">
                <img
                  src={avatarImg}
                  alt="Lê Minh Tân"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-1 left-6 p-2 rounded-xl glass-effect shadow-lg flex items-center justify-center text-emerald-400 border-emerald-500/30">
                <Code2 size={20} />
              </div>

              <div className="absolute bottom-5 -left-1 p-2 rounded-xl glass-effect shadow-lg flex items-center justify-center text-indigo-400 border-indigo-500/30">
                <Terminal size={20} />
              </div>

              <div className="absolute top-1/2 -right-3 p-2 rounded-xl glass-effect shadow-lg flex items-center justify-center text-emerald-400 border-emerald-500/30">
                <Cpu size={20} />
              </div>
            </div>
          </ScrollReveal>
        </div>
        </div>
      </div>
    </section>
  );
}
