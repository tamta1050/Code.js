// Primitive 
// 7 types : String, Number, Boolean, Symbol, Null, Undefined, BigInt

const number = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsidetemperature = null
let userEmail;

const Id = Symbol('Rohit')
const anotherId = Symbol('Rohit')

console.log(Id === anotherId);

 const BigNumber = 738472385782352384728579275932759237592375923759n


// Reference (Non Primitive)

// Arrays, Objects, Functions

const heroes = ["Bahubali", "Pushpa", "shaktiman"]

let myobject = {
    Name: "Rohit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);


