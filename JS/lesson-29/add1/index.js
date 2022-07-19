const user = {
  name: "Bob",
  job: 'driver',
  city: 'Prague',
  sayHi(client) {
    console.log(`Hi,-- ${client}--, I am ${this.name} - ${this.job} from ${this.city}`)
  }
}
const user1 = {
  name: "Tom",
  job: 'dealer',
  city: 'Paris',
  sayHi(arguments) {
    console.log(`Hi, -- ${Array.from(arguments)}---, I am${this.name} - ${this.job} from ${this.city}`)
  }
}


 export function delay(delay, callback, context,...arguments) {
  setTimeout((callback.call(context, arguments)), delay)
}

delay(10000, user.sayHi, user, 'Tom', 'John', 'Bob',1, 2,3)
delay(1000, user.sayHi,user1,'Tom', 'John', 'Bob')