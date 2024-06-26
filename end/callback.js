const fs = require('fs')

fs.readFile('./data/games.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    else console.log(JSON.parse(data));
})