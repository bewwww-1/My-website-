// Cart functionality
let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product.name + ' ถูกเพิ่มในตะกร้า');
}

function openCart() {
  let cartItems = cart.map(item => item.name).join(', ');
  alert('คุณมี ' + cart.length + ' รายการในตะกร้า: ' + cartItems);
}

// Buy Now functionality
function buyNow(product) {
  addToCart(product);
  window.location.href = 'checkout.html'; // Update this to point to your checkout page
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