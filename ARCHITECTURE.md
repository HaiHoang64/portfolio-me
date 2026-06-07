# ARCHITECTURE - Portfolio Website

> File này mô tả cấu trúc & logic cốt lõi của dự án Portfolio Website (Giới thiệu bản thân, kỹ năng, dự án Data Analytics & Automation).
> **⚠️ LƯU Ý QUAN TRỌNG:** Khi AI hoặc nhà phát triển có bất kỳ thay đổi code nào liên quan đến cấu trúc thư mục, quy chuẩn styles, hay luồng dữ liệu, **BẮT BUỘC phải cập nhật lại file này ngay lập tức** để đảm bảo tài liệu luôn đồng bộ với mã nguồn thực tế.

---

## 1. Tổng quan Công nghệ (Tech Stack)

| Thành phần | Công nghệ chi tiết |
| :--- | :--- |
| **Framework Core** | React 19 + TypeScript + Vite |
| **Styling (CSS)** | Sass (SCSS) với kiến trúc Modular và Responsive (Mobile-First) |
| **Routing** | React Router DOM v7 (Đã cài đặt, sẵn sàng cho các trang con) |
| **Icons** | Custom SVG Sprite (`public/icons.svg`) |
| **Build Tool** | Vite 8 |
| **Locale** | Tiếng Việt / Tiếng Anh cho Developer portfolio |

---

## 2. Cấu trúc thư mục thực tế (Directory Structure)

```
portfolio-website/
├── index.html                    # Điểm vào HTML (Vite)
├── package.json                  # Định nghĩa dependencies & scripts
├── vite.config.ts                # Cấu hình Vite (React plugin)
├── tsconfig.json / tsconfig.app.json
├── eslint.config.js              # Cấu hình kiểm tra chất lượng code ESLint
├── ARCHITECTURE.md               # << FILE NÀY
├── Structure.md                  # Mô tả chi tiết cấu trúc & quy trình làm việc
├── AI_RULES.md                   # Các quy tắc cốt lõi dành cho AI Agent
├── README.md                     # Hướng dẫn tổng quan dự án
│
├── public/
│   ├── favicon.svg               # Favicon website
│   └── icons.svg                 # SVG sprite chứa tất cả icons của dự án
│
├── portold/                      # Phiên bản website cũ (HTML/CSS thuần)
│
└── src/
    ├── main.tsx                  # Điểm khởi chạy React app (Mount vào #root)
    ├── App.tsx                   # Component App gốc (Template mặc định, tạm thời bypass)
    ├── App.css / index.css       # CSS mặc định từ template khởi tạo
    │
    ├── pages/                    # Các trang chính của ứng dụng
    │   ├── Home.tsx              # Trang chủ - Cấu trúc Single Page gom các Section components
    │   ├── Home.scss             # Style cho trang chủ
    │   └── About.tsx             # Trang giới thiệu chi tiết (Hiện là file trống - placeholder)
    │
    ├── components/               # Các component UI tái sử dụng & các Section của trang chủ
    │   ├── Header/               # Header bar chứa logo và Menu điều hướng
    │   ├── Navbar/               # Thanh điều hướng bổ trợ (Hiện là file trống)
    │   ├── Hero/                 # Banner chính giới thiệu bản thân (Data & Automation)
    │   ├── About/                # Giới thiệu tóm tắt kỹ năng & chuyên môn
    │   ├── Projects/             # Danh sách và lưới hiển thị các dự án tiêu biểu
    │   ├── Contact/              # Form/Thông tin liên hệ (Email, GitHub, LinkedIn)
    │   └── Footer/               # Chân trang (Bản quyền và thông điệp cốt lõi)
    │
    ├── styles/                   # Hệ thống CSS/Sass toàn cục
    │   ├── main.scss             # File style tổng nhập variables, mixins & styles cơ bản
    │   ├── _variables.scss       # Design system tokens (Màu sắc, Font, Spacing, Light/Dark theme)
    │   └── _mixins.scss          # Các mixin hỗ trợ (Responsive, Flexbox, Truncate, Glassmorphic)
    │
    ├── hooks/
    │   └── useTheme.ts           # Hook quản lý theme Dark/Light (Hiện là file trống)
    │
    ├── services/
    │   └── api.ts                # Service gọi API bên ngoài (Hiện là file trống)
    │
    ├── docs/                     # Tài liệu hướng dẫn phát triển chi tiết dự án (Folder này)
    │   ├── architecture.md       # Luồng kiến trúc chi tiết
    │   ├── backlog.md            # Danh sách các task cần làm và tiến độ
    │   ├── design-system.md      # Quy chuẩn thiết kế (Font, màu sắc, spacing)
    │   ├── roadmap.md            # Lộ trình phát triển qua các Sprint
    │   ├── ui-guideline.md       # Sơ đồ layout trực quan của các thành phần UI
    │   ├── vision.md             # Tầm nhìn, mục tiêu và định hướng dự án
    │   └── workflow.md           # Hướng dẫn quy trình Git và quy chuẩn commit
    │
    └── assets/                   # Hình ảnh & Media tĩnh dùng trong code
        ├── hero.png              # Hình ảnh minh họa chính cho Hero Section
        ├── react.svg
        └── vite.svg
```

