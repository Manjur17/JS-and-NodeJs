if (true) {
    var x = 10; //no block scope
}

console.log(x);

function fun() {
    console.log(y); // y is accessible here
    var y = 10; // not accessible outside
}


function gun() {
    console.log(z); // not accessible here inside TDZ
    let z = 10;
}
//console.log(z);
//gun();


