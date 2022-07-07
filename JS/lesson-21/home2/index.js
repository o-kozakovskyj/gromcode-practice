export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList)
}
export function getItemsArray() {
  const NodeList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(NodeList)
  console.dir(elementsArray)
  return elementsArray;
}

getItemsList()
getItemsArray()
