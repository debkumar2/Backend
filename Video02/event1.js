const EventEmitter = require("events");
const eventObj = new EventEmitter();
eventObj.on("greet", (buddy) => {
    console.log(`Hello Good Morning ${buddy}`);
})

eventObj.on("check", (num) => {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    }
    else {
        console.log(`${num} is odd`);
    }
})
const arr = [2, 3, 6, 58]
eventObj.on("totalSum", (arr) => {
    let sum = 0;
    arr.forEach((item) => {
        sum += item;
    })
    console.log(`The sum of number is ${sum}`);
})

eventObj.emit("greet", "Debkumar");
eventObj.emit("check", 7);
eventObj.emit("totalSum", arr);
