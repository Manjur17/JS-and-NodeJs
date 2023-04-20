function download(url, time) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);

        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, time);
    });
}

const p1 = download("www.abc1.com", 5000);
const p2 = download("www.abc2.com", 1000);
const p3 = download("www.abc3.com", 3000);

let arr = [p1,p2,p3];
callPromise(arr);

const p4 = download("www.abc4.com", 5000);
const p5 = download("www.abc5.com", 1000);
const p6 = download("www.abc6.com", 3000);

arr = [p4,p5,p6];
callPromise(arr);

const p7 = download("www.abc7.com", 5000);
const p8 = download("www.abc8.com", 1000);
const p9 = download("www.abc9.com", 3000);
arr = [p7, p8, p9];
callPromise(arr);


function callPromise(arr) {

    Promise.all(arr).then(function exec(values) {
        console.log(values);
    })

}
