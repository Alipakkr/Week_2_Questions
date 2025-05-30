 const countCategories = arr => arr.reduce((count, item) => {
  count[item] = (count[item] || 0) + 1;
  return count;
}, {});
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const result = countCategories(categories);
console.log(result);
// output is: { electronics: 2, clothing: 2, toys: 3 }