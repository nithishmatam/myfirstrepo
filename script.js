// console.log(20 + 20 + 10);
// let js = 'amazing';
// if (js === 'amazing') {
// alert('JavaScript is ' + js);
// } 
// console.log(40 + 8 + 23 - 10);
// console.log("Nithish");

// let firstName = 'Nithish';
// console.log(firstName);
// // console.log(firstName);

// let matam_nithish = 'MNK';
// console.log(matam_nithish);

// let $function = 52;
// let PI = 3.1415;
// console.log(PI);

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// console.log(myFirstJob);
// console.log(myCurrentJob);

// true;
// let javascriptISFun = true;
// console.log(typeof javascriptISFun);

// javascriptISFun = 'YES!';
// console.log(typeof javascriptISFun);

// let year;
// console.log(year); 
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);


// let a = 26;
// a = 27;
// a = "Nithish";

// const birthYear = 1999;
// console.log(birthYear);
// // const job;

// var b = 'programmer'; // Declaration
// b = 'teacher'; // Initialization
// b = 20; // Re-Initialization
// var b; // Re-Declaratioon

// //Math Operators
// const now = 2025;
// const ageNithish = now - 1999;
// console.log(ageNithish);
// console.log(ageNithish * 2, ageNithish /10, 2**3);

// const firstName = 'Nithish Kumar';
// const lastName = 'Matam';
// console.log(firstName + ' ' + lastName);

// // Assignment Operators
// let x = 10 + 5 // 15
// x += 10; // x = x + 10 = 25;
// x *= 4; // x = x * 4 = 100;
// x++; // x = x + 1 = 101;
// x--; // x = x - 1 = 100;
// x--;
// console.log(x);

// // Comparison Operators
// age = 18;
// console.log( 5 > 3);
// console.log( 5 < 3);
// console.log( age >= 18);

// const now = 2050;
// const ageNithish = now - 2025;
// const ageNihitha = now - 2020;
// console.log(now - 2025 > now - 2020); // 25 > 30 -> False

// let x,y;
// x = y = 30 - 10 - 10; // x = y = 10, y = 10, x = 10
// console.log(x , y);

// //const averageAge = ageNithish - ageNihitha / 2 ; // 25 - 15 = 10
// const averageAge = (ageNithish - ageNihitha) / 2 ; // (25 - 30) / 2;
// console.log(ageNithish , ageNihitha , averageAge);

// const firstName = 'Nithish';
// const job = 'Front-End-Developer';
// const birthYear = 1999;
// const year = 2025;

// const matam = "I'm " + firstName + ', a ' + (year-birthYear) + ' year old ' + job + '!' ;
// console.log(matam);
// const matamNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`; //Template literals, Strings ESXi
// console.log(matamNew);
// console.log(`just a \n\
// regular \n\
// string...`);
// console.log(`string
// multile
// lines`);

// const age = 16;
// if (age >= 18) {
//     console.log(`Nithish can start driving license`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Nithish is too young. wait another ${yearsLeft} years`);
// }

// const birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }
// console.log(century);
// --------------------------------

// const body = document.body
// const div = document.createElement("div")
// const strong = document.createElement("strong")
// strong.innerText = "Hello Nithish"
// div.append(strong)
// body.append(div)

// const div = document.querySelector("div")
// const spanHi = document.querySelector("#hi")
// const spanBye = document.querySelector("#bye")
// spanHi.remove()

//-----------------------------------
//Type Conversion:- 
const inputYear = '1999';
//How to convert string to number
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('nithish')); // Not a number -> NaN
console.log(typeof NaN); // Not a number -> type is number
console.log(String(23),23); // first one is string second one is number

//Type Coercion:--
console.log('I am ' + 23 + ' years old'); //23 is converted to string
console.log('I am ' + '23'+'years  old'); // all are strings -> Because of + operator the numnber is converted to string
console.log('23' - '10' -3); // all are converted to numbers -> Because of - operator the strings are converted to numbers
console.log('23' + '10' +3); // all are converted to strings
console.log('23' * '2'); // both are converted to numbers
console.log('23' / '2'); // both are converted to numbers

let n = '1' + 1; // '11' -> Because of + operator number 1 is converted to string
n = n - 1; // 11 - 1 = 10
console.log(n); 

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean('Nithish')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 1;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height = 143;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

//Equality Operators: (==) losse equality operator/ Type coercion vs (===)  strict equality operator
// == -> checks only value
// === -> checks value and type/ data type
const age = 18;
if (age === 18) console.log("You just became an adult(strict)");
if (age == 18) console.log("You just became an adult(loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) { // "23" == 23
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}   

if (favourite !== 23) console.log("Why not 23?");