// const title = document.getElementById("title");

// title.innerHTML = " turtle";
// title.autofocus = true;
// console.log(title);
// console.dir(title);

// const h1 = document.getElementsByTagName("h1");
// const kuku = document.querySelector(".kuku h3")
// const kukuku = document.querySelectorAll(".kuku h3")
// const title2 = document.querySelector("#title");
// console.log(kuku, kukuku, title2);

// title.style.color = "blue";

// const title = document.querySelector("#title");
// function handleMouseEnter() {
//     document.querySelector("#title").innerHTML = "MOUSE IN@@";
// }
// function handleMouseLeave() {
//     document.querySelector("#title").innerHTML = "MOUSE OUT@@";
// }


// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;


// function handleWindwoResize() {
//     document.body.style.background = "gray";
// }
// window.addEventListener("resize", handleWindwoResize);

// function handleTitle() {
//     document.title = "tomato";
// }
// window.addEventListener("resize", handleTitle);

// function handlewindowCopy() {
//     alert("DONT COPY");
// }
// window.addEventListener("copy", handlewindowCopy);

// function windowWifiOnline() {
//     document.querySelector("#div1").innerHTML = "Online!";
// }

// function windowWifiOffline() {
//     document.querySelector("#div1").innerHTML = "Offline help me!";
// }
// window.addEventListener("online", windowWifiOnline);
// window.addEventListener("offline", windowWifiOffline);

// function handleTitleClick() {
//     // console.log(document.querySelector("#div1"))
//     // div1 = document.querySelector("#div1");
//     // div1.innerHTML = "Clicked";
//     const title = document.querySelector("#title").style.color;
//     let newColor;

//     // if(title === "blue") {
//     //     document.querySelector("#title").style.color = "tomato";
//     // } else {
//     //     document.querySelector("#title").style.color = "blue";
//     // }

//     if(title === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     document.querySelector("#title").style.color = newColor;
// }

// title.addEventListener("click", handleTitleClick);

// const title = document.querySelector("#title");

// function handleTitleClickbyCSS() {
//     const click = "active";
//     if (title.className === click) {
//         title.className = "";
//     } else {
//         title.className = click;
//     }
// }
// title.addEventListener("click", handleTitleClickbyCSS);

// function handleTitleClickbyCSS() {
//     const click = "active";
//     if (title.classList.contains(click)) {
//         // class중에서 click이 있는지 없는지 체크한다.
//         title.classList.remove(click);
//     } else {
//         title.classList.add(click);
//     }
// }
const title = document.querySelector("#title");

function handleTitleClickbyCSS() {
    title.classList.toggle("active");
}
title.addEventListener("click", handleTitleClickbyCSS);