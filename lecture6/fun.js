// function hell(){
//     console.log("hi! trisha")
// }

// hell();

// function dice(){

//     let dicenum=Math.floor(Math.random()*6)+1;
//     console.log(dicenum);
// }
// dice();

//function with arguument

// function username(name){
//     console.log(name);
// }

// username("trisha pandey");

// let a=prompt("ener your num");
// let b=prompt("ener your num");

// function sum(a,b){
//     console.log(parseInt(a)+parseInt(b));
// }

// sum(a,b);

// create a function that give average of 3 number

//take three number from user
// let a=prompt("ener your num 1");
// let b=prompt("ener your num 2");
// let c=prompt("ener your num 2");

// function average(a,b,c){
//     let avg=(parseFloat(a)+parseFloat(b)+parseFloat(c))/3;  //print avg of three num
//     console.log(`avg of ${a} +${b} +${c}= ${avg}`);
// }

// //call the function
// average(a,b,c);

//create a function to print a table a num tahe by user

// let num=prompt("enter num whose table you to print");

// function table(num){

//     for(let i=1; i<=10;i++){
//         let tableNum=num*i;
//         console.log(tableNum);
//     }
// }

// table(num);

//return keyword

// function sumof(a,b){
//     return a+b;
// }

// console.log(sumof(2,4));

// let p=sumof(sumof(23,22),5);
// console.log(p);

//------create a function to return sum 0o 1 to n----

// let n=prompt("enter your number");

// function sumof_Nnum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum + i;
    
//     }
//     return sum;
// }
// console.log(sumof_Nnum(n));


//create a function to return a concat of string 

// let str=["hi","hello","bye","!"];

// function concat(str){
// let result="";
// for(let i=0;i<str.length;i++){
//    result+=str[i];

// }
// return result;

// }

// console.log(concat(str));

//Function expression


// let username=function uname(name){
//     console.log(name);
// }

// username("trisha pandey");

//Higher order function
// let greet=function(){
//     console.log("banjour")
// }

// function multiplegreet( func,n){
//     for(let i=1;i<=n;i++){
//         func()
//     }
// }

// multiplegreet(greet,4);

//higher order functio return as output

// function factoryfunction(request){

//     if(request=="odd"){
//        let odd= function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(request=="even"){
//       let even= function(n){
//             console.log(n%2==0);
//         }
//          return even;
//     }
//     else{
//         console.log("wrong request")
//     }
    
// }
// let request="even";

//----------Methods------

// const calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return(a-b);
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// };


