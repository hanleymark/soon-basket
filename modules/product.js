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

    get htmlContent() {
        return `
            <img class='product__image--large' src='${this.imageUrl}'/>
            <div class="product__details stack-medium">
                <h2>${this.title}</h2>
                <p>${this.description}</p>
            </div>
            `;
    }
}