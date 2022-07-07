
function User(name, age) {
 this.name = name;
 this.age = age;
}

User.prototype.sayHi = function() {
  console.log(`Hi, I am ${this.name}`)
  };
  User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`)
  };
User.prototype.setAge = function(value) {
  this.age = value;
  if (value < 0) {
    return false
  }
  if (value >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return this.age;
}

//---test data----

const user1 = new User('Bob',18)
const user2 = new User('Djin', 110) 
console.log(user1)
console.log(user2)
user1.sayHi()
user2.sayHi()
user1.setAge(69)
console.log(user1.setAge(10))
console.log(user1.setAge(-9))
