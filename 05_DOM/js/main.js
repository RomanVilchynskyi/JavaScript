// console.log(document.body);

let p_id = document.getElementById("text")
console.log(p_id)
p_id.style.backgroundColor = "yellow";
p_id.style.padding = "10px";

// let list_class = document.getElementsByClassName("style_text")
// console.log(list_class)

// list_class[0].style.border = "double 5px blue"
// for (let i = 0; i < list_class.length; i++) {
//     list_class[i].style.border = "double 5px blue"
// }

let p_el = document.getElementsByTagName("p")
console.log(p_el)

let last_li = document.querySelector("ul li:last-child")
last_li.style.color = "purple" 
console.log(last_li)

let odd_li = document.querySelectorAll("ul li:nth-child(odd)")
console.log(odd_li)

odd_li.forEach((el)=>{el.style.color = "white"; el.style.backgroundColor = "black"; el.style.padding= "10px";})

// setTimeout(()=>{
//     // p_id.className += "test_class"
//     p_id.classList.add("text_class")
//     setTimeout(()=>{
//         p_id.classList.remove()
//     }, 3000)
// }, 3000)

// p_id.onclick = () =>
// {
//     p_id.classList.add("test_class")
// }

// let flag = true;
// p_id.onclick = function()
// {
//     if(flag)
//     {
//         this.classList.add("test_class")
//         flag= false
//     }
//     else{
//         this.classList.add("test_class")
//         flag = true
//     }
// }


// p_id.onclick = function()
// {
//     if(!this.classList.contains("test_class"))
//     {
//         this.classList.add("test_class")
//     }
//     else{
//         this.classList.add("test_class")
//     }
// }

// p_id.onclick = function()
// {
//     this.classList. toggle("test_class")
// }

let btn = document.querySelector(".wrapper").lastElementChild;
btn.addEventListener("click", function(e){
    document.querySelector(".window").classList.add("show")
    console.log(e)
})

document.querySelector(".window").lastElementChild.addEventListener("click",
()=>{
    document.querySelector(".window").classList.remove("show")
})

document.querySelector(".window").addEventListener("mousemove", function(e)
{
    // console.log(e)
    this.style.color = "white";
    this.innerHTML = `
        ${e.clientX}x, ${e.clientY}y <br>
        ${e.x}x, ${e.y}y <br>
        ${e.offsetX}x, ${e.offsetY}y <br>
    `;
})




