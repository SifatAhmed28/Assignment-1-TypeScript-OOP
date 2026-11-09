Title:(TypeScript's type hierarchy work with any, unknown, and never) and Why is unknown always preferred over any .

Introducton :In typescipt you know there are differnt type avaible , and its follow hierarchy. There are top type , core type, nullish type, literal type ,bottom type etc.

Here top type get the higher priority and you can go top type to bottom type or any other type 
Bottom type get lowest priority and you can't go bottom type to top type 
So right now you know that it's follow one direction order to understand the code properly you have the proper knowledge of type hierarchy
any and unknown is the top type and never is the bottom type 
so any and unknown alaways come before never
unknown always preferred over any beause when you run a code using unknown its accept any value but do the type chaking berfore executing the code .
But any type allow all type opertion without checking the data type , it can create runtime error 
conclusion:so to become a good programmer you have to know limitaion all the data type. Also be aware of new tecnology.

Example:
// any-> No type checking
let value1: any = "Hello";
value1.toFixed(); 
// No error, but runtime error

// unknown-> Requires type checking
let value2: unknown = "Hello";

if (typeof value2 === "string") {
    console.log(value2.toUpperCase()); 
}

// never-> Cannot hold any normal value
function error(): never {
    throw new Error("Something went wrong");
}