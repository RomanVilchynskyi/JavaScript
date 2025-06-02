const arr1 = [1, 2, 33, 40, -2, 12];

for (let i = 0; i < 15; i++) {
    arr1.push(Math.floor(Math.random() * 100));
}

console.log(arr1);

const arr2 = [5, 78, 13, 22];

for (let i = 0; i < arr2.length; i++) {
  console.log(`[${i + 1}] - ${arr2[i]}`);
}

let array = [14, 3, 7, 22, 5, 7, 9, 11];

console.log("array: " + array);

// let flag = false;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 7 === 0) {
//     flag = true;
//     break; 
//   }
// }
// console.log("Є кратне 7:", flag);

let res = array.filter(i => i % 7 === 0)
console.log("Task 7", res);

array.sort((a, b) => b - a);
console.log("Сортування по спаданню:", array);

let half = Math.floor(array.length / 2);
// for (let i = half; i < array.length; i++) {
//   array[i] = 0;
// }
// console.log("2 половина заповнена нулями:", array);

array.fill(0, half);
console.log(array)

array.splice(0, 3);
console.log("Після видалення перших 3 елементів:", array);

const slicedarr = array.slice(1, array.length - 1);
console.log("Новий масив без крайніх:", slicedarr);
