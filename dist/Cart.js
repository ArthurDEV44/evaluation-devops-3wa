"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.buy = function (product, quantity) {
        var existingItem = this.items.find(function (item) { return item.product.name === product.name; });
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            this.items.push({ product: product, quantity: quantity });
        }
    };
    Cart.prototype.reset = function () {
        this.items = [];
    };
    Cart.prototype.restore = function (productName) {
        var itemIndex = this.items.findIndex(function (item) { return item.product.name === productName; });
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        }
    };
    Cart.prototype.total = function () {
        return this.items.reduce(function (total, item) { return total + (item.product.price * item.quantity); }, 0);
    };
    return Cart;
}());
exports.Cart = Cart;
