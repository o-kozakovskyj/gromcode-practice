const wallet = {
  transactions: [2, 3, 8, 15],
  getMax() {
    return (Math.max(...this.transactions))
  },
  getMin() {
    return (Math.min(...this.transactions))
  },
}
console.log(wallet.getMax())
console.log(wallet.getMin())