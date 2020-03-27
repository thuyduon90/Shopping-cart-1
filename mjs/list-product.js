"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class ListProduct {
    // Constructor
    constructor() {
        // Properties
        // private listOfproducts: Product[] = [];
        this.listOfproducts = [];
        this.addProduct(new product_1.Product(1, 'bulbasaur.png', 'bulbasaur', 'This is product 1', 12, true));
        this.addProduct(new product_1.Product(2, 'charmander.png', 'charmander', 'This is product 2', 25, true));
        this.addProduct(new product_1.Product(3, 'ivysaur.png', 'ivysaur', 'This is product 3', 16, false));
        this.addProduct(new product_1.Product(4, 'squirtle.png', 'squirtle', 'This is product 4', 24, true));
    }
    // Getter 
    // Setter
    // Methods
    addProduct(product) {
        this.listOfproducts.push(product);
    }
    getProductList() {
        return this.listOfproducts;
    }
    getProductById(id) {
        let temptProductList = this.listOfproducts;
        let limit = temptProductList.length;
        for (let i = 0; i < limit; i++) {
            if (temptProductList[i].id == id) {
                return temptProductList[i];
            }
        }
        return null;
    }
    showProductListinHTML() {
        let temptProductList = this.listOfproducts;
        let limit = temptProductList.length;
        let htmlString = "There is no any product.";
        let saleableString = ``;
        if (limit) {
            htmlString = '';
            for (let i = 0; i < limit; i++) {
                saleableString = (temptProductList[i].saleable) ? `<input name="quantity-product-${temptProductList[i].id}" type="number" value="1" min="1">
                                                                 <a data-product=${temptProductList[i].id} href="#" class="price"> ${temptProductList[i].price} USD </a>`
                    : `<span class="price">$ ${temptProductList[i].price}</span>`;
                htmlString += `<div class="media product">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="./img/characters/${temptProductList[i].image}" alt="${temptProductList[i].image}">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">${temptProductList[i].image}</h4>
                                        <p>${temptProductList[i].description}</p>
                                        ${saleableString}
                                    </div>
                                </div>`;
            }
        }
        return htmlString;
    }
}
exports.ListProduct = ListProduct;
