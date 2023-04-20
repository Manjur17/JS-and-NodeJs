function fun() {
    var i = 5;
    while (i < 10) {
        var x = i;
        i++;
    }
    console.log(x); //here x becomes part of fun() scope
}
fun();


let i = 1;
console.log(y);
while (i < 5) {
    var y = 10;
    i++;
}
console.log(y);//here y becomes part of global scope

// redeclaration is not allowed with let, but it is allowed with var
// let x = 9;
// let x = 10;