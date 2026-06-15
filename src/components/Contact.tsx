import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import type { ContactFormData } from "../types/contact";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen lg:min-h-screen flex flex-col justify-start pt-20 lg:pt-28 pb-20 overflow-hidden bg-gray-950/10"
    >
      <div className="absolute bottom-0 right-1/4 glow-bg opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
              Liên Hệ Với Tôi
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 text-left">
            <ScrollReveal
              direction="left"
              className="flex flex-col justify-between gap-6 h-full"
            >
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Hãy cùng kết nối!
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                  Tôi luôn sẵn lòng trao đổi các cơ hội thực tập, hợp tác lập
                  trình hoặc giải đáp thắc mắc kỹ thuật.
                </p>

                {/* Minimalist Boxed Contact Links */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/30 border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">
                        Email
                      </p>
                      <a
                        href="mailto:leminhtan@example.com"
                        className="text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors block truncate"
                      >
                        tanledhcn@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/30 border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">
                        Điện thoại
                      </p>
                      <a
                        href="tel:+84123456789"
                        className="text-xs sm:text-sm font-medium text-white hover:text-indigo-400 transition-colors block"
                      >
                        (+84) 34 890 1578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/30 border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">
                        Địa chỉ
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-white">
                        Cầu Diễn, Hà Nội, Việt Nam
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Connection */}
              <div className="space-y-2.5 pt-4 lg:pt-0">
                <h4 className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">
                  Mạng xã hội
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/mtan7805"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-gray-900/60 hover:bg-emerald-500/10 hover:text-emerald-400 border border-gray-800 text-gray-400 transition-all duration-300"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-gray-900/60 hover:bg-indigo-500/10 hover:text-indigo-400 border border-gray-800 text-gray-400 transition-all duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://zalo.me"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-gray-900/60 hover:bg-emerald-500/10 hover:text-emerald-400 border border-gray-800 text-gray-400 transition-all duration-300 font-bold text-xs flex items-center justify-center"
                  >
                    Zalo
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form (Right Column - Boxed Inputs) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal direction="right" delay={200} className="w-full">
              <div className="p-6 sm:p-8 rounded-3xl bg-gray-900/30 border border-white/5 shadow-2xl relative w-full glass-effect">
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nhập họ tên"
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider"
                      >
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Nhập email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      Tiêu đề liên hệ
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Nhập tiêu đề liên hệ"
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      Nội dung lời nhắn
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Nhập nội dung lời nhắn tại đây..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit button & status */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="text-xs font-medium text-left">
                      {status === "sending" && (
                        <span className="text-emerald-400 animate-pulse">
                          Đang gửi thư...
                        </span>
                      )}
                      {status === "success" && (
                        <span className="text-emerald-400 font-semibold">
                          ✓ Thư gửi thành công! Cảm ơn bạn.
                        </span>
                      )}
                      {status === "error" && (
                        <span className="text-red-400">
                          ✗ Có lỗi xảy ra. Hãy thử lại.
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-indigo-500 hover:from-emerald-400 hover:to-indigo-400 text-white font-semibold text-xs shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>Gửi tin nhắn</span>
                      <Send size={12} />
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
