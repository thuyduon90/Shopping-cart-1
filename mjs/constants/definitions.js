"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELM_PRODUCT_LIST = '#list-product';
exports.ELM_NOTIFICATION = '#mnotification';
exports.ELM_CART_BODY = '#my-cart-body';
exports.ELM_CART_FOOTER = '#my-cart-footer';
exports.ELM_PRICE = 'a.price';
exports.ELM_UPDATE = 'a.update-cart-item';
exports.ELM_DELETE = 'a.delete-cart-item';
var notification;
(function (notification) {
    notification.NOTIFICATION_READY_ADDING = 'Ready, let collect your item from the product list.';
    notification.NOTIFICATION_SUCCESS_ADDED = 'successfully added!';
    notification.NOTIFICATION_WARNING = 'Product number must be greater than zero.';
})(notification = exports.notification || (exports.notification = {}));
