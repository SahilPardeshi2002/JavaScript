/*Objects can be created by two methods 1)Literal 2)Constructor */

// Singleton Object is a object which have single instance.
/* When we create object by constructor method it is by default singleton */
// Object.create   

//Literal Objects
let symbol1 = Symbol(2);  // if we want to declare variable of symbol datatype and use it in objects then

const customer = {
    name : "Sahil Pardeshi",
    email : "sahilpardeshi@gmail.com",
    [symbol1] : 2,
    isLoggedIn : false,
    lastLogin : ['Monday','Tuesday']
}

console.log(customer.email);        //way to access objects
console.log(customer["email"]);     //another way to access objects
console.log(customer.email);
console.log(typeof (customer.symbol1));
console.log(customer[symbol1]);

customer.email = "sahil@syntech.com"
console.log(customer);
/*To freeze the object we can use freeze()*/
// Object.freeze(customer);
// customer.email = "sahil@amazon.com"
console.log(customer);

customer.greeting = function(params) {
    console.log("Hello user!!");
}
// console.log(customer.greeting());
customer.greeting();




