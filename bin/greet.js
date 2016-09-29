#!/usr/bin/env node
greet = require("../index.js");
var parseArgs = require('minimist');
var args = parseArgs(process.argv);
console.log(greet(process.argv[2],args['drunk']));
//0:/usr/local/Cellar/node/6.7.0/bin/node
//1: /usr/local/bin/greet
//2: swk