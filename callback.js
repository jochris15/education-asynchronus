// // contoh build in function yang menggunakan callback
// const number1 = [1, 2, 3, 4, 5]

// const number2 = number1.map((num) => {
//     return num * 2
// })

// console.log(number2);

// contoh file system yang menggunakan callback
const fs = require('fs')
fs.readFile('./data/games.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    else console.log(JSON.parse(data));
})

fs.readFile('./data/events.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    else console.log(JSON.parse(data));
})