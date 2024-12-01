const details = [];
const order = []

function addToOrder(whatsappContact, cartProductName, quantity, price) {
  order.push(
    {
      newContact: whatsappContact,
      newProductName: cartProductName,
      quantity,
      price
    }
  );
}


function orderProduct() {
  order.forEach((item) => {
    const buyerName = document.querySelector('#form-name').value;
    const sponsor = "Shopnow";
    const amount = item.price * item.quantity;
  
    const url = "https://wa.me/" + item.newContact + "?text=" + "Name: " + buyerName + "%0a%0a"
    + "Hello, I want to purchase " + item.quantity + " " + "(" + item.newProductName + ") " + "of " + "N" + (amount).toLocaleString() + "%0a%0a"
    + "Copywright: " + sponsor;
  
    window.open(url, '_blank').focus();
  })
}


function renderProductDetails() {
    let detailsHTML = '';

    details.forEach((item) => {
      detailsHTML += 
      `
    <div class="product-details-container">
      <div class="product-details-image-container">
        <img src="${item.image}">
      </div>
      <div class="primary-details">
        <div class="product-details-name-container">
          ${item.name}
        </div>
        <div class="product-details-price-container">
          Price: N${(item.price).toLocaleString()}
        </div>
        <div class ="product-details-quantity-container">
          Quantity: <p>${item.quantity}</p>
        </div>
      </div>
      <div class="secondary-details">
        <h3>Total</h3>
        <p class="total-amount">N${(item.quantity * item.price).toLocaleString()}</p>
      </div>
      <div class="button-container">
        <button class="buy-btn" data-whatsapp-contact="${item.whatsappContact}" data-cart-product-name="${item.name}" data-quantity="${item.quantity}" data-price="${item.price}">Order</button>
        <button class="remove-btn">Remove</button>
      </div>
    </div>
      `;
    });

    document.querySelector('.details-grid').innerHTML = detailsHTML;

    document.querySelectorAll('.buy-btn').forEach((orderBtn) => {
      orderBtn.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'flex';
        const whatsappContact = orderBtn.dataset.whatsappContact;
        const cartProductName = orderBtn.dataset.cartProductName;
        const quantity = orderBtn.dataset.quantity;
        const price = orderBtn.dataset.price;

        addToOrder(whatsappContact, cartProductName, quantity, price);
      })
    });

    document.querySelectorAll('.remove-btn').forEach((removeBtn, i) => {
      removeBtn.addEventListener('click', () => {
        details.splice(i, 1);
        //renderProductDetails();
        document.querySelector('.details').style.display = 'none';
      })
    })

    document.querySelector(".cancel-btn").addEventListener('click', () => {
      document.querySelector('.form').style.display = "none";
    })
};
