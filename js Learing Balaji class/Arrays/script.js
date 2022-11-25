//*******************   Arrays   *******************

const southEastAsia = [
    "India",
    "Pakistan",
    "Bangladesh",
    "Buthan",
    "Burma",
    "Nepal",
];
southEastAsia[4] = "Mayanmar";
// console.log(southEastAsia);
let topEconamy = southEastAsia[0];
// console.log(topEconamy);
// let array = [];
// array[0] = "linga";
// array[10] = "durai";
// console.log(array[5]);

// Push & Pop method

const northAmerica = ["Canada", "UnitedState of America", "Mexcico"];
northAmerica[1] = "USA";
northAmerica.push("Panama");
// console.log(northAmerica)

// let nato = ["USA", "UK", "German", "canda", "france", "italy", "Turekey"];

// nato.push("Romania", "greece", "latvia", "estonia");

// nato = [];
// console.log(nato);

// console.log(nato.slice(1, 4));
// console.log(nato.slice(4))
// console.log(nato.slice(4,6))

// Slice

// Loops in js

// let nato = ["USA", "UK", "German", "canda", "france", "italy", "Turekey"];

// for (let i = 0; i < nato.length; i++) {
//     console.log(`long live ${nato[i]} !!`);
// }

// nested array

let nato = ["USA", "UK", "German", "canda", "france", "italy", "Turekey"];
let groupEight = ["USA", "UK", "German", "india", "Pakistan"];

for (let i = 0; i < nato.length; i++) {
    for (let j = 0; j < groupEight.length; j++) {
        if (nato[i] === groupEight[j]) {
            console.log(nato[i]);
        }
    }
}



