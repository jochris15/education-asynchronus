const fs = require('fs').promises

// promise
fs.readFile('./data/games.json', 'utf-8')
    .then(result => {
        console.log(JSON.parse(result))
    })
    .catch(error => {
        console.log(error)
    })

// async await
async function getData() {
    try {
        const data = await fs.readFile('./data/games.json', 'utf-8')
        console.log(JSON.parse(data))
    } catch (error) {
        console.log(error)
    }
}

getData()
