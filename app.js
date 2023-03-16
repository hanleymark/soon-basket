import { Product } from "./modules/product.js";
import { Basket } from "./modules/basket.js";

// Get sample product data
import { sampleProductData } from "./test-data.js";

// Get page element references
const productDetailsPlaceholder = document.querySelector(
  "#product-details-placeholder"
);

// Populate product inventory with sample data
const allProducts = [];

for (let data of sampleProductData) {
  const { id, price, title, description} = data;
  // Generate random in-stock quantity
  const units = Math.floor(Math.random() * 5);
  allProducts.push(new Product(id, price, title, description, units));
}

// Choose and display random product
const randomId = Math.floor(Math.random() * allProducts.length);
productDetailsPlaceholder.innerHTML = allProducts[randomId].htmlContent;