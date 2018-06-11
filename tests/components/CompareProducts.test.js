import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CompareProducts from '../../app/components/CompareProducts';
// import CompareProduct from '../../app/components/CompareProducts/CompareProduct';
import CompareLoader from '../../app/components/CompareProducts/CompareLoader';
// import ProductNameInput from '../../app/components/CompareProducts/ProductNameInput';

configure({ adapter: new Adapter() });

describe('Product Component', () => {
  let wrapper;
  
  const productsSku = '115E19,11545A=';

  const mockProducts = {
    "products": [
        {
          "sku": "115E19",
          "salePrice": "1.36",
        },
        {
          "sku": "11545A",
          "salePrice": "1.36",
        },
      ]
    };

  beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve(JSON.stringify(mockProducts)));
      wrapper = mount(<CompareProducts productsSku={productsSku}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should receive the correct props', () => {
    expect(wrapper.prop('productsSku')).toBe(productsSku);
  });

  it('should have CompareLoader', () => {
    expect(wrapper.find(CompareLoader).length).toBe(1);
  });

});