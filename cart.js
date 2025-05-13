const productList = document.getElementById('product-list');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title.substring(0, 50)}...</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
      `;

      productList.appendChild(card);
    });
  })
  .catch(error => {
    productList.innerHTML = `<p style="color:red;">Error fetching products: ${error.message}</p>`;
  });
