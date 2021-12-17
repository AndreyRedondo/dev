const express = require('express');
const users = require('./users.json')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Index')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:name', (req, res) => {
    let user = users.find( u => u.name === req.params.name);
    if(!user) res.status(404).send('404 Not found');
    res.send(user)
})

app.post('/users/', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    if(!user.name){
        console.log('Vacio');
    }
    console.log(users)
    users.push(user);
    res.send(users);
})















const port = process.env.PORT_ENV || 3000;

app.listen(port, () => {
    console.log(`SERVER running on port ${port}`)
});

