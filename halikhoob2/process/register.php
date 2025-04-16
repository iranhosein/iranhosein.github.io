<?php
require_once '../db.php'; // اتصال به پایگاه داده

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // دریافت اطلاعات ارسالی از فرم
    $full_name = $_POST['full_name'];
    $national_id = $_POST['national_id'];
    $phone = $_POST['phone'];

    // آپلود تصویر
    $upload_dir = 'uploads/';
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0777, true); // ایجاد پوشه آپلود در صورت عدم وجود
    }
    $image_name = uniqid() . '_' . basename($_FILES['image']['name']);
    $image_path = $upload_dir . $image_name;
    move_uploaded_file($_FILES['image']['tmp_name'], $image_path);

    // ذخیره اطلاعات در پایگاه داده
    try {
        $stmt = $pdo->prepare("INSERT INTO students (full_name, national_id, phone, image_path) VALUES (?, ?, ?, ?)");
        $stmt->execute([$full_name, $national_id, $phone, $image_path]);

        echo "<script>alert('ثبت نام با موفقیت انجام شد!'); window.location.href = '/';</script>";
    } catch (Exception $e) {
        echo "<script>alert('خطا در ثبت نام: " . $e->getMessage() . "');</script>";
    }
}
?>