console.log("start");

const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
});

const timer1 = setTimeout(() => {
    console.log('timer1')
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

console.log('end');


/*
1 - start will get printed //output 1
2 - Promise1 will get registered and added to microtask queue and global will be executed
3 - timer1 will get added to the callback queue and global will be executed
4 - end will get printed //output 2

now microtask queue = Promise1, callback queue = timer1
call stack is empty and no global code is left now so Promise1 will be executed as microtask queue is preferred

5 - promise1 //output 3 and timer2 will get added to the callback queue

now microtask queue = empty, callback queue = timer1,timer2
call stack is empty and no global code is left now so timer1 will be executed(microtask queue is also empty)

7 - timer1 //output 4 and Promise2 will get registered and added to microtask queue

now microtask queue = Promise2, callback queue = timer2
call stack is empty and no global code is left now so Promise2 will be executed as microtask queue is preferred

8 - promise2 //output 5
then at last timer2 will get executed as microtask queue = empty and callback queue = timer2
9 - timer2 //output 6


final output-
    start
    end
    promise1
    timer1
    promise2
    timer2
*/