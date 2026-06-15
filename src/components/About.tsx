import { GraduationCap, CheckCircle2 } from "lucide-react";
import { highlightsData } from "../data/aboutData";
import ScrollReveal from "./ScrollReveal";

export default function About() {

  return (
    <section
      id="about"
      className="relative min-h-screen lg:min-h-screen flex flex-col justify-start pt-20 lg:pt-28 pb-20 overflow-hidden bg-gray-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
              Về Bản Thân Tôi
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Bio text (Left Column) */}
          <div className="lg:col-span-5 text-left">
            <ScrollReveal direction="left" className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
              Web Developer trẻ tuổi đam mê kiến tạo sản phẩm số chất lượng
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Với định hướng trở thành Web Developer chuyên nghiệp, tôi tập trung vào việc viết mã sạch, tối ưu hiệu năng và mang lại trải nghiệm người dùng tốt nhất.
            </p>

            {/* Flat bullets list */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Năng lực tự học và thích nghi công nghệ mới tốt</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Có tinh thần trách nhiệm và làm việc nhóm hiệu quả</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Tư duy logic giải quyết vấn đề kỹ thuật chặt chẽ</span>
              </div>
            </div>

            {/* Education Info Grid */}
            <div className="mt-6 p-4 rounded-2xl bg-gray-900/30 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <GraduationCap className="text-emerald-400 flex-shrink-0" size={18} />
                <span className="font-display">Thông tin học vấn</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-gray-400">
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider">Trường học</span>
                  <span className="text-white font-medium">Đại học Công nghiệp Hà Nội</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider">Chuyên ngành</span>
                  <span className="text-white font-medium">Công nghệ thông tin</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider">Năm học</span>
                  <span className="text-white font-medium">Năm 3 (2023 - 2027)</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider">GPA tích lũy</span>
                  <span className="text-emerald-400 font-semibold">3.2 / 4.0</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

          {/* Borderless Highlight List (Right Column) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={200} className="space-y-6 lg:space-y-7">
              {highlightsData.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 text-left border-b border-white/5 pb-4 last:border-b-0 last:pb-0"
              >
                {/* Minimalist icon frame */}
                <div className="p-2 bg-gray-900/50 rounded-lg border border-gray-800/80 text-gray-400 flex-shrink-0 self-start">
                  {item.icon}
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-white font-display">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
