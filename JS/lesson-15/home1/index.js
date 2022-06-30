
export function createCalculator() {
  let memory = 0;
  function  add(num) {
    memory += num;
    return memory;
  };
  function decrease(num) {
    memory -= num;
    return memory;
  };
  function reset() {
    memory = 0;
    return memory;
  };
  const getMemo = () => memory;
  return {
    add,
    decrease,
    reset,
    getMemo,
  }
}

// ---test data---
const calculator1 = createCalculator(); 
const calculator2 = createCalculator();
console.log(calculator1.add(10));    //10
console.log(calculator1.add(10));    //20
console.log(calculator1.decrease(1));//19
console.log(calculator1.getMemo());  //19
console.log(calculator2.getMemo());  //0
console.log(calculator2.decrease(10));//-10
console.log(calculator1.getMemo()); //19
console.log(calculator1.reset()); //0
console.log(calculator1.getMemo());  //0
console.log(calculator2.reset()); //0
console.log(calculator2.getMemo());  //0