 //argumentos de linea de comando y pasarlo a md links
const { mdLinks,pathAbsolute,filesMd,readMd }= require ('./index');
const {markDownLinks} = require ('./function.js');
/* const args = process.argv.slice(2);

const path = args[0];
console.log(args, 'holi');

markDownLinks(readMd).then(()=>{})
.catch((error) => {console.log(error);
} );  */
const chalk = require('chalk');
const figlet = require('figlet');
console.log( chalk.whiteBright(figlet.textSync('MDLinks'))); 

const argv = process.argv
console.log(argv);
const MDvalidate = process.argv[2]

