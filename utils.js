const fs = require('fs');
const shell = require('shelljs');
const config = require('./config').config;

module.exports.coumptePath = (source, destination) => {
    let sourceSplitted = source.split('/');

    return destination.slice(-1) === '/' ? `${destination}${sourceSplitted[sourceSplitted.length - 1]}` : `${destination}/${sourceSplitted[sourceSplitted.length - 1]}`;
}

module.exports.getSourcePath = (source, destination) => {
    if (typeof source === 'string' && typeof destination === 'string') {

        const path = this.coumptePath(source, destination)
        if (!fs.existsSync(path)) {
            shell.mkdir('-p', path);
        }

        return path;
    }
    throw "Directory source or destination are not a string";
}