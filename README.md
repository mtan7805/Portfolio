# Lê Minh Tân - Web Developer Portfolio

Trang web portfolio cá nhân của **Lê Minh Tân** (Web Developer).

## 🛠️ Công nghệ sử dụng
- **React** + **TypeScript** + **Vite**
- **Tailwind CSS**
- **Lucide Icons**, CSS animations và **Intersection Observer API**

## 💻 Cài đặt & Chạy dự án
```bash
npm install
npm run dev     # Chạy localhost:5173
npm run build   # Build production
npm run lint    # Kiểm tra mã nguồn
npm run preview # Xem bản build production
```

## Chỉnh nội dung

- `src/data/projectsData.ts`: tên, mô tả, công nghệ, tính năng và liên kết dự án. Trường `preview` chọn minh họa `video`, `hotel` hoặc `api`, độc lập với thứ tự dự án.
- `src/data/skillsData.ts`: danh sách công nghệ hiển thị trong Tech Stack.
- `src/components/Hero.tsx` và `Navbar.tsx`: ảnh giới thiệu và logo.
- `src/components/About.tsx`: học vấn và nội dung lá thư giới thiệu.
- `src/components/Footer.tsx`: email, điện thoại, GitHub và thông tin liên hệ.

## Tương tác

- Nhấn thư mục trong About Me để mở lá thư; nhấn Escape hoặc nút đóng để thoát.
- Chọn dự án bằng nút mũi tên, chấm chỉ mục, vuốt trên điện thoại hoặc phím trái/phải khi carousel được focus.
- Tech Stack hỗ trợ tạm dừng; các hiệu ứng tôn trọng tùy chọn giảm chuyển động của hệ điều hành.
- Liên hệ qua `mailto:`/`tel:` mở ứng dụng email/điện thoại của người dùng.

Font được phục vụ trực tiếp từ `public/fonts`; giấy phép đi kèm trong cùng thư mục. Các file kiểm tra cục bộ trong `.tmp/` được bỏ qua bởi Git và ESLint.
