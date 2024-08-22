const p = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
    if (randomNum % 2 === 0) {
        resolve();
    }
    else {
        reject();
    }
});


// consuming the promise
p.then(() => {
    console.log("No. is even");;

})
    .catch(() => {
        console.log("No. is odd");

    })
