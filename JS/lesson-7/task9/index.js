function flatArray(arr) {
  return [...arr].reduce((acc, item) => {
    return acc.concat(item);
  }, []).sort((a, b) => a - b);
 
};

console.log(flatArray([78, [45, 89], 56, [45, 7, 8]]));