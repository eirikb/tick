#!/usr/bin/env node

var httpServer = require('http-server');
var consoleServer = httpServer.createServer({
  root: './node_modules/tick/'
});
consoleServer.listen(9003);

var server = httpServer.createServer();
server.listen(9001);

var chokidarEvEmitter = require('chokidar-socket-emitter');
chokidarEvEmitter({port: 9002}, function () {
  console.log('Ready, run in console:')
  console.log("s=document.createElement('script');s.src='http://localhost:9003/tick.js';document.body.appendChild(s)")
});
