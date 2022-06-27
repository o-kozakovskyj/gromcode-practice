const sortContacts = (dataBase, sortDirection = true) => {
  if (!Array.isArray(dataBase)) {
    return null;
  }
  if (sortDirection === true) {
    return dataBase.sort((a, b) => a.name.localeCompare(b.name));
  }
  return dataBase.sort((a, b) => b.name.localeCompare(a.name));
};

const data = [
  { name: 'Tom', phoneNumber: '222554466' },
  { name: 'Jim', phoneNumber: '4433333' },
  { name: 'Bob', phoneNumber: '111154466' },
];
console.log(sortContacts(data, false));
