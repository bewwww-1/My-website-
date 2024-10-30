// Cart functionality
let cart = [];

function addToCart() {
  alert('สินค้าถูกเพิ่มในตะกร้า');
  // Add item to cart array (in a real app, send to server or local storage)
  cart.push({ name: 'New Balance 530 White Silver', price: 2109 });
}

function openCart() {
  alert('คุณมี ' + cart.length + ' รายการในตะกร้า');
}

// Buy Now functionality
function buyNow() {
  window.location.href = 'checkout.html';
}

// Search functionality
const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const query = searchInput.value;
    window.location.href = `search.html?query=${query}`;
  }
});