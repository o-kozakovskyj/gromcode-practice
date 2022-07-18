const user = {
  name: "Bob",
  job: 'driver',
  city: 'Prague',
  sayHi(client) {
    console.log(`Hi, i am your passanger ${client} ${this.name} - ${this.job} from ${this.city}`)
  }
}


export function delay(delay, callback, context, ...argument) {
  setTimeout((()=>callback.call(context, argument)), delay)
}

delay(1000, user.sayHi,user,'Vasya', 'Dodic', 'Biba')