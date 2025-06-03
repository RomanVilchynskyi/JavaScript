// let img1 = document.getElementById("img1")
// let img2 = document.getElementById("img2")


// img1.onclick = function(e)
// {
//     let x = e.offsetX - 100 / 2;
//     let y = e.offsetY - 100 / 2;

//     if(e.offsetX >= 1175 )
//     {
//         x = 1110
//     }
//     else if(e.offsetX <= 50)
//     {
//         x = 20
//     }
//     else if(e.offsetY <= 50)
//     {
//         y = 20
//     }
//     else if(e.offsetY >= 625)
//     {
//         y = 575
//     }


//     img2.style.position = "absolute";
//     img2.style.left = `${x}px`;
//     img2.style.top = `${y}px`;


// }

let btn = document.getElementById("btn")
let circle1 = document.getElementById("1")
let circle2 = document.getElementById("2")
let circle3 = document.getElementById("3")

let id = 0;
btn.onclick = function () {
    circle1.style.backgroundColor = "rgb(157, 157, 157)";
    circle2.style.backgroundColor = "rgb(157, 157, 157)";
    circle3.style.backgroundColor = "rgb(157, 157, 157)";
    if (id == 0) {
        id++;
        circle1.style.backgroundColor = "red"
    }
    else if (id == 1) {
        id++;
        circle2.style.backgroundColor = "yellow"
    }
    else if (id == 2) {
        id = 0;
        circle3.style.backgroundColor = "green"
    }
}