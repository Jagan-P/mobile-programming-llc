// 1. Given an input array = [1, 2, 3, 4]. return the following output [24, 12, 8, 6]. i.e. the output array element is the product of every other element.

let array = [1, 2, 3, 4];
let product = array.reduce((a, b)=>{
    return a*b;
})

for (let i=0; i<array.length; i++) {
    array[i] = product/array[i];
}
console.log(array);
// for(let i=0;i<array.length; i++) {
//     let product = 1;
//     for(let j=0; j<array.length; j++) {
//         if(i!==j) {
//             product=product*array[j];
//         }
//     }
//     console.log(product);
// }