class Wallet {
 balance = 0
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
   this.balance += amount;
  }
  withdraw(amount) {
   if (this.balance < amount) { 
    console.log(`No enough funds`);
    return
    } 
     this.balance -= amount
  }
}
// ----test data-----
const wallet1 = new Wallet;
console.log(wallet1.getBalance()) //0 || undefined if # before
wallet1.deposit(100)
console.log(wallet1.getBalance()) //100 || NaN if # before
wallet1.withdraw(1000)
wallet1.withdraw(99);
console.log(wallet1.getBalance())