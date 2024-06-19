/* global variable */

let name = "ram"
let age = 12
let number = 100

function doSomething(){
    let number = 1111
    age = 33 //since we have'nt use let keyword, it updates the above global age variable
console.log("inside number",number)
console.log("inside age",age)
}

doSomething()
console.log("number outside",number)
console.log("age outside",age)

function double(input){
    /* output is a block scope variable */
let output  = input * 2
console.log("output",output)
console.log("name",name)
}
double (100)