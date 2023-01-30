//argumentos de linea de comando y pasarlo a md links
 const { mdLinks }= require ('index.js');
mdLinks('./README.md').then(()=>{})
.catch((error) => {console.log(error);

} );