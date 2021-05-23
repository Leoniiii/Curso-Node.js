const _ = require('lodash');

let x = { 'nombre': 'Jaime' };
let y = { 'apodo': 'MitoCode' };
let z = [
	{ nombre: 'Jaime', apellido: 'Medina', edad: 26 },
	{ nombre: 'Mito', apellido: 'Code', edad: 26 },
];

//UNIR DOS OBJETOS
// let resultado = _.assign(x, y);
// console.log(resultado);

//
_.times(3, () => console.log('Subscribete'));
