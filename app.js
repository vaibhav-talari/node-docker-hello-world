const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'database',
    port: 6379
});


client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is: ' + visits + 1)
        client.set('visits', parseInt(visits) + 1)
    })
});

//specifying the listening port
app.listen(8089, ()=>{
    console.log('Listening on port 8081')
});