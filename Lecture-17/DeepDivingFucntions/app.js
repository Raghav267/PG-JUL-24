function b() {
    var c = 100;
    console.log(c)
    console.log(a);
}
b();
let a = 101;
// 100 101
// 100 undefined
// 101 100
// udefined 100

// Global Execution context is created
// 1 . Memory creation Phase
// 2. Code Execution phase

// Memory creation Phase
// all the variale are givem some memory // a=101  c = 100
// all the function exectuion // js engine just copy passte the whole fucntion defintion here 
