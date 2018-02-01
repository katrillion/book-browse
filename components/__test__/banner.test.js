import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import Banner from '../banner.jsx';

describe('Banner', () => {
  const wrapper = shallow(<Banner text="Test Banner" textWidth="wide" bgColor="#BBBE5D" /> )

  it('should render the banner', () => {
    expect(wrapper).to.have.length(1)
  });

  it('should render the text', () => {
    expect(wrapper.find('h2').text()).to.have.equal('Test Banner')
  });
});
