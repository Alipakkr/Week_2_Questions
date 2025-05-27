const mergeProfileUpdates = (profile, updates) => {
  return {
    ...profile,
    ...updates,
    address: {
      ...profile.address,
      ...updates.address
    }
  };
};

const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

console.log(mergeProfileUpdates(profile, updates));
