//let name;
//name = 'aj'; 
//let lastName;
//lastName = 'alanunay';
//console.log(name, lastName); // aj alanunay



// function change() {
//         document.getElementById("demo").innerHTML = "Hello World";
//         document.getElementById("demo").style.color = "red";
//         document.getElementById("demo").style.fontSize = "30px";
//         document.getElementById("demo").style.fontFamily = "Arial";
//         document.getElementById("demo").style.fontWeight = "bold";
//       }



// let person = {
//     name: 'aj',
//     lastName: 'alanunay',
//     age: 20,    
// };
// person.name = 'raven';
// person['name'] = 'aj';
// console.log(person.name)



// let selectedColor = ['blue','red'];
// selectedColor[2] = 'green';
// selectedColor[3] = 'yellow ';
// console.log(selectedColor.length);



// function greet(name, lastName){
//       console.log('Hello, i am' + ' ' + name + ' ' + lastName);
// }
// greet('Alice', 'Smith')



// function change(){
//       // document.getElementById('demo').innerHTML = Date();
//       let person = {
//             name: 'aj',
//             lastName: 'alanunay',
//       };
//       console.log(person);
// }
// change();


// function square(number){
//       return number * number;
// }
// console.log(square(2));



// let colorPallet = ['red', 'blue', 'green'];
// function changeColor(){
//       colorPallet[0] = 'orange';
//       console.log(colorPallet[0]);
// }
// changeColor();



// const person = {
//         name: 'aj',
//         address: 'mexico'
//     };  
// function changeAddress(name, address){
//     console.log('Hello, i am' + ' ' + person.name + ' ' + 'from' + ' ' + person.address);
// }
// changeAddress();
// person.name = 'aj';
// person.address = 'syria';
// changeAddress();



// function mdas(number1, number2){
//     let result =  number1 * number2;   
//      if(number1 * number2 >= 50){
//         console.log('nice one');
//      }
//      else{
//         console.log('better luck next time');
//      }
//      return result;s
// }
// mdas(10, 5);



// function counter(number){
//         let killCount = 9;
//          if(killCount === number){
//             console.log('ok');
//          }
//          else{
//             console.log('not ok');
//          }
// }
// counter(10);


// ACTIVITY


// let name = 'aj';
// let age = '20';
// let favoriteFood = 'pizza';
// console.log('Hi! my name is' + ' ' + name);
// console.log('I am' + ' ' + age + ' ' + 'years old');
// console.log('My favorite food is' + ' ' + favoriteFood);



// function greet(){
//     console.log('Hello, welcome to Javascript!');
// }
// greet();



// function multiply(number1, number2){
//     return number1 * number2;
// }
// console.log(multiply(8, 5));



// function checkScore(score){
//     if(score >= 75){
//         console.log('You Passed!');
//     }
//     else{
//         console.log('You Failed');
//     }
// }
// checkScore(90);




// function checknumber(number){
//     if(number % 2 === 0){
//         console.log('Even');
//     }
//     else{
//         console.log('Odd');
//     }e
// }
// checknumber(20);

 

//EXTRA
// function checker(){    
//     let aNum = 10;
//     if(aNum % 2 === 0){
//         console.log('Ok');
//     }
//     else{
//         console.log('Not Ok');
//     }
// }
// checker();


// function beMy(role){
//         switch(true){
//             case role == 'Administrator':
//                 console.log(`Welcome Back ${role}`);
//                 break;
//             case role == 'Manager':
//                 console.log(`Welcome Back ${role}`);
//                 break;
//             case role =='Employee':
//                 console.log(` Welcome Back ${role}`);
//                 break;
//             default:
//         }
//         if(role == 'Administrator' || role == 'Manager' || role == 'Employee'){
//             console.log('Good morning'); 
//         }
// }
// beMy('Administrator');

// function reCapping(choice){
//     let position = ['Administrator', 'Manager', 'Supervisor', 'Employee'];
//         switch(true){
//             case choice === 1:
//                 console.log(`Welcome and Good Morning ${position[0]}`);
//                 break;
//             case choice === 2:
//                 console.log(`Welcome and Good Morning ${position[1]}`);
//                 break;
//              case choice === 3:
//                 console.log(`Welcome and Good Morning ${position[2]}`);
//                 break;
//              case choice === 4:
//                 console.log(`Welcome and Good Morning ${position[3]}`);
//                 break;
//         }
// }
// reCapping(1);




// const users = [
//     {userName: 'aj', age: 20},
//     {userName: 'mark', age: 20},
//     {userName: 'chloe', age: 20},
// ];
// for (const element of users){
//         console.log(`${element.userName} is ${element.age} `);
// }

// function meBe(choice){
//       const users = [
//     {drinks: 'juice', price:18},
//     {drinks: 'coke', price: 22},
//     {drinks: 'pepsi', price: 25},
//     ];
//     for(let i = 0; i < users.length; i++){
//         switch(true){
//             case choice === 1:
//                 console.log(`drinks: ${users[0].drinks} \n Price:${users[0].price}`);
//                 break;
//             case choice === 2:
//                 console.log(`drinks: ${users[1].drinks} \n Price:${users[1].price
//                 }`);
//                 break;
//             case choice === 3:
//                 console.log(`drinks: ${users[2].drinks} \n Price:${users[2].price}`);
//                 break;
//             default:
//                 console.log('Invalid choice');
//         }
//         break;
//     }
// }
// meBe(1);

