const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

const users = [{
    name: "Andrey Redondo",
    age: 37,
    ced: 701
},
{
    name: "Kristel Vargas",
    age: 31,
    ced: 101
},
]

app.get('/', (req, res) => {
    res.send('Index page')
})

app.get('/users', (req, res) => {
    res.status(400).send(users)
})

app.get('/users/:ced', (req, res) => {
    let user = users.find( u => u.ced === parseInt(req.params.ced))
   if(!user) res.status(404).send('Not Found')
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


const port = process.env.PORT_ENV || 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})