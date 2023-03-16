// Product class
// Represents one Product
export class Product {
  constructor(id, price, title, description, units) {
    this.id = id;
    this.price = price;
    this.title = title;
    this.description = description;
    this.units = units;
  }

  get imageUrl() {
    const baseUrl = "./resources/product-images/";
    return `${baseUrl}${this.id}.jpg`;
  }

  get priceFormatted() {
    return this.price.toFixed(2);
  }

  populateImage(imgElement) {
    imgElement.src = this.imageUrl;
    imgElement.alt = `Picture of ${this.title}`;
  }

  populateHeading(hElement) {
    hElement.textContent = this.title;
  }

  populateDescription(pElement) {
    pElement.textContent = this.description;
  }

  populateStock(pElement) {
    pElement.textContent = `${this.units} IN STOCK`;
  }

  populatePrice(pElement) {
    pElement.textContent = `£${this.priceFormatted}`;
  }
}
