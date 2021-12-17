const express = require('express');
//const users = require('./users.json')
const app = express();
const users = require('./routes/users')

app.use(express.json());
app.use('/api/users', users)

app.get('/', (req, res) => {
    res
        .status('200')
        .send('Index from Express....')
});

const PORT = process.env.PORT_ENV || 3000


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

