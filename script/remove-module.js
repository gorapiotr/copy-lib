const rimraf = require('rimraf');
const logSymbols = require('log-symbols');
const config = require('../config');
const coumptePath = require('../utils/path-functions').coumptePath;

console.log('\033[2J');
console.log('\x1b[33m%s\x1b[0m', 'Script is running now.');

config.sources.forEach((source) => {
    rimraf(coumptePath(source, config.destination), function (err) {
        if (err) {
            return console.error(err);
        }

        console.log(logSymbols.success, '\x1b[32m', `Directory ${source} has been successfully removed`, logSymbols.success);
    })
});

