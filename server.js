const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const detailRoute = require('./router/detail')
const provinsiRoute = require('./router/provinsi')
const pulauRoute = require('./router/pulau')
const jobsheetRoute = require('./router/jobsheet')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require('./models');
const { quizzes } = require('./models');
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Selamat Mengerjakan Quiz!');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use('/api/detail', detailRoute)
app.use('/api/provinsi', provinsiRoute)
app.use('/api/pulau', pulauRoute)

app.listen(port, () => console.log('App listening on port http://localhost:${port}!'));