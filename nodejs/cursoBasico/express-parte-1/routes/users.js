const express = require('express');
const route = express.Router();
const fs = require('fs');
const { parse } = require('path');

const users = [
    {
        "id": 1,
        "nombre": "Andrey"
    },
    {
        "id": 2,
        "nombre": "Nunu"
    }
]

route.get('/api/users', (req, res) => {
    res
        .status(200)
        .send(users);
})

route.get('/api/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('User not found');
    res.send(user);
})


route.post('/api/users', (req, res) => {
    if (!req.body.nombre || req.body.nombre.length <= 2) {
        res.status(400).send('Must add a name with at least 3 letters')
        return;
    }


    //     let data = fs.readFileSync('./users.json');
    const user = {
        id: users.length + 1,
        nombre: req.body.nombre,
    }
    /*     let obj = JSON.parse(data);
         obj.push(user);
         jsonStr = JSON.stringify(obj, null, 2);
         console.log(jsonStr);
         fs.writeFileSync('users.json', jsonStr, (error) => {
             if(error) {
                 throw error
             }
         })
     */

    users.push(user)
    res.send(user)
});

route.put('/api/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(400).send('There is no user with that id')

    user.nombre = req.body.nombre
    res.send(user)
});


route.delete('/api/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('User not found');

    const index = users.indexOf(user);
    console.log('Object deleted:');
    console.log(users.splice(index, 1))
    res.send(users)
});

module.exports = {
    route
}