import type { Project } from "../types/project";
export const projectsData: Project[] = [
    {
        title: "Short Video App",
        preview: "video",
        category: "frontend",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/mtan7805/Test-LeMinhTan-578",
        demo: "https://test-leminhtan-578.vercel.app/",
        description: "Ứng dụng chia sẻ và phát video ngắn trực tuyến lấy cảm hứng từ TikTok. Tích hợp giải pháp tối ưu hóa hiệu năng phát video khi cuộn trang, thanh tìm kiếm thông minh và trang cá nhân sinh động.",
        features: [
            "Tự động phát/dừng video khi cuộn trang bằng Intersection Observer",
            "Trình phát video custom (Play/Pause, Mute/Unmute, Loading spinner, Thả tim)",
            "Trang khám phá tìm kiếm lọc video và trang hồ sơ hover phát preview",
        ]
    },
    {
        title: "Hotel Booking",
        preview: "hotel",
        category: "frontend",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/mtan7805/the-wild-oasis",
        demo: "https://the-wild-oasis-three-psi-76.vercel.app/",
        description: "Ứng dụng đặt phòng khách sạn và cabin nghỉ dưỡng cao cấp. Hỗ trợ duyệt danh sách cabin, chọn ngày đặt phòng trực quan với tính toán giá động theo thời gian thực và quản lý tài khoản khách hàng.",
        features: [
            "Đặt phòng trực quan & khóa ngày bận qua React Day Picker",
            "Tính toán chi phí lưu trú động theo thời gian thực",
            "Tích hợp API và quản lý thông tin, lịch sử đặt chỗ của khách hàng",
        ]
    },
    {
        title: "E-Commerce API",
        preview: "api",
        category: "backend",
        tags: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
        github: "https://github.com/mtan7805/ECommerce-BE",
        demo: "https://github.com/mtan7805/ECommerce-BE",
        description: "Hệ thống Backend cho sàn thương mại điện tử đa cửa hàng. Hỗ trợ phân quyền động RBAC, xác thực JWT bảo mật và quản lý cơ sở dữ liệu tối ưu.",
        features: [
            "Xác thực JWT và phân quyền vai trò động (Dynamic RBAC) cho người dùng & cửa hàng",
            "Kiến trúc modular chuẩn SOLID, kiểm thử dữ liệu đầu vào bằng Zod và ghi log tự động",
            "Thiết kế cơ sở dữ liệu PostgreSQL tối ưu, quản lý qua Prisma ORM và tài liệu Swagger API",
        ]
    },
];
