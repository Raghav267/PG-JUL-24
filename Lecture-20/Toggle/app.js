const img = document.querySelector("img");
const h1 = document.querySelector("h1");

function imageToogle() {
    let isTrue = true;
    setInterval(() => {
        if (isTrue) {
            img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")
        }
        else {
            img.setAttribute("src", "https://images.unsplash.com/photo-1723920515274-ace3503adad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8")
        }

        isTrue = !isTrue


    }, 1000)
}

imageToogle();

h1.style.border = "3px solid purple"

h1.style.padding = "4px"

//Hint
// 1. rgb(0-255, 0-255, 0-255);

//
//

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`

}

function getrandoomRGB() {
    setInterval(() => {
        h1.style.backgroundColor = randomRGB();
    }, 1000)
}

getrandoomRGB();
