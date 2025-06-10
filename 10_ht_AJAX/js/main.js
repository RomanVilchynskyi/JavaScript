const url = "https://fakestoreapi.com/products";

async function fetchProducts() {
    const response = await fetch(url);
    const products = await response.json();
    return products;
}

function createProducts(product) {
    return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>Ціна: $${product.price}</p>
      <p>Рейтинг: ${product.rating.rate} (${product.rating.count} відгуків)</p>
    </div>
    `;
}

async function showProducts() {
  const products = await fetchProducts();
  const container = document.getElementById('products-container');
  container.innerHTML = products.map(createProducts).join('');
}

window.onload = () => {
  showProducts();
};