import {ProductInCart} from './product-in-cart';
import { Product } from './product';

export class Cart {
    // Properties
    private listOfProductInCart: ProductInCart[] = [];

    // Getter 
   
    // Setter

    // Methods
    public increaseQuantity(product: Product, quantity:number){
        let limit = this.listOfProductInCart.length;
        for(let i =0; i<limit; i++){
            if(this.listOfProductInCart[i].product.id==product.id){
                let currentQuantity: number = (this.listOfProductInCart[i].quantity);
                this.listOfProductInCart[i].quantity=(+(currentQuantity)+ +(quantity))
            }
        }
    } 
    public isProductInCart(product: Product): boolean{
        let flag: boolean =false;
        if(!this.isEmpty()){
            let temptListofproductInCart =  this.listOfProductInCart;
            let limit = temptListofproductInCart.length;
            for(let i =0; i<limit; i++){
                if(temptListofproductInCart[i].product.id==product.id){
                    flag = true;
                }
            }
        }
        return flag;
    }
    public addProductToCart(product: Product, quantity: number = 1){
        if(this.isProductInCart(product)){
            this.increaseQuantity(product, quantity);
        }else{
            this.listOfProductInCart.push(new ProductInCart(product,+quantity)); 
        }
    }
    public deleteProduct(id:number){
        let temptProductList = this.listOfProductInCart;
        let limit:number = temptProductList.length;
        if(limit){   
            for(let i=0; i<limit; i++){
                if(temptProductList[i].product.id===id){
                    temptProductList.splice(i,1);
                    break;
                }
            }
        }
    }
    public isEmpty(): boolean{
        let temptListofproductInCart =  this.listOfProductInCart
        if(temptListofproductInCart.length>0){
            return false;
        }
        else{
            return true;
        }
    }
    public getTotalProductInCart(): number{
        let temptProductList = this.listOfProductInCart;
        let limit:number = temptProductList.length;
        let totalProduct: number = 0;
        if(limit){   
            for(let i=0; i<limit; i++){
                totalProduct += +(temptProductList[i].quantity);
            }
        }
        return totalProduct;
    }
    public getPayment(): number{
        let temptProductList = this.listOfProductInCart;
        let limit:number = temptProductList.length;
        let payment: number = 0;
        if(limit){   
            for(let i=0; i<limit; i++){
                payment+=temptProductList[i].calculateSubtotal();
            }
        }
        return payment;
    }
    public showBodyOfCartInHTML(): string{
        let temptProductList = this.listOfProductInCart;
        let limit:number = temptProductList.length;
        let htmlString: string = `<th colspan = '6'>There is no any product.</th>`;
        if(limit){ 
            htmlString = '';  
            for(let i=0; i<limit; i++){
                htmlString  += temptProductList[i].showProductOfCartInHTML(i+1);
            }
        }
        return htmlString;
    }
    public showFooterOfCartInHTML(): string{
        return `<tr>
                    <td colspan="4">There are <b>${this.getTotalProductInCart()}</b> items in your shopping cart.</td>
                    <td colspan="2" class="total-price text-left">${this.getPayment()} USD</td>
                </tr>`;
    }
    public getCartItemByID(id: number): ProductInCart{
        let temptProductList = this.listOfProductInCart;
        let limit = temptProductList.length;
        for(let i=0; i<limit; i++){
            if(temptProductList[i].product.id==id){
                return temptProductList[i];
            }
        }
        return null;
    }
}


