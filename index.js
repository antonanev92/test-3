const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json());

const PORT = process.env.PORT || 4326
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

const inventory = {
    merlin: 4,
    raptor: 5,
    falcon9: 9
}

app.get('/', (req, res) => {
    res.send('listening sir')
})

app.get('/:name', (req, res, next) => {
    const inventoryList = inventory[req.params.name];
    if(inventoryList) {
        res.send(inventoryList)
    } else {
        res.status(404).send('Not Found')
    }

})