const { pathAbsolute, filesMd, getAllObjects} = require('./index.js')

const chalk = require('chalk');
  
   const markDownLinks = (Path, option = {validate:false}) => {
   return new Promise((resolve, reject) => {
    const verifyAbsolut = pathAbsolute(Path);
    const containerArray = filesMd(verifyAbsolut);
   if(option.validate === true){
    getAllObjects(containerArray)
    .then(res2 => resolve(res2))
   }else if(option.validate === false){
    getAllObjects(containerArray)
    .then(res => resolve(res))
   } else{
    resolve(chalk.red ("ERROR. please check"));
   }
  }) 
  
};


module.exports= {markDownLinks};