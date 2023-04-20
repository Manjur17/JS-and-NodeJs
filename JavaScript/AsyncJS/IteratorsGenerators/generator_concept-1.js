function* fetchNextElement() {
    console.log("inside generator");
    const x = 10;
    console.log(yield 11); //after yield is done the program begins from here and the value passed as 
    //argument i.e. 55 is printed here

    yield {name: "Manjur"};

    console.log("entering after a yield");
    const y = x + (yield 30); //same logic as above
    console.log("Value of y is", y);
}


console.log("start");
const iter = fetchNextElement();
console.log("called generator");

console.log("first", iter.next(10));
console.log("second", iter.next(55));
console.log("third", iter.next());
console.log("forth", iter.next(17));