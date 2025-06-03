// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.getElementById("generateBtn");
//   const output = document.getElementById("randomNumber");

//   button.addEventListener("click", function () {
//     const random = Math.floor(Math.random() * 101);
//     output.textContent = random;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggleBtn");
  const text = document.getElementById("text");

  button.addEventListener("click", function () {
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
});
