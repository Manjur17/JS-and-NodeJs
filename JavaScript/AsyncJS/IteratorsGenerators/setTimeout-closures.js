function DO(task) { // local to DO is task
    setTimeout(function exec() {
        console.log(task);
    }, 2000);
}

DO("dkfbjh");
console.log("end");


//even after DO() is over from call stack,exec() has acess to task from lexical env through 
//[[scopes]] => closure