---

## 3. Luồng dữ liệu & Render (Data & Render Flow)

### 3.1 Luồng Khởi chạy (Bootstrap Flow)
1. Trình duyệt tải `index.html`.
2. Trình duyệt thực thi file entry point `src/main.tsx`.
3. `main.tsx` import stylesheet chính `src/styles/main.scss` và render trực tiếp component `<Home />` (nằm trong `src/pages/Home.tsx`) thay vì `<App />`.
4. Trang `<Home />` hoạt động như một Single Page Application (SPA), import và render tuần tự các section components: `<Header />` -> `<Hero />` -> `<About />` -> `<Projects />` -> `<Contact />` -> `<Footer />`.

### 3.2 Luồng Style & CSS Variables (Theme Flow)
- Toàn bộ app sử dụng hệ thống biến CSS toàn cục defined trong `src/styles/_variables.scss`.
- Các màu sắc, màu nền được gán theo các CSS Variables: `--color-bg`, `--color-text`, `--color-primary`, v.v.
- Để hỗ trợ tính năng Dark/Light Mode, cấu trúc lớp cha (thẻ `html` hoặc `body`) sẽ nhận thuộc tính `data-theme="dark"`. Lúc này, các biến CSS sẽ tự động override sang bảng màu tối.
- Các component sử dụng Sass (`.scss`) cục bộ sẽ import `@use '../styles/variables' as *` và `@use '../styles/mixins' as *` để sử dụng các biến và mixin tiện ích.

---

## 4. Thiết kế Layout & Grid hệ thống

- **Responsive Breakpoints (Mobile-First):**
  - `sm`: 576px (Điện thoại nằm ngang)
  - `md`: 768px (Máy tính bảng)
  - `lg`: 1024px (Laptop)
  - `xl`: 1200px (Màn hình máy tính lớn)
- **Mixins Tiêu chuẩn:**
  - `@include respond-to('lg')` dùng để tùy biến giao diện trên desktop.
  - `@include flex-center` và `@include flex-between` để dàn trang nhanh.
  - `@include text-truncate($lines)` tự động cắt chữ dài thành dấu ba chấm `...`.
  - `@include glass-card` tạo hiệu ứng kính mờ (glassmorphism) hiện đại cho các thẻ Project Card.

---

## 5. Quy định Phát triển

1. **Bảo toàn Cấu trúc:** Tuyệt đối không thay đổi tên file hoặc thư mục mà không cập nhật lại tài liệu này.
2. **Quy chuẩn Style:** Không dùng style inline. Tất cả style phải được đưa vào file `.scss` tương ứng của component hoặc file style toàn cục, tận dụng tối đa hệ thống biến `$color-primary`, `$color-secondary`, `$theme-bg`, v.v.
3. **Icons:** Sử dụng thẻ `<svg>` kết hợp `<use href="/icons.svg#<icon-id>" />` thay vì cài đặt các thư viện icon nặng nếu chưa cần thiết.
