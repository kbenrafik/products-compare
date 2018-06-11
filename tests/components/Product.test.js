import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from '../../app/components/Product';

configure({ adapter: new Adapter() });

describe('Product Component', () => {
  let wrapper;
  
  const product = {
    productImage: 'urlImage',
    name : 'Product 1',
    sku : '1111',
    salePrice: 100
  };

  beforeEach(() => {
    wrapper = mount(<Product product={product}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
  
  it('should receive the correct props', () => {
    expect(wrapper.prop('product')).toBe(product);
  });

  it('should have one product', () => {
    expect(wrapper.find('.product').length).toBe(1);
  });
});