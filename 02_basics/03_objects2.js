const obj = {}
console.log(obj);
obj.name = "Sahil";
obj.email = "sahil@gmail.com"

obj.fullName = {
    firstName : "Sahil",
    address : {
        srNo : '20/2',
    }
}

// console.log(obj);

//To combine multiple objects into single object we use spread operator and Object.assign()
const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "c",
    4: "d",
};

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3); 

//using spread operator

const obj3 = {...obj1,...obj2};
// console.log(obj3);

// when data arrives from database, it is in this format

const user = [
    {
        id: "@31313",
        email: "f@gmail.com",
    },
    {

    },
    {

    },
]
// console.log(user[0].id);
// console.log(obj);

// console.log(Object.keys(obj));  //we can retrieve all keys in form of array, loop through it to execute logic
// console.log(Object.values(obj));// similarly retrieves all values in object
// console.log(Object.entries(obj));//Provides all entries of the object

//************************************Object Destructuring and Intro to API ******************************

/* Object Destructuring - it is a way to extract multiple values from the objects
    -Instead of accessing object elements with '.' operator, we can with the destructuring.
    -Ex course.name , course.tutor To  {name,tutor} = course  console.log(tutor);
*/
const course = {
    name: "JS in Hindi",
    price: 999,
    tutor:"hitesh choudhary",
};

const {tutor : tutorX,price} = course;       //Object destructuring
console.log(tutor); //Give invalid answer
console.log(tutorX);// Gives values

