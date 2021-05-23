const _ = require('lodash');
const argv = require('yargs').argv;

// if (comando === 'Usuario') {
// 	if (process.argv[3] === 'MitoCode') {
// 		let x = { 'nombre': 'Jaime' };
// 		let y = { 'apodo': 'MitoCode' };
// 		let z = [
// 			{ nombre: 'Jaime', apellido: 'Medina', edad: 26 },
// 			{ nombre: 'Mito', apellido: 'Code', edad: 26 },
// 		];

// 		//UNIR DOS OBJETOS
// 		// let resultado = _.assign(x, y);
// 		// console.log(resultado);

// 		//EJECUTAR UNA FUNCION VARIAS VECES
// 		// _.times(3, () => console.log('Subscribete'));

// 		//ENCONTRAR OBJETOS DENTRO DE UNA COLECCION DE OBJETOS
// 		let resultado = _.find(z, { apellido: 'Code' });
// 		console.log(resultado);
// 	} else {
// 		console.log('Usuario no válido');
// 	}
// }

if (argv.usuario === 'MitoCode') {
	let x = { 'nombre': 'Jaime' };
	let y = { 'apodo': 'MitoCode' };
	let z = [
		{ nombre: 'Jaime', apellido: 'Medina', edad: 26 },
		{ nombre: 'Mito', apellido: 'Code', edad: 26 },
	];

	//UNIR DOS OBJETOS
	// let resultado = _.assign(x, y);
	// console.log(resultado);

	//EJECUTAR UNA FUNCION VARIAS VECES
	// _.times(3, () => console.log('Subscribete'));

	//ENCONTRAR OBJETOS DENTRO DE UNA COLECCION DE OBJETOS
	let resultado = _.find(z, { apellido: 'Code' });
	console.log(resultado);
} else {
	console.log('Usuario no válido');
}
