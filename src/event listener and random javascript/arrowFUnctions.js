//multi paramter function
function sum(a, b){
    return a+b;
}

//multi paramter function (arrow)
 let sum2 = (a, b) => {
    return a+b;
}

let sum3 = (a,b) => a+b //allows you to get rid of the return function

//single paramter function
function isPositive(number){
    return number >= 0;
}

//single paramter function (with arrows)
let isPositive2 =number => {
    return number >= 0;
}

let isPositive3 = number => number >= 0;

//no paramter function
function randomNumber(){
    return Math.random;
}

//no paramter function with arrows
let randomNumber2 = () =>{
    return Math.random;
}

let randomNumber3 =() => Math.random;


//event listener
document.addEventListener('click', function(){
    console.log('click');
}); 

//event listener with arrow functions
document.addEventListener('click', () => {
    console.log('click');
}); 

//event listener with arrow functions on a single linec
document.addEventListener('click', () => console.log('click'))