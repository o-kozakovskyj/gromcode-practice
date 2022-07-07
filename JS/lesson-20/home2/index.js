/* eslint-disable max-classes-per-file */

 class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get name() {
    return this._name
  }
  get id() {
    return this._id
  }
  get sessionId() {
    return this._sessionId
  }
}

 class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users
  }
  getUserNames() {
    return this.users.map(user => user.name)
  }
  getUserIds() {
    return this.users.map(user => user.id)
  }
  getUserNameById(id) {
    return this.users.find(user => user.id === id).name
  }
}


// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
const user1 = new User('2', 'Bob', 'session-id');
const user2 = new User('3', 'John', 'session-id');
repo = new UserRepository([user, user1, user2]);
console.log(repo.getUserNames())
console.log(repo.getUserIds())
console.log(repo.getUserNameById('3'))