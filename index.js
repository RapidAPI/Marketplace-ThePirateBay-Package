"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser');

/** SET UP **/
//If ran in production - use enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;
//The package name
const PACKAGE_NAME = "ThePirateBay";

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/
//A metadata endpoint at GET /api/PACKAGE_NAME should return package metadata
// app.get(`/api/${PACKAGE_NAME}`, require('./metadata.js').do);

//For each block, a POST /api/PACKAGE_NAME/BLOCK_NAME should execute the block
app.post(`/api/${PACKAGE_NAME}/search`, require('./blocks/search.js').search);
app.post(`/api/${PACKAGE_NAME}/getTorrent`, require('./blocks/getTorrent.js').getTorrent);
app.post(`/api/${PACKAGE_NAME}/getTopTorrents`, require('./blocks/getTopTorrents.js').getTopTorrents);
app.post(`/api/${PACKAGE_NAME}/getRecentTorrents`, require('./blocks/getRecentTorrents.js').getRecentTorrents);
app.post(`/api/${PACKAGE_NAME}/getCategories`, require('./blocks/getCategories.js').getCategories);
app.post(`/api/${PACKAGE_NAME}/getUserTorrents`, require('./blocks/getUserTorrents.js').getUserTorrents);


/** START LISTENING **/
app.listen(PORT);
console.log('UP');
