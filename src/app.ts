import {Express} from "express";

const express = require('express');
export const expressApp: Express = express();

expressApp.get('/', (req, res) => {
    res.send({
        "Output": "Hello World!"
    });
});

expressApp.post('/', function(req, res) {
    res.send({
        "Output": "Hello World!"
    });
});

