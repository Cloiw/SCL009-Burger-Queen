import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import ProductHeader from './ProductHeader';
 

describe('ProductHeader Component', () => {

it('has an h2 tag', () => {
 
    const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
    var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
     component, 'h2'
   );
   
})
})