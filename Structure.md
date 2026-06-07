# 📚 Dự án: Portfolio Website (Giới thiệu Năng lực & Sản phẩm)

> **⚠️ LƯU Ý QUAN TRỌNG DÀNH CHO AI AGENT:**
> BẤT CỨ KHI NÀO BẮT ĐẦU PHIÊN LÀM VIỆC HOẶC CHỈNH SỬA CODE, AI **BẮT BUỘC** PHẢI ĐỌC FILE NÀY TRƯỚC ĐỂ NẮM RÕ CẤU TRÚC DỰ ÁN. SAU KHI CHỈNH SỬA, AI PHẢI CẬP NHẬT LẠI FILE NÀY (NẾU CÓ THAY ĐỔI VỀ CẤU TRÚC/LOGIC), ĐỒNG THỜI GHI LOG VÀO `changelog.md` VÀ `learning.md` (nằm ở thư mục gốc).

---

## 1. ⚙️ Quy trình làm việc (Workflow)

1. **Phân tích yêu cầu:** Phân tích kỹ yêu cầu từ người dùng.
2. **Đọc tài liệu:** Tham khảo `Structure.md` (file này), `ARCHITECTURE.md` và `AI_RULES.md` để hiểu kiến trúc hiện tại, các chuẩn mực code và không phá vỡ cấu trúc có sẵn.
3. **Thực thi:** Áp dụng thay đổi trên code. Đảm bảo UI/UX đẹp mắt, chuyên nghiệp và có độ phản hồi cao (Responsive) bằng cách sử dụng Sass (SCSS) và hệ thống layout chuẩn.
4. **Cập nhật tài liệu sau khi code:**
   - Ghi chú các thay đổi vào **`changelog.md`** ở thư mục gốc (nếu chưa có thì tạo mới) theo cấu trúc bảng trong `AI_RULES.md`.
   - Ghi chú các bài học, luồng logic khó, chức năng quan trọng, lỗi đã gặp và cách fix vào **`learning.md`** ở thư mục gốc (nếu chưa có thì tạo mới).
   - **QUY TẮC GHI LOG:** TUYỆT ĐỐI không tạo nhiều thẻ tiêu đề cùng một ngày (ví dụ nhiều thẻ `## [17/05/2026]`). Mọi thay đổi trong cùng ngày phải gộp chung vào 1 thẻ ngày, và đánh số từng lần cập nhật (VD: `### Lần 1 (Thay đổi nhỏ)`, `### Lần 2 (Tính năng quan trọng)`).
   - Cập nhật lại **`Structure.md`** ngay lập tức nếu có thêm thư viện mới, hoặc thay đổi về cấu trúc thư mục.
   - Cập nhật **`ARCHITECTURE.md`** nếu có thay đổi liên quan đến cấu trúc Layout, cách xử lý Theme (Dark/Light mode) hay thêm bớt core components quan trọng.

---

## 2. 📦 Thư viện & Công nghệ (Tech Stack)

- **Ngôn ngữ chính:** TypeScript, HTML, Sass (SCSS).
- **Framework/Thư viện Core:** React 19, Vite 8, React Router DOM v7 (sẵn sàng cho định tuyến).
- **Styling UI:** Sass/SCSS với các mixin và biến toàn cục, hỗ trợ thiết kế tối giản hiện đại (Minimalism), Cyber/Data vibe và hỗ trợ Light/Dark mode.
- **Icons:** Custom SVG Sprite (`public/icons.svg`).

---

## 3. 🛠️ Cài đặt & Khởi chạy (Scripts)

Các câu lệnh có sẵn trong file `package.json`:
- `npm run dev`: Khởi động máy chủ phát triển cục bộ (Vite).
- `npm run build`: Biên dịch TypeScript (`tsc`) và build dự án ra thư mục tĩnh `dist/`.
- `npm run preview`: Xem trước bản build trên môi trường local.
- `npm run lint`: Chạy công cụ kiểm tra chất lượng code ESLint.

---

## 4. 🧠 Cấu trúc & Logic cốt lõi

- **Kiến trúc tổng thể:** Tham khảo chi tiết trong [ARCHITECTURE.md](file:///C:/Code/portfolio-website/ARCHITECTURE.md).
- **Cấu trúc thư mục mã nguồn (`src/`):**
  - `pages/`: Chứa các trang chính. `Home.tsx` đóng vai trò là trang SPA chính hiển thị toàn bộ nội dung. `About.tsx` là trang giới thiệu chi tiết (hiện tại là placeholder).
  - `components/`: Chứa các component UI được gom theo thư mục riêng biệt kèm file style riêng (ví dụ: `Header`, `Hero`, `About`, `Projects`, `Contact`, `Footer`, `Navbar`).
  - `styles/`: Hệ thống style Sass tập trung (`main.scss`, `_variables.scss`, `_mixins.scss`).
  - `hooks/`: Chứa các React Hooks tự chế (ví dụ: `useTheme.ts` quản lý giao diện sáng/tối).
  - `services/`: Quản lý các kết nối API, lấy dữ liệu (ví dụ: `api.ts`).
  - `docs/`: Chứa các file tài liệu định hướng phát triển, lộ trình và hệ thống thiết kế.
  - `assets/`: Chứa hình ảnh và tài nguyên tĩnh của dự án.
  - `types/` & `utils/`: Thư mục chứa các TypeScript interfaces và các hàm tiện ích dùng chung.

---

## 5. 📌 Các lưu ý quan trọng khác

- **Không viết code rác:** Luôn giữ code sạch sẽ, gọn gàng, chia nhỏ components để dễ quản lý và tái sử dụng.
- **Tính nhất quán của Theme:** Luôn sử dụng các biến CSS được map qua SCSS (`$color-primary`, `$color-secondary`, `$theme-bg`, v.v.) để đảm bảo giao diện thay đổi mượt mà khi người dùng đổi theme Dark/Light.
- **Bảo toàn chú thích:** Tuyệt đối không tự ý xóa bỏ các đoạn comment quan trọng hoặc thay đổi cấu trúc nền tảng trừ khi người dùng yêu cầu rõ ràng.

---
*File này sẽ liên tục được AI và người dùng cập nhật trong quá trình phát triển để duy trì tính nhất quán của dự án.*
