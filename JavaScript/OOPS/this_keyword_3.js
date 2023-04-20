const iphone = {
    name: "iphone",
    price: 100000,
    rating: 4.8,
    display: function () {

        let iphoneRed = {
            name: "Iphone red",
            price: 110000,
            print: () => {
                console.log(this);
            }
        }
        iphoneRed.print();

    }
}

const macbook = {
    name: "macbook",
    price: 125000,
    rating: 4.9,
    display: () => {

        let macbookRed = {
            name: "macbook red",
            price: 125000,
            print: () => {
                console.log(this);
            }
        }
        macbookRed.print();

    }
}

iphone.display(); 
macbook.display();

//in both the cases this is resolved lexically due to arrow function in print. But in iphone display
//anonymous function is used while in macbook display arrow function is used.
//when resolving lexically in iphone the calling context object is iphone object due to anonymous function
//but in case of macbook due to arrow function calling object becomes global object which is empty one in node runtime.