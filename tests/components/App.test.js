import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../app/components/App';
import CompareProducts from '../../app/components/CompareProducts';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
  
  it('should have one header', () => {
    expect(wrapper.find('header').length).toEqual(1);
  });

  it('should have CompareProducts', () => {
    expect(wrapper.find(CompareProducts).length).toEqual(1);
  });
});