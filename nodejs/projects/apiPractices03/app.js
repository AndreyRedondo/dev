const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const users = [
    {
        id: 1,
        name: 'andrey',
    },
    {
        id: 2,
        name: 'kris'
    }
]


app.get('/', (req, res) => {
    res.send('Index')
})

app.get('/users', (req, res) => {
    res.send(users)
})


app.get('/users/:name', (req, res) => {
    const user = users.find(u => u.name === req.params.name);
    if (!user) res.status(404).send('Not found')
    res.send(user)
})

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
    }
    users.push(user)
    res.send(users)
})

app.put('/users/:id', (req, res) => {
    const user = users.find( u => u.id === parseInt(req.params.id))
    console.log(user);
    if (!user) res.status(404).send('Not found')
    user.name = req.body.name
    res.send(user)
})





const port = process.env.PORT_ENV || 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})