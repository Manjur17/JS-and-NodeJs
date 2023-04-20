function printFibonacci(n) {
    if (n == 0) {
        console.log(0);
        return;
    }

    if (n >= 1) {
        console.log(0);
        console.log(1);
    }

    let b = 1;//last
    let a = 0;//secondLast

    for (let i = 2; i <= n; i++) {
        let c = b + a;
        a = b;
        b = c;
        console.log(c);
    }
}

function recursiveFibo(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
};


printFibonacci(5);