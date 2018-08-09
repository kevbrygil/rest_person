'use strict';

const express = require('express');
const app = new express();
var bodyParser = require('body-parser');
const config = require('./config/config');
import connectToDb from './database/con';

// register JSON middlewear
app.use(bodyParser.json());

connectToDb();

require('./routes/personRoutes')(app);
require('./routes/versionRoutes')(app, config);

app.listen(3000, () => {
    /* eslint-disable */
    console.log('server up!');
});
