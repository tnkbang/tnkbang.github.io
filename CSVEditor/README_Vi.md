# CSV Editor

<div align="center">

![CSV Editor](https://img.shields.io/badge/CSV-Editor-blue)
![.NET 8](https://img.shields.io/badge/.NET-8.0-purple)
![Windows](https://img.shields.io/badge/Platform-Windows-lightgrey)
![License](https://img.shields.io/badge/License-MIT-green)

Ứng dụng chỉnh sửa file CSV mạnh mẽ và đầy đủ tính năng được xây dựng bằng .NET 8 và Windows Forms

[English](README.md) | [日本語](README_Ja.md)

</div>

---

## 📖 Tổng Quan

CSV Editor là ứng dụng desktop hiệu suất cao được thiết kế để xem, chỉnh sửa và quản lý các file CSV lớn một cách dễ dàng. Được xây dựng trên nền tảng .NET 8, ứng dụng cung cấp giao diện trực quan giống Excel với các tính năng nâng cao để thao tác dữ liệu, lọc, tìm kiếm và nhiều hơn nữa.

### ✨ Điểm Mạnh

- **Hiệu Suất Cao**: Tối ưu hóa để xử lý các bộ dữ liệu lớn (hàng triệu ô) với quản lý bộ nhớ hiệu quả và xử lý song song
- **DataGrid Nâng Cao**: Triển khai DataGrid tùy chỉnh với chế độ ảo hóa cho cuộn và chỉnh sửa mượt mà
- **Quản Lý Bộ Nhớ Thông Minh**: StringPool và PooledStringTable để khử trùng lặp chuỗi hiệu quả về bộ nhớ
- **Hoàn Tác/Làm Lại Hoàn Chỉnh**: Triển khai mẫu lệnh đầy đủ với lịch sử hoàn tác/làm lại không giới hạn (lên đến 100 bước)
- **Hỗ Trợ Đa Ngôn Ngữ**: Bản địa hóa tích hợp (Tiếng Việt & Tiếng Anh)
- **Giao Diện Hiện Đại**: Giao diện sạch sẽ, trực quan với nhận thức DPI và khả năng thu phóng

---

## ⌨️ Phím Tắt

Tham khảo nhanh tất cả các phím tắt trong CSV Editor:

### Thao Tác File
| Phím Tắt | Chức Năng | Mô Tả |
|----------|-----------|-------|
| `Ctrl + N` | Tạo File Mới | Tạo file CSV mới với kích thước tùy chỉnh |
| `Ctrl + O` | Mở File | Mở file CSV hiện có |
| `Ctrl + S` | Lưu | Lưu file hiện tại |
| `Ctrl + Shift + S` | Lưu Thành | Lưu file hiện tại với tên mới |
| `Ctrl + E` | Xuất Ra Excel | Xuất dữ liệu hiện tại sang định dạng Excel (.xlsx) |
| `Ctrl + W` | Đóng File | Đóng file hiện tại |

### Thao Tác Chỉnh Sửa
| Phím Tắt | Chức Năng | Mô Tả |
|----------|-----------|-------|
| `Ctrl + Z` | Hoàn Tác | Hoàn tác thao tác vừa thực hiện |
| `Ctrl + Y` | Làm Lại | Làm lại thao tác vừa hoàn tác |
| `Ctrl + Shift + Z` | Làm Lại | Làm lại thao tác vừa hoàn tác (phím thay thế) |
| `F2` | Chỉnh Sửa Ô | Vào chế độ chỉnh sửa cho ô hiện tại |
| `Delete` / `Backspace` | Xóa Nội Dung Ô | Xóa nội dung của các ô đã chọn |
| `Ctrl + C` | Sao Chép | Sao chép các ô đã chọn |
| `Ctrl + X` | Cắt | Cắt các ô đã chọn (xóa nội dung) |
| `Ctrl + V` | Dán | Dán nội dung clipboard bắt đầu từ ô hiện tại |

### Thao Tác Xem
| Phím Tắt | Chức Năng | Mô Tả |
|----------|-----------|-------|
| `Ctrl + F` | Tìm Và Thay Thế | Mở hộp thoại Tìm và Thay Thế |
| `Ctrl + H` | Tìm Và Thay Thế | Mở hộp thoại Tìm và Thay Thế (phím thay thế) |
| `F3` | Tìm Tiếp | Tìm kết quả tiếp theo (khi hộp thoại Tìm đang mở) |
| `Shift + F3` | Tìm Trước | Tìm kết quả trước đó (khi hộp thoại Tìm đang mở) |
| `Esc` | Đóng Hộp Thoại Tìm | Đóng hộp thoại Tìm và Thay Thế |
| `Ctrl + Q` | Bật/Tắt Dấu Ngoặc Kép | Hiện/Ẩn dấu ngoặc kép trong các ô |
| `Ctrl + R` | Tự Động Điều Chỉnh Cột | Tự động điều chỉnh tất cả các cột theo nội dung |

### Thao Tác Thu Phóng
| Phím Tắt | Chức Năng | Mô Tả |
|----------|-----------|-------|
| `Ctrl + Dấu Cộng (+)` | Phóng To | Tăng mức thu phóng lên 25% |
| `Ctrl + Dấu Trừ (-)` | Thu Nhỏ | Giảm mức thu phóng xuống 25% |
| `Ctrl + 0` | Đặt Lại Thu Phóng | Đặt lại thu phóng về 100% |
| `Ctrl + Lăn Chuột` | Phóng To/Thu Nhỏ | Phóng to (lăn lên) hoặc thu nhỏ (lăn xuống) |

### Thao Tác Hàng
| Phím Tắt | Chức Năng | Mô Tả |
|----------|-----------|-------|
| `Ctrl + Insert` | Chèn Hàng | Chèn hàng mới tại vị trí hiện tại |
| `Ctrl + H` | Ẩn Hàng | Ẩn các hàng đã chọn |

### Điều Hướng
| Phím Tắt | Chức Năng | Mô Tả |
|----------|-----------|-------|
| `Phím Mũi Tên` | Di Chuyển Ô | Di chuyển giữa các ô |
| `Tab` | Di Chuyển Phải | Di chuyển đến ô tiếp theo (bên phải) |
| `Shift + Tab` | Di Chuyển Trái | Di chuyển đến ô trước đó (bên trái) |
| `Enter` | Di Chuyển Xuống | Di chuyển đến ô bên dưới |
| `Home` | Cột Đầu Tiên | Di chuyển đến cột đầu tiên trong hàng hiện tại |
| `End` | Cột Cuối Cùng | Di chuyển đến cột cuối cùng trong hàng hiện tại |
| `Ctrl + Home` | Ô Đầu Tiên | Di chuyển đến ô đầu tiên (góc trên bên trái) |
| `Ctrl + End` | Ô Cuối Cùng | Di chuyển đến ô cuối cùng (góc dưới bên phải) |
| `Page Up` | Cuộn Lên | Cuộn lên một màn hình |
| `Page Down` | Cuộn Xuống | Cuộn xuống một màn hình |

### Lưu Ý
- Hầu hết các phím tắt tuân theo quy ước chuẩn của Windows
- Phím tắt không phân biệt chữ hoa chữ thường trừ khi được chỉ định
- Một số phím tắt có thể bị vô hiệu hóa khi lưới ở chế độ chỉ đọc hoặc đang xử lý dữ liệu
- Khi hộp thoại Tìm và Thay Thế đang mở, nhấn `Esc` sẽ đóng nó và trả lại focus cho lưới

---

## 🚀 Tính Năng

### Thao Tác File

#### Tạo File Mới
Tạo file CSV mới với kích thước tùy chỉnh.

**Cách sử dụng:**
1. Nhấp **File → New** hoặc nhấn **`Ctrl+N`**
2. Nhập số hàng và số cột
3. Bắt đầu chỉnh sửa dữ liệu

**Phím tắt:** `Ctrl+N`

#### Mở File
Mở và tải file CSV với tự động phát hiện mã hóa.

**Cách sử dụng:**
1. Nhấp **File → Open** hoặc nhấn **`Ctrl+O`**
2. Chọn file CSV của bạn
3. Ứng dụng tự động phát hiện mã hóa và dấu phân cách

**Phím tắt:** `Ctrl+O`

**Định Dạng Hỗ Trợ:**
- CSV (Giá trị phân cách bằng dấu phẩy)
- TSV (Giá trị phân cách bằng tab)
- File với dấu phân cách tùy chỉnh

#### Lưu / Lưu Thành
Lưu thay đổi vào file hiện tại hoặc xuất ra file mới.

**Cách sử dụng:**
- **Lưu:** Nhấn **`Ctrl+S`** để lưu vào file hiện tại
- **Lưu Thành:** Nhấn **`Ctrl+Shift+S`** để lưu thành file mới

**Phím tắt:**
- Lưu: `Ctrl+S`
- Lưu Thành: `Ctrl+Shift+S`

#### Đóng File
Đóng file hiện tại và xóa lưới dữ liệu.

**Phím tắt:** `Ctrl+W`

#### Xuất Ra Excel
Xuất dữ liệu CSV sang định dạng Excel (.xlsx).

**Cách sử dụng:**
1. Nhấp **File → Export to Excel** hoặc nhấn **`Ctrl+E`**
2. Chọn vị trí lưu
3. Dữ liệu sẽ được xuất với độ rộng cột tối ưu

**Phím tắt:** `Ctrl+E`

#### Gộp File
Kết hợp nhiều file CSV thành một.

**Cách sử dụng:**
1. Nhấp **File → Merge Files**
2. Chọn nhiều file CSV
3. Các file sẽ được gộp theo từng hàng với căn chỉnh cột tự động

**Tính năng:**
- Căn chỉnh cột tự động
- Thanh tiến trình cho file lớn
- Xử lý số lượng cột khác nhau

#### Mã Hóa File
Mở và lưu file với bảo vệ mã hóa.

**Cách sử dụng:**
- **Mở File Mã Hóa:** File → Open with Encryption
- **Lưu File Mã Hóa:** File → Save with Encryption

---

### Thao Tác Chỉnh Sửa

#### Hoàn Tác / Làm Lại
Hoàn nguyên hoặc áp dụng lại các thay đổi với hỗ trợ lịch sử đầy đủ.

**Phím tắt:**
- Hoàn Tác: `Ctrl+Z`
- Làm Lại: `Ctrl+Y` hoặc `Ctrl+Shift+Z`

**Thao Tác Được Hỗ Trợ:**
- Thay đổi giá trị ô
- Chèn và xóa hàng/cột
- Thao tác ẩn/hiện
- Thao tác lọc
- Đóng băng/Bỏ đóng băng
- Đánh dấu

#### Chỉnh Sửa Ô
Chỉnh sửa giá trị ô trực tiếp trong lưới.

**Cách sử dụng:**
1. Chọn một ô
2. Nhấn **`F2`** hoặc nhấp đúp để chỉnh sửa
3. Nhập giá trị mới
4. Nhấn **`Enter`** để xác nhận hoặc **`Esc`** để hủy

**Phím tắt:**
- Chỉnh sửa: `F2` hoặc nhấp đúp
- Chỉnh sửa nhiều ô: Chọn ô → nhấn `Delete` hoặc dán dữ liệu

#### Sao Chép / Dán
Thao tác clipboard tiêu chuẩn với hỗ trợ nhiều ô.

**Cách sử dụng:**
- **Sao Chép:** Chọn ô → `Ctrl+C`
- **Cắt:** Chọn ô → `Ctrl+X`
- **Dán:** Chọn ô bắt đầu → `Ctrl+V`

**Tính năng:**
- Sao chép/dán nhiều ô
- Giữ định dạng phân cách bằng tab
- Dán thông minh với tự động thay đổi kích thước

#### Xóa Nội Dung Ô
Xóa nội dung từ các ô đã chọn.

**Cách sử dụng:**
1. Chọn các ô
2. Nhấn **`Delete`** hoặc **`Backspace`**

**Phím tắt:** `Delete` hoặc `Backspace`

---

### Thao Tác Hàng

#### Chèn Hàng
Thêm hàng mới tại vị trí hiện tại.

**Cách sử dụng:**
1. Nhấp chuột phải vào tiêu đề hàng
2. Chọn **Insert Row** hoặc **Insert Rows**
3. Nhập số hàng cần chèn (đối với chèn hàng loạt)

**Phím tắt:** `Ctrl+Insert`

#### Xóa Hàng
Xóa các hàng đã chọn.

**Cách sử dụng:**
1. Chọn hàng bằng cách nhấp vào tiêu đề hàng
2. Nhấp chuột phải → **Delete Selected Rows**
3. Xác nhận xóa

**Tính năng:**
- Chọn nhiều hàng (nhấp + Shift/Ctrl)
- Hỗ trợ hoàn tác

#### Ẩn / Hiện Hàng
Tạm thời ẩn hàng khỏi chế độ xem.

**Cách sử dụng:**
- **Ẩn:** Chọn hàng → nhấp chuột phải → **Hide Selected Rows** hoặc `Ctrl+H`
- **Hiện:** Nhấp chuột phải → **Unhide Selected Rows**
- **Hiện Tất Cả:** Nhấp chuột phải → **Unhide All Rows**

**Phím tắt:**
- Ẩn: `Ctrl+H`

**Lưu ý:** Các hàng bị ẩn được giữ nguyên khi lưu file

#### Đóng Băng / Bỏ Đóng Băng Hàng
Khóa hàng ở đầu chế độ xem.

**Cách sử dụng:**
1. Chọn hàng cần đóng băng
2. Nhấp chuột phải → **Freeze Row**
3. Các hàng đóng băng vẫn hiển thị khi cuộn

**Để bỏ đóng băng:**
- Nhấp chuột phải vào vùng đóng băng → **Unfreeze Row**

**Tính năng:**
- Đóng băng một hàng (hàng đó và tất cả các hàng phía trên)
- Chỉ báo trực quan cho hàng đóng băng
- Được giữ nguyên khi thu phóng

---

### Thao Tác Cột

#### Chèn Cột
Thêm cột mới tại vị trí hiện tại.

**Cách sử dụng:**
1. Nhấp chuột phải vào tiêu đề cột
2. Chọn **Insert Column** hoặc **Insert Columns**
3. Nhập số cột cần chèn

#### Xóa Cột
Xóa các cột đã chọn.

**Cách sử dụng:**
1. Chọn cột bằng cách nhấp vào tiêu đề cột
2. Nhấp chuột phải → **Delete Selected Columns**
3. Xác nhận xóa

#### Ẩn / Hiện Cột
Tạm thời ẩn cột khỏi chế độ xem.

**Cách sử dụng:**
- **Ẩn:** Chọn cột → nhấp chuột phải → **Hide Selected Columns**
- **Hiện:** Nhấp chuột phải → **Unhide Selected Columns**
- **Hiện Tất Cả:** Nhấp chuột phải → **Unhide All Columns**

#### Đóng Băng / Bỏ Đóng Băng Cột
Khóa cột ở bên trái chế độ xem.

**Cách sử dụng:**
1. Chọn cột cần đóng băng
2. Nhấp chuột phải → **Freeze Column**
3. Các cột đóng băng vẫn hiển thị khi cuộn ngang

**Để bỏ đóng băng:**
- Nhấp chuột phải vào vùng đóng băng → **Unfreeze Column**

#### Tự Động Điều Chỉnh Độ Rộng Cột
Tự động điều chỉnh độ rộng cột theo nội dung.

**Cách sử dụng:**
- Nhấp **View → Resize Columns** hoặc nhấn **`Ctrl+R`**
- Hoặc nhấp đúp vào đường phân cách cột

**Phím tắt:** `Ctrl+R`

**Tính năng:**
- Tính toán độ rộng tối ưu cho tất cả các cột
- Chỉ báo tiến trình cho bộ dữ liệu lớn

#### Kiểu Tiêu Đề Cột
Chọn cách hiển thị tiêu đề cột.

**Cách sử dụng:**
1. Nhấp **View → Column Header Style**
2. Chọn từ:
   - **Number:** 1, 2, 3...
   - **Excel Style:** A, B, C... AA, AB...
   - **CSV Header:** Sử dụng hàng đầu tiên làm tiêu đề

**Tính năng:**
- Chế độ CSV Header xem hàng đầu tiên là tiêu đề (không chỉnh sửa được)
- Kiểu tiêu đề được giữ trong cài đặt

---

### Thao Tác Dữ Liệu

#### Tìm Và Thay Thế
Chức năng tìm kiếm và thay thế mạnh mẽ.

**Cách sử dụng:**
1. Nhấn **`Ctrl+F`** hoặc **`Ctrl+H`**
2. Nhập văn bản tìm kiếm
3. Chọn chế độ tìm kiếm:
   - **Accurate:** Khớp chính xác
   - **Contains:** Khớp một phần
   - **Starts With:** Khớp đầu
   - **Ends With:** Khớp cuối
4. Tùy chọn:
   - **Find Only Column:** Chỉ tìm trong cột hiện tại
5. Nhấp **Find Next** hoặc **Find Previous**

**Phím tắt:**
- Mở Tìm: `Ctrl+F` hoặc `Ctrl+H`
- Tìm Tiếp: `F3` hoặc nhấp **Find Next**
- Tìm Trước: `Shift+F3` hoặc nhấp **Find Previous**
- Thay Thế: Nhấp **Replace**
- Thay Thế Tất Cả: Nhấp **Replace All**
- Đóng: `Esc`

**Tính năng:**
- Đánh dấu tất cả kết quả khớp
- Hiển thị số lượng kết quả
- Thay thế một hoặc tất cả các lần xuất hiện
- Tìm kiếm song song nhanh cho bộ dữ liệu lớn

#### Lọc Cột
Lọc cột kiểu Excel.

**Cách sử dụng:**
1. Nhấp chuột phải vào tiêu đề cột
2. Chọn **Filter Column**
3. Chọn giá trị để hiện/ẩn
4. Sắp xếp theo tên hoặc số lượng
5. Nhấp **Submit**

**Để xóa bộ lọc:**
- Nhấp chuột phải → **Clear Filter**

**Tính năng:**
- Lọc chọn nhiều
- Tìm kiếm trong các giá trị lọc
- Sắp xếp tăng/giảm dần theo tên hoặc số lượng
- Hiển thị số lượng mục cho mỗi giá trị
- Kết hợp bộ lọc trên nhiều cột

#### Sắp Xếp Dữ Liệu
Sắp xếp hàng theo giá trị cột.

**Cách sử dụng:**
1. Nhấp chuột phải vào tiêu đề cột
2. Chọn chế độ sắp xếp:
   - **Ascending:** A → Z, 0 → 9
   - **Descending:** Z → A, 9 → 0
   - **Natural:** Sắp xếp số tự nhiên (1, 2, 10 thay vì 1, 10, 2)
   - **Shuffle:** Thứ tự ngẫu nhiên

**Tính năng:**
- Nhiều thuật toán sắp xếp
- Giữ nguyên tính toàn vẹn của hàng
- Hoạt động với dữ liệu đã lọc

---

### Thao Tác Xem

#### Thu Phóng
Điều chỉnh kích thước xem để nhìn rõ hơn.

**Cách sử dụng:**
- **Phóng To:** Nhấp nút **+** hoặc nhấn **`Ctrl++`**
- **Thu Nhỏ:** Nhấp nút **-** hoặc nhấn **`Ctrl+-`**
- **Đặt Lại Thu Phóng:** Nhấn **`Ctrl+0`**
- **Đặt Tùy Chỉnh:** Nhấp phần trăm thu phóng → nhập giá trị

**Phím tắt:**
- Phóng To: `Ctrl++` hoặc `Ctrl+Lăn Chuột Lên`
- Thu Nhỏ: `Ctrl+-` hoặc `Ctrl+Lăn Chuột Xuống`
- Đặt Lại: `Ctrl+0`

**Phạm Vi Thu Phóng:** 50% đến 500% với bước nhảy 25%

**Tính năng:**
- Điều chỉnh phông chữ, chiều cao hàng và độ rộng cột
- Giữ vị trí cuộn
- Tính toán lại bố cục động

#### Dấu Ngoặc Kép
Bật/tắt hiển thị dấu ngoặc kép trong ô.

**Cách sử dụng:**
- Nhấp **View → Quote Marks** hoặc nhấn **`Ctrl+Q`**

**Phím tắt:** `Ctrl+Q`

**Tính năng:**
- Thêm dấu ngoặc kép: Chọn ô → nhấp chuột phải → **Add Quote Marks**
- Xóa dấu ngoặc kép: Chọn ô → nhấp chuột phải → **Remove Quote Marks**

---

### Thao Tác Đánh Dấu

#### Thêm Đánh Dấu
Đánh dấu các ô quan trọng bằng màu nền.

**Cách sử dụng:**
1. Chọn các ô
2. Nhấp chuột phải → **Add Highlight**

**Tính năng:**
- Bền vững qua các phiên
- Hỗ trợ hoàn tác/làm lại
- Đánh dấu ô trực quan

#### Xóa Đánh Dấu
Xóa đánh dấu khỏi các ô đã chọn.

**Cách sử dụng:**
1. Chọn các ô đã đánh dấu
2. Nhấp chuột phải → **Remove Highlight**

#### Xóa Tất Cả Đánh Dấu
Xóa tất cả đánh dấu khỏi lưới.

**Cách sử dụng:**
- Nhấp chuột phải → **Clear All Highlights**

---

### Cài Đặt

#### Mã Hóa
Đặt mã hóa ký tự cho các thao tác file.

**Cách sử dụng:**
1. Nhấp **Settings → Encoding**
2. Chọn từ: UTF-8, Shift-JIS, v.v.

**Tính năng:**
- Tự động phát hiện khi mở file
- Được giữ mỗi phiên

#### Dấu Phân Cách
Đặt ký tự phân cách trường.

**Cách sử dụng:**
1. Nhấp **Settings → Delimiter**
2. Chọn từ:
   - Dấu phẩy (`,`)
   - Tab (`\t`)
   - Dấu chấm phẩy (`;`)
   - Dấu gạch đứng (`|`)
   - Tùy chỉnh

**Tính năng:**
- Áp dụng khi mở/lưu file
- Hỗ trợ dấu phân cách tùy chỉnh

#### Ngôn Ngữ
Chuyển đổi giữa Tiếng Việt, Tiếng Anh và Tiếng Nhật.

**Cách sử dụng:**
1. Nhấp **Settings → Language**
2. Chọn **Vietnamese**, **English** hoặc **Japanese**

**Tính năng:**
- Cập nhật UI ngay lập tức
- Được giữ trong cài đặt

---

## 🛠️ Yêu Cầu Hệ Thống

- **Hệ Điều Hành:** Windows 10 trở lên
- **Framework:** .NET 8.0 Runtime
- **Bộ Nhớ:** Tối thiểu 4 GB RAM (khuyến nghị 8 GB cho file lớn)
- **Dung Lượng Đĩa:** 50 MB

---

## 📦 Cài Đặt

1. Tải phiên bản mới nhất từ [Releases](https://github.com/tnkbang/CSVEditor/releases)
2. Giải nén file ZIP
3. Chạy `CSVEditor.exe`

**Không cần cài đặt!** Ứng dụng có thể di động.

---

## 🖱️ Mẹo Sử Dụng

### Chọn
- **Một Ô:** Nhấp vào ô
- **Nhiều Ô:** Nhấp + kéo, hoặc Shift+nhấp
- **Toàn Bộ Hàng:** Nhấp tiêu đề hàng
- **Toàn Bộ Cột:** Nhấp tiêu đề cột
- **Nhiều Hàng/Cột:** Nhấp + Ctrl cho không liên tục, Shift cho phạm vi

### Kéo Và Thả
- Kéo file CSV trực tiếp vào cửa sổ ứng dụng để mở chúng
- Nhiều file mở trong các cửa sổ riêng biệt

### Menu Ngữ Cảnh
- Nhấp chuột phải vào ô, hàng hoặc cột để truy cập nhanh các thao tác

### Điều Hướng Bàn Phím
- **Phím Mũi Tên:** Di chuyển giữa các ô
- **Tab:** Di chuyển đến ô tiếp theo
- **Enter:** Di chuyển đến ô bên dưới
- **Page Up/Down:** Cuộn một màn hình
- **Home/End:** Đến ô đầu/cuối trong hàng
- **Ctrl+Home/End:** Đến ô đầu/cuối trong lưới

---

## 🔧 Chi Tiết Kỹ Thuật

### Kiến Trúc
- **DataGrid Tùy Chỉnh:** Lưới ảo hóa hiệu suất cao
- **Mẫu Lệnh:** Hệ thống hoàn tác/làm lại hoàn chỉnh
- **StringPool:** Khử trùng lặp chuỗi hiệu quả về bộ nhớ
- **Xử Lý Song Song:** Tìm kiếm và thao tác dữ liệu nhanh cho bộ dữ liệu lớn

### Phụ Thuộc
- **.NET 8.0:** Framework Core
- **MiniExcel:** Chức năng xuất Excel
- **Windows Forms:** Framework UI

---

## 📝 Giấy Phép

Dự án này được cấp phép theo Giấy phép MIT - xem file [LICENSE](LICENSE) để biết chi tiết.

---

## 🤝 Đóng Góp

Đóng góp luôn được chào đón! Vui lòng thoải mái gửi Pull Request.

---

## 📧 Liên Hệ

- **GitHub:** [tnkbang/CSVEditor](https://github.com/tnkbang/CSVEditor)
- **Issues:** [Báo cáo lỗi](https://github.com/tnkbang/CSVEditor/issues)

---

## 🙏 Cảm Ơn

- Thư viện MiniExcel cho chức năng xuất Excel
- Cộng đồng .NET cho framework và công cụ tuyệt vời

---

<div align="center">

Được tạo với ❤️ sử dụng .NET 8

</div>
