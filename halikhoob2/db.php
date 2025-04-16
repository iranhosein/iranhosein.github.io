
<?php
$host = 'localhost'; // آدرس سرور پایگاه داده
$dbname = 'hali_khub'; // نام پایگاه داده
$username = 'root'; // نام کاربری پایگاه داده
$password = ''; // رمز عبور پایگاه داده (معمولاً برای XAMPP خالی است)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("خطا در اتصال به پایگاه داده: " . $e->getMessage());
}
?>