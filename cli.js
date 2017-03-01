#!/usr/bin/env node
'use strict';

const WebSocket = require('ws');
const fs = require('fs');
const meow = require('meow');
const webpack = require("webpack");
const path = require('path');

const cli = meow(`
    Usage
      $ tick <input file>
 
    Examples
      $ tick ./script.js
`);

const httpServer = require('http-server');
const server = httpServer.createServer();
server.listen(9001);

const wss = new WebSocket.Server({
  server: server.server
});

const compiler = webpack({
  entry: path.join(__dirname, '../../', cli.input[0]),
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader?presets[]=latest'
    }]
  }
});

compiler.watch({
  aggregateTimeout: 300,
  poll: true

}, (err, stats) => {
  if (err) return;

  var jsonStats = stats.toJson();
  if (jsonStats.errors.length > 0) {
    return console.error(jsonStats.errors);
  }
  if (jsonStats.warnings.length > 0) {
    console.warn(jsonStats.warnings);
  }

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('ping');
    }
  })
});

console.log('Run in DevTools console:');
console.log(fs.readFileSync(path.join(__dirname, 'client-dist.js')).toString());
