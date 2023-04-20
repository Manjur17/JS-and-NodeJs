/**
 * fun -> HOF ? -> it takes fn (which is a function) as argument
 * 
 * x -> number
 * fn -> function
 */

function fun(x, fn) {
    for (let i = 0; i < x; i++) {
        console.log(i);
    }

    fn();
}

fun(10, function exec() { // callback
    console.log("I am executed also");
});




setTimeout(function exec() {
    console.log("Running after sometime")
}, 4000);




function fun1(x, fn) {
    for (let i = 0; i < x; i++) {
        console.log(x);
    }

    fn(x * x);
}

fun1(10, function exec(num) {
    console.log(num);
}); // calling fun