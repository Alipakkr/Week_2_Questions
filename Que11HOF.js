function productprocceseed(products) { 
  const Nameofproduct = products.map(product => product.name);
 products.forEach(product => {
    const priceitem = product.price > 50 ? 'above' : 'below';
    console.log(`${product.name} is ${priceitem} $50`);
  });
  
  return Nameofproduct;
}
 const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];
const names = productprocceseed(products);
 