// task 1
// function task1(a,b)
// {
//     if(a < b)
//         return -1
//     else if(a > b)
//         return 1
//     else
//     return 0
// }

// console.log(task1(3,2))

// task 2
// let factorial = (n) =>
// {
//     if(n == 1 || n == 0) return 1  
//     return n * factorial(n - 1)
// }
// console.log(factorial(5));

// task 3
// function task3(a,b,c)
// {
//     return a * 100 + b * 10 + c
// }

// let res = task3(1,4,9)
// console.log(res)

//task 4
// function getArea(length, width) {
//     if (width === undefined) {
//         return length * length; 
//     } else {
//         return length * width; 
//     }
// }

// console.log(getArea(5, 10)); 
// console.log(getArea(4));    

//task 5
// function isPerfectNumber(num) {
//     let sum = 0;

//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === num;
// }
// let number = +prompt("Enter number:");
// if (isPerfectNumber(number)) {
//     console.log(number + " — perfect");
// } else {
//     console.log(number + " — not perfect");
//

// task 6
// function range(min,max)
// {
//     for(let i = min; i <= max; i++)
//     {
//         if(isPerfectNumber(i))
//             console.log(i)
//     }
// }

// let min = +prompt("Enter min:");
// let max = +prompt("Enter max:");

// range(min, max);

// task 7
// function formatTime(hours, minutes, seconds) {
//     if (minutes === undefined) {
//         minutes = 0;
//     }
//     if (seconds === undefined) {
//         seconds = 0;
//     }

//     if (hours < 10) {
//         hours = "0" + hours;
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }

//     return hours + ":" + minutes + ":" + seconds;
// }
// console.log(formatTime(9, 5, 3));   
// console.log(formatTime(13));       
// console.log(formatTime(7, 45));    

// task 8
// function convertInSeconds(hours, minutes, seconds)
// {
//     return hours * 3600 + minutes * 60 + seconds;
// }
// let totalSec = convertInSeconds(1, 2, 30); 
// console.log(totalSec);

//task 9
// function secondsToTime(totalSeconds) {
//     let hours = (totalSeconds - (totalSeconds % 3600)) / 3600;

//     let remain = totalSeconds % 3600;

//     let minutes = (remain - (remain % 60)) / 60;

//     let seconds = remain % 60;

//     if (hours < 10) hours = "0" + hours;
//     if (minutes < 10) minutes = "0" + minutes;
//     if (seconds < 10) seconds = "0" + seconds;

//     return hours + ":" + minutes + ":" + seconds;
// }

// console.log(secondsToTime(3750)); 

// task 10
// function differenceBetweenTimes(h1, m1, s1, h2, m2, s2) {
//     let totalSeconds1 = convertInSeconds(h1, m1, s1);
//     let totalSeconds2 = convertInSeconds(h2, m2, s2);

//     let diff = totalSeconds1 - totalSeconds2;
//     if (diff < 0) diff = -diff;

//     return secondsToTime(diff);
// }

// console.log(differenceBetweenTimes(2, 30, 15, 1, 45, 50));