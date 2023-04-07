// const survey = [
//     { name : "Khanh" , answer :"NO"},
//     { name : "Khanh" , answer :"NO"},
//     { name : "BA" ,    answer :"NO"},
//     { name : "Bon" ,   answer :"NO"}
// ];


// document.getElementById("demo").innerHTML = survey.every(Popular);

// function Popular(el , index , arr){
//     if(index === 0) return true;
//     else{
//         return (el.answer === arr[index - 1].answer)
//     }
// }

// const arr1 = [50 , 20 , 18 ,22];

// function ageCheck(age){
//     return age >= document.getElementById("ageToCheck").value;
// }

// function myFunction(){
//     document.getElementById("demo").innerHTML = arr1.every(ageCheck);
// }

// arr1.fill(5,0,1);
// document.getElementById("demo").innerHTML = arr1 ;

// document.getElementById("demo").innerHTML = arr1.filter(Check);

// function Check(age){
//     return age > 20;
// }

// document.getElementById("demo").innerHTML = arr1.find(check);

// function check(age){
//     return age > 20;
// }

// const newArr = arr1.flatMap((x) => x*2)

// document.getElementById("demo").innerHTML = newArr;


// let text = "ABCDES";

// const myArr = Array.from(text);

// document.getElementById("demo").innerHTML = Array.isArray(text);
// Array.prototype.unCase = function(){
//     for(let i = 0 ; i < this.length; i++){
//         this[i] = this[i].toUpperCase();
//     }
// };
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const numbers = [4, 9, 16, 25];
// let removed = numbers.pop();

// fruits.unCase();


// function myFuction(total , num){
//     return total + num;
// }

// function myFunction(age){
//     return age > 18;
// }

// let a = true;

// Boolean.prototype.myColor = function(){
//     if(this.valueOf() == true) return "red";
//     else return "reen";
// }

// document.getElementById("demo").innerHTML =  numbers.sort();

// document.getElementById("demo").innerHTML = a.myColor();


// class Car{
//     constructor(brand){
//         this.carName = brand;
//     }
//     constructor(Gia) {
//         this.GiaCa = Gia;
//     }
// }

// myCar = new Car( "Ferari" ,"5$");
// document.getElementById("demo").innerHTML = myCar.carName + myCar.GiaCa;
// let d = new Date();

// document.getElementById("demo").innerHTML = d.getTime();

// function myFuction(){
//     const element = document.activeElement.tagName;
//     document.getElementById("demo").innerHTML = element;    
  
// }
// document.addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World";
// });


// let text = "Hello word";
// let enconde = window.btoa(text);
// let decode = window.atob(enconde);

// function traiNghiem(){
//   var moCua = window.open("https://www.youtube.com/" , "" , "width = 500px , height = 500px");
//   moCua.blur();
// }

// document.getElementById("demo").innerHTML = enconde + "<br>" + decode;

// const myInterval = setInterval(myTimer , 1000);

// function myTimer(){
//   let newDate = new Date();
//   document.getElementById("demo").innerHTML = newDate.toLocaleTimeString();
// }

// function traiNghiem(){
//   clearInterval(myInterval);
// }

// let myWindow;

// function openWin() {
//   myWindow = window.open("", "myWindow", "width=400,height=200");
// }

// function closeWin() {
//   if (myWindow) {
//     myWindow.close();
//   }
// }

// function checkWin() {
// let text = "";
// if (!myWindow) {
//   text = "It has never been opened!";
// } else {
//   if (myWindow.closed) { 
//     text = "It is closed.";
//   } else {
//     text = "It is open.";
//   }
// }
// document.getElementById("demo").innerHTML = text;

function checkWin(){
  let text = "xa nhan vao day";
  if(confirm(text)== true){
    document.getElementById("demo").innerHTML = "tuyet";
  }
  else{
    document.getElementById("demo").innerHTML = "ke may";
  }
}