
class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }
  move() {
    console.log(`${this.name} is moving`)
  }
  stop() {
    console.log(`${this.name} stopped`)
  }
}

class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super()
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`)
    super.move()
  }
 stop() {
   super.stop()
    console.log(`${this.name} lifting anchor down`)
  }
}
//---test data---
const ship1 = new Ship('Argo', 0, 20)
console.log(ship1)
ship1.move()
ship1.stop()