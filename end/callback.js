const fs = require('fs')

fs.readFile('./data/games.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.parse(data));
        // baca data kedua , callback hell (makin kesamping kodingannya)
        fs.readFile('./data/events.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(JSON.parse(data));
            }
        })
    }
})

