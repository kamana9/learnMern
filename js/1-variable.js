greeting = "hi"
name = "kamana"

console.log(greeting,name)
// variable naming convention
userVerification=true //camelCase
user_verification= true //snake_case
console.log(userVerification)

kycverified=true

f_name ="Kamana"
m_name="Laxmi"
l_name="Karki"
fullName= f_name +" "+ m_name + " "+ l_name
console.log("My name is", fullName)
//declaration and initialization

var count //declaration
count =200 //initialization
 let media ="facebook"//declaration and initialization

 const world ="book"
//  const world="food"

 console.log(world)

 const book = " social"
 console.log(book)

//SUM
 let a = 4
 let b = 5
 sum = a + b
 console.log( sum)

 let length
 console.log(length) //undefined is specific to js onle

 let color ="Red"
 color = "Red" //can chane value
 const role=" visitor"
 role= admin //it gives error we cannot givenew value

// datatypes

//function
function summarizeUSer (f_name,m_name,l_name){
    return('My name is'+f_name +" "+ m_name + " " + l_name )
}
console.log(summarizeUSer(f_name,m_name,l_name))