// 3)Check Two Strings and get the output of the same characters are presented in both the Strings

let a="abcd";
let b="dcba";

let commonCharacters = '';

for(let i=0; i<a.length; i++) {
    for(let j=0; j<b.length; j++) {
        if(a[i]==b[j]) {
            commonCharacters+=a[i];
        }
    }
}
console.log(commonCharacters);