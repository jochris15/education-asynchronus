const fs = require('fs').promises

// Promise normal
// fs.readFile('./data/games.json', 'utf-8')
//     .then((result) => {
//         console.log(JSON.parse(result));
//         return fs.readFile('./data/events.json', 'utf-8')
//     })
//     .then((result2) => {
//         console.log(JSON.parse(result2), "<<<<<< kedua");
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// Async await
async function readFile() {
    try {
        const data = await fs.readFile('./data/games.json', 'utf-8')
        const data2 = await fs.readFile('./data/events.json', 'utf-8')
        console.log(JSON.parse(data));
        console.log(JSON.parse(data2));
    } catch (error) {
        console.log(error);
    }
}

// Async await arrow function
const readFileArrow = async () => {
    try {
        const data = await fs.readFile('./data/games.json', 'utf-8')
        const data2 = await fs.readFile('./data/events.json', 'utf-8')
        console.log(JSON.parse(data));
        console.log(JSON.parse(data2));
    } catch (error) {
        console.log(error);
    }
}

readFile()
readFileArrow()