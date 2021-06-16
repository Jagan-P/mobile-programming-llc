//2. Merge two sorted arrays [1, 3, 5, 8], [2, 3, 4, 9] into one which is also sorted, output = [1,2,3,3,4,5,8,9]

let array1 = [1, 3, 5, 8];
let array2 = [2, 3, 4, 9];

let finalArray = [...array1, ...array2];

for(let i=0; i<finalArray.length; i++) {
    for(let j=0; j<finalArray.length; j++) {
        if(finalArray[i]<finalArray[j]) {
            let temp = 0;
            temp = finalArray[j];
            finalArray[j] = finalArray[i];
            finalArray[i] = temp;
        }
    }
}

console.log(finalArray);