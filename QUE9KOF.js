function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let original = { name: "Alice", hobbies: ["reading", "traveling"] };
let clone = deepClone(original);

clone.hobbies.push("coding");
console.log("Original:", original);
console.log("Clone:", clone);

// Example Input:

// { name: "Alice", hobbies: ["reading", "traveling"] }

// Example Output (After modifying the clone):

// Original: { name: "Alice", hobbies: ["reading", "traveling"] }

// Clone: { name: "Alice", hobbies: ["reading", "traveling", "coding"] }