const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click", () => {
    console.log("Grand Parent Invoked.")
}, true)

parent.addEventListener("click", () => {
    console.log("Parent Invoked");
}, true)

child.addEventListener("click", () => {
    console.log("Child gets invoked")
})