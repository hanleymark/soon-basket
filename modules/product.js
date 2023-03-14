export class Product {
    constructor(id, price, title, description, units) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.description = description;
    }

    static baseUrl = './resources/product-images/';

    get imageUrl() {
        return `${this.baseUrl}${id}.png`;
    }
}