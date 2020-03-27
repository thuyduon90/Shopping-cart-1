import {Product} from './product';

export class ProductInCart {
    // Properties
    private _product     : Product;
    private _quantity    : number;
    
    // Constructor
    constructor(product : Product, quantity : number=1){
        this._product    = product;
        this._quantity   =quantity;
    }

    // Getter 
    
    public get product() : Product {
        return this._product;
    }
    public get quantity() : number {
        return this._quantity;
    }

    // Setter
    public set quantity(v : number) {
        this._quantity = v;
    }
    
    // Methods
    public calculateSubtotal(): number{
        return +(this._product.price)*+(this._quantity);
    }
    public update(quantity:number){
        this._quantity=quantity;
    }
    public showProductOfCartInHTML(order: number): string{
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