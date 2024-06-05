document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
});

const products = [
    { id: 1, name: 'Prato 1', category: 'pratos', image: 'https://via.placeholder.com/200', description: 'Prato de cerâmica. Ideal para servir refeições sofisticadas.', price: 25.99, rating: 4 },
    { id: 2, name: 'Talher 1', category: 'talheres', image: 'https://via.placeholder.com/200', description: 'Conjunto de talheres de aço inox. Duráveis e elegantes.', price: 39.99, rating: 4.5 },
    { id: 3, name: 'Copo 1', category: 'copos', image: 'https://via.placeholder.com/200', description: 'Copo de vidro resistente. Perfeito para drinks e sucos.', price: 12.99, rating: 3.8 },
    { id: 4, name: 'Prato 2', category: 'pratos', image: 'https://via.placeholder.com/200', description: 'Prato decorativo com padrão floral. Ideal para ocasiões especiais.', price: 18.99, rating: 4.2 },
    { id: 5, name: 'Talher 2', category: 'talheres', image: 'https://via.placeholder.com/200', description: 'Conjunto de talheres de prata. Elegância e durabilidade em um único produto.', price: 59.99, rating: 4.7 },
    { id: 6, name: 'Copo 2', category: 'copos', image: 'https://via.placeholder.com/200', description: 'Copo de cristal fino. Para apreciadores de bebidas requintadas.', price: 29.99, rating: 4.6 },
];

const productsContainer = document.querySelector('.products-container');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');

function displayProducts(filteredProducts) {
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-details">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-rating">
                ${getRatingStars(product.rating)}
                <span>(${product.rating.toFixed(1)})</span>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

function getRatingStars(rating) {
    const starsTotal = 5;
    const filledStars = Math.round(rating);
    let starsHTML = '';
    for (let i = 0; i < starsTotal; i++) {
        if (i < filledStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    return starsHTML;
}

categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts);
    }
});

searchInput.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayProducts(filteredProducts);
});

displayProducts(products);

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navAbout = document.querySelector('.nav-about');
    const aboutSection = document.querySelector('#about-contact');

    navAbout.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        aboutSection.scrollIntoView({
            behavior: 'smooth' // Animação suave
        });
    });
});

