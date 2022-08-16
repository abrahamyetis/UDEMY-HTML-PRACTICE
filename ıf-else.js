
//? Object Literals
// 
// let firstName = "Levent";
// let lastName = "Ertunalılar";
// 
// let firstName2 = "Levent";
// let lastName2 = "Ertunalılar";

// let levent = ["Levent","Ertunalılar",37,];
// let Esra = ["Esra","Ertunalılar",40,];

let veri;
let user = {
    userName : "Leventert",
    firstName : "Levent",
    lastName : "Ertunalılar",
    age :37,
    hobbies : ["futbol","basket","yüzme","sohbet"],
    adress : {
        city : "İstanbul",
        country : "Türkiye",
        phone : "050000000",
    }
}


veri = user;   //? kullanıcıların tüm bilgileri gelmiş olur.
veri = user.firstName
veri = user.lastName
veri = user.hobbies
veri = user.hobbies.length
veri = user.adress.city;

console.log(veri)
console.log(typeof user);