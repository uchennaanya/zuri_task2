const http = require('http');
const fs = require('fs');

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
    if (res) {
        let jsonResponse = ''

        res.on('data', (data) => {
            jsonResponse += data
        });

        res.on('end', () => {
            fs.writeFile('./result/posts.txt', jsonResponse, (err) => {
                if (err) console.log('Oops an error occurred')
            })
        })
    }
})
