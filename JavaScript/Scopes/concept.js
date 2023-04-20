//which scoping -> lexical 

var teacher = "Sanket"; 
function ask(question) { 
	console.log(teacher, question); 
}

function fun() { 
	var teacher = "Pulkit"; 
	ask("why?");
}
fun();


//concept -> in notes
var fun1;
function fun1() {
    return 'fun2';
}

console.log(fun1());


var ch = 'king';
function ch() {
    return 'star';
}

console.log(ch);