import data from "../../data/data.ts";

export interface IProduct {
    id: number,
    name: string,
    category: string,
    brand: string,
    price: number,
    currency: "HUF" | "EUR"
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
    #currency: "HUF" | "EUR";
    #stock: number;
    #rating: number;
    #active: boolean;
    #description: string;
    #image: string;
    constructor(id: number, name: string, category: string, brand: string, price: number, currency: "HUF" | "EUR", stock: number, rating: number, active: boolean, description: string, image: string) {
        this.#id = id;
        this.#name = name;
        this.#category = category;
        this.#brand = brand;
        this.#price = price;
        this.#currency = currency;
        this.#stock = stock;
        this.#rating = rating;
        this.#active = active;
        this.#description = description;
        this.#image = image;
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

const products: Product[] = [];

for (const product of data){
    const newProduct = new Product(product.id, product.name, product.category, product.brand, product.price, product.currency as "HUF" | "EUR", product.stock, product.rating, product.active, product.description, product.image);
    products.push(newProduct);
}

export { Product, products };