let cartCount = 0;

function addToCart(itemName, price) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert(`${itemName} added to cart! ($${price.toFixed(2)})`);
}
