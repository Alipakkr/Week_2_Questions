const addresspeoples = (people) => {
  return people.map(({ name, address: { city, street: { name: streetName }}}) => {
    return `${name} lives in ${city} on ${streetName}`;
  });
};

const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

console.log(addresspeoples(people));
