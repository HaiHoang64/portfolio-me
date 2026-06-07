# Project Development Roadmap - Portfolio Website

Dự án được chia làm 8 Sprints theo mô hình Agile/Scrum rút gọn để dễ dàng quản lý tiến độ và đánh giá kết quả đầu ra.

---

| Sprint | Tên Sprint | Mục tiêu cốt lõi | Deliverables (Sản phẩm đầu ra) |
| :--- | :--- | :--- | :--- |
| **Sprint 1** | **Base Setup & Quality Gate** | Thiết lập nền móng dự án chuẩn, cấu hình kiểm tra chất lượng code nghiêm ngặt. | Khởi tạo dự án Vite + React 19 + TypeScript + Sass thành công. Tích hợp ESLint, Prettier, dựng khung thư mục. |
| **Sprint 2** | **Design System & Layout** | Hiện thực hóa hệ thống Design Tokens và cấu trúc layout toàn cục. | Base styles, variables định nghĩa Light/Dark mode, mixins responsive, dựng Header, Footer responsive. |
| **Sprint 3** | **Core Pages (Home & About)** | Thiết kế và hoàn thiện nội dung tĩnh cho trang chủ. | Khởi tạo trang chính `Home.tsx` hoàn thiện Hero Section giới thiệu bản thân và phần About Me giới thiệu năng lực cốt lõi. |
| **Sprint 4** | **Dynamic Projects Engine** | Xây dựng lưới hiển thị dự án thông minh kèm bộ lọc động. | Hoàn thiện component Projects với bộ lọc động theo nhóm (All, Data Analytics, Automation, Web Dev). |
| **Sprint 5** | **Markdown Blog Feature** | Tạo trang chia sẻ kiến thức, tự động đọc dữ liệu từ các file Markdown. | Tích hợp hệ thống định tuyến (React Router DOM v7) để chuyển hướng sang trang chi tiết dự án `/projects/:id` hoặc trang `/blog` đọc file Markdown. |
| **Sprint 6** | **Micro-interactions & Motion**| Tăng trải nghiệm người dùng cao cấp bằng chuyển động mượt mà. | Tích hợp thư viện hiệu ứng (ví dụ: Framer Motion hoặc CSS transitions/animations nâng cao) cho hiệu ứng chuyển trang và cuộn màn hình. |
| **Sprint 7** | **SEO & Performance Tuning** | Tối ưu hóa SEO và kiểm tra hiệu năng tải trang trên Google Lighthouse. | Cấu hình Meta Tags, Open Graph, Sitemap, tối ưu hóa kích thước hình ảnh và nén tài nguyên tĩnh. |
| **Sprint 8** | **Production Deployment** | Đưa sản phẩm lên Internet bằng quy trình tự động. | Deploy hoàn tất lên hosting (như Vercel / Netlify / GitHub Pages), cấu hình tên miền tùy chỉnh (nếu có). |