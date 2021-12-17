const users = require('./routes/users')
const courses = require('./routes/courses')
const express = require('express');
const mongoose = require('mongoose');

// BD connection
mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true })
    .then(() => console.log('Conected to MongoDB'))
    .catch(err => console.log('Not able to connect', err))


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', users);
app.use('/api/courses', courses);

const port = process.env.PORT_ENV || 3000;
app.listen(port, () => {
    console.log('API Restful OK, ejecutandose en el puerto', + port);
})