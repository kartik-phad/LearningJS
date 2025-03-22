//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//===============================================================================

// STACK (premitive datatypes - changes made in copy)  , HEAP (non premetive data types - changes made in original file)

// NOTE IMP :- WHEN YOU WANT TO MAKE ANY CHANGES IN PREMETIVE DATA TYPES IT  MAKE CHANGES IN COPY OF THE VARIABLE 
//         AS IT IS PRESENT IN STACKK

//         AND WHEN YOU WANT TO MAKE ANY CHANGES IN NO-PREMETIVE DATA TYPES YOU MAKE CHANGES IN ORIGINL 
//         REFERNCR NOT FROM ANY COPY 