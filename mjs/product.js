"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, image, name, description, price, saleable = true) {
        this._id = id;
        this._image = image;
        this._name = name;
        this._description = description;
        this._price = price;
        this._saleable = saleable;
    }
    // Getter 
    get id() {
        return this._id;
    }
    get image() {
        return this._image;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get price() {
        return this._price;
    }
    get saleable() {
        return this._saleable;
    }
    // Setter
    set id(v) {
        this._id = v;
    }
    set image(v) {
        this._image = v;
    }
    set name(v) {
        this._name = v;
    }
    set description(v) {
        this._description = v;
    }
    set price(v) {
        this._price = v;
    }
    set saleable(v) {
        this._saleable = v;
    }
}
exports.Product = Product;
