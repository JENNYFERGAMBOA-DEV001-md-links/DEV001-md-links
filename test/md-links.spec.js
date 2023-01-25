const {mdLinks} = require('../index.js');


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
