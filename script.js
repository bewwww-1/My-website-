// ตัวแปรสำหรับข้อความในภาษาต่าง ๆ
const translations = {
  en: {
    header: {
      logo: 'SASOM',
      searchPlaceholder: 'Search products...',
      login: 'Login',
      cart: 'Cart',
      changeLanguage: 'Change Language'
    },
    promotions: 'Special Promotions',
    meantForYou: 'Meant For You',
    newProducts: 'New Arrivals',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    // เพิ่มข้อความอื่น ๆ ที่ต้องการ
  },
  th: {
    header: {
      logo: 'SASOM',
      searchPlaceholder: 'ค้นหาสินค้า...',
      login: 'ลงชื่อเข้าใช้',
      cart: 'ตะกร้าสินค้า',
      changeLanguage: 'เปลี่ยนภาษา'
    },
    promotions: 'โปรโมชั่นพิเศษ',
    meantForYou: 'Meant For You',
    newProducts: 'สินค้ามาใหม่',
    addToCart: 'เพิ่มไปยังตะกร้า',
    buyNow: 'ซื้อเลย',
    // เพิ่มข้อความอื่น ๆ ที่ต้องการ
  }
};

// ฟังก์ชันในการเปลี่ยนภาษา
function changeLanguage() {
  const currentLanguage = localStorage.getItem('language') || 'th';
  const newLanguage = currentLanguage === 'th' ? 'en' : 'th';
  localStorage.setItem('language', newLanguage);
  updateLanguage();
}

// ฟังก์ชันในการอัพเดตข้อความตามภาษา
function updateLanguage() {
  const language = localStorage.getItem('language') || 'th';
  
  document.querySelector('.logo').textContent = translations[language].header.logo;
  document.querySelector('.search-bar').placeholder = translations[language].header.searchPlaceholder;
  document.querySelector('.login-btn').textContent = translations[language].header.login;
  document.querySelector('.cart-btn').textContent = translations[language].header.cart;
  document.querySelector('.language-btn').textContent = translations[language].header.changeLanguage;

  // อัพเดตข้อความในส่วนอื่น ๆ ของเว็บไซต์
  document.querySelector('h2.promotions').textContent = translations[language].promotions;
  document.querySelector('h2.meantForYou').textContent = translations[language].meantForYou;
  // อัพเดตข้อความสำหรับสินค้าต่าง ๆ ใน product.html
}

// เรียกใช้ฟังก์ชันเพื่ออัพเดตภาษาทันทีเมื่อโหลดหน้า
updateLanguage();

// ฟังก์ชันการจัดการตะกร้า
let cart = [];

function addToCart() {
  alert('สินค้าถูกเพิ่มในตะกร้า');
  // เพิ่มสินค้าไปยังตะกร้า
  cart.push({ name: 'New Balance 530 White Silver', price: 2109 });
}

function openCart() {
  alert('คุณมี ' + cart.length + ' รายการในตะกร้า');
}

// ฟังก์ชันซื้อเลย
function buyNow() {
  window.location.href = 'checkout.html';
}

// ฟังก์ชันค้นหา
const searchInput = document.querySelector('.search-bar');
if (searchInput) {
  search