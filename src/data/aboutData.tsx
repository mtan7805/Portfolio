import { GraduationCap, Award, Heart, Sparkles } from "lucide-react";
import type { HighlightItem } from "../types/about";

export const highlightsData: HighlightItem[] = [
  {
    icon: <GraduationCap className="text-emerald-400" size={20} />,
    title: "Kiến thức nền tảng tốt",
    description:
      "Nắm vững cấu trúc dữ liệu, giải thuật, thiết kế cơ sở dữ liệu và quy trình phát triển phần mềm.",
  },
  {
    icon: <Award className="text-indigo-400" size={20} />,
    title: "Khả năng tự học cao",
    description:
      "Nghiên cứu sâu các Framework hiện đại (ReactJS, Next.js, NestJS) thông qua tự lập trình dự án thực tế.",
  },
  {
    icon: <Heart className="text-emerald-400" size={20} />,
    title: "Đam mê lập trình Web",
    description:
      "Yêu thích kiến tạo giao diện người dùng (UI/UX) tinh tế song song với kiến trúc Backend tối ưu, bảo mật.",
  },
  {
    icon: <Sparkles className="text-indigo-400" size={20} />,
    title: "Tư duy sản phẩm tốt",
    description:
      "Luôn đặt bản thân vào góc nhìn của người dùng cuối để cải thiện tốc độ và trải nghiệm sử dụng (UX).",
  },
];
