const { response } = require('express');
// const { readFile } = require('fs');
const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

// app.get('/', (request, response) => {
//     readFile('../frontend/home.html', 'utf8',(err, html) => {

//         if(err) {
//             response.status(500).send('Something went wrong');
//         }

//         response.send(html);
//     })
// });

app.get('/', async (request, response) => {
    response.send(await readFile('../frontend/home.html', 'utf8'));
});

app.listen(process.env.PORT || 4000, () => console.log('App starting on http://localhost:4000'));