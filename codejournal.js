/* Variables - containers that store values */

var name; // a declared variabel, but no tinitialized and it's in the glabal scope (BAD)

let foo; // a declared variable that can be changed

//const bar; // a declarde variable that cannot be changed - short for 'constant'

const ANSWER = 42; // const is declarde and initialized with the value 42

//Strings

let string1 = "Hello World!"; // preferred way

let string2 = new String("Hello World!"); // constructor

// Number

let myNumber = 2983764;

let myNumber = 345.89;

"1" == 1; // this statement is true because of type coercion an dloose equaality checking
"1"=== 1; // false because this is strict equality checking

// Boolean

let myBool = true;

// Array

let myArray = []; //this is an array. they alway have square braces

//                0    1      2       3      4
let myArray2 = [ 42, "Bob", myBool, ANSWER, true];

let secondElement = myArray2[1]; // the second position is at index #1

myArray2.push("Thor"); // added an element to the end of myArray2

myArray2.unshift("Hello World");

let mylongString =
"alsdkfjasdlfjlaskdjflaskdjflaksdjflaskjdflaskjdflajsdflas"; // just an array of characters

mylongString.length;

// Object

let minObject = {};

let minObject = {
    make: 'Jeep',
    color: 'White',
    year: '1998',
    vin: '2436j3467j235k'
};

//Functions
function myFunction() {
    return "My greeting to you...";
}

Funtion sumTwoThings(one,two) {
    //watch out for data type issues here;
    return one + two; //if numbers, will add them. If strings, will concatenate.
}