const event = {
  message: 'Welcome to the party!',
  guests: [{ name: 'John', age: 18, email: 'example@server.com' },
  { name: 'Bob', age: 17, email: 'ex@server.com' }],
  getInvitations() {
    return this.guests.filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ email: `${email}`, message: `Dear ${name}! ${this.message}` }))
  }

};
console.log(event.getInvitations())