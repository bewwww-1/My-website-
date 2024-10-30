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

let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, price) {
  const product = { name: productName, price: price };
  cart.push(product);
  cartCount++;
  cartTotal += price;
  updateCartUI();
  alert(`${productName} ได้ถูกเพิ่มลงในตะกร้า`);
}

function updateCartUI() {
  document.getElementById("cartCount").innerText = cartCount;
  document.getElementById("cartTotal").innerText = cartTotal;

  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = ""; // ล้างรายการเก่าออกก่อน

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `${item.name} - ฿${item.price} <button onclick="removeFromCart(${index})">ลบ</button>`;
    cartItemsContainer.appendChild(cartItem);
  });
}

function toggleCart() {
  const cartModal = document.getElementById("cartModal");
  cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

function removeFromCart(index) {
  const removedItem = cart.splice(index, 1)[0];
  cartCount--;
  cartTotal -= removedItem.price;
  updateCartUI();
}

function checkout() {
  alert("ไปที่หน้าชำระเงิน");
  cart = [];
  cartCount = 0;
  cartTotal = 0;
  updateCartUI();
  toggleCart();
}

// เปิด Cart Modal เมื่อคลิกไอคอนตะกร้า
document.getElementById("cartIcon").addEventListener("click", toggleCart);