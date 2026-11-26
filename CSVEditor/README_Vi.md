# CSV Editor

<div align="center">

![Version](https://img.shields.io/badge/Version-3.1.0.0-2563eb)
![.NET 8](https://img.shields.io/badge/.NET-8.0-512bd4)
![Platform](https://img.shields.io/badge/Platform-Windows%2010%2F11-0ea5e9)
![License](https://img.shields.io/badge/License-CSVEditor%20v1.0-059669)

**Ứng dụng desktop chỉnh sửa tệp CSV, TSV và văn bản phân cách trên Windows.**

[Trang chủ](https://tnkbang.github.io/CSVEditor/) · [Tài liệu hướng dẫn](https://tnkbang.github.io/CSVEditor/docs.html) · [Lịch sử cập nhật](https://tnkbang.github.io/CSVEditor/changelog.html) · [Báo lỗi](https://github.com/tnkbang/CSVEditor/issues)

[English](README.md) | Tiếng Việt | [日本語](README_Ja.md)

</div>

---

## Tổng quan

**CSV Editor** là ứng dụng Windows desktop xây dựng bằng **.NET 8** và **Windows Forms** với **không phụ thuộc thư viện NuGet bên ngoài**. Ứng dụng giữ nguyên tính toàn vẹn dữ liệu gốc (số 0 ở đầu, ngày tháng, bảng mã, ký tự xuống dòng theo từng hàng) đồng thời cung cấp trải nghiệm thao tác bảng tính hiện đại.

## Tính năng chính (v3.1.0.0)

- **Lưới HyperSheet**: Điều khiển bảng tính ảo hóa hỗ trợ chọn nhiều vùng (`Ctrl`/`Shift`), chỉnh sửa nhiều dòng (`Alt+Enter`), đề xuất nhập liệu Auto-Suggest, Đóng băng hàng/cột, Ẩn/Hiện, AutoFit và Thu phóng (50%–500%).
- **Fill Handle & Auto Fill kiểu Excel**: Kéo thả hoặc nhấp đúp Fill Handle với 9 chiến lược điền chuỗi (Formula, Thứ, Tháng, Ngày kiểu Nhật, Ngày/Giờ, Số, Boolean, Chữ-Số, Sao chép) kèm tùy chọn Fill Series / Copy Cells.
- **Tìm kiếm, Thay thế, Sắp xếp & Lọc**: 6 chế độ tìm kiếm (Chứa, Chính xác, Bắt đầu/Kết thúc, Regex và truy vấn **SQL `WHERE`** có thể lọc trực tiếp), lọc nhiều cột kiểu Excel và 4 chế độ sắp xếp (Tăng dần, Giảm dần, Tự nhiên, Ngẫu nhiên).
- **Kiểm tra dữ liệu thời gian thực**: 8 quy tắc cấu hình được (ngoặc kép lệch, khoảng trắng thừa, dấu phân cách/xuống dòng chưa quote, số 0 ở đầu...) kèm Error Panel và sửa nhanh (Quick Fix).
- **64 Bảng mã & Kiểm soát ký tự xuống dòng**: Tự động nhận diện 14 nhóm bảng mã (Unicode, Tiếng Nhật, Trung, Hàn, Châu Âu, 5 bảng mã Tiếng Việt gồm TCVN3/VNI/Windows-1258/VISCII/VPS, Tiếng Thái), theo dõi `CR LF` / `LF` / `CR` theo từng dòng và cột hiển thị Newline tùy chọn.
- **Kiến trúc dữ liệu & An toàn**: Lưu trữ phân khối (`DataChunk`), `StringPool` + `Utf8ByteArena`, ánh xạ hàng/cột ảo, bảo vệ RAM trước thao tác (`MemoryManager`), lưu nguyên tử chống hỏng file (`SafeFileWriter`) và Undo/Redo có giới hạn bộ nhớ.
- **Công cụ tích hợp & Tùy chỉnh**: Đa tab, Mở từ URL, Xuất Excel `.xlsx` thuần OpenXML, Gộp file, Mã hóa file AES-128-CBC, Chụp vùng nhìn vào Clipboard, Đồng hồ bấm giờ độc lập, giao diện Sáng/Tối và Trung tâm Cài đặt 8 trang có tìm kiếm & xem trước trực tiếp.
- **Đa ngôn ngữ**: Chuyển đổi tức thì giữa **Tiếng Việt**, **English** và **日本語**.

## Tải xuống & Yêu cầu hệ thống

- **Hệ điều hành**: Windows 10 / 11
- **Runtime**: [.NET 8.0 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/8.0)
- **Tải xuống**:
  - [Bản Portable (.zip)](https://tnkbang.github.io/CSVEditor/data/CSVEditor-portable.zip) — không cần cài đặt
  - [Bản Cài đặt (.exe)](https://tnkbang.github.io/CSVEditor/data/CSVEditor%20Setup.exe) — trình cài đặt chuẩn Windows

## Tài liệu

Toàn bộ hướng dẫn sử dụng, phím tắt đã kiểm chứng, danh sách bảng mã và xử lý sự cố được đăng tải tại website chính thức:

- **Giới thiệu sản phẩm**: https://tnkbang.github.io/CSVEditor/
- **Hướng dẫn sử dụng**: https://tnkbang.github.io/CSVEditor/docs.html
- **Lịch sử cập nhật**: https://tnkbang.github.io/CSVEditor/changelog.html

## Biên dịch từ mã nguồn

```bash
git clone https://github.com/tnkbang/CSVEditor.git
cd CSVEditor
dotnet build CSVEditor.sln -c ReleasePortable
```

## Giấy phép

Phát hành theo **CSVEditor Software License v1.0** — miễn phí cho mục đích cá nhân, học tập và sử dụng thương mại nội bộ; người dùng sở hữu hoàn toàn mọi tệp đầu ra. Nghiêm cấm bán lại hoặc phân phối thương mại phần mềm. Xem chi tiết tại [LICENSE_Vi](LICENSE_Vi) ([English](LICENSE)).

## Liên hệ

- GitHub: [@tnkbang](https://github.com/tnkbang)
- Email: tnkbang.dev@gmail.com
