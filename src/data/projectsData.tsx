import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    title: "Short Video App ",
    category: "frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mtan7805/Test-LeMinhTan-578",
    demo: "https://test-leminhtan-578.vercel.app/",
    description:
      "Ứng dụng chia sẻ và phát video ngắn trực tuyến lấy cảm hứng từ TikTok. Tích hợp giải pháp tối ưu hóa hiệu năng phát video khi cuộn trang, thanh tìm kiếm thông minh và trang cá nhân sinh động.",
    features: [
      "Tự động phát/dừng video khi cuộn trang bằng Intersection Observer",
      "Trình phát video custom (Play/Pause, Mute/Unmute, Loading spinner, Thả tim)",
      "Trang khám phá tìm kiếm lọc video và trang hồ sơ hover phát preview",
    ],
    visualMockup: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-slate-900 flex items-center justify-center p-4 overflow-hidden animate-[pulse_4s_ease-in-out_infinite]">
        <div className="w-full max-w-[240px] h-[130px] bg-gray-950 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="h-5 bg-gray-900 border-b border-gray-800 flex items-center px-2 justify-between">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-[8px] text-gray-500 font-mono">
              TikTok.com
            </span>
            <div className="w-3"></div>
          </div>
          <div className="flex-grow p-2 grid grid-cols-3 gap-1.5 bg-gray-950">
            <div className="col-span-1 border-r border-gray-900 flex flex-col gap-1 pr-1">
              <div className="h-1.5 w-full bg-indigo-500/20 rounded"></div>
              <div className="h-1 w-4/5 bg-gray-800 rounded"></div>
            </div>
            <div className="col-span-2 flex flex-col gap-1.5">
              <div className="h-12 bg-gradient-to-tr from-indigo-600/40 to-purple-600/30 rounded border border-indigo-500/10 flex items-center justify-center relative">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-indigo-400 translate-x-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Hotel Booking",
    category: "frontend",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mtan7805/the-wild-oasis",
    demo: "https://github.com/mtan7805/the-wild-oasis",
    description:
      "Ứng dụng đặt phòng khách sạn và cabin nghỉ dưỡng cao cấp. Hỗ trợ duyệt danh sách cabin, chọn ngày đặt phòng trực quan với tính toán giá động theo thời gian thực và quản lý tài khoản khách hàng.",
    features: [
      "Đặt phòng trực quan & khóa ngày bận qua React Day Picker",
      "Tính toán chi phí lưu trú động theo thời gian thực",
      "Tích hợp API và quản lý thông tin, lịch sử đặt chỗ của khách hàng",
    ],
    visualMockup: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-slate-900 flex items-center justify-center p-4 overflow-hidden animate-[pulse_4.5s_ease-in-out_infinite]">
        <div className="w-full max-w-[240px] h-[130px] bg-gray-950 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="h-5 bg-gray-900 border-b border-gray-800 flex items-center px-2 justify-between">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-[8px] text-gray-500 font-mono">
              The Wild Oasis
            </span>
            <div className="w-3"></div>
          </div>
          <div className="flex-grow p-2 grid grid-cols-3 gap-1 bg-gray-950">
            <div className="bg-gray-900/40 rounded p-1 border border-gray-900 flex flex-col gap-1">
              <div className="h-1 w-2/3 bg-gray-700 rounded mb-0.5"></div>
              <div className="h-4 bg-purple-500/10 border border-purple-500/20 rounded p-0.5"></div>
            </div>
            <div className="bg-gray-900/40 rounded p-1 border border-gray-900 flex flex-col gap-1">
              <div className="h-1 w-2/3 bg-gray-700 rounded mb-0.5"></div>
              <div className="h-4 bg-indigo-500/10 border border-indigo-500/20 rounded p-0.5"></div>
            </div>
            <div className="bg-gray-900/40 rounded p-1 border border-gray-900 flex flex-col gap-1">
              <div className="h-1 w-2/3 bg-gray-700 rounded mb-0.5"></div>
              <div className="h-4 bg-emerald-500/10 border border-emerald-500/20 rounded p-0.5 opacity-65"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "E-Commerce API",
    category: "backend",
    tags: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/mtan7805/ECommerce-BE",
    demo: "https://github.com/mtan7805/ECommerce-BE",
    description:
      "Hệ thống Backend cho sàn thương mại điện tử đa cửa hàng. Hỗ trợ phân quyền động RBAC, xác thực JWT bảo mật và quản lý cơ sở dữ liệu tối ưu.",
    features: [
      "Xác thực JWT và phân quyền vai trò động (Dynamic RBAC) cho người dùng & cửa hàng",
      "Kiến trúc modular chuẩn SOLID, kiểm thử dữ liệu đầu vào bằng Zod và ghi log tự động",
      "Thiết kế cơ sở dữ liệu PostgreSQL tối ưu, quản lý qua Prisma ORM và tài liệu Swagger API",
    ],
    visualMockup: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-slate-900 flex items-center justify-center p-4 overflow-hidden animate-[pulse_5s_ease-in-out_infinite]">
        <div className="w-full max-w-[240px] h-[130px] bg-gray-950 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="h-5 bg-gray-900 border-b border-gray-800 flex items-center px-2 justify-between">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-[8px] text-gray-500 font-mono">
              Marketplace.blog
            </span>
            <div className="w-3"></div>
          </div>
          <div className="flex-grow p-2 flex flex-col gap-2 bg-gray-950">
            <div className="h-2 w-3/4 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded"></div>
            <div className="space-y-1">
              <div className="h-1 w-full bg-gray-800 rounded"></div>
              <div className="h-1 w-full bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
