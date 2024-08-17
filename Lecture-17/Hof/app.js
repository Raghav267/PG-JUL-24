function a(add) { // here a is hof
    // console.log(add)
    function subtract() {
        console.log("Subtraction takes place here");
    }

    return subtract;
}

function add() {
    console.log("Addition takes place here")
}
const subt = a(add);

console.log(subt());
