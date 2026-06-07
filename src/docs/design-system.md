# UI Design System Tokens - Portfolio Website

Hệ thống thiết kế tập trung vào sự tối giản hiện đại (Minimalism), kết hợp phong cách Công nghệ & Dữ liệu (Cyber/Data vibe). Tất cả mã nguồn sử dụng hệ thống token này thông qua các biến Sass (SCSS) hoặc các biến CSS Custom Properties toàn cục.

---

## 1. Bảng màu (Color Palette & Themes)

Hỗ trợ hai chế độ hiển thị (Light/Dark Mode) thông qua thuộc tính `data-theme`.

| Tên Token (CSS / SCSS) | Light Mode Value | Dark Mode Value | Ý nghĩa & Vùng áp dụng |
| :--- | :--- | :--- | :--- |
| `--color-primary` / `$color-primary` | `#0EA5E9` (Sky Blue) | `#0EA5E9` (Sky Blue) | Màu chủ đạo (Data vibe, các liên kết, nút bấm chính) |
| `--color-secondary` / `$color-secondary` | `#10B981` (Emerald) | `#10B981` (Emerald) | Màu bổ trợ (Automation vibe, trạng thái thành công) |
| `--color-bg` / `$theme-bg` | `#F8FAFC` (Slate 50) | `#0F172A` (Slate 900) | Màu nền toàn màn hình |
| `--color-bg-card` / `$theme-card` | `#FFFFFF` | `#1E293B` (Slate 800) | Màu nền cho các thẻ (Cards, Panels) |
| `--color-text` / `$theme-text` | `#0F172A` (Slate 900) | `#F8FAFC` (Slate 50) | Màu chữ chính (Body text) |
| `--color-text-muted` / `$theme-text-muted`| `#64748B` (Slate 500) | `#94A3B8` (Slate 400) | Màu chữ phụ, chú thích, metadata |
| `--color-border` / `$theme-border` | `#E2E8F0` (Slate 200) | `#334155` (Slate 700) | Màu đường viền phân cách |

---

## 2. Hệ thống Chữ (Typography Scale)

| Token SCSS | Giá trị Rem | Cỡ chữ Pixel | Vùng sử dụng chính |
| :--- | :--- | :--- | :--- |
| `$font-size-h1` | `2.25rem` | 36px | Tiêu đề lớn nhất (Hero Section) |
| `$font-size-h2` | `1.75rem` | 28px | Tiêu đề nhóm lớn (Section Title) |
| `$font-size-h3` | `1.25rem` | 20px | Tiêu đề cho các Project Card |
| `$font-size-base` | `1.0rem` | 16px | Văn bản thông thường (Body text) |
| `$font-size-small` | `0.875rem` | 14px | Chú thích nhỏ, ngày tháng, nhãn (Labels) |

- **Font Family Tiêu chuẩn (`$font-primary`):** `'Inter', system-ui, -apple-system, sans-serif` (Dễ đọc, hiện đại).
- **Font Family Công nghệ (`$font-code`):** `'JetBrains Mono', 'Fira Code', monospace` (Dành riêng cho các thông số kỹ thuật, khối mã nguồn, hoặc tiêu đề trong mảng Automation/Data).

---

## 3. Hệ thống Khoảng cách (Spacing System)

Áp dụng hệ thống khoảng cách lũy tiến dựa trên cơ sở nhân hệ số 4 (4px base):

- `$spacing-1`: `0.25rem` (4px)
- `$spacing-2`: `0.5rem` (8px)
- `$spacing-3`: `0.75rem` (12px)
- `$spacing-4`: `1rem` (16px) - *Khoảng cách cơ bản (Base Spacing)*
- `$spacing-6`: `1.5rem` (24px)
- `$spacing-8`: `2rem` (32px)
- `$spacing-12`: `3rem` (48px)