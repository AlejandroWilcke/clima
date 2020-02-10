const express       = require('express');
const app           = express();
const path          = require('path');
const port          = process.env.port || 3000;
const apiRouterV1   = require('./apiv1/apiv1');

app.use( express.static( path.resolve(__dirname, '../front/dist') ) );

app.use('/api/v1', apiRouterV1);

app.get('*', (req, res) => {
    let SinglePageApplication = path.resolve(__dirname, '../front/dist/index.html')
    res.sendFile(SinglePageApplication);
});

app.listen( port, () => console.log(`Listening at ${port}`) );

module.exports = app;