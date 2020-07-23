import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {
  let wrapper = shallow( <CounterApp /> );

  beforeEach( () => wrapper = shallow( <CounterApp /> ) );


  test('debe mostrar <CounterApp /> correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })
  

  test('debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow( <CounterApp value={100}/> );
    const counterText = wrapper.find('h2').text().trim();
    
    expect( counterText ).toBe('100');
  })


  test('debe incrementar con el boton +1', () => {
    wrapper.find('button').at(0).simulate('click');

    const counterText = wrapper.find('h2').text().trim();
    
    expect( counterText ).toBe('11');
  })
  

  test('debe disminuir con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text().trim();
    
    expect( counterText ).toBe('9');
  })


  test('debe reestablecer el valor inicial', () => {
    const wrapper = shallow( <CounterApp value={100}/> );

    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(2).simulate('click');

    const counterText1 = wrapper.find('h2').text().trim();
    console.log( counterText1 );

    
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();
    console.log( counterText );
    
    expect( counterText ).toBe('100');
  })

});
