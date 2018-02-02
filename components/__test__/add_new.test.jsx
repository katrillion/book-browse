import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import AddNew from '../add_new.jsx';

describe('AddNew Component', () => {
  let wrapper;
  const mockAddTitle = jest.fn();

  it('should render the Add New title Component', () => {
    wrapper = shallow(<AddNew onAddTitle={mockAddTitle} />)
    expect(wrapper).to.have.length(1)
  });

  it('should call the mock add title function on submit', () => {
    wrapper = shallow(<AddNew onAddTitle={mockAddTitle} />)
    wrapper.simulate('submit');
    expect(mockAddTitle.mock.calls.length).to.equal(1)
  });

});