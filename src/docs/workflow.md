Landing
   │
   ▼
About Me
   │
   ▼
Projects
   │
   ▼
Project Detail
   │
   ▼
Contact



Requirement
    │
    ▼
Design
    │
    ▼
Create Branch
    │
    ▼
Develop
    │
    ▼
Test
    │
    ▼
Merge
    │
    ▼
Deploy



# Git & Development Workflow Standard

Để học cách làm việc trong một dự án thực tế, chúng ta tuân thủ quy trình Git nghiêm ngặt nhằm tránh xung đột code (Conflicts) và theo dõi lịch sử rõ ràng.

## 1. Nhánh Git (Branching Strategy)
- `main`: Nhánh Production. Chỉ chứa code đã kiểm thử hoàn toàn, chạy ổn định tuyệt đối.
- `develop`: Nhánh tích hợp. Nơi chứa code mới nhất đang phát triển từ các tính năng gom về.
- `feature/<tên-tính-năng>`: Nhánh phát triển tính năng cụ thể. Tạo ra từ `develop` và merge về `develop` sau khi hoàn thành thông qua Pull Request (PR).

*Ví dụ:* `feature/navbar`, `feature/project-filter`, `feature/sprint1-setup`.

## 2. Quy trình làm việc hàng ngày (Daily Workflow)
1. Kéo code mới nhất về từ nhánh chung: `git checkout develop && git pull origin develop`
2. Tạo nhánh tính năng mới: `git checkout -b feature/sprint1-setup`
3. Tiến hành Code và kiểm thử Local.
4. Commit code theo quy chuẩn (Xem mục 3).
5. Đẩy nhánh lên GitHub: `git push origin feature/sprint1-setup`
6. Tạo Pull Request trên GitHub từ nhánh `feature/...` sang nhánh `develop`. (Trong dự án thực tế, Tech Lead sẽ Review đoạn này trước khi Merge).

## 3. Quy chuẩn Commit Message (Conventional Commits)
Cú pháp: `<type>(<scope>): <description>`

Các `type` được chấp nhận:
- `feat`: Tính năng mới (Feature).
- `fix`: Sửa lỗi (Bug fix).
- `docs`: Thay đổi tài liệu hướng dẫn.
- `style`: Thay đổi định dạng code (Format, khoảng trắng, không ảnh hưởng logic).
- `refactor`: Tái cấu trúc code nhưng không thay đổi tính năng hay sửa lỗi.
- `chore`: Cấu hình build, cài thêm thư viện phụ trợ...

*Ví dụ chuẩn:*
- `chore(env): setup vite project with typescript template`
- `feat(ui): add responsive navbar with dark mode toggle`