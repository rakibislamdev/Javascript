"user strict"


 
function addFunction(a, b) {
    document.getElementById('sum').innerHTML = a+b;
              
}

function subFunction(a, b) {
    document.getElementById('sub').innerHTML = a-b;
              
}

function mulFunction(a, b) {
    document.getElementById('mul').innerHTML = a*b;
              
}

function diviFunction(a, b) {
    document.getElementById('divi').innerHTML = a/b;
              
}


/* Variable */

/* using by var */
var first_name = "Rakib";
var last_name = "Islam"

console.log(first_name + " " + last_name);

/* using by let */
let a = "Rakib";
let b = "Islam"

console.log(a + " " + b);

/* Statement & operator */

let x, y, z;
x = 5;
y = 6;
z = x + y;

console.log(z);
console.log(x ** 5);
console.log(y % x);
console.log(++x);

/* function */

function myFunction(p1, p2) {
    return p1 * p2;
  }

  console.log(myFunction(4,5));

  /* object */
const car = {type:"Fiat", model:"500", color:"white"};
console.log("The car type is " + car.type);