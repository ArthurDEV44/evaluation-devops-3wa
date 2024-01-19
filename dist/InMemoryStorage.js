"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStorage = void 0;
var InMemoryStorage = /** @class */ (function () {
    function InMemoryStorage() {
        this.storage = {};
    }
    InMemoryStorage.prototype.setValue = function (productName, quantity) {
        this.storage[productName] = { quantity: quantity };
    };
    InMemoryStorage.prototype.restore = function (productName) {
        delete this.storage[productName];
    };
    InMemoryStorage.prototype.reset = function () {
        this.storage = {};
    };
    InMemoryStorage.prototype.total = function () {
        return Object.values(this.storage).reduce(function (total, item) { return total + item.quantity; }, 0);
    };
    return InMemoryStorage;
}());
exports.InMemoryStorage = InMemoryStorage;
