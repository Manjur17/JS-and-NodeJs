var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    content = "JS";
    console.log(teacher);
    console.log(content);
}
function gun() {
    var student = "Sarthak";
    console.log(student);
}

// console.log(content); -> ERROR
fun();
gun();
console.log(teacher);
console.log(content);

//const o = { p: 1, p: 2 };

//no hoisting here as no scope of content1 is assigned before use -> error
console.log(content1);
content1 = "JS";
