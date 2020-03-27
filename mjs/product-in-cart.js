"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductInCart {
    // Constructor
    constructor(product, quantity = 1) {
        this._product = product;
        this._quantity = quantity;
    }
    // Getter 
    get product() {
        return this._product;
    }
    get quantity() {
        return this._quantity;
    }
    // Setter
    set quantity(v) {
        this._quantity = v;
    }
    // Methods
    calculateSubtotal() {
        return +(this._product.price) * +(this._quantity);
    }
    update(quantity) {
        this._quantity = quantity;
    }
    showProductOfCartInHTML(order) {
        return `<tr>
                    <th scope="row">${order}</th>
                    <td>${this.product.name}</td>
                    <td>${this.product.price} USD</td>
                    <td><input name="cart-item-quantity-${this.product.id}" type="number" value=${this.quantity} min="1"></td>
                    <td><strong>${this.calculateSubtotal()}</strong></td>
                    <td>
                        <a class="label label-info update-cart-item" href="#" data-product="${this.product.id}">Update</a>
                        <a class="label label-danger delete-cart-item" href="#" data-product="${this.product.id}">Delete</a>
                    </td>
                </tr>`;
    }
}
exports.ProductInCart = ProductInCart;
