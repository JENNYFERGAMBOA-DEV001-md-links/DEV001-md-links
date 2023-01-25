//argumentos de linea de comando y pasarlo a md links
const { mdLinks }= require ('index.js');
mdLinks('/noexiste/').then(()=>{})
.catch(error) => {

}