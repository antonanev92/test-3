const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});
