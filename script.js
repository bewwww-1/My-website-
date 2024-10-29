function goToProductPage(productId) {
  window.location.href = productId + '.html';
}

document.getElementById('shopNowBtn').addEventListener('click', function() {
  window.location.href = 'product-category.html';
});