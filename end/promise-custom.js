const fs = require('fs')

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/games.json', 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data));
            }
        })
    })
}

// promise 
readFile()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })

// Async await
async function getData() {
    try {
        const data = await readFile()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData()