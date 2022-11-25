// Funtion Recap

// Three Types of Function

/**

function normalFnOne() {
    console.log("normalFn");
}

const normalFnTwo = function () {
    console.log("normalFntwo");
};

const fnThree = () => {
    console.log("This is a ES6 Function");
};

normalFnOne();
normalFnTwo();
fnThree();

console.log(normalFnTwo.name)
console.log(normalFnTwo)

 */
// ********************************************************************************************

// Call back Function

// aam zindagi
/**
const add = (x, y) => {
    console.log(`sum of Tow number : ${x + y}`);
};
add(4, 5);
 */

// mentos Zindagi
/**
const sum = (param) => {
    param(5, 6);
    console.log("finished adding tow numbers");
};

const add = (x, y) => {
    console.log(`sum of Tow number : ${x + y}`);
};

sum(add);
 */

// mentos Zindagi ( with Twist )

/**
const sum = (param, a, b) => {
    param(a, b);
    console.log("finished adding tow numbers");
};

const add = (x, y) => {
    console.log(`sum of Tow number : ${x + y}`);
};

sum(add, 2, 4);

 */

// ******************************************************************************************
// ForEach Methods

// Aamm zindagi

/**
const fruits = ["apple", "orange", "pineapple", "kiwi", "custard"];

const fruitFn=(fruit) => {
    console.log(`10 grams of ${fruit}`);
}
fruits.forEach(fruitFn);
 */

// Mentos Zindagi
/** 
const fruits = ["apple", "orange", "pineapple", "kiwi", "custard"];

fruits.forEach((fruit) => console.log(`10 grams of ${fruit}`));

*/

// ******************************************************************************************

// Map Function
// const number = [2, 3, 4, 5];

// Aamm Zindagi
/**
function squreOfNumber(num) {
    return num * 2;
}

const squares = number.map(squreOfNumber);
console.log(squares);
 */

// mentos Zindagi
/**
const squreOfNumber =  (num)=> {
    return num * 2;
};
const squares = number.map(squreOfNumber);
console.log(squares);
 */

//Mentos Zindagi with Twist/
/**
const squares = number.map((num) => num * 2);
console.log(squares);
 */

// ******************************************************************************************

// Filter Method

// const arr = ["apple", "orange", 3, "pineapple", 2, 4, 5, 6, 7, "banana"];

// Aaam Zindagi
/** 
function fillArray(item){
    if(typeof item==='number'){
        return true
    }
    else return false
}

const num=arr.filter(fillArray);
console.log(num)

*/

// Aaam zindagi short form
/**
const fillArray = (item) => {
    return typeof item === "number" ? true : false;
};
const num = arr.filter(fillArray);
console.log(num);



// mentos Zindagi

const num = arr.filter((item) => (typeof item === "number" ? true : false));
console.log(num);
 */

// Find index method

const fruits = ["apple", "orange", 3, "pineapple", 2, 4, 5, 6, 7, "banana"];

let fruitNum = fruits.findIndex((fruit) => {
    return fruit === "pineapple";
});
console.log(fruitNum);
