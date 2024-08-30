const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const inp = document.querySelector("input");
const frm = document.querySelector("form");

// function shout() {
//     console.log("Shoutttt");
// }

// function scream() {
//     console.log("Screaammmm.")
// }

// btn.onclick = shout;
// btn.onclick = scream;


// gud way
// btn.onclick = () => {
//     shout();
//     scream();
// }

// shouttttt
// screammmmm

//Event Listerns

// btn.addEventListener("click", scream);
// console.log("Here")
// btn.addEventListener("click", shout);

////////Mouse events========================

h1.addEventListener("mouseenter", function () {
    this.classList.add("heading");
})

h1.addEventListener("mouseleave", function () {
    if (this.classList.contains("heading")) {
        this.classList.remove("heading")
    }
})


// ===========key board events
inp.addEventListener("keyup", (event) => {
    console.log(event.key)
})


// ==========form events=======//

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.srcElement[0].value);
})


