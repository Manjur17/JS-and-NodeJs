let obj = {};

if (Object.keys(obj).length === 0){
    const msg = 'yeah';
    Object.assign(obj,{sender : 'tom', arr : [msg]})
}

const msg = 'how are you';
const ar = obj.arr;
ar.push(msg);
// console.log( ar);
Object.assign(obj, { sender: 'tom', arr: ar });

console.log(obj);

for (const property in obj) {
    let sender = obj.property;
    let arr = this.messageQueue.property;

    this.ui.displayMessage(`Messages from ${sender} :- `);
    for (const x of arr) {
        this.ui.displayMessage(x);
    }
}