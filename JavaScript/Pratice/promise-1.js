function x() {
    setTimeout(function a() {
        console.log("inside function a");
    }, 0);
}

x();

setTimeout(function b() {
    console.log("inside function b");
}, 0);


const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
    setTimeout(function c() {
        console.log('inside function c')
    }, 0);
});

const timer1 = setTimeout(function d() {
    console.log('inside function d');

}, 0);


/*
    promise1 is immediately resolved and .then() register fulfillmentHandler fun() and pushes the function 
    inside microtask queue but the fulfillmentHandler fun() is not immediately exectued as there is global code 
    still left(timer1) and after timer1 starts in the runtime,fulfillmentHandler fun() handler is pushed inside
    callstack and promise1 is printed and c() now starts in the runtime but timer1 is over and pushed inside 
    callback queue and then c() is pushed inside callback queue as its timer started after timer1
    o.p - 
        promise1
        inside function a
        inside function b
        inside function d
        inside function c

*/