const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(fullName) {
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  },
}

//---test data----
console.log(user.fullName);
user.fullName = 'Bob Marley'
console.log(user.fullName);
console.log(user.firstName)