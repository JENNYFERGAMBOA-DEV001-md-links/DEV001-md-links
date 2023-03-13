const { mdLinks , pathAbsolute, filesMd , getvalidateLinks , statsValidatelinks, processLink, getAllObjects } = require('../index.js');
const { markDownLinks } = require ('../function.js');
const  axios  = require('axios');
jest.mock('axios');

 describe('mdLinks', () => {
  it("should be a function", () => {
    expect(typeof pathAbsolute).toBe("function");
  });

  it('should reject the Promise when the route does not exist', () => {
    return mdLinks('/noexiste/el.md').catch((error)=>{
      expect(error).toBe('La ruta no existe');
    })
  }); 
 
  /* it('should return a Promise', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });  */
  
});

describe("pathAbsolute", () => {
  it("should be a function", () => {
    expect(typeof pathAbsolute).toBe("function");
  })
});
it("if it receives an absolute path, it displays that path again", () => {
  expect(pathAbsolute("C:/Users/Usuario/md-links/md")).toEqual("C:/Users/Usuario/md-links/md");
}); 


describe('filesMd', () => {
  it('should be a function', () => {
    expect(typeof filesMd).toBe('function');
  });
});

 describe('getvalidateLinks', () => {
  it('should be a function', () => {
    expect(typeof getvalidateLinks).toBe('function');
  });

  it('It should validate the status of resolved links', (done) => {
    const dataLinks = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'README.md',
        status: 200,
        ok: 'OK'
      },
    ];

    getvalidateLinks(URLarray)
      .then((data) => {
        expect(data).toEqual(dataLinks);
        done();
      });
  });
  
}); 

describe('getAllObjects', () => {
  it('should be a function', () => {
    expect(typeof getAllObjects).toBe('function');
  });
   
  
  it('should return a Promise', () => {
    expect(getAllObjects()).toBe(typeof Promise);
  });
});
  

describe('statsValidatelinks', () => {
  it('should be a function', () => {
    expect(typeof statsValidatelinks).toBe('function');
  });
});

describe('processLink', () => {
  it('should be a function', () => {
    expect(typeof processLink).toBe('function');
  });
});


describe('markDownLinks', () => {
  it('should be a function', () => {
    expect(typeof markDownLinks).toBe('function');
  });

  /* it('should return an array of objects with href, text and file', (done) => {
    const resolveDataFalse = markDownLinks(('testmd'));
    resolveDataFalse.then((res) => expect(res).toEqual(arrayFalse));
    done();
  });

  it('It should return an array of objects with href, text, file, status and ok', (done) => {
    const resolveDataTrue = markDownLinks(('testmd'), { validate: true });
    resolveDataTrue.then((res) => expect(res).toEqual(arrayTrue));
    done();
  }); */
}); 



