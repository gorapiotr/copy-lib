const ncp = require('ncp').ncp;
const logSymbols = require('log-symbols');
const config = require('../config');
const getSourcePath = require('../utils/path-functions').getSourcePath;

ncp.limit = 1;

console.log('\033[2J');
console.log('\x1b[33m%s\x1b[0m', 'Script is running now.');

config.sources.forEach((source) => {
    ncp(source, getSourcePath(source, config.destination), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(logSymbols.success, '\x1b[32m', `Directory ${source} has been successfully copied to ${config.destination}`, logSymbols.success);
    });
});

