import parseArgs from "minimist";
import {greet} from "./index"
//greet = require("../index.js");

export function main() {
    var args = parseArgs(process.argv);
    console.log(greet(process.argv[2],args['drunk']));
}
