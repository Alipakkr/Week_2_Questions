const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    const price = Number(item.price);
    if (!price || price <= 0) return;

    this.items.push(item);
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });
checkout.addItem({ name: "Invalid", price: "abc" });

console.log(checkout.getTotal()); // Total: $103.45
