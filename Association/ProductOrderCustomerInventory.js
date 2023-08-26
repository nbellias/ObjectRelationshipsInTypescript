"use strict";
// Define Event System
class EventSystem {
    constructor() {
        this.listeners = [];
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    unsubscribe(listener) {
        const index = this.listeners.indexOf(listener);
        if (index !== -1)
            this.listeners.splice(index, 1);
    }
    trigger(data) {
        this.listeners.forEach(listener => listener(data));
    }
}
// Entities
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Inventory {
    constructor() {
        this.stock = new Map();
    }
    addProduct(product, quantity) {
        this.stock.set(product, quantity);
    }
    reduceStock(product, quantity) {
        const currentStock = this.stock.get(product) || 0;
        if (currentStock < quantity)
            return false;
        this.stock.set(product, currentStock - quantity);
        return true;
    }
}
class Order {
    constructor() {
        this.products = new Map();
        this.completed = false;
    }
    addProduct(product, quantity) {
        this.products.set(product, quantity);
    }
    totalAmount() {
        let total = 0;
        this.products.forEach((quantity, product) => {
            total += product.price * quantity;
        });
        return total;
    }
    complete() {
        this.completed = true;
    }
}
class Customer {
    constructor(name) {
        this.orders = [];
        this.onOrderCompleted = new EventSystem();
        this.name = name;
    }
    createOrder() {
        const order = new Order();
        this.orders.push(order);
        return order;
    }
    finalizeOrder(order, inventory) {
        let canComplete = true;
        order.products.forEach((quantity, product) => {
            if (!inventory.reduceStock(product, quantity))
                canComplete = false;
        });
        if (canComplete) {
            order.complete();
            this.onOrderCompleted.trigger(order);
        }
        return canComplete;
    }
}
// Usage
const inventory = new Inventory();
const apple = new Product(1, 'Apple', 0.5);
const orange = new Product(2, 'Orange', 0.7);
inventory.addProduct(apple, 100);
inventory.addProduct(orange, 50);
const niko = new Customer('Niko');
// Subscribe to order completed event
niko.onOrderCompleted.subscribe((order) => {
    console.log(`Order completed for ${niko.name} with total amount: ${order.totalAmount()}`);
});
const order1 = niko.createOrder();
order1.addProduct(apple, 2);
order1.addProduct(orange, 3);
if (!niko.finalizeOrder(order1, inventory)) {
    console.log("Couldn't complete the order due to insufficient stock");
}
//# sourceMappingURL=ProductOrderCustomerInventory.js.map