const {mdLinks , pathAbsolute, filesMd } = require('../index.js');

describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!');
  });

  it('should reject the Promise when the route does not exist', () => {
    return mdLinks('/noexiste/el.md').catch((error)=>{
      expect(error).toBe('La ruta no existe');
    })
  });

 /*  it('should return a Promise', () => {
    expect(mdLinks()).toBe(typeof Promise);
  }); */
  
});

describe("pathAbsolute", () => {
  it("should be a function", () => {
    expect(typeof pathAbsolute).toBe("function");
  })
});
it("if it receives an absolute path, it displays that path again", () => {
  expect(pathAbsolute("C:/Users/Usuario/md-links/md")).toEqual("C:/Users/Usuario/md-links/md");
});

/* const dataFiles = [
  'C:\\Users\\md-links\\test\\archivos.md',
  'C:\\Users\\md-links\\testmd\\archivos1.md',
  'C:\\Users\\Usuario\\testmd\\pru\\archivos2.md'
]; */

describe('filesMd', () => {
  it('should be a function', () => {
    expect(typeof filesMd).toBe('function');
  });
});
