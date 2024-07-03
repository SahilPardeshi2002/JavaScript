let score = "33";
// console.log(typeof(score)); 

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

/*
    In this scenario we can get any kind of value from frontend and if we want to typecast it in another format then it might give us falsy values or some runtime errors as well. So make sure to check the information before typecasting it and to use it!!

*/ 
// score = "33abc";                 //After typecasting it gives NaN
score = null;               //Info from front end  After typecasting it gives 0
score = undefined;          //Info from front end  After typecasting it gives NaN
score = "Sahil";            //Info from front end  After typecasting it gives NaN 
score = true;                        //Info from front end  After typecasting it gives NaN

valueInNumber = Number(score);          // typecasting 
// console.log(typeof valueInNumber);      // getting the type of variable
// console.log(valueInNumber);                     // this gives NaN


/*
    "33"    =>      33
    "33abc" =>      NaN
    null    =>      0
    undefined   =>  NaN
    String  =>      NaN
    true or 
    false    =>     1 or 0
*/

let isLoggedIn = 1;     // gives true value
isLoggedIn = null;
let numberToBoolean = Boolean(isLoggedIn);
// console.log(numberToBoolean);

/*
    These are falsy values!! After typecasting to boolean we get false
    undefined,
    null,
    0,
    "",
    NaN
*/

let number = 42;
let numberToString = String(number);
// console.log(typeof numberToString);
// console.log(numberToString);

//====================================Operations======================================================

let value = 4;
let negativeValue = -value;

console.log(negativeValue);

let str1 = "Sahil";
let str2 = " Pardeshi";
console.log(str1 + str2);

// console.log(1 + "1");
// console.log(1 + 1);
// console.log("1"+2+2);
// console.log(2+2+"1");

/* Note - 
    - Implicit type conversion... 
    1)if string is first then other type data is converted into string  - line no 64
    2)if number is first then conversion operation is done first then string is appended - line no 65
*/

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2,num3 = 2;