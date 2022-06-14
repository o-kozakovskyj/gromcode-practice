function filterNames(arr, text) {

  return arr.filter(name => name.includes(text) && name.length > 5);
}
console.log(filterNames(['John', 'Olivia', 'Oleksandr', 'Emanuel', 'Nastya'], 'ya'))