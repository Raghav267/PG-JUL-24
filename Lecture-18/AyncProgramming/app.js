function delay() {
    const x = new Date().getTime();
    while (new Date().getTime() <= x + 5000) {

    }
    hello();
}

function hello() {
    console.log("Hello Harsh!!! How are you");
}

console.log("Start");

delay();
console.log("End")

