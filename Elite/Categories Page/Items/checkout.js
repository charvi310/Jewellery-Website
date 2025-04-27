// Sample Data
let cart = [
    { id: 1, name: 'Ring', price: 120, quantity: 1 },
];

const orderItems = document.getElementById('orderItems');
const grandTotal = document.getElementById('grandTotal');

// Function to Update Cart Table
function updateCart() {
    orderItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal}</td>
            <td class="actions">
                <button onclick="addItem(${item.id})">+</button>
                <button onclick="removeItem(${item.id})">-</button>
            </td>
        `;
        orderItems.appendChild(row);
    });

    grandTotal.textContent = `grand Total: $${total}`;
}

// Add Item to Cart
function addItem(id) {
    const item = cart.find(product => product.id === id);
    if (item) {
        item.quantity += 1;
    }
    updateCart();
}

// Remove Item from Cart
function removeItem(id) {
    const item = cart.find(product => product.id === id);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            cart = cart.filter(product => product.id !== id);
        }
    }
    updateCart();
}

// Complete Checkout
function completeCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to proceed.');
        return;
    }

    alert('Purchase completed successfully! Thank you for shopping with us.');
    cart = []; // Reset Cart after Checkout
    updateCart();
}

// Initialize Cart
updateCart();