#### `docs/roadmap.md`
```markdown
# Project Development Roadmap

Dự án được chia làm 8 Sprints theo mô hình Agile/Scrum rút gọn. Mỗi Sprint kéo dài dự kiến từ 5-7 ngày tùy thời gian on-site của bạn.

| Sprint | Tên Sprint | Mục tiêu cốt lõi | Deliverables (Sản phẩm đầu ra) |
| :--- | :--- | :--- | :--- |
| **Sprint 1** | **Base Setup & Quality Gate** | Thiết lập nền móng dự án chuẩn doanh nghiệp, ép cấu hình Code Quality. | Khởi tạo dự án Vite + TS + SCSS thành công, tích hợp ESLint, Prettier chặt chẽ. Xong khung thư mục. |
| **Sprint 2** | **Design System & Layout** | Hiện thực hóa Design System vào Code, làm nền móng UI vững chắc. | Base styles, Global Variables, Theme Switcher (Dark/Light), Navbar và Footer đáp ứng (Responsive). |
| **Sprint 3** | **Core Pages (Home & About)** | Hoàn thiện trang chủ và trang giới thiệu bản thân, tập trung vào UX. | Hero Section ấn tượng, Kỹ năng (Skills) phân nhóm trực quan, Resume download. |
| **Sprint 4** | **Dynamic Projects Engine** | Xây dựng bộ lọc dự án thông minh và các trang chi tiết dự án theo từng mảng. | Trang Projects với bộ lọc (All, Data, Automation, Web, AI). Trang Project Detail động nhận dữ liệu theo ID. |
| **Sprint 5** | **Markdown Blog Feature** | Tạo trang chia sẻ kiến thức, tự động đọc dữ liệu từ các file Markdown. | Trang Blog, bộ đọc file `.md`, cấu trúc bài viết chuẩn SEO. |
| **Sprint 6** | **Micro-interactions & Motion**| Tăng trải nghiệm người dùng cao cấp bằng chuyển động mượt mà. | Tích hợp Framer Motion cho hiệu ứng Page Transition, Scroll Animation. |
| **Sprint 7** | **SEO & Performance Tuning** | Tối ưu hóa điểm số Google Lighthouse (Performance > 90, SEO 100). | Cấu hình React Helmet, Open Graph tags, Sitemap, Tối ưu dung lượng ảnh (WebP). |
| **Sprint 8** | **Production Deployment** | Đưa sản phẩm lên Internet bằng quy trình tự động. | Deploy hoàn tất lên Vercel, cài đặt Custom Domain, cấu hình CI/CD thông qua GitHub Actions (nếu có). |