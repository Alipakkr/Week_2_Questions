function createBankAccount(initialBalance) {
  let balance = initialBalance; 

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      throw new Error("Please maintain some some in your account");
    },
    
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= balance) {
          balance -= amount;
          return balance;
        }
        throw new Error("Insufficient Balance ");
      }
      throw new Error("Please maintain some some in your account ");
    },
    
    getBalance() {
      return balance;
    }
  };
}
const account = createBankAccount(100);
console.log(account.deposit(50));  // output is: 150
console.log(account.withdraw(30)); // output is: 120
console.log(account.getBalance()); // output is: 120

