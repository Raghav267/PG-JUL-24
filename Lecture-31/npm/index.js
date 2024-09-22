const giveMeAJoke = require('give-me-a-joke');
const colors = require('colors');

// console.log(colors);

giveMeAJoke.getRandomDadJoke((joke) => {
    console.log(joke.yellow);
})