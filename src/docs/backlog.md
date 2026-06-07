# Product Backlog & Task Management - Portfolio Website

Ký hiệu trạng thái: `[ ] To Do` (Chưa làm) | `[/] In Progress` (Đang làm) | `[x] Done` (Đã hoàn thành)

---

## 📅 SPRINT 1: Setup React + TypeScript + Vite + Quality Gate
*Mục tiêu: Thiết lập nền móng dự án chuẩn, cấu hình Code Quality.*

- [x] **TASK-101:** Khởi tạo dự án bằng Vite với Template `react-ts`.
- [x] **TASK-102:** Cấu hình SCSS (Cài đặt sass compiler, tạo cấu trúc mục `src/styles/` chứa variables, mixins, main).
- [x] **TASK-103:** Cấu hình ESLint cho TypeScript và React Hooks.
- [x] **TASK-104:** Cấu hình Prettier để tự động format code.
- [x] **TASK-105:** Tạo cấu trúc thư mục chuẩn theo `architecture.md`.
- [x] **TASK-106:** Thực hiện commit đầu tiên lên Git.

---

## 📅 SPRINT 2: Design System & Core Layouts
*Mục tiêu: Đưa Design System vào mã nguồn, làm nền móng UI vững chắc.*

- [x] **TASK-201:** Định nghĩa các Design Tokens trong [_variables.scss](file:///C:/Code/portfolio-website/src/styles/_variables.scss) (Màu sắc, Font-size, Spacing).
- [ ] **TASK-202:** Tạo logic quản lý giao diện Dark/Light Mode bằng custom hook [useTheme.ts](file:///C:/Code/portfolio-website/src/hooks/useTheme.ts).
- [x] **TASK-203:** Xây dựng phần tĩnh cho Header và Footer đáp ứng (Responsive).
- [ ] **TASK-204:** Tích hợp `react-router-dom` vào `main.tsx` / `App.tsx` phục vụ định tuyến.

---

## 📅 SPRINT 3: Core Pages & Sections (Home & About)
*Mục tiêu: Hoàn thiện nội dung tĩnh cho trang chủ và các mục tự giới thiệu.*

- [/] **TASK-301:** Hoàn thiện Hero Section giới thiệu bản thân (Data Analyst / Automation Engineer).
- [/] **TASK-302:** Cập nhật About Section thể hiện năng lực cốt lõi.
- [ ] **TASK-303:** Thiết kế layout hiển thị Skills theo nhóm (Ví dụ: Data Visualization, Scripting & Automation, Web Development).

---

## 📅 SPRINT 4: Dynamic Projects Engine & Filters
*Mục tiêu: Hiển thị các dự án tiêu biểu có bộ lọc theo mảng chuyên môn.*

- [x] **TASK-401:** Khai báo cấu trúc dữ liệu dự án tĩnh trong components Projects.
- [ ] **TASK-402:** Viết bộ lọc (All, Data Analytics, Automation, Web Dev) trực tiếp trên giao diện để người dùng dễ tra cứu.
- [ ] **TASK-403:** Thiết kế các Project Cards ứng dụng hiệu ứng kính mờ `@include glass-card` và hiệu ứng hover sinh động.

---

## 📅 SPRINT 5: SEO & Performance Optimization
*Mục tiêu: Tối ưu SEO và hiệu năng tải trang.*

- [ ] **TASK-501:** Tối ưu hóa dung lượng hình ảnh (chuyển sang định dạng WebP).
- [ ] **TASK-502:** Bổ sung thẻ tiêu đề (Title), Meta Descriptions chuẩn SEO cho `index.html`.
- [ ] **TASK-503:** Kiểm tra điểm số Google Lighthouse trên môi trường local.
