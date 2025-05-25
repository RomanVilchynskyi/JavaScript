//task1
// function task1(a,b)
// {
//     if(a > b)
//         return b;
//     else if(a < b)
//         return a;
//     else
//         return a;
// } 

// console.log(task1(8, 5));

//task2
// function power(a, b) {
//     return a ** b;
// }
// console.log(power(2,2));

//task3
// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return b !== 0 ? a / b : 'Error';
//         default:
//             return 'Unknown operator';
//     }
// }

// console.log(calculate(4, 2, '+'));
// console.log(calculate(4, 2, '-')); 
// console.log(calculate(4, 2, '*'));
// console.log(calculate(4, 2, '/')); 
// console.log(calculate(4, 0, '/')); 
// console.log(calculate(4, 2, '^'));

//task4
// function isPrime(number) {
//     if (number <= 1) return false;

//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(isPrime(7));  
// console.log(isPrime(10));
// console.log(isPrime(1));

// task5
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + ' × ' + i + ' = ' + (number * i));
    }
    console.log('---------------------');
}
for (let num = 2; num <= 9; num++) {
    printMultiplicationTable(num);
}
