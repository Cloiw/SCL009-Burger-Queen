import React from 'react';
import { configure , shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuView from './MenuView'
import LunchBtn from './MenuView'
import Btn from './components/Btn'

configure({ adapter: new Adapter() });


describe('<MenuView/>', () => {
  test('render', () => {
      const wrapper = shallow(<MenuView/>);
      expect(wrapper.find(MenuView)).toBeDefined();
  });

});
describe('<btn/>', () => {
  test("deberia retorna almuerzos para boton almuerzo" , () => {
    const wrapper = shallow(<Btn/>);
    wrapper.find(".item-btn").simulate("click");
    expect(onButtonClick).to.have.property('callCount', 1);
    // expect(wrapper.find('').length).toBe(4);
  });
  
});