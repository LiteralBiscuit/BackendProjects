export interface IProduct {
    id: number,
    name: string,
    category: string,
    brand: string,
    price: number,
    currency: string,
    stock: number,
    rating: number,
    active: boolean,
    description: string,
    image: string
}

class Product implements IProduct {
    #id: number;
    #name: string;
    #category: string;
    #brand: string;
    #price: number;
    #currency: string;
    #stock: number;
    #rating: number;
    #active: boolean;
    #description: string;
    #image: string;
    constructor(pruductData: Partial<IProduct>) {
        Object.assign(this, pruductData);
    }

    // Getters
    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get category() {
        return this.#category;
    }
    get brand() {
        return this.#brand;
    }
    get price() {
        return this.#price;
    }
    get currency() {
        return this.#currency;
    }
    get stock() {
        return this.#stock;
    }
    get rating() {
        return this.#rating;
    }
    get active() {
        return this.#active;
    }
    get description() {
        return this.#description;
    }
    get image() {
        return this.#image;
    }
    //setters
    set name(name: string) {
        this.#name = name;
    }
    set category(category: string) {
        this.#category = category;
    }
    set brand(brand: string) {
        this.#brand = brand;
    }
    set price(price: number) {
        this.#price = price;
    }
    set currency(currency: "HUF" | "EUR") {
        this.#currency = currency;
    }
    set stock(stock: number) {
        this.#stock = stock;
    }
    set rating(rating: number) {
        this.#rating = rating;
    }
    set active(active: boolean) {
        this.#active = active;
    }
    set description(description: string) {
        this.#description = description;
    }
    set image(image: string) {
        this.#image = image;
    }
}

export class ProductManager{
    private _products: Product[] = [];

    constructor(initialProducts: Partial<IProduct>[] = []) {
        this._products = initialProducts.map(p=> new Product(p));
    }   

    get allProducts(): Product[] {
        return this._products.map(product => product.toJSON());
    }

    get products() : Product[] {
        return this._products;
    }

    public addProduct(productData: Partial<IProduct>): Product {
        const maxId = this._products.reduce((max, product) => Math.max(max, product.id), 0);
        productData.id = maxId + 1;
        const newProduct = new Product(productData);
        this._products.push(productData as Product);
        return productData as Product;
    }

    public modifyProduct(id: number, updatedData: Partial<IProduct>): Product | null {
        const productIndex = this._products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            return null;
        }
        Object.assign(this._products[productIndex], updatedData);
        return this._products[productIndex];
    }
}