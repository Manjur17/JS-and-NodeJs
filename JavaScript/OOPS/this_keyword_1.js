let iphone = {
    name: "Iphone 13 pro",
    price: 100000,
    descrption: "The new apple iphone 13 pro.",
    rating: 4.8,
    // no need of function keyword in objects also
    display() {
        console.log("first display", this);
    }
}

let macbook = {
    name: "Macbook M2",
    price: 125000,
    descrption: "The new apple macbook m2.",
    rating: 4.9,

    display() {
        console.log("second display", this);
    }
}

iphone.display();
macbook.display();

console.log(this); //empty object in global context in node runtime

