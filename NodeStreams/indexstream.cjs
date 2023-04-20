const fs = require('fs');
const TransformStream = require('stream').Transform;
const readstream = fs.createReadStream(__dirname + '/run.txt');
const fileWriteStream = fs.createWriteStream(__dirname + '/write.txt');

const transFormedStream = new TransformStream({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000); //do this task(chunk.toString().toUpperCase()) repeatedly
    }
});
const writeStream = process.stdout;
const outputSteam = readstream.pipe(transFormedStream);

outputSteam.pipe(writeStream);
outputSteam.pipe(fileWriteStream);