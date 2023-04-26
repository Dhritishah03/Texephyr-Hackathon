// Cart functionality
const cart = [];

function addToCart(id) {
  // Check if item is already in cart
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    // If so, increase quantity
    existingItem.quantity += 1;
  } else {
    // Otherwise, add new item to cart
    const item = {
      id: id,
      quantity: 1
    };
    cart.push(item);
  }
  
  // Update cart UI
  updateCart();
}

function updateCart() {
  // Get cart element
  const cartEl = document.querySelector('.cart');
  
  // Clear cart element
  cartEl.innerHTML = '';
  
  // Add cart title
  const titleEl = document.createElement('h2');
  titleEl.innerText = 'Cart';
  cartEl.appendChild(titleEl);
  
  // Add cart items
  const itemsEl = document.createElement('ul');
  cart.forEach(item => {
    const itemEl = document.createElement('li');
    itemEl.innerHTML = `<span>Product ${item.id}</span> <span>${item.quantity}</span>`;
    itemsEl.appendChild(itemEl);
  });
  cartEl.appendChild(itemsEl);
}

// Add event listener to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', handleAddToCartClick);
});

function handleAddToCartClick(event) {
  // Get product ID from button data attribute
  const id = event.target.dataset.id;
  
  // Add item to cart
  addToCart(id);
}
