

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static createEmpty() {
    const obj = {};
  obj.name = '';
    obj.age = null;
    return obj;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`)
  }
  setAge(age) {
    this.age = age;
    if (age >= 25) {
      this.requestNewPhoto()
    }
    if (age < 0) {
      return false
    }
    return this.age
  }
}    

//---test data---
const user1 = new User('Bob', 18)
const user2 = new User('Tom', 21)
user1.setAge(35)
console.log(user2. setAge(10))
console.log(user2.setAge(-1))

console.log(User.createEmpty())