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
    featuredProducts: 'Featured Products',
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
    featuredProducts: 'สินค้าที่น่าสนใจ',
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
  document.querySelector('.featured-products h2').textContent = translations[language].featuredProducts;
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