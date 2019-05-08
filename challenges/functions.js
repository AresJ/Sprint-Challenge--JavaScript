// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the functon return the callback with the two parameters that you created
*/
function consume(arg1, arg2, callback){
    return callback(arg1, arg2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(arg1, arg2, cb){
    return cb(arg1 + arg2);
}
add(value1, value2, function(sum){
  console.log(sum);
});
function multiply(arg1, arg2, cb){
  return cb(arg1 * arg2);
}
multiply(value1, value2, function(times){
  console.log(times);
})
function greeting(arg1, arg2, cb){
  return cb(`Hello, ${arg1} ${arg2}, nice to meet you!`);
}
greeting(value1, value2, function(sayHello){
  console.log(sayHello)
})
/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.
 
// Explanation: 
"Its in a deeper scope after the variable is initiated." 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();