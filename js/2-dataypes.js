/*primi`tive datatypes 
integer,float,boolean,string, undefined(only js), null*/

let f1 = "apple";
let f2 = "banana";

let screensize;
console.log(screensize);
screensize = "lrg";

/*array
let arrayname =[data,data]
                 0th   1st*/

let medias = ["facebook", "insta", "snapchat"];
console.log(medias);

let datatypes = ["string", "integer", "boolean"];
console.log(datatypes);

datatypes.shift;

let fruits = ["apple", "ornge", "kiwi", "banana"];
console.log("previous fruit[1] =", fruits[1]);
fruits[1] = "Orange";
console.log("after value =", fruits[1]);

//let evennumbers = [2,4,6,8, "twelfth","true"] //wrong use similar  datatypes
let evennumbers = [2, 4, 6, 8, "twelfth"];
evennumbers[4] = "12";
console.log("correction of twelve =", evennumbers[4]);

let courses = ["Science", "Math", "Social", "Nepal"];
courses[3] = "Nepali";
console.log("correction of nepali=", courses[3]);
//Adding name and number using function

let people = [];

function addPerson(name, number) {
  people.push({ name, number });
}

addPerson("Rim", "9876554567");
addPerson("Shyam", "9879876554");
addPerson("Sita", "9876543");

people.forEach((person) => {
  console.log(`Name: ${person.name}, Number: ${person.number}`);
});
people[0];
//concat
const names = ["Rim", "Shyam", "Sita"];
const numbers = ["9876543334", "987765546", "987766665"];

const info = names.concat(numbers);
names[0] = "Ram";
console.log(info);
console.log("crection of rim=", names[0]);
// const hobbies =["Sports", "Programming","coking"]
// const[hobby1,hobby2]=hobbies
// console.log(hobby1,hobby2)

// const names =["RAm","Sita","Sita","Hari"]
// const numbers =["9874327689","96788235677","9876536278","98474892849"]
// console.log(name,number)
