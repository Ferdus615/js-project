const fruit = ["Apple", "Banana", "Coconut", "orange", "Grape"];
console.log(`originalFruit = ${fruit}`);

// let shiftFruit = fruit.shift();

let pushFruit = fruit.push("PineApple");
console.log(`newfruit = ${fruit}`);
console.log(`pushFruit = ${pushFruit}`);

let popFruit = fruit.pop();
console.log(`fruit = ${fruit}`);
console.log(`popFruit = ${popFruit}`);

const emptyArr = [];
let emptyPop = emptyArr.pop();
console.log(`emptyPop = ${emptyPop}`);
