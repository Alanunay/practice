// function walkedDog(){
//     setTimeout(() => {
//         console.log("You walk the dog");
//     }, 2500
//     );
// }
// walkedDog();


// setTimeout(() => {
//     console.log("Task 1");
// }, 15000);
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");


// function func1(callback){
//     setTimeout(() => {
//     console.log("Task 1");
// callback()}, 15000);
// }

// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }
// func1(func2);

// function yeur(){
//     document.getElementById("msg").style.color = "red";
// }

// hello(wait);
// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function goodbye(){
//     console.log("Good bye!");
// }
// function wait(){
//     console.log("wait!");
// }

sum(displayConsole, 20, 7, "+");
function sum(callback, x, y, operator){
    setTimeout(() =>{
             let result = 0;
            switch(operator){
                case "+":
                    result = x + y;
                    break;

                case "-":
                    result = x - y;
                    break;

                case "*":
                    result = x * y;
                    break;

                case "/":
                    result = x / y;
                    break;
            }
        callback(result);
   }, 1000);
}
function displayConsole(result){  
    if (result < 10) {
        console.log(`The result: ${result} is low, need to improve`);
    }
    else if (result > 10) {
        console.log(`The result: ${result} is high, outstanding performance`);
    }
}


