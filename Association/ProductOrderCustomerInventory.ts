/*
Here we have four entities:
    Product
    Order
    Customer
    Inventory
For this, let's assume an online e-commerce system. 
We will use TypeScript with classes, interfaces, generics, 
and event-driven patterns.
*/
// Define Interfaces
interface IEventListener<T> {
    (eventData: T): void;
}

interface IObservable<T> {
    subscribe(listener: IEventListener<T>): void;
    unsubscribe(listener: IEventListener<T>): void;
}

// Define Event System
class EventSystem<T> implements IObservable<T> {
    private listeners: IEventListener<T>[] = [];

    subscribe(listener: IEventListener<T>): void {
        this.listeners.push(listener);
    }

    unsubscribe(listener: IEventListener<T>): void {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) this.listeners.splice(index, 1);
    }

    trigger(data: T): void {
        this.listeners.forEach(listener => listener(data));
    }
}

// Entities
class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Inventory {
    stock: Map<Product, number> = new Map();

    addProduct(product: Product, quantity: number): void {
        this.stock.set(product, quantity);
    }

    reduceStock(product: Product, quantity: number): boolean {
        const currentStock = this.stock.get(product) || 0;
        if (currentStock < quantity) return false;
        
        this.stock.set(product, currentStock - quantity);
        return true;
    }
}

class Order {
    products: Map<Product, number> = new Map();
    completed: boolean = false;

    addProduct(product: Product, quantity: number): void {
        this.products.set(product, quantity);
    }

    totalAmount(): number {
        let total = 0;
        this.products.forEach((quantity, product) => {
            total += product.price * quantity;
        });
        return total;
    }

    complete(): void {
        this.completed = true;
    }
}

class Customer {
    name: string;
    orders: Order[] = [];
    onOrderCompleted: EventSystem<Order> = new EventSystem<Order>();

    constructor(name: string) {
        this.name = name;
    }

    createOrder(): Order {
        const order = new Order();
        this.orders.push(order);
        return order;
    }

    finalizeOrder(order: Order, inventory: Inventory): boolean {
        let canComplete = true;

        order.products.forEach((quantity, product) => {
            if (!inventory.reduceStock(product, quantity)) canComplete = false;
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

