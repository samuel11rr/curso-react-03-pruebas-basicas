import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe('Pruebas en <PrimeraApp />', () => {
  
  // test('Debe mostrar el mensaje Hola Mundo!', () => {
  //   const saludo = 'Hola Mundo!';
  //   const { getByText } = render(<PrimeraApp saludo={ saludo } />);

  //   expect( getByText( saludo ) ).toBeInTheDocument();
  // })
  test('debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola Mundo!';
    const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

    expect( wrapper ).toMatchSnapshot();
  });


  test('debe mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola Mundo!';
    const subtitulo = 'Mi subtitulo'
    const wrapper = shallow( 
      <PrimeraApp 
        saludo={ saludo }
        subtitulo={ subtitulo }
      />
    );

    const textoParrafo = wrapper.find('p').text();

    expect( textoParrafo ).toBe( subtitulo );
  })
  

});
