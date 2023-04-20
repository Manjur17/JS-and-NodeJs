let obj = {};

console.log(obj);

console.log("18" + obj); // "18" "[object Object]" -> "18[object Object]"

console.log(18 + obj); // 18 "[object Object]" -> 

//subtraction 

console.log(10 - obj); // obj.valueOf -> object, toString -> [object Object]

let obj1 = { x: 9, y: 8 };

console.log(100 - obj1);

let obj2 = { x: 7, valueOf() { return 99 } };
console.log(100 - obj2);

let obj3 = { x: 8, toString() { return "88" } };
console.log(90 - obj3);

let obj4 = { x: 7, toString() { return {} } };
console.log(100 - obj4);

let obj5 = "10" + { x: 10, toString() { return hola; }, valueOf() { return 5; } }
console.log(obj5);