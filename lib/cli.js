"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.main = main;

var _minimist = require("minimist");

var _minimist2 = _interopRequireDefault(_minimist);

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//greet = require("../index.js");

function main() {
    var args = (0, _minimist2.default)(process.argv);
    console.log((0, _index.greet)(process.argv[2], args['drunk']));
}