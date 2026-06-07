# UI Layout Guideline - Portfolio Website

Tài liệu này phác thảo sơ đồ bố cục (Layout Wireframe) và hướng dẫn thiết kế các khối giao diện trên trang chủ `Home.tsx`.

---

## 1. Sơ đồ Bố cục Tổng thể (Wireframe Grid)

Giao diện trang chủ được xếp chồng theo chiều dọc (Vertical Stack Layout) đáp ứng tự động trên cả thiết bị di động và máy tính:

```
+-----------------------------------------------------------------+
| [Logo] Hai Hoang                [Link] Home  About  Projects  Contact |  <-- Header (Fixed / Sticky)
+-----------------------------------------------------------------+
|                                                                 |
|                 WELCOME TO PORTFOLIO WEBSITE                    |
|                        Hai Hoang                                |
|             Data Analyst | Data Engineer | Automation           |  <-- Hero Section
|                                                                 |
|                     [Button: View Projects]                     |
|                                                                 |
+-----------------------------------------------------------------+
|                                                                 |
|  ABOUT ME                                                       |
|  - Specializing in data analysis, dashboard development...     |  <-- About Section
|  - Passionate about workflow automation in manufacturing...     |
|                                                                 |
+-----------------------------------------------------------------+
|                                                                 |
|  MY PROJECTS                                                    |
|  +-----------------------+ +-----------------------+            |
|  | Production Dashboard  | | Apps Script Auto    |            |  <-- Projects Section
|  | (Power BI visualization)| | (Report automation) |            |      (Responsive Grid)
|  +-----------------------+ +-----------------------+            |
|                                                                 |
+-----------------------------------------------------------------+
|                                                                 |
|  CONTACT INFO                                                   |
|  - Email: hoanghaintp@gmail.com                                 |  <-- Contact Section
|  - LinkedIn & GitHub links                                      |
|                                                                 |
+-----------------------------------------------------------------+
| Data-driven decision-making (DDDM)!                             |  <-- Footer Section
+-----------------------------------------------------------------+
```

---

## 2. Chi tiết Quy chuẩn Thiết kế Component

### 2.1 Header Component
- **Bố cục:** Dàn ngang bằng flexbox (`@include flex-between`).
- **Responsive:** Trên điện thoại, danh sách menu rút gọn hoặc chuyển thành menu ẩn hiện (burger menu). Trên desktop hiển thị đầy đủ liên kết.
- **Tính năng:** Đứng yên ở đầu trang (`position: sticky; top: 0; z-index: 100`) kèm theo nền kính mờ (`backdrop-filter`) khi cuộn chuột.

### 2.2 Hero Section
- **Căn lề:** Trung tâm (`@include flex-center(column)`).
- **Màu sắc:** Sử dụng màu chữ chính để nổi bật tên tuổi, màu phụ `color-primary` cho chức danh.
- **Lời kêu gọi hành động (CTA):** Nút "View Projects" có hiệu ứng hover tăng kích thước nhẹ (`scale(1.05)`) và đổi màu nền mượt mà.

### 2.3 About Section
- **Cấu trúc:** Phân chia thành 2 cột trên màn hình lớn (`@include respond-to('lg')`): cột bên trái giới thiệu bản thân, cột bên phải hiển thị biểu đồ kỹ năng (Skills).

### 2.4 Projects Section
- **Lưới hiển thị (Grid):** Dùng CSS Grid. Mặc định 1 cột trên mobile, 2 cột trên tablet (`md`), và 3 cột trên laptop/desktop (`lg`).
- **Cards:** Sử dụng mixin `@include glass-card` tạo độ bóng mờ sang trọng, viền mảnh, bo góc `0.5rem`.

### 2.5 Contact Section
- **Bố cục:** Thiết kế tối giản, tập trung vào sự rõ ràng. Các liên kết mạng xã hội và email có icon SVG tương ứng từ file `public/icons.svg`.
