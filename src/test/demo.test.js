describe('Pruebas en archivo demo.test.js', () => {
  test('deben ser iguales los strings ', () => {

    // 1. Inicializacion
    const mensaje = 'hola mundo';
    
    // 2. estimulo
    const mensaje2 = `hola mundo`;
  
    // 3. Observar comportamiento
    expect( mensaje ).toBe( mensaje2 );
  
  })
});
