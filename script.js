// ฟังก์ชันสำหรับปุ่ม "SHOP NOW"
document.getElementById('shopNowBtn').addEventListener('click', function() {
    alert('คุณได้คลิกที่ SHOP NOW!');
});

// ฟังก์ชันสำหรับปุ่มเข้าสู่ระบบ
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementsByClassName('close')[0];

loginBtn.addEventListener('click', function() {
    modal.style.display = 'block'; // แสดง modal
});

// ฟังก์ชันสำหรับปิด modal
closeModal.onclick = function() {
    modal.style.display = 'none'; // ซ่อน modal
}

// ปิด modal เมื่อคลิกนอก modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // ซ่อน modal
    }
}

// ฟังก์ชันสำหรับการส่งแบบฟอร์ม
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert('ลงชื่อเข้าใช้สำเร็จสำหรับ ' + username);
    modal.style.display = 'none'; // ซ่อน modal หลังจากเข้าสู่ระบบ
});

// ฟังก์ชันสำหรับค้นหาสินค้า
document.querySelector('.search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase(); // คำค้นหา
    const productCards = document.querySelectorAll('.product-card'); // การ์ดสินค้าทั้งหมด

    productCards.forEach(card => {
        const productName = card.querySelector('p').innerText.toLowerCase(); // ชื่อสินค้า
        if (productName.includes(searchTerm)) {
            card.style.display = 'block'; // แสดงการ์ดที่ตรงกับคำค้นหา
        } else {
            card.style.display = 'none'; // ซ่อนการ์ดที่ไม่ตรง
        }
    });
});