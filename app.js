const express = require('express');
const mongoose = require('mongoose');

const {positionRouter, applicationRouter} = require('./router')
const {mainErrorHandler} = require("./errors");
const {PORT, MONGO_URL} = require("./configs/configs");

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    console.log('REQUEST get / PROCESSED');
    res.json('Res body get /');
});

app.use('/positions', positionRouter)
app.use('/applications', applicationRouter)

app.use(mainErrorHandler);

app.listen(PORT, () => {
    console.log('App listen 5000 node_task');
    mongoose.connect(MONGO_URL).then(() => {
        console.log('Connected to node_test database')
    })
})