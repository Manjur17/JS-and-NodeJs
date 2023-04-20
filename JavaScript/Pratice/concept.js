function Hello() {
    console.log("function declartion");
}

const expression = function () {
    console.log("function expressions");
}

const obj = {
    firstName: "xyz",
    age: 20,
    funDec: Hello, // function declartion 
    funExe: expression
}

Hello(); // function declartion
expression(); // function expressions
obj.funDec();
obj.funExe();
// obj.funExe;