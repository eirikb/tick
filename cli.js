#!/usr/bin/env node
'use strict';

const WebSocket = require('ws');
const meow = require('meow');
const webpack = require("webpack");
const path = require('path');
const httpServer = require('http');
const MemoryFS = require('memory-fs');
const fs = new MemoryFS();

const cli = meow(`
    Usage
      $ tick <input file>
 
    Examples
      $ tick ./script.js
`);

if (!cli.input[0]) cli.showHelp();

const server = httpServer.createServer();
server.listen(9001);

const wss = new WebSocket.Server({
  server
});

const compiler = webpack({
  entry: [path.join(__dirname, 'hack.js'), path.join(process.cwd(), cli.input[0])],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader?presets[]=env'
    }]
  }
});

compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonStats = stats.toJson();
  if (jsonStats.errors.length > 0) {
    return console.error(jsonStats.errors);
  }
  if (jsonStats.warnings.length > 0) {
    console.warn(jsonStats.warnings);
  }

  const res = stats.compilation.assets['main.js'];
  const script = fs.readFileSync(res.existsAt).toString();
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(script);
    }
  });
});

compiler.outputFileSystem = fs;

console.log('Run in DevTools console:');
console.log(`new WebSocket('ws://localhost:9001').onmessage=function(e){new Function(e.data)()}`);
