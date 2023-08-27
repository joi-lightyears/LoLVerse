<?php
// Kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost"; // Thay đổi tên máy chủ nếu cần
$username = "root"; // Thay đổi tên đăng nhập nếu cần
$password = ""; // Thay đổi mật khẩu nếu cần
$dbname = "lol"; // Thay đổi tên cơ sở dữ liệu nếu cần

$conn = new mysqli($servername, $username, $password, $dbname);
// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối đến cơ sở dữ liệu thất bại: " . $conn->connect_error);
}

// Xử lý dữ liệu từ biểu mẫu
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $hoVaTen = $_POST["hoVaTen"];
    $email = $_POST["email"];

    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay chưa
    $checkEmailQuery = "SELECT email FROM thong_tin_nguoi_dung WHERE email = '$email'";
    $result = $conn->query($checkEmailQuery);

    if ($result->num_rows > 0) {
        // Email đã tồn tại, truyền thông báo về JavaScript
        $message = "Email đã tồn tại!";
        echo "$message";
    } else {
        // Email chưa tồn tại, tiến hành đăng ký
        $gioiTinhArray = $_POST["gioiTinh"];
        $soThichArray = $_POST["hobby"];

        // Chuyển mảng gioiTinh và soThich thành chuỗi
        $gioiTinh = implode(', ', $gioiTinhArray);
        $soThich = implode(', ', $soThichArray);

        $quocTich = $_POST["nationaly"];
        $ghiChu = $_POST["note"];

        // Chuẩn bị truy vấn SQL để chèn dữ liệu
        $sql = "INSERT INTO thong_tin_nguoi_dung (ho_va_ten, email, gioi_tinh, so_thich, quoc_tich, ghi_chu) VALUES ('$hoVaTen', '$email', '$gioiTinh', '$soThich', '$quocTich', '$ghiChu')";

        if ($conn->query($sql) === TRUE) {
            // Đăng ký thành công, truyền thông báo về JavaScript
            $message = "Đăng ký thành công!";
            echo "$message";
        } else {
            // Lỗi khi thực hiện truy vấn SQL, truyền thông báo lỗi về JavaScript
            $errorMessage = "Lỗi: " . $sql . "<br>" . $conn->error;
            echo "$errorMessage";
        }
    }
}

// Đóng kết nối
$conn->close();
?>
