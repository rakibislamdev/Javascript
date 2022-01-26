/* array length increment */
const bike = ['Honda','Hero','Yamaha','Bajaj','Suzuki'];
let length = bike.length;
for(let i = 0; i < length; i++){
    console.log(bike[i]);
}
/* array length decrement */
let dlength = bike.length;
for(let i = dlength - 1; i >= 0; i--){
    console.log(bike[i]);
}
/* sum of ten numbers in a array */
let numbers = [10,32,21,65,95,43,12,87,55,79];
function sum(oldvalue, newvalue){
    return oldvalue + newvalue;
}

let summation = numbers.reduce(sum);
console.log(summation);