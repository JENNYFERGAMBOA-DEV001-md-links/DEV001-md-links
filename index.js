const fs = require ("fs");
const path = require ("path");
const marked = require ("marked");
const axios= require ("axios");





const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    //identificar si la ruta existe
    if (fs.existsSync(path)) {
      //chequear si es un archivo o un directorio
      //si es un directorio
      
      /* console.log(path);
      console.log('./README.md'); */

      
    } else {
      //si no existe la ruta se rechaza la promesa
      reject("La ruta no existe");
    }
  });
}; 

mdLinks;

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
  //chequear  si es un archivo
  const isFile = fs.statSync(fileMd).isFile();
  const isDirectory = fs.statSync(fileMd).isDirectory();
  const name = path.extname(fileMd);
  const newArray = [];
  const pathContent = pathAbsolute(fileMd);
  //agregar al array
  if (isFile && name === ".md") {
    newArray.push(pathContent);
  } else if (isDirectory === true) {
    fs.readdirSync(fileMd).forEach(file => {
      let routePath = path.join(fileMd, file);
      // console.log(fs.readdirSync(fileMd))
      console.log(chalk.magenta(routePath));
      if (isDirectory) {
        newArray = newArray.concat(getMDfiles(routePath))
      } else {
        if (path.extname(routePath) === '.md') {
          newArray.push(routePath)
        }
      }
    })
  } 
 



  return newArray; 
} 

console.log (filesMd);   

const readMd = (file) =>{
  return new Promise ((resolve,reject) =>{
    const arrayObjects = [];
    fs.readFile(file, (error,datafile)=>{
      if (error) {resolve(error)};
      const renderer = new marked.Renderer()
      renderer.link = function (href, title, text){
        const objectContainer = {
          'href':  href,
          'text' : text,
          'file' : file,
        }
        if (objectContainer.href.includes('http')){
          arrayObjects.push(objectContainer);
        }
      }
      marked.marked(datafile,{ renderer})
      resolve (arrayObjects);
    }) 
  })
}

const getAllObjects = (arrayMd) =>{
  const returnPromise = arrayMd.map(file => readMd(file));
  return Promise.all(returnPromise).then(res => res.flat());
}



function processLink(link) {
  return new Promise((resolve, reject) => {
    axios.get(link.href)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          link.status = response.status
          link.ok = 'check';
          resolve(link);
        }
      }).catch((error) => {
        link.status = (error.name , "Please,check the link");
        link.ok = 'error';
        resolve(link);
      });
  })

}



const getvalidateLinks = (validateLinks) => {
  let returnValidateLinks = validateLinks.map(link => processLink(link));
  return Promise.all(returnValidateLinks).then(res => res);
}

function statsLinks(links) {
 
  return {
    Total: links.length,
    Unique: new Set(links.map((link) => link.href)).size

  }
}




function statsValidatelinks(links) {

  const failes = links.filter(link => link.ok == 'error').length

  return {
    Total: links.length,
    Unique: new Set(links.map((link) => link.href)).size,
    Broken: failes
  }
}




 module.exports = {
  mdLinks,
  pathAbsolute,
  filesMd,
  getAllObjects,
  processLink,
  getvalidateLinks,
  statsLinks,
  statsValidatelinks
};
 