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



function calculate(firstnum,secnum){
        let sum = firstnum + secnum
        return sum
}
console.log(calculate(2,3))

