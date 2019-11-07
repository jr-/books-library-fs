const http = require('http');
const app = require('./api/app');
const config = require('./config/env/config')();

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port);

server.timeout = config.timeout || 3600000;

server.on('listening', () => console.log(`Server running in ${config.env} environment and port ${port}`));
server.on('error', error => console.log(`An error occurred starting server in ${config.env} environment: ${error}`));