//road to async await

function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 1000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

function doAfterReceiving(value) {//recursive function
    let future = iter.next(value);
    console.log("future is", future);
    if (future.done) return; //base case
    future.value.then(doAfterReceiving);
}

function* steps() {
    const downloadedData = yield download("www.xyz.com");
    console.log("data downloaded is", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("fiele written is", fileWritten);
    const uploadResponse = yield uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload response is", uploadResponse);
    return uploadResponse; //done becomes true here
}

const iter = steps(); //returns a iterator
const future = iter.next(); //return a promise object and done : false

console.log("starting loop");
for (let i = 0; i < 10000000000; i++) {

}
console.log("loop ended");

future.value.then(doAfterReceiving); 

/*

    1- line 54 returns a iterator
    2- line 55 returns a promise object(dowload) and done : false and the timer is inside callback queue
    3- after this the global code is left and action resumes and loop is exected
    4- doAfterReceiving is registred inside fulfillment handler and pushed to microtask queue
    5- timer ends and promise object(dowload) is fulfilled and value = 'ABCDEF' is returned
    6- doAfterReceiving from microtask queue is executed and action begins from line 45
    7- data downloaded is ABCDEF is printed
    8- promise object(writefile) is returned after yield is encounterd at line 47
    9- then recursively point 3(action resumes from line 38),4,5,6 is exectued
*/
