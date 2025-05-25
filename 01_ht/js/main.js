// task 1
// let age = prompt("Enter your age")
// if(age >= 0 && age < 12)
//     alert("Child") 
// else if(age >= 12 && age < 18)
//     alert("Teenager")
// else if(age >= 18 && age < 60)
//     alert("adult")
// else
//     alert("pensioner")

// task 2
// let num = prompt("Enter number from 0 to 9")
// switch (num) {
//     case "0":
//         console.log(")")
//         break
//     case "1":
//         console.log("!")
//         break
//     case "2":
//         console.log("@")
//         break
//     case "3":
//         console.log("#")
//         break
//     case "4":
//         console.log("$")
//         break
//     case "5":
//         console.log("%")
//         break
//     case "6":
//         console.log("^")
//         break
//     case "7":
//         console.log("&")
//         break
//     case "8":
//         console.log("*")
//         break
//     case "9":
//         console.log("(")
//         break
//     default:
//         console.error("Error")
// }

// task 3
// let num = prompt("Enter a three digit number:");

// if (num.length === 3) {
//     let a = num[0];
//     let b = num[1];
//     let c = num[2];

//     if (a === b || a === c || b === c) {
//         console.log("number has same digits");
//     } else {
//         console.log("All digits are not same");
//     }
// } else {
//     console.error("Error");
// }

//task 4
// let year = +prompt("Enter year");
// let res = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// console.log(res ? "366 days" : "365 days");

// task 5
// let number = prompt("Enter a 5 digit number:");

// if (number.length === 5) {
//     if (number[0] === number[4] && number[1] === number[3]) {
//         console.log("Palindrom");
//     } else {
//         console.log("Not a palindrom");
//     }
// } else {
//     console.error("Error")
// }

//task 6
// let usd = +prompt("Enter amount")
// let currency = prompt("Enter what you want to convert EUR, UAN, AZN: ")
// if(currency === "UAH"){
//     res = usd * 39.5
//     alert(res)}
// else if(currency === "EUR"){
//     res = usd * 0.92
//     alert(res)
// }
// else if (currency === "AZN") {
//     res = usd * 1.7;
//     alert(res);
// } else {
//     alert("Unknown currency");
// }

// task 7
// let amount = +prompt("Enter purchase amount:");
// let discount = 0;

// if (amount >= 200 && amount < 300) {
//     discount = 0.03;
// } else if (amount >= 300 && amount < 500) {
//     discount = 0.05;
// } else if (amount >= 500) {
//     discount = 0.07;
// }

// let total = amount - amount * discount;
// alert("Due amount: " + total);

// task 8
// let circleLength = +prompt("Enter lenth of circle:");
// let squarePerimeter = +prompt("Enter perimeter of square:");

// const PI = 3.14;
// let diameter = circleLength / PI;
// let squareSide = squarePerimeter / 4;

// if (diameter <= squareSide) {
//     alert("Circle will fit into the square");
// } else {
//     alert("Circle will not fit into the square");
// }

// task 9
// let score = 0;

// let q1 = prompt("1. What is the capita; of France?\n1) Berlin\n2) Madrid\n3) Paris");
// if (q1 === "3") score += 2;

// let q2 = prompt("2. How much will be 2 + 2?\n1) 3\n2) 4\n3) 5");
// if (q2 === "2") score += 2;

// let q3 = prompt("3. What planet is the biggest?\n1) Mars\n2) Earth\n3) Jupiter");
// if (q3 === "3") score += 2;

// alert("Your score: " + score + " points");

// task 10
let day = +prompt("Enter days:");
let month = +prompt("Enter month:");
let year = +prompt("Enter year:");

let daysInMonth;

switch (month) {
    case 2:
        let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        daysInMonth = isLeap ? 29 : 28;
        break;
    case 4: case 6: case 9: case 11:
        daysInMonth = 30;
        break;
    default:
        daysInMonth = 31;
}

day++;

if (day > daysInMonth) {
    day = 1;
    month++;
    if (month > 12) {
        month = 1;
        year++;
    }
}

alert(`Date: ${day}.${month}.${year}`);
