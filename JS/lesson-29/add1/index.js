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
  sayHi(clients) {
    console.log(`Hi, -- ${clients} ---, I am ${this.name} - ${this.job} from ${this.city}`)
  }
}


 export function delay(delay, callback, context,...args) {
  setTimeout((callback.bind(context,args)), delay)
}
const hi = user.sayHi 

delay(100, hi, user, 'Tom', 'John', 'Bob',1, 2, 3)
delay(1000, hi,user1,'Tom', 'John', 'Bob')