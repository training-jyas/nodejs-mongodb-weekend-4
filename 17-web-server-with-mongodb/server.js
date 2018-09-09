const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./mongodb-connect');

const getTime = () => {
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();
    const date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    return `${time}, ${date}`
};

// loggin middleware
app.use((req, res, next) => {
    console.log(`Called at: ${getTime()}, ${req.method}, ${req.url}`);

    fs.appendFile('server.log', `Called at: ${getTime()}, ${req.method}, ${req.url} \n`, () => {

    });
    next();
});

// this is the step where we parse the body as json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello');
});

// Create a get end point
app.get('/products', (req, res) => {
    res.send({
        result: {
            message: 'get req is fulfilled'
        }
    });
});

// post request to add a product
app.post('/product', (req, res) => {
    console.log('data', req.body);
    const data = req.body;
    if (data && data['product']){
        res.send({
            result: {
                message: 'post req is fulfilled'
            }
        });
    } else {
        res.status(403).send({
            error: 'product data is not received'
        });
    }
});

// update a product
app.put('/product', (req, res) => {
    console.log('data', req.body);
    const data = req.body;
    if (data && data['product']){
        res.send({
            result: {
                message: 'update req is fulfilled'
            }
        });
    } else {
        res.status(403).send({
            error: 'product data is not received'
        });
    }
});

// delete a product
app.delete('/product', (req, res) => {
    console.log('data', req.body);
    const data = req.body;
    if (data && data['product_id'] && typeof data['product_id'] === 'string'){
        res.send({
            result: {
                message: 'delete req is fulfilled'
            }
        });
    } else {
        res.status(403).send({
            error: 'product id is not received'
        });
    }
});

app.listen('3000', () => {
    console.log('server is running on 3000!');
});