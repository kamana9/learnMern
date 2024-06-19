// let color = {
//     name: "red",
//     hexValue: "#FF0000",
//     rgbValue: "rgb(255,0,0)",
//     rgbValue:{
//         red:255,
//         green:0,
//         blue:0,
//     },
//     hslValue: "hsl(0,100%,50%)",
//   };
//   console.log(color);
//   //no capital letter used in object
//   console.log("color.rgbValue.blue:",color.rgbValue.blue)
// console.rgbValue.blue =160
// console.log(color.rgbValue)

let members = [
  {
    name: "Kamana",
    phone: 988776668,
    address: {
      temporary: {
        district: "Pokhara",
        ward: "02",
      },
    },
    permanent: {
      district: "Jhapa",
      ward: "02",
    },
  },
  {
    name: "Sita",
    phone: 988778768,
    address: {
      temporary: {
        district: "Sunsari",
        ward: "04",
      },
    },
    permanent: {
      district: "Simara",
      ward: "09",
    },
  },
  {
    name: "Hari",
    phone: 9887234568,
    address: {
      temporary: {
        district: "Nepalgunj",
        ward: "03",
      },
    },
    permanent: {
      district: "Kathmandu",
      ward: "07",
    },
  },
];
console.log(
  members[0].name +
    " " +
    "lives in" +
    " " +
    members[0].address.temporary.district +
    " " +
    "district" +
    "," +
    "ward no." +
    members[0].address.temporary.ward +
    "."
);
console.log(
  members[1].name +
    " " +
    "lives in" +
    " " +
    members[1].address.temporary.district +
    " " +
    "district" +
    "," +
    "ward no." +
    members[1].address.temporary.ward +
    "."
);
console.log(
  members[2].name +
    " " +
    "lives in" +
    " " +
    members[2].address.temporary.district +
    " " +
    "district" +
    "," +
    "ward no." +
    members[2].address.temporary.ward +
    "."
);
// console.log("acessing permanent address before edit:", member[3].permanent_add);

// memeber[3].permanent_add = "Banepa";
// console.log("acessing address after edit:", address[3].permanent_add);
// console.log(address);

let users = [
  {
    name: "sita",
    phone: 9877666555,
    address: {
      temporary: {
        district: "Kathmandu",
        ward: "-10",
      },
      permanent: {
        district: "jhapa",
        ward: 1,
      },
    },
  },
];

users[0].address.temporary.ward = "10";
users[0].address.temporary.street = "samakhusi";
console.log(users);

let It=[
    {
    name : "BCA",
    firstSem:{
        sub1:"CFA",
        sub2:"English",
        sub3:"Digitallogic",



    },
    teacher:{
        one:"abc",
        two:"cde",
    },
},
{
    name : "Csit",
    firstSem:{
        sub1:"Java",
        sub2:"ad.java",
        sub3:"Digitallogic",
    },
    teacher:{

    }
    
},
];

It[1].teacher.one="Ram";
console.log(It[1].teacher.one);

/*template literal/string literal "alternstive for + , /concad" */
/* object literal {}
boolean literal true false
string literal '' ""
template literal `` */
