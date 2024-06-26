const fs = require('fs')

// promise dibuat
function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/games.json', 'UTF-8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(JSON.parse(data))
            }
        })
    })
}

// // Promise
readFile()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
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