require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//apply middleware 
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());


app.get('/status', (_req, res) => {
    return res.status(200).json({ message: 'OK' })
})

//404 error handling
app.use((_req, res, next) => {
    const error = new Error('Not found')
    error.status = 404;
    next(error)
})

//global error handling
app.use((error, _req, res, next) => {
    if (error.status = 404) {
        return res
            .status(404)
            .json({ message: error.message, error: 'Bad Request' })
    }

    return res
        .status(500)
        .json({ message: error.message, error: 'Internal Server Error' })
});

// listen to the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server listening on port', PORT)
})