// let name = 'aj';//value can be changed
// name = 'raven';
// //console.log(name)

//let lastName = 'alanunay';
//let middleName = 'calidguid';
//console.log(lastName, name, middleName);

// const age = 20;//value cannot be changed

// // age = 26; // This will cause an error since age is a constant
// //console.log(age);

// let age1 = 20; 
//  //age1 = 'twenty';

// let approved = true;
// let firstName = undefined;
// let selectPet = null;

//firstName = 'aj';
//selectPet = 'dog';
//console.log(firstName, selectPet);

//console.log(typeof age);
//console.log(typeof firstName);
//console.log(typeof age1, typeof approved, typeof firstName, typeof selectPet);

function checkArray(){
    let num = [1, 2, 3, 4, 5];
    num[5] = 6;
    console.log(`${num}`  );
}
// checkArray();

// const fruits = ['apple', 'banana', 'orange'];
// fruits.push('grape');
// console.log(fruits);

// let fruits = ['apple', 'banana', 'orange'];
// // fruits[3] = 'grape';
// fruits.pop();
// console.log(fruits);

 

//String primitive
// const person = 'This is my\n first message';
// console.log(person);
// console.log(person.length);
// console.log(person.toUpperCase());
// console.log(person.toLowerCase());
// console.log(person.indexOf('first'));
// console.log(person.replace('first', 'second'));
// console.log(person.startsWith('This'));
// console.log(person.endsWith('message'));
// console.log(person.trimLeft());
// console.log(person.trimRight());
// console.log(person.trim()); 
// console.log(person.split(' '));



// //String object
// const personObject = new String('aj');



// let hour = 23; 
//   if (hour >= 6 && hour < 12) {
//     console.log('Good morning');
//   }
//   else if(hour >= 12 && hour < 18){
//     console.log('Good afternoon');
//   }
//   else{
//     console.log('Good evening');
//   }



// function greet(num){
//     if(num >=7 && num <10){
//         console.log('Good morning');
//     }
//     else if(num >= 11 && num < 12){
//         console.log('Good noon');
//     }
//     else if(num >= 13 && num < 17){
//         console.log('Good afternoon');
//     }
//     else if(num >= 18 && num <= 23){
//         console.log('Good evening');
//     }
//     else{
//         return 'Invalid time';
//     }
// }
// greet(22);



// function justChecking( day ){
//  switch(day){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;  
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break; 
//     default:
//         console.log(`${day} is not a valid day`);
// }
// }
// justChecking(3);



// function sum(operators, num1, num2){
//     let result;
//     switch(operators){
//         case '+':
//              result = num1 + num2;
//              if(result >= 50){
//                     console.log(`${result} is a lucky number`);
//              }
//              else{
//                 console.log(`${result} is not a lucky number`);
//              }
//             break;
//         case '-':
//              result = num1 - num2;
//              if(result >= 50){
//                     console.log(`${result} is a lucky number`);
//              }
//              else{
//                 console.log(`${result} is not a lucky number`);
//              }
//             break;
//         case '*':
//              result = num1 * num2;
//              if(result >= 50){
//                     console.log(`${result} is a lucky number`);
//              }
//              else{
//                 console.log(`${result} is not a lucky number`);
//              }
//             break;
//         case  '/':
//              result = num1 / num2;
//              if(result >= 50){
//                     console.log(`${result} is a lucky number`);
//              }
//              else{
//                 console.log(`${result} is not a lucky number`);
//              }
//             break;  
//         default:
//             console.log(`${operators} is an invalid operator`);
//             return;
//     }
// }
// sum('/', 100, 2);
// sum('+', 20, 30);
// sum('-', 100, 30);
// sum('*', 10, 5);



// function gss(age){
//     let category;
//     let myName = {
//         firstName: 'aj',
//         lastName: 'alanunay',
//     }
//     switch(true){
//         case age >= 7 && age < 17:
//             category = 'child';
//             break;
//         case age >= 18 && age <= 30:
//             category = 'young adult';
//             break;
//         default:
//             console.log('Invalid age');
//             return;
//     }
//     if(category === 'child'){
//         console.log(`${myName.firstName} ${myName.lastName} is a child`);
//     }
//     else if(category === 'young adult'){
//         console.log(`${myName.firstName} ${myName.lastName} is a young adult`);
//     }        
// }
// gss(15);



