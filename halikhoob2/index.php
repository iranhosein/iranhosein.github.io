<?php
// اتصال به پایگاه داده
require_once 'db.php';

// دریافت اطلاعات هنرجویان از پایگاه داده (برای نمایش در صفحه)
try {
    $stmt = $pdo->query("SELECT * FROM students ORDER BY created_at DESC");
    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    $students = [];
    echo "<script>alert('خطا در دریافت اطلاعات: " . $e->getMessage() . "');</script>";
}
?>

<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>حالی خوب</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="logo">لوگوی سایت</div>
        <nav class="nav">
            <a href="#">خانه</a>
            <a href="#">درباره ما</a>
            <a href="#">تماس با ما</a>
            <a href="#">مقالات</a>
        </nav>
    </header>

    <div class="slider-container">
        <div class="slide active">
            <img src="https://picsum.photos/1200/400?random=1" alt="اسلاید 1">
        </div>
        <div class="slide">
            <img src="https://picsum.photos/1200/400?random=2" alt="اسلاید 2">
        </div>
        <div class="slide">
            <img src="https://picsum.photos/1200/400?random=3" alt="اسلاید 3">
        </div>

        <a class="prev" onclick="changeSlide(-1)">❮</a>
        <a class="next" onclick="changeSlide(1)">❯</a>

        <div class="dots">
            <span class="dot active" onclick="goToSlide(0)"></span>
            <span class="dot" onclick="goToSlide(1)"></span>
            <span class="dot" onclick="goToSlide(2)"></span>
        </div>
    </div>

    <div class="content-wrapper">
        <aside class="sidebar">
            <!-- بخش بالایی: لینک‌های پرکاربرد -->
            <div class="sidebar-top">
                <h3>لینک های پرکاربرد</h3>
                <ul>
                    <li><a href="#">صفحه اصلی</a></li>
                    <li><a href="#">گالری تصاویر</a></li>
                    <li><a href="#">دانلودها</a></li>
                    <li><a href="#">پشتیبانی</a></li>
                    <li><a href="#">اخبار</a></li>
                </ul>
            </div>

            <!-- بخش پایینی: ثبت‌نام هنرجو -->
            <div class="registration-section">
                <h3>📝 ثبت نام هنرجوی جدید</h3>
                <form class="registration-form" action="process/register.php" method="POST" enctype="multipart/form-data">
                    <input type="text" name="full_name" placeholder="نام کامل" required>
                    <input type="text" name="national_id" placeholder="شماره ملی (10 رقمی)" pattern="\d{10}" required>
                    <input type="tel" name="phone" placeholder="شماره تماس (09xxxxxxxxx)" pattern="09\d{9}" required>
                    <input type="file" name="image" accept="image/*" required>
                    <button type="submit">ثبت نام سریع</button>
                </form>
            </div>
        </aside>

        <main class="main-content">
            <h1>حالی خوب مجموعه ای برای حالی خوب</h1>

            <div class="description-section">
                <p>مجموعه ی هنری آموزشی <strong>حالی خوب</strong> در تلاش است، آغازی در شأن هنر دوستان و هنرجویان در محیطی آرام و حرفه‌ای با حالی خوب برای عزیزان ایجاد کند.</p>

                <div class="highlight-box">
                    <h3>🏟 امکانات پلاتوها:</h3>
                    <ul>
                        <li>پلاتو رورانس ۴۰ متری با کولر گازی</li>
                        <li>پلاتو PS ۳۰ متری با کولر آبی مستقل</li>
                        <li>کفپوش موکت ضخیم برای ایمنی تمرینات</li>
                        <li>ظرفیت تا ۳۰ نفر با چهار پایه اختصاصی</li>
                    </ul>
                </div>

                <p>وجود کافه گرند هتل با فضایی دلچسب و پذیرایی با کیفیت، تجربه‌ای خاطره‌انگیز برای شما رقم می‌زند.</p>

                <div class="contact-cta">
                    <h3>📱 ما را در اپلیکیشن نشان راحت‌تر پیدا کنید</h3>
                    <p>به امید دیدار<br>حالتون خوب 🌸</p>
                </div>
            </div>

            <!-- نمایش لیست هنرجویان -->
            <?php if (!empty($students)): ?>
                <div class="student-list">
                    <h2>لیست هنرجویان</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>نام کامل</th>
                                <th>شماره ملی</th>
                                <th>شماره تماس</th>
                                <th>تصویر</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($students as $index => $student): ?>
                                <tr>
                                    <td><?php echo $index + 1; ?></td>
                                    <td><?php echo htmlspecialchars($student['full_name']); ?></td>
                                    <td><?php echo htmlspecialchars($student['national_id']); ?></td>
                                    <td><?php echo htmlspecialchars($student['phone']); ?></td>
                                    <td><img src="<?php echo htmlspecialchars($student['image_path']); ?>" alt="تصویر هنرجو" width="50"></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </main>
    </div>

    <footer class="footer">
        <div class="footer-section">
            <h4>تماس با ما</h4>
            <p>📞 ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p>📧 info@example.com</p>
            <p>🏢 تهران، خیابان نمونه، پلاک ۱۲</p>
        </div>

        <div class="footer-section">
            <h4>لینک های مفید</h4>
            <a href="#">🔗 قوانین و مقررات</a>
            <a href="#">🔗 سوالات متداول</a>
            <a href="#">🔗 حریم خصوصی</a>
        </div>

        <div class="footer-section">
            <h4>موقعیت ما</h4>
            <p>📍 شهرک غرب، بلوار فرحزادی</p>
            <div class="map-placeholder">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.811179614849!2d51.36674041526625!3d35.70952388019039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzM0LjMiTiA1McKwMjInMDYuMyJF!5e0!3m2!1sen!2sir!4v1623685707891!5m2!1sen!2sir" 
                    width="100%" 
                    height="150" 
                    style="border:0; border-radius:8px;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>