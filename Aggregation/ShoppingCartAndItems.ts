interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class ShoppingCart {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  applyDiscount(itemId: number, discountPercentage: number): void {
    const itemToDiscount = this.items.find(item => item.id === itemId);
    if (itemToDiscount) {
      const discountedPrice = itemToDiscount.price * (1 - discountPercentage / 100);
      itemToDiscount.price = discountedPrice;
    }
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  showCartContents(): void {
    console.log("Shopping Cart Contents:");
    this.items.forEach(item => {
      console.log(`${item.name} (Qty: ${item.quantity}) - $${item.price.toFixed(2)} each`);
    });
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
  }
}

// Creating items
const items: CartItem[] = [
  { id: 1, name: "Item 1", price: 10, quantity: 2 },
  { id: 2, name: "Item 2", price: 15, quantity: 1 },
  { id: 3, name: "Item 3", price: 5, quantity: 3 },
  { id: 4, name: "Item 4", price: 20, quantity: 1 },
  { id: 5, name: "Item 5", price: 8, quantity: 2 },
  { id: 6, name: "Item 6", price: 12, quantity: 1 },
];

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
items.forEach(item => {
  cart.addItem(item);
});

// Modifying the cart
cart.removeItem(4);
cart.applyDiscount(1, 10);

// Displaying cart contents and total
cart.showCartContents();
