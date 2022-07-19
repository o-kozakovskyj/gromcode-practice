const user = {
  name: 'Bob',
  job: 'driver',
  city: 'Prague',
  sayHi(client) {
    console.log(
      `Hi,-- ${client}--, I am ${this.name} - ${this.job} from ${this.city}`
    );
  },
};
const user1 = {
  name: 'Tom',
  job: 'dealer',
  city: 'Paris',
  sayHi(...clients1) {
    console.log(
      `Hi, -- ${clients1.join(',')} ---, I am ${this.name} - ${this.job} from ${
        this.city
      }`
    );
  },
};

export function delay(delay, callback, context, ...args) {
  setTimeout(() => callback.call(context, ...args), delay);
}
const hi = user1.sayHi;

delay(100, hi, user, 'Tom', 'John', 'Bob', 1, 2, 3);
delay(1000, hi, user1, 'Tom', 'John', 'Bob');
