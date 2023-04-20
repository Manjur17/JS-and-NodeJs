// ToString -> "" + value
console.log("" + 0); // 0 -> "0"
console.log("" + (-0)); // -0 -> "0"

console.log("" + []); // [] -> ""
console.log("" + {}); //[object Object]

console.log("" + [1, 2, 3]); //removes [] -> 1,2,3 

console.log("" + [null, undefined]); //removes [] and null and undedifend -> ,

console.log("" + [1, 2, null, 4]); //removes [] and null -> 1,2,,4

// ToNumber
console.log(0 - "010"); // decimal number
console.log(0 - "O10");
console.log(0 - 010); // octal number
console.log(0 - "0xb");// hexadecimal number
console.log(0 - 0xb);

console.log([] - 1); //[] -> 0
console.log([""] - 1); //0 - 1
console.log(["0"] - 1); //0 - 1  
console.log([6] - 1); //6 - 1