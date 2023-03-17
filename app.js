import { Product } from "./modules/product.js";
import { Basket } from "./modules/basket.js";

// Get sample product data
import { sampleProductData } from "./test-data.js";

// Get page element references
const imageElement = document.querySelector("#product-image");
const headingElement = document.querySelector("#product-heading");
const descriptionElement = document.querySelector("#product-description");
const priceElement = document.querySelector("#product-price");
const stockElement = document.querySelector("#product-stock");

// Populate product inventory with sample data
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

