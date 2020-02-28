import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyComponent from "./../MyComponent";

Enzyme.configure({ adapter: new Adapter() })

describe('should shown text', () => {
    it('should shown text', () => {
        const wrapper = shallow(<MyComponent />);
        const test = wrapper.find('div div');
        expect(test.text()).toBe('Text goes here');
    });
    it('Should hide text when button is clicked ', () => {
        const wrapper = shallow(<MyComponent />);
        const button = wrapper.find('button');
        button.simulate('click');
        const text = wrapper.find('div div');
        expect(text.length).toBe(0);
    });
});

