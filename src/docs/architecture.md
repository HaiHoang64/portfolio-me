# System Architecture - Portfolio Website

Tài liệu này chi tiết cấu trúc đa tầng (Layered Architecture) và luồng hoạt động thực tế của dự án Portfolio Website.

---

## 1. Các Tầng Kiến Trúc (Architectural Layers)

Dự án được tổ chức theo mô hình phân lớp đơn giản, rõ ràng để dễ bảo trì và mở rộng:

```mermaid
graph TD
    subgraph Presentation Layer [Tầng Hiển Thị - Presentation]
        Pages[Pages: Home, About-placeholder]
        Components[Components: Header, Hero, About, Projects, Contact, Footer]
    end

    subgraph Styling & Theme Layer [Tầng Giao Diện & Styles]
        Variables[variables.scss: Design Tokens & CSS Variables]
        Mixins[mixins.scss: Responsive, Flexbox, Utilities]
        MainSCSS[main.scss: Global Reset & Layout]
    end

    subgraph Business & Services Layer [Tầng Nghiệp Vụ - Chờ mở rộng]
        Hooks[Hooks: useTheme]
        Services[Services: api]
    end

    subgraph Static Assets [Tầng Tài Nguyên Tĩnh]
        Public[public/: favicon.svg, icons.svg]
        Assets[assets/: hero.png]
    end

    Pages --> Components
    Components --> Styling & Theme Layer
    Components --> Business & Services Layer
    Pages --> Static Assets
```

### 1.1 Tầng Hiển Thị (Presentation Layer)
- **Pages (`src/pages/`):** Chứa các component ở cấp độ trang. Hiện tại, [Home.tsx](file:///C:/Code/portfolio-website/src/pages/Home.tsx) là trang duy nhất đại diện cho toàn bộ trang web.
- **Components (`src/components/`):** Chứa các khối giao diện (Section) độc lập để gom vào trang chủ. Mỗi component có file `.tsx` chứa logic render và file `.scss` chứa style cục bộ:
  - `<Header />` & `<Footer />`: Phần đầu và cuối trang.
  - `<Hero />`: Phần giới thiệu nổi bật, thu hút ánh nhìn ban đầu.
  - `<About />`: Giới thiệu ngắn về định hướng phát triển bản thân.
  - `<Projects />`: Lưới hiển thị các dự án thực tế.
  - `<Contact />`: Các kênh kết nối và thông tin liên hệ.

### 1.2 Tầng Giao Diện & Styles (Styling & Theme Layer)
- Đảm nhận toàn bộ tính thẩm mỹ, hiệu ứng và hỗ trợ Dark/Light theme.
- **_variables.scss:** Chứa các Design Token. Sử dụng CSS variables tại `:root` và `[data-theme='dark']` để cho phép đổi màu nền và chữ động trên toàn hệ thống.
- **_mixins.scss:** Chứa các hàm SCSS tiện ích giúp việc coding nhanh chóng và hỗ trợ responsive tự động.
- **main.scss:** Điểm hội tụ của styles, áp dụng reset CSS và cấu hình mặc định cho thẻ `body`.

### 1.3 Tầng Nghiệp Vụ & Dịch Vụ (Business & Services Layer)
- **Hooks (`src/hooks/`):** Nơi chứa Custom Hooks. Ví dụ: `useTheme.ts` (quản lý trạng thái theme Dark/Light và cập nhật thuộc tính `data-theme` cho thẻ HTML/Body).
- **Services (`src/services/`):** Quản lý kết nối bên ngoài. Ví dụ: `api.ts` (sau này dùng để gọi API lấy danh sách bài viết từ blog hoặc gửi email tự động).

---

## 2. Luồng Định Tuyến và Render (Routing & Render Flow)

```
[index.html Entry] 
       │
       ▼
[src/main.tsx React Mount] ──(Imports global styles)──> [src/styles/main.scss]
       │
       ▼
[src/pages/Home.tsx SPA Page]
       │
       ├─► <Header /> ──(Navigation links)
       ├─► <Hero /> ──(Call to action button)
       ├─► <About /> ──(Introduce profile summary)
       ├─► <Projects /> ──(Show cards grid)
       ├─► <Contact /> ──(Link to LinkedIn/GitHub/Email)
       └─► <Footer /> ──(Footnote details)
```

- Hệ thống định tuyến sử dụng **React Router DOM v7** đã được khai báo dependencies trong `package.json`, sẵn sàng để mở rộng thành các trang chi tiết dự án độc lập (`/projects/:id`) hoặc trang chia sẻ kiến thức (`/blog`).
- Hiện tại, luồng chạy thực tế đang render trực tiếp `<Home />` tại `main.tsx` để tối ưu tốc độ tải trang cho phiên bản Single Page đầu tiên.