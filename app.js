import { Product } from "./modules/product.js";

// Get sample product data
import { sampleProductData } from "./test-data.js";

// Get page element references
const basketItemCount = document.querySelector("#basket-item-count");
const imageElement = document.querySelector("#product-image");
const headingElement = document.querySelector("#product-heading");
const descriptionElement = document.querySelector("#product-description");
const priceElement = document.querySelector("#product-price");
const stockElement = document.querySelector("#product-stock");
const plusButton = document.querySelector("#add-to-basket-plus");
const minusButton = document.querySelector("#add-to-basket-minus");
const addToBasketCounter = document.querySelector("#add-to-basket-counter");
const addToBasketButton = document.querySelector("#add-to-basket-button");

// Set up empty basket
const basket = [];

// Populate product inventory 'allProducts' with sample data
const allProducts = [];
for (let data of sampleProductData) {
  const { id, price, title, description } = data;
  // Generate random in-stock quantity
  const units = Math.floor(Math.random() * 10) + 1;
  allProducts.push(new Product(id, price, title, description, units));
}

// Choose and display random product
const randomId = Math.floor(Math.random() * allProducts.length);
const product = allProducts[randomId];
product.populateImage(imageElement);
product.populateHeading(headingElement);
product.populateDescription(descriptionElement);
product.populatePrice(priceElement);
product.populateStock(stockElement);

setTimeout(() => {displayMessage("Hit refresh to view a different product");}, 1000);

// Set up event handlers
plusButton.addEventListener("click", (event) => {
    if (+addToBasketCounter.textContent < product.units) {
        addToBasketCounter.textContent = +addToBasketCounter.textContent + 1;
    }
});

minusButton.addEventListener("click", (event) => {
    if (+addToBasketCounter.textContent > 1) {
        addToBasketCounter.textContent = +addToBasketCounter.textContent - 1;
    }
});

addToBasketButton.addEventListener("click", (event) => {
    if (addToBasketButton.classList.contains("button__inactive")) {
        return;
    }
    const quantity = +addToBasketCounter.textContent;
    if (quantity > 0) {
        const productClone = {...product};
        productClone.units = quantity;
        basket.push(productClone);
        product.units -= quantity;
        updateBasketQuantity();
    }
});

// Helper functions
function updateBasketQuantity() {
    const itemCount = basket.reduce((total, item) => total + item.units, 0);
    basketItemCount.textContent = itemCount;
    product.populateStock(stockElement);
    addToBasketCounter.textContent = 1;

    if (+basketItemCount.textContent > 0) {
        basketItemCount.classList.add("basket--occupied");
    }
    else {
        basketItemCount.classList.remove("basket--occupied");
    }

    checkStockForCurrentProduct();
}

function checkStockForCurrentProduct() {
    if (product.units === 0) {
        addToBasketButton.classList.add("button__inactive");
    }
    else {
        addToBasketButton.classList.remove("button__inactive");
    }
}

function displayMessage(message) {
    const messageBox = document.querySelector("#user-message");
    messageBox.innerHTML = message;
    messageBox.style.display = "block";

    setTimeout(() => {
        messageBox.style.display = "none";
    }, 2000);
}