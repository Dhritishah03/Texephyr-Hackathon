// Get the add-to-cart buttons and attach event listeners to them
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

// Function to handle the add to cart button click
function addToCartClicked(event) {
  const button = event.target;
  const product = button.dataset.product;
  addItemToCart(product);
  updateCartTotal();
}

// Function to add an item to the cart
function addItemToCart(product) {
  const cartItems = document.querySelector('.cart-items');
  const cartItemNames = cartItems.querySelectorAll('.cart-item-title');
  
  // Check if the item already exists in the cart
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].textContent === product) {
      alert('This item is already added to the cart');
      return;
    }
  }
  
  // If the item doesn't exist in the cart, add it
  const cartRow = document.createElement('li');
  cartRow.classList.add('cart-row');
  cartRow.innerHTML = `
    <span class="cart-item-title">${product}</span>
    <span class="cart-item-price">$10.00</span>
    <button class="remove-item">Remove</button>
  `;
  cartItems.appendChild(cartRow);
  
  // Attach event listener to the remove button
  cartRow.querySelector('.remove-item').addEventListener('click', removeItem);
}

// Function to update the total cost of the cart
function updateCartTotal() {
  const cartItems = document.querySelector('.cart-items');
  const cartRows = cartItems.querySelectorAll('.cart-row');
  let total = 0;
  
  cartRows.forEach(cartRow => {
    const priceElement = cartRow.querySelector('.cart-item-price');
    const price = parseFloat(priceElement.textContent.replace('$', ''));
    total += price;
  });
  
  document.querySelector('.cart-total').textContent = total.toFixed(2);
}

// Function to handle the remove button click
function removeItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

// Function to handle the checkout button click
const checkoutButton = document.querySelector('.checkout');
checkoutButton.addEventListener('click', () => {
  const cartItems = document.querySelector('.cart-items');
  const cartRows = cartItems.querySelectorAll('.cart-row');
  
  if (cartRows.length === 0) {
    alert('Your cart is empty');
    return;
  }
  
  alert('Thank you for your purchase');
  cartItems.innerHTML = '';
  document.querySelector('.cart-total').textContent = '0.00';
});
