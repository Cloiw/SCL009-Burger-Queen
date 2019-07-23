import React from 'react';
import { configure , shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuView from './MenuView'
import LunchBtn from './MenuView'
import Btn from './components/Btn'
import CategoryBtn from './components/CategoryBtn';

configure({ adapter: new Adapter() });

// test que verifica si existe el componente
describe('<MenuView/>', () => {
  test('render', () => {
      const wrapper = shallow(<MenuView/>);
      expect(wrapper.find(MenuView)).toBeDefined();
  });

});
//test para boton , lo lee pero tira error
describe('<btn/>', () => {
  test("deberia retorna almuerzos para boton almuerzo" , () => {
    const wrapper = shallow(<CategoryBtn/>);
    wrapper.find(".item-btn").simulate("click");
    expect(onButtonClick).to.have.property('callCount', 1);
    // expect(wrapper.find('').length).toBe(4);
  });
  
});describe('CategoryBtn', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<CategoryBtn onClick={mockCallBack}>Ok!</CategoryBtn>));
    button.find('.btn').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
describe('ComponentVisualButton', () => {
  const clickFn = jest.fn();
it('debería llamar al evento buttonOnclick', () => {
  const component = shallow(<CategoryBtn buttonOnClick={clickFn} className="btn" />);
  component
    .find('.btn')
    .simulate('click');
  expect(clickFn).toHaveBeenCalled();
})
})