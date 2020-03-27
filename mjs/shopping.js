"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_product_1 = require("./list-product");
const definition = require("./constants/definitions");
const validate_1 = require("./libs/validate");
const cart_1 = require("./cart");
let listProduct = new list_product_1.ListProduct();
let cart = new cart_1.Cart();
// ======FUNCTIONS========
function showProductList() {
    $(definition.ELM_PRODUCT_LIST).html(listProduct.showProductListinHTML());
}
function showNotification(notification = '') {
    $(definition.ELM_NOTIFICATION).html(notification);
}
function showCartBody() {
    $(definition.ELM_CART_BODY).html(cart.showBodyOfCartInHTML());
}
function showCartFooter() {
    $(definition.ELM_CART_FOOTER).html(cart.showFooterOfCartInHTML());
}
function updateCart() {
    $(document).on('click', definition.ELM_UPDATE, function () {
        let id = ($(this).data('product'));
        let quantity = $('input[name=cart-item-quantity-' + id + ']').val();
        let selectedCarditem = (cart.getCartItemByID(id));
        selectedCarditem.update(quantity);
        showCartBody();
        showCartFooter();
    });
}
function DeleteItemInCart() {
    $(document).on('click', definition.ELM_DELETE, function () {
        let id = ($(this).data('product'));
        cart.deleteProduct(id);
        showCartBody();
        showCartFooter();
    });
}
function selectProduct() {
    $(definition.ELM_PRICE).click(function (e) {
        e.preventDefault();
        let id = ($(this).data('product'));
        let quantity = $(this).prev().val();
        if (validate_1.Validate.checkQuantity(quantity)) {
            let selectedProduct = listProduct.getProductById(id);
            cart.addProductToCart(selectedProduct, quantity);
            showNotification(definition.notification.NOTIFICATION_SUCCESS_ADDED);
        }
        else {
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
    DeleteItemInCart();
});
