console.log("Hello");

for (let i = 0; i < 3; i++) {
    //3 time timer starts and put inside event queue
    setTimeout(function exec() {
        console.log("Completed the timer");
    }, 20);
}

for (let i = 0; i < 1000000000; i++) {
    // some task
    //native to JS -> so call stack is blocked and after this ends it moves ahead
}
console.log("end");



//-----------------------------------------------

console.log("Hello");

setTimeout(function exec() {
    console.log("Timer started");
    setTimeout(function exec() {
        console.log("Another Timer");
    }, 20);
}, 50);


for (let i = 0; i < 1000000000; i++) {
    // some task
    //native to JS -> so call stack is blocked and after this ends it moves ahead
}
console.log("end");
