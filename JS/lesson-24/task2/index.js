function getOwnProps(obj) {
  let arrOwnKeys = [];
  for (let prop in obj) {
    if ( (obj.hasOwnProperty(prop)) && typeof obj[prop] !== 'function') {
      arrOwnKeys.push(prop);
    }
  };
  return arrOwnKeys;
}

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
  age: 23,
  length: '100m',
  startMachine() {
    console.log(`${this.name} lifting anchor up`)
    ship.move.bind(ship);
  },
  stopMachine() {
    ship.stop();
    console.log(`${this.name} lifting anchor down`)

  },
  __proto__: vehicle
} 
//---test data---
console.log(getOwnProps(ship));
console.log(typeof ship.startMachine)