function goToProductPage(productId) {
  window.location.href = productId + '.html';
}

document.getElementById('shopNowBtn').addEventListener('click', function() {
  window.location.href = 'product-category.html';
});

document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'login.html'; // เปลี่ยนไปยังหน้า login.html
});