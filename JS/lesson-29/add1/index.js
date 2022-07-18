const user = {
  name: "Bob",
  job: 'driver',
  city: 'Prague',
  sayHi(client) {
    console.log(`Hi, i am your passanger ${client} ${this.name} - ${this.job} from ${this.city}`)
  }
}
const user1 = {
  name: "Tom",
  job: 'dealer',
  city: 'Paris',
  sayHi(client) {
    console.log(`Hi, i am your passanger ${client} ${this.name} - ${this.job} from ${this.city}`)
  }
}


export function delay(delay, callback, context,...args) {
  setTimeout(()=>(callback.call(context,args)), delay)
}

delay(1000, user.sayHi, user, 'Vasya', 'Dodic', 'Biba')
delay(1000, user.sayHi,user1,'Vasya', 'Dodic', 'Biba')