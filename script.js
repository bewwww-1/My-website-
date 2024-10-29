// ฟังก์ชันสำหรับปุ่ม "SHOP NOW"
document.getElementById('shopNowBtn').addEventListener('click', function() {
    window.location.href = 'shop.html'; // เปลี่ยนไปยังหน้า shop
});

// ฟังก์ชันสำหรับปุ่มเข้าสู่ระบบ
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function() {
    window.location.href = 'login.html'; // เปลี่ยนไปยังหน้า login.html
});

// ฟังก์ชันสำหรับการค้นหา
document.querySelector('.search-bar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`; // ส่งคำค้นหาไปยัง search.html
        }
    }
});

// ฟังก์ชันสำหรับการคลิกที่สินค้า
document.querySelectorAll('.product-card').forEach(function(card) {
    card.addEventListener('click', function() {
        window.location.href = 'product.html'; // เปลี่ยนไปยังหน้ารายละเอียดสินค้า
    });
});

// ฟังก์ชันสำหรับการส่งแบบฟอร์มล็อกอิน (ใน login.html)
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้า
        const username = document.getElementById('username').value;
        alert('ลงชื่อเข้าใช้สำเร็จสำหรับ ' + username);
        window.location.href = 'index.html'; // นำผู้ใช้กลับไปยังหน้าแรกหลังล็อกอินสำเร็จ
    });
}