import heroes from '../../data/heroes';
const { getHeroeByIdAsync } = require("../../base/09-promesas");

describe('Pruebas con promesas', () => {
  
  test('getHeroeByIdAsync() debe retornar un heroe', ( done ) => {
    const id = 1;

    getHeroeByIdAsync( id ).then( heroe => {
      expect( heroe ).toBe( heroes[0] );
      done();
    })
  })
  

  test('debe retornar un error si el heroe no existe', (done) => {
    const id = 10;

    getHeroeByIdAsync( id ).catch( error => {
      expect( error ).toBe( 'No se pudo encontrar el héroe' );
      done();
    })
  })
  
})
