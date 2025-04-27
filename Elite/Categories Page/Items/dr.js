const menProducts = [
    { name: 'Ring 1', img: "Images3/1.jpg", price: '$120', ratings: '★★★★☆' },
    { name: 'Ring 2', img: "Images3/2.jpg", price: '$80', ratings: '★★★☆☆' },
    { name: 'Ring 3', img: "Images3/7.jpg", price: '$150', ratings: '★★★★★' },
    { name: 'Ring 4', img: "Images3/4.jpg", price: '$200', ratings: '★★★★☆' }
];

const womenProducts = [
    { name: 'Ring 1', img: "Images3/11.jpg", price: '$100', ratings: '★★★★★' },
    { name: 'Ring 2', img: "Images3/22.jpg", price: '$70', ratings: '★★★★☆' },
    { name: 'Ring 3', img: "Images3/33.jpg", price: '$180', ratings: '★★★★★' },
    { name: 'Ring 4', img: "Images3/44.jpg", price: '$50', ratings: '★★★☆☆' }
];

const couplesProducts = [
    { name: 'Ring 1', img: "Images3/111.jpg", price: '$200', ratings: '★★★★★' },
    { name: 'Ring 2', img: "Images3/222.jpg", price: '$150', ratings: '★★★★☆' },
    { name: 'Ring 3', img: "Images3/333.jpg", price: '$250', ratings: '★★★★★' },
    { name: 'Ring 4', img: "Images3/444.jpg", price: '$300', ratings: '★★★★☆' }
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