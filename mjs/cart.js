"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_in_cart_1 = require("./product-in-cart");
class Cart {
    constructor() {
        // Properties
        this.listOfProductInCart = [];
    }
    // Getter 
    // Setter
    // Methods
    increaseQuantity(product, quantity) {
        let limit = this.listOfProductInCart.length;
        for (let i = 0; i < limit; i++) {
            if (this.listOfProductInCart[i].product.id == product.id) {
                let currentQuantity = (this.listOfProductInCart[i].quantity);
                this.listOfProductInCart[i].quantity = (+(currentQuantity) + +(quantity));
            }
        }
    }
    isProductInCart(product) {
        let flag = false;
        if (!this.isEmpty()) {
            let temptListofproductInCart = this.listOfProductInCart;
            let limit = temptListofproductInCart.length;
            for (let i = 0; i < limit; i++) {
                if (temptListofproductInCart[i].product.id == product.id) {
                    flag = true;
                }
            }
        }
        return flag;
    }
    addProductToCart(product, quantity = 1) {
        if (this.isProductInCart(product)) {
            this.increaseQuantity(product, quantity);
        }
        else {
            this.listOfProductInCart.push(new product_in_cart_1.ProductInCart(product, +quantity));
        }
    }
    deleteProduct(id) {
        let temptProductList = this.listOfProductInCart;
        let limit = temptProductList.length;
        if (limit) {
            for (let i = 0; i < limit; i++) {
                if (temptProductList[i].product.id === id) {
                    temptProductList.splice(i, 1);
                    break;
                }
            }
        }
    }
    isEmpty() {
        let temptListofproductInCart = this.listOfProductInCart;
        if (temptListofproductInCart.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    getTotalProductInCart() {
        let temptProductList = this.listOfProductInCart;
        let limit = temptProductList.length;
        let totalProduct = 0;
        if (limit) {
            for (let i = 0; i < limit; i++) {
                totalProduct += +(temptProductList[i].quantity);
            }
        }
        return totalProduct;
    }
    getPayment() {
        let temptProductList = this.listOfProductInCart;
        let limit = temptProductList.length;
        let payment = 0;
        if (limit) {
            for (let i = 0; i < limit; i++) {
                payment += temptProductList[i].calculateSubtotal();
            }
        }
        return payment;
    }
    showBodyOfCartInHTML() {
        let temptProductList = this.listOfProductInCart;
        let limit = temptProductList.length;
        let htmlString = `<th colspan = '6'>There is no any product.</th>`;
        if (limit) {
            htmlString = '';
            for (let i = 0; i < limit; i++) {
                htmlString += temptProductList[i].showProductOfCartInHTML(i + 1);
            }
        }
        return htmlString;
    }
    showFooterOfCartInHTML() {
        return `<tr>
                    <td colspan="4">There are <b>${this.getTotalProductInCart()}</b> items in your shopping cart.</td>
                    <td colspan="2" class="total-price text-left">${this.getPayment()} USD</td>
                </tr>`;
    }
    getCartItemByID(id) {
        let temptProductList = this.listOfProductInCart;
        let limit = temptProductList.length;
        for (let i = 0; i < limit; i++) {
            if (temptProductList[i].product.id == id) {
                return temptProductList[i];
            }
        }
        return null;
    }
}
exports.Cart = Cart;
