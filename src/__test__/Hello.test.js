import React from 'react';
import Hello from './../components/TestingDemo/Hello';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

it('Render Hello component', () => {
    const wrapper = shallow(<Hello />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});