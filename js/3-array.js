let courses = ["mern", "qa", "python", "marketing"];
//add machine learning
console.log("course[4]", courses[4]);
courses[4] = "machine learning";
console.log(courses);

//windows v for clip board

/*Object*/
// let <objName>={
//     <key> : <value>
//      <property>:<value>
//     <attribute>:<value>

let projector = {
  brand: "viewsonic",
  color: "white",
  price: 5000,
  height: 15,
  width: 15,
  unit: "cm",
};
console.log(projector);

let color = {
  name: "red",
  hexValue: "#FF0000",
  rgbValue: "rgb(255,0,0)",
  hslValue: "hsl(0,100%,50%)",
};
console.log(color);

// let colors = {
//     name: "red",
//     RedHexValue:"#FF0000",
//     RedRgbValue:"rgb(255,0,0)",
//     RedHslValue:"hsl(0,100%,50%)",
//     name: "green",
//     RHexValue:"#FF0000",
//     RedRgbValue:"rgb(255,0,0)",
//     RedHslValue:"hsl(0,100%,50%)",

// }
// console.log(color)

const colors = [
  {
    name: "Reeeeeed",
    HexValue: "#FF0000",
    RgbValue: "rgb(255,0,0)",
    HslValue: "hsl(0,100%,50%)",
  },

  {
    name: "Green",
    HexValue: "##00FF00",
    RgbValue: "rgb(0,255,0)",
    HslValue: "hsl(120,100%,50%)",
  },
  {
    name: "Blue",
    HexValue: "##0000FF",
    RgbValue: "0,0,255",
    HslValue: "hsl(240,100%,50%)",
  },
];
console.log("acessing color before edit:", colors[0].name);

colors[0].name = "Red";
console.log("acessing color after edit:", colors[0].name);
console.log(colors);

// const subjects = [
//     {
//         name:"Web Devlopment",
//         teacher:"Sushant",
//         shift:"Afternoon",
//     },
//         {
//             name:"Ad.java ",
//             teacher:"Asmita",
//             shift:"Evening",
//         }
// ]
// subjects[0].name = "Web Development";
// subjects[1].shift = "Afternoon";

// console.log(subjects);

fruit =[apple,banana,cucumber]

