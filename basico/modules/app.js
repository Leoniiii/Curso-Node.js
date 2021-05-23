const os = require('os');
const fs = require('fs');

const mi = require('./mito.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

console.log(mi.subscriptores);

// fs.appendFile('mitocode.txt', 'Subscribete al canal', (error) =>
// 	error ? console.log('Error al crear el archivo') : console.log('sin error')
// );
