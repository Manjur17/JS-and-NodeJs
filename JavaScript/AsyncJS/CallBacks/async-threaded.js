//try debugging the code -> see in screenshot

function timeConsumingByLoop() {
    console.log("loop starts");
    for (let i = 0; i < 1000000000; i++) {
        // some task
        //native to JS -> so call stack is blocked and after this ends it moves ahead
    }
    console.log("loop ends");
}


function timeConsumingByRuntimeFeature0() {
    console.log("Starting timer");
    //native to runtime -> async, so JS notify the runtime to start a timer
    setTimeout(function exec() {
        console.log("Completed the timer0");
        for (let i = 0; i < 1000000000; i++) {
            // some task
        }
    }, 5000); // 5 sec timer
}


function timeConsumingByRuntimeFeature1() {
    console.log("Starting timer");
    //native to runtime -> async, so JS notify the runtime to start a timer
    setTimeout(function exec() {
        console.log("Completed the timer1");
        // while(true) {}
    }, 200); // 0s timer -> even if this is executed immediately and call stack is empty at the same time
    //as timeConsumingByRuntimeFeature1() is over but still global code is left and exec() is put inside event queue
}

function timeConsumingByRuntimeFeature2() {
    console.log("Starting timer");
    //native to runtime -> async
    setTimeout(function exec() {
        console.log("Completed the timer2");
    }, 200); // 200 ms timer
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("By");