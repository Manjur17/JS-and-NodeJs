console.log('start')

const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
}))

console.log('middle')
 
//fn is called here 
fn().then(res => {
    console.log(res)
})

console.log('end')