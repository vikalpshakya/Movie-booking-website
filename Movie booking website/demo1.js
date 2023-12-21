// const header = document.querySelectorAll("header");
// const body = document.body;
// const x = document.getElementsByClassName(".moon");
// x.addEventListener("click",()=>{
//     header.style.backgroundColor = red;
//     // moon.style.backgroundColor = black;
//     body.style.backgroundColor = white;

// })
const logo = document.querySelector(".navimg");
console.log(logo);
const btn1 = document.querySelector(".DARK");
console.log(btn1);
const btn2 = document.querySelector(".homeButton");
console.log(btn2);
// console.log(btn2.style);
// logo.classList.add("gone");
// console.log(logo.classList);
// logo.class
function MYFUNCTION() {
    let element = document.body;
    // element.classList.toggle("dark-mode");
    // console.log(logo.classList);
    // element.classList.toggle("dark-mode");
    document.body.style.backgroundColor = "black";
    btn1.style.color = "white";
    btn2.style.color = "white";
    // element.style.backgroundColor = black;
}
function MYFUNCTION2(){
    console.log(logo.classList);
    document.body.style.backgroundColor = "white";
    logo.style.filter = "invert(40%)";
    btn1.style.color = "black"
    btn2.style.color = "black"
}