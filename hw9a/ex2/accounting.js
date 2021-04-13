// Export an Account class
module.exports = class Account {
    constructor(owner) {
      this.owner = owner;
      this.balance = 0;
    }
    // Add credit amount to balance
    credit(amount) {
      this.balance += amount;
    }
    // Display account info
    describe() {
      return `owner: ${this.owner}, balance: ${this.balance}`;
    }
  };