import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gray-950 border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              MinhTan.dev
            </span>
            <p className="text-xs text-gray-500 mt-2 max-w-sm">
              Sinh viên năm 3 Công nghệ Thông tin đam mê phát triển Web, không
              ngừng học hỏi và xây dựng các dự án thực tế với ReactJS, Next.js,
              TypeScript và NestJS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a
              href="#about"
              className="hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            title="Cuộn lên đầu trang"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900/40 my-8"></div>

        {/* Copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>©Copyright {new Date().getFullYear()} by Lê Minh Tân.</p>
          <p>
            Được dựng bằng{" "}
            <span className="text-indigo-400">
              React + TypeScript + Tailwind CSS
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
