const { getUser, getUsuarioActivo } = require("../../base/05-funciones")

describe('Pruebas en 05-funciones', () => {

  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect( user ).toStrictEqual( userTest );
  });


  test('getUsuarioActivo', () => {
    const nombre = 'Samuel';
    const user = getUsuarioActivo( nombre );

    expect( user ).toStrictEqual({
      uid: 'ABC567',
      username: nombre
    });
  });

})