// let aNum;
// let bNum;
// let result;
// let Ops;
// aNum = 10;
// bNum = 5;
// Ops = '+';
// switch(Ops){
//     case '+':
//         result = aNum + bNum;
//         break;
//     case '-':   
//         result = aNum - bNum;
//         break;
//     case '*':
//         result = aNum * bNum;
//         break;
//     case '/':
//         result = aNum / bNum;
//         break;
//     default:
//         console.log('Invalid number');
// }
// console.log(result);    



// function reCap(age, gender){
//     let thyName = {
//         firstName: 'aj',
//         lastName: 'alanunay',
//     }
//     let category;
//         switch (true){
//            case age >= 7 && age < 17:
//                 category = 'child';
//                 break;
//             case age >= 18 && age <= 30:
//                 category = 'young adult';
//                 break;
//             case age >= 31 && age <= 60:
//                 category = 'adult';
//                 break;
//             case age >= 61 && age <=99:
//                 category = 'senior citizen';
//                      break;
//             default:
//                 console.log('Gurang');
//                 return;
//         }
//             if(age <= 17){
//                 console.log(`${thyName.firstName} is a ${age} years old ${gender} ${category}`);
//             }
//             else if(age <= 30){
//                 console.log(`${thyName.firstName}  is a ${age} years old ${gender} ${category}`);
//             }
//             else if(age <= 60){
//                 console.log(`${thyName.firstName} is a ${age} years old ${gender} ${category}`);
//             }
//             else if(age <= 99){
//                 console.log(`${thyName.firstName} is a ${age} years old ${gender} ${category}`);
//             }
// }
// reCap(101, 'male');



// for (let i = 0; i < 5; i++){
//         console.log('Hello World');
// }
// for (let i = 5; i <= 5; i++){
//         console.log('ok');
// }
// for(let i = 10; i <= 10; i--){
//         console.log(`${i}`);
// }
// for (let i = 5; i >= 5; i--) {
//     console.log(i);
// }



// function loopHole(){
//         let message = 'bossing';
//                 for(let i = 5; i <= 20; i++){
//                         console.log(`${message}`);
//                 }
// }
// loopHole();



// function loop(){
//         let gwa = ['95','92','90','88','86']
//              for(let i = 0; i < gwa.length; i++){
//                 let score = gwa[i];
//                 let grade;

//                 if(score >= 95){
//                         grade = 'A';
//                 }
//                 else if(score >= 90){
//                         grade = 'B';
//                 }
//                 else if(score >= 85){
//                         grade = 'C';
//                 }
//                 else if(score >= 80){
//                         grade = 'D';
//                 }
//                 else if(score >= 75){
//                         grade = 'F';
//                 }
//                 else{
//                         console.log('Invalid');
//                 }

//                 switch(grade){
//                         case 'A':
//                         console.log(`Student ${i + 1}`);
//                         console.log(`Score: ${score}`);
//                         console.log("Grade A");
//                         console.log("Remark: Passed");
//                         break;
//                         case 'B':
//                         console.log(`Student ${i + 1}`);
//                         console.log(`Score: ${score}`);
//                         console.log("Grade B");
//                         console.log("Remark: Passed");
//                         break;
//                         case 'C':
//                         console.log(`Student ${i + 1}`);
//                         console.log(`Score: ${score}`);
//                         console.log("Grade C");
//                         console.log("Remark: Passed");
//                         break;
//                         case 'D':
//                         console.log(`Student ${i + 1}`);
//                         console.log(`Score: ${score}`);
//                         console.log("Grade D");
//                         console.log("Remark: Passed");
//                         break;
//                         case 'F':
//                         console.log(`Student ${i + 1}`);
//                         console.log(`Score: ${score}`);
//                         console.log("Grade F");
//                         console.log("Remark: Passed");
//                 }
//              } 
// }
// loop();

 

