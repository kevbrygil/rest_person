import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import connectToDb from './database/con';

const app = new express();

// register JSON middleware
app.use(bodyParser.json());

connectToDb();

require('./routes/personRoutes')(app);
require('./routes/versionRoutes')(app, config);

app.listen(config.port,config.hostname, () => {
    /* eslint-disable */
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
