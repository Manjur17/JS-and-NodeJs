function download(url, time) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);

        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            if (time > 500) {
                reject("err");
            } else
                resolve(content);
        }, time);
    });
}


const p1 = download("www.abc1.com", 5000);
const p2 = download("www.abc2.com", 1000);
const p3 = download("www.abc3.com", 3000);


//wrap all promises(p1,p2,p3) inside Promise.all() which is a bigger promise
Promise.all([p1, p2, p3]).then(function fullfillHandler(values) {
    //values is array of promises of all promises(p1,p2,p3) warpped inside Promise.all()
    //fullfillHandler is exectued when all promises(p1,p2,p3) warpped inside Promise.all() is resolved
    //if any of the promises(p1,p2,p3) is rejected then all promises below it will be rejected
    console.log(values);
})



function callPromise(arr){
    Promise.all(arr).then(function callPromise(values) {
        console.log(values);
    })
}