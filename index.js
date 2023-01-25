const fs = require("fs");
const path = require("path");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    //identificar si la ruta existe
    if (fs.existsSync(path)) {
      //chequear si es un archivo o un directorio
      //si es un directorio

      console.log(path);
    } else {
      //si no existe la ruta se rechaza la promesa
      reject("La ruta no existe");
    }
  });
};

const pathAbsolute = (route) => {
  //chequear o convertir en una ruta absoluta
  if (path.isAbsolute(route)) {
    console.log(route);
    return route;
  } else {
    return path.resolve(route).normalize();
  }
};

function filesMd(fileMd) {
  const isFile = fs.statSync(fileMd).isFile();
  const name = path.extname(fileMd);
  const newArray = [];
  const pathContent= pathAbsolute(fileMd);
  //agregar 
  if(isFile && name === '.md'){
    newArray.push(pathContent)
  }else{
    return newArray;
  }
}

module.exports = {
  mdLinks,
  pathAbsolute,
  filesMd,
};