// function beAs(){
//     let arrayThat = ['apple','banana','durian','grapes']
//     let person = ['aj','mark','jhom','mike']
//     for (let i = 0; i < arrayThat.length && i < person.length; i++){   
//         let fruits = arrayThat[i];
//         let names = person[i];
//            switch(fruits){
//                 case 'apple':
//                     console.log(`${names} loves  apple `);
//                     break;
//                 case 'banana':
//                     console.log(`${names} loves  banana `);
//                     break;
//                 case 'durian':
//                     console.log(`${names} loves  durian `);
//                     break;
//                 case 'grapes':
//                     console.log(`${names} loves  grapes`);
//                     break;    
//            }
//     }
// }
// beAs();



//loops
// for(let i = 0; i< 10; i++){
//     console.log(`${i + 1}`);
// }


// for(let i = 1; i < 20; i++){
//     if(i % 2 === 0){
//         console.log(`${i}`);
//     }
// }
// for(let i = 10; i>=1; i--){
//     console.log(`${i}`)
// }
// console.log('Blast Off!')
// for(let i; i < 10; i += 2 ){
//     console.log(i);
// }



//Combinations
// function selected(){
//     let fruits = ['apple','banana','Orange','Mango'];
//         for(let i = 0; i < fruits.length; i++){
//             let fruit = fruits[i];
//             console.log(`${fruit}`)
//         }
// }
// selected();



// function selector(){
//     let numbers = [5, 12, 8, 20, 3];
//         for(let i = 0; i < 20; i++){
//             if(numbers[i] > 10){
//                 console.log(numbers[i]);
//             }
//         }
// }
// selector();



// function add(){
//     let numbers = [10, 20, 30, 40, 50];
//     let total = 0;
//         for(let i = 0; i < numbers.length; i++){
//             total += numbers[i];
// }
// console.log(total);
// }
// add();



// function gettingAvg(){
//     let grades = [90, 85, 88, 95, 80];
//     let total = 0;
//         for(let i = 0; i < grades.length; i++){
//                 total = total + grades[i];
//         }
//         let average = total / grades.length;
//             console.log("Average:" + average);
// }
// gettingAvg();



// const user =[{ username: 'aj'},
//              { username: 'mike'},
//              {  username: 'mia'},
// ];
// user.forEach(user => {
//     console.log(user);
// })



// function tryOn(meBe){
//     if(meBe < 5){
//       while(meBe < 5){
//           meBe++;
//         console.log("miami");
//     }
// }
//   else {
//         console.log("nahhh");
//     }
// }
// tryOn(10);

// let numbers = [10, 25, 7, 90, 25];
// let largest = numbers[i];
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] > largest){
//             console.log(`${numbers[i]}`);
//                 }
//     }




// let numbersMon = [15, 42, 8, 73, 21];
// let largest = 0;
// for(let i = 0; i < numbersMon.length; i++){
//    if(numbersMon[i] > largest){
//         largest = numbersMon[i];

//    }
// }
// console.log(largest);


// let numbers = [2, 5, 8, 11, 14, 17];
// let count = 0;
// for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 === 0){
//             count++;
//         }
// }
// console.log(`There are ${count} even numbers`);



// let colors = ["Red", "Blue", "Green", "Yellow"];
// for(let i = 3; i >= 0; i-- ){
//     console.log(colors[i]);
// }

// const users = [
//     {userName: 'aj', age: 20},
//     {userName: 'mark', age: 20},
//     {userName: 'chloe', age: 20},
// ];
// users.forEach((user) => {
//     console.log(user);
// })




// const someObject = {a: 1, b: 2, c: 3};
// for(const propertyName in someObject){
//         console.group(`${propertyName}: ${someObject[propertyName]}`)
// }



// function mIa(count){
//     while(count < 5){
//         if(count < 5){
//             console.log('Nice g Gang');
//         }
//          count++;
//     }
// }
// mIa(3);



// function labadsaUlo(){
//     let myGrade = 85;
//     for(let i = 0; i < 1; i++){
//         while(myGrade === 85){
//             if(myGrade >=75){
//                 console.log(`you earn a passing grade of ${myGrade}`);
//             }
//             else if(myGrade < 75){
//                 console.log(`you earn a failing grade of ${myGrade}`);
//             }
//             break;
//         }
//     }
// }
// labadsaUlo();


