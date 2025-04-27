const menProducts = [
    { name: 'Men Ring', img: 'https://via.placeholder.com/200', price: '$120', ratings: '★★★★☆' },
    { name: 'Men Bracelet', img: 'https://via.placeholder.com/200', price: '$80', ratings: '★★★☆☆' },
    { name: 'Men Necklace', img: 'https://via.placeholder.com/200', price: '$150', ratings: '★★★★★' },
    { name: 'Men Watch', img: 'https://via.placeholder.com/200', price: '$200', ratings: '★★★★☆' }
];

const womenProducts = [
    { name: 'Women Ring', img: 'https://via.placeholder.com/200', price: '$100', ratings: '★★★★★' },
    { name: 'Women Bracelet', img: 'https://via.placeholder.com/200', price: '$70', ratings: '★★★★☆' },
    { name: 'Women Necklace', img: 'https://via.placeholder.com/200', price: '$180', ratings: '★★★★★' },
    { name: 'Women Earrings', img: 'https://via.placeholder.com/200', price: '$50', ratings: '★★★☆☆' }
];

const couplesProducts = [
    { name: 'Couples Rings', img: 'https://via.placeholder.com/200', price: '$200', ratings: '★★★★★' },
    { name: 'Couples Bracelets', img: 'https://via.placeholder.com/200', price: '$150', ratings: '★★★★☆' },
    { name: 'Couples Necklaces', img: 'https://via.placeholder.com/200', price: '$250', ratings: '★★★★★' },
    { name: 'Couples Watches', img: 'https://via.placeholder.com/200', price: '$300', ratings: '★★★★☆' }
];

const productsContainer = document.getElementById('products');

function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <p class="ratings">${product.ratings}</p>
            <a href="checkout.html">
            <button>Add to Cart</button>
            </a>
        `;
        productsContainer.appendChild(productDiv);
    });
}

document.getElementById('menBtn').addEventListener('click', () => displayProducts(menProducts));
document.getElementById('womenBtn').addEventListener('click', () => displayProducts(womenProducts));
document.getElementById('couplesBtn').addEventListener('click', () => displayProducts(couplesProducts));

// Default display
displayProducts(menProducts);