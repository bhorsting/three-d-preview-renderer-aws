const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);
//server.listen(3001);
exports.handler = (event: any, context: any) => awsServerlessExpress.proxy(server, event, context);