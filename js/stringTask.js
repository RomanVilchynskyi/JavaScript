let counter = 0;

function Task1(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") { 
            counter += 1;
        }
    }
    return counter;
}

console.log(Task1("adsvs asvasdv avvdsv"));  

function Task2(str)
{
    return str[0].toUpperCase();
}
console.log(Task2("adscs"))


function Task3(str)
{
    let words = str.split(" ");
    let counter = 0;

    for (let i = 0; i < words.length; i++) {
        if(words[i] !== "")
        {
            counter++;
        }
    }
    return counter;
}
console.log(Task3("Hello welcome hello"))

function Task4(str)
{
    let as;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        as = i[0].toUpperCase();
        
    }   
    return as;
}

console;