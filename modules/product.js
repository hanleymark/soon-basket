export class Product {
    constructor(id, price, title, description) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.description = description;
    }

    static baseUrl = './images/products/';

    get imageUrl() {
        return `${this.baseUrl}${id}.png`;
    }
}