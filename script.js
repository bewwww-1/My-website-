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

// ฟังก์ชันการลงชื่อเข้าใช้ด้วย Google
document.getElementById('googleLogin').addEventListener('click', function() {
    alert('ลงชื่อเข้าใช้ด้วย Google');
    // แทนที่ด้วยการเรียกใช้ API ของ Google
});

// ฟังก์ชันการลงชื่อเข้าใช้ด้วย Facebook
document.getElementById('facebookLogin').addEventListener('click', function() {
    alert('ลงชื่อเข้าใช้ด้วย Facebook');
    // แทนที่ด้วยการเรียกใช้ API ของ Facebook
});

// ฟังก์ชันการลงชื่อเข้าใช้ด้วย Apple
document.getElementById('appleLogin').addEventListener('click', function() {
    alert('ลงชื่อเข้าใช้ด้วย Apple');
    // แทนที่ด้วยการเรียกใช้ API ของ Apple
});