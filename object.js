const nayok = {
    name: "Rasel Ahmed",
    id: 121,
    address: "siegmunds hof",
    isSingle: true,
    friends: ["Rahim", "Karim", "Sazzad", "Tetu"],
    movies: [{name: "no.1", year: 2015}, {name: "king khan", year: 2018}],
    act: function(){
        console.log("acting like sakib khan");
    },
    car: {
        brand: "tesla",
        price: 500000,
        made: 2021,
        manufactureer: {
            name: "tesla",
            ceo: "Elon Mask",
            country: "USA"
        }
    }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act();