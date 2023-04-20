const iphone = {
    name: "Iphone",
    category: "electronics",
    price: 10000,
    rating: 4.8,
    display: () => {
        console.log(this);
        //here this is resolved lexically and this is empty object as it goes 1 scope out in global context
        //but still could not get resolved.
    }
}

const macbook = {
    name: "macbook",
    category: "electronics",
    price: 10000,
    rating: 4.8,
    display: function () {
        console.log(this);
    }
}

macbook.display();
iphone.display();