

const fs = require('fs')

function customReadFile() {
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


// async function asyncAwait() {
//     try {
//         const data = await customReadFile()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

const asyncAwait = async () => {
    try {
        const data = await customReadFile()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

asyncAwait()
// // resolve & reject adalah sebuah callback

// // menggunakan function readFile diatas yang sudah dibuat menjadi promise
// readFile()
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })