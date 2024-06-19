
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

function printUserInfo(index){
    console.log(`${members[index].name}'s phone is ${members[index].phone}`)
}
printUserInfo(0)
printUserInfo(1)
printUserInfo(2)


let users = [
  {
    name: "Kamana",
    phone: 988776668,
    address: {
      temporary: {
        district: "Pokhara",
        ward: "02",
        gender: "female",
      },
    },
    permanent: {
      district: "Jhapa",
      ward: "02",
    },
  },
  {
    name: "Sitara",
    phone: 988778768,
    address: {
      temporary: {
        district: "Sunsari",
        ward: "04",
        gender: "others",
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
        gender: "male",
      },
    },
    permanent: {
      district: "Kathmandu",
      ward: "07",
    },
  },
];

// let genders = ["male", "female", "others"];
// function displayUserInfo(user) {
//   console.log(`${user.name}'s phone number is ${user.phoneNum}`);
//   console.log(
//     `${user.name}'s gender is ${
//       genders[Math.floor(Math.random() * genders.length)]
//     }`
//   );
// }

function displayUserInfo(users){
    console.log(`${users.name}'s phone is ${users.phone}`)
}
displayUserInfo(users[0])
displayUserInfo(users[1])
displayUserInfo(users[2])
displayUserInfo({name:"ramm",phone:"88776666"})

// let genders =["male", "female"]
// const genders = ["male", "female","others"]
// function getRandomGender() {
//     const randomIndex = Math.floor(Math.random() * genders.length);
//     return genders[randomIndex];
// };
// console.log(getRandomGender());

 let genders=["male","female","others"]
//  const randomIndex = Math.floor(Math.random() * genders.length);
function gendersRandom(){
    console.log(genders[(Math.floor(Math.random()*genders.length))])
}
gendersRandom()
gendersRandom()


let religions = ["hindu", "budhhist",christian]