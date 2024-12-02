renderFeaturedProducts();
renderProductDetails();

// function toggleMenu() {
//   const navLinks = document.getElementById('navLinks');
//   navLinks.classList.toggle('active');
// }

window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';            
});

function addToDetails(featuredProductImage, featuredProductName, featuredProductPrice, whatsappContact) {
  let matchingItem;

  details.forEach((item) => {
    if(featuredProductName === item.name) {
      matchingItem = item;
    }
  });

  if(matchingItem) {
    matchingItem.quantity++;
  } else {     
    details.push(
      {
        image: featuredProductImage,
        name: featuredProductName,
        price: featuredProductPrice,
        quantity: 1,
        whatsappContact 
      }
    );
  };

  renderProductDetails();
}

function renderFeaturedProducts() {
  let featuredProductsHTML = '';

  featuredProducts.forEach((featuredProduct) => {
    featuredProductsHTML += 
    `    
    <div class="product-item">
      <div class="product-image-container">
        <img src="${featuredProduct.image}">
      </div>
      <div class="product-name"><h4>${featuredProduct.name}</h4></div>
      <div class="product-price">N${(featuredProduct.price).toLocaleString()}</div>
      <div>
        <button class="product-btn" data-product-image="${featuredProduct.image}" data-product-name="${featuredProduct.name}" data-product-price="${featuredProduct.price}" data-whatsapp-contact="${featuredProduct.whatsappContact}">Add to Cart</button>
      </div>
    </div>    
    `;
  });

  document.querySelector('.product-grid').innerHTML = featuredProductsHTML;

  document.querySelectorAll('.product-btn').forEach((productBtn) => {
    productBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const featuredProductName = productBtn.dataset.productName;
      const featuredProductPrice = productBtn.dataset.productPrice;
      const featuredProductImage = productBtn.dataset.productImage;
      const whatsappContact = productBtn.dataset.whatsappContact; 

      addToDetails(featuredProductImage, featuredProductName, featuredProductPrice, whatsappContact);
      document.querySelector('.details').style.display = "block";
    })
  });
};

document.querySelector('#close-btn').addEventListener('click', () => {
  document.querySelector('.details').style.display = "none"
});

document.querySelector('.hero-btn').addEventListener('click', () => {
  document.querySelector('.details').style.display = "block";
})
