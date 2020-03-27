import {ListProduct} from './list-product';
import {Product} from './product';
import * as definition from './constants/definitions';
import {Validate} from './libs/validate'
import {Cart} from './cart'


let listProduct = new ListProduct();
let cart        = new Cart();

// ======FUNCTIONS========
function showProductList(){
    $(definition.ELM_PRODUCT_LIST).html(listProduct.showProductListinHTML());
}
function showNotification(notification:any=''){
    $(definition.ELM_NOTIFICATION).html(notification);
}
function showCartBody(){
    $(definition.ELM_CART_BODY).html(cart.showBodyOfCartInHTML());
}
function showCartFooter(){
    $(definition.ELM_CART_FOOTER).html(cart.showFooterOfCartInHTML());
}
function updateCart(){
    $(document).on('click',definition.ELM_UPDATE, function () {
        let id = ($(this).data('product'));
        let quantity:number = $( 'input[name=cart-item-quantity-'+id+']' ).val();
        let selectedCarditem=(cart.getCartItemByID(id));
        selectedCarditem.update(quantity);

        showCartBody();
        showCartFooter();
    });
}
function DeleteItemInCart(){
    $(document).on('click',definition.ELM_DELETE, function () {
        let id = ($(this).data('product'));
        cart.deleteProduct(id);
        showCartBody();
        showCartFooter();
    });
}
function selectProduct(){
    $(definition.ELM_PRICE).click(function (e) { 
        e.preventDefault();
        let id = ($(this).data('product'));
        let quantity:number = $( this ).prev().val();
        if(Validate.checkQuantity(quantity)){
            let selectedProduct: Product = listProduct.getProductById(id);
            cart.addProductToCart(selectedProduct,quantity);
            showNotification(definition.notification.NOTIFICATION_SUCCESS_ADDED);
        }
        else{
            showNotification(definition.notification.NOTIFICATION_WARNING);
        }
        showCartBody();
        showCartFooter();
    }); 
}

//======READY TO RUN=====
$(document).ready(function () {
    showProductList();
    showNotification(definition.notification.NOTIFICATION_READY_ADDING);
    showCartBody();
    showCartFooter();
    selectProduct();
    updateCart();
    DeleteItemInCart()
});


                                