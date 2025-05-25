// let str = "Hello world";
// // let line = `
// //     test
// //         test    
// // `;
// // console.log(line)
// // document.writeln(line)

// console.log(str, " str[0]", str[0])
// console.log(str, " str.at(-1)", str.at(-1))
// str[0] = "A";
// console.log(str, " str[0]", str[0])
// console.log("   ")

// console.log(str, " str.length", str.length)
// console.log(str, " str.indexOf('w')", str.indexOf("w"))
// console.log(str, " str.indexOf('w')", str.indexOf("W"))
// console.log(str, " str.indexOf('world')", str.indexOf("world"))
// console.log(str, " str.lastIndexOf('w')", str.lastIndexOf("l"))
// console.log(str, " str.includes('l')", str.includes("l"))
// console.log("   ")

// console.log(str, " str.toLowerCase()", str.toLowerCase())
// console.log(str, " str.toUpperCase()", str.toUpperCase())
// console.log(str, " str.charCodeAt(0)", str.charCodeAt(0))
// console.log(str, " str.toUpperCase()", str.toUpperCase())
// console.log("   ")

// console.log(str, " str.slice(0,4)", str.slice(0,4))
// console.log(str, " str.substring(0,4)", str.substring(0,4))
// console.log(str, " str.substr(0,4)", str.substr(0,4))

// let line = new String("  trim  ");
// console.log(line, line.length, line.trim().length, line.trim())
// console.log(line, line.length, line.trimStart().length, line.trimStart())
// console.log(line, line.length, line.trimEnd().length, line.trimEnd())

// console.log(str, " str.replace()", str.replace("world", "JavaScript"))
// console.log(str, " str.replace()", str.replace("l", "2"))
// console.log(str, " str.replaceAll()", str.replaceAll("l", "2"))
// console.log(str, " str.startsWith()", str.startsWith("he"))
// console.log(str, " str.startsWith()", str.startsWith("He"))
// console.log(str, " str.endsWith()", str.endsWith("ld"))
// console.log(str, " str.endsWith()", str.endsWith("Ld"))
// console.log(str, " str.localeCompare()", str.localeCompare(str))
// console.log(str, " str.repeat()", str.repeat(5))

/// Date
// let date = new Date();
// console.log("Date", date);
// console.log("getDate()", date.getDate());
// console.log("getDay()", date.getDay());
// console.log("getFullYear()", date.getFullYear());
// console.log("date.getMonth()", date.getMonth());
// console.log("getHours()", date.getHours());
// console.log("getMinutes()", date.getMinutes());
// console.log("getSeconds()", date.getSeconds());
// console.log("getMilliseconds()", date.getMilliseconds());
// console.log("getTime()", date.getTime());

// // date.setMonth(7);
// console.log("Date", date);

// let hol = new Date(2025, 6, 19)
// console.log(hol)

// let days = (hol - date) / (1000 * 60 * 60 * 24)

// console.log(days)

/// Math
let num = 4.589, num2 = 4.23


document.writeln(`<table>`)
document.writeln(`<tr>
    <td> Mathods</td>
    <td> Number 1 </td>
    <td> Result</td>
    <td> Number 2</td>
    <td> Result</td>
    </tr>`)
document.writeln(`<tr>
    <td> Math.ceil</td>
    <td> ${num} = </td>
    <td> ${Math.ceil(num)}</td>
    <td> ${num2}</td>
    <td> ${Math.ceil(num2)}</td>
    </tr>`)
document.writeln(`<tr>
    <td> Math.floor</td>
    <td> ${num} = </td>
    <td> ${Math.floor(num)}</td>
    <td> ${num2}</td>
    <td> ${Math.floor(num2)}</td>
    </tr>`)

document.writeln(`<tr>
    <td> Math.round</td>
    <td> ${num} = </td>
    <td> ${Math.round(num)}</td>
    <td> ${num2}</td>
    <td> ${Math.round(num2)}</td>
    </tr>`)

document.writeln(`</table>`)

console.log("Math.min(1,5,4,7,8)", Math.min(1,5,4,7,8))
console.log("Math.max(1,5,4,7,8)", Math.max(1,5,4,7,8))
console.log("Math.sqrt(4)", Math.sqrt(4))
console.log("Math.pow(2,8)", Math.pow(2,8))
console.log("   ")

for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * (22 - 11 + 1) + 11))
}

// 11 - 22
// rand() * (max - min + 1) + min
