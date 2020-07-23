const { getImagen } = require("../../base/11-async-await");

describe('Pruebas con Async/Await', () => {
  
  test('debe retornar el url de la imagen', async() => {
      const url = await getImagen();
      // console.log(url);
      expect( url.includes('https') ).toBe( true );
  })
  

});
