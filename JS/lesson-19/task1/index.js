 const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`)
  },
  stop() {
    console.log(`${this.name} stopped`)
  }
}

 const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`)
    ship.move.bind(ship);
  },
  stopMachine() {
   ship.stop();
    console.log(`${this.name} lifting anchor down`)
   
  },
  __proto__ : vehicle
} 
//---test data---
console.log(ship)
vehicle.move()
ship.startMachine()
ship.stopMachine()
