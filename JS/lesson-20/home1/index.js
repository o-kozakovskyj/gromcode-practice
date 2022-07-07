'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {

  constructor(price, city, type) {
    this.dateCreated = new Date
    this.price = price;
    this.city = city;
    this.type = type;
    this.dataCreated = new Date;
    this.id = String(Math.floor(Math.random() * 200));
    this.isConfirmed = false;
    this.dateConfirmed = null;
  }
  checkPrice() {
    return (this.price > 1000);
  }
  confirmOrder() {
    
      this.isConfirmed = true;
      this.dateConfirmed = new Date;
    
  }
  isValidType() {
    return (this.type === 'Buy' || this.type === 'Sell')
  }
}
//---test data---
const order1 = new Order(1100, 'Kyiv', 'Sell')
console.log(order1.checkPrice())

console.log(order1.isValidType())

const order2 = new Order(11, 'Kyiv', 'Bought', 'erwrw')
console.log(order2.checkPrice())

console.log(order2.id)
console.log(order2.isConfirmed)
console.log(order1.isConfirmed)