import {Product} from './product';

export class ListProduct {
    // Properties
    // private listOfproducts: Product[] = [];
    private listOfproducts: Product[] = [];

    // Constructor
    constructor(){
        this.addProduct(new Product(1,'bulbasaur.png','bulbasaur', 'This is product 1', 12, true));
        this.addProduct(new Product(2,'charmander.png','charmander', 'This is product 2', 25, true));
        this.addProduct(new Product(3,'ivysaur.png','ivysaur', 'This is product 3', 16, false));
        this.addProduct(new Product(4,'squirtle.png','squirtle', 'This is product 4', 24, true));
    }

    // Getter 
   
    // Setter

    // Methods
    public addProduct(product: Product){
        this.listOfproducts.push(product);
    }
    public getProductList(): Product[]{
        return this.listOfproducts;
    }
    public getProductById(id: number): Product{
        let temptProductList = this.listOfproducts;
        let limit = temptProductList.length;
        for(let i=0; i<limit; i++){
            if(temptProductList[i].id==id){
                return temptProductList[i];
            }
        }
        return null;
    }
    public showProductListinHTML(): string{
        let temptProductList = this.listOfproducts;
        let limit:number = temptProductList.length;
        let htmlString: string = "There is no any product.";
        let saleableString = ``;
        if(limit){ 
            htmlString = '';  
            for(let i=0; i<limit; i++){
                saleableString  =(temptProductList[i].saleable) ? `<input name="quantity-product-${temptProductList[i].id}" type="number" value="1" min="1">
                                                                 <a data-product=${temptProductList[i].id} href="#" class="price"> ${temptProductList[i].price} USD </a>`
                                                                 : `<span class="price">$ ${temptProductList[i].price}</span>`
                htmlString      +=`<div class="media product">
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