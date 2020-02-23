// import React from 'react';
// import renderer from 'react-test-renderer';
// import Link from './../../components/TestingDemo/Link';

// const props = {
//     title: 'Default title',
//     url: '/link/to/test'
// };

// describe('Components > Link', () => {
//     it('Render a snapshot for Link use renderer', () => {
//         const tree = renderer.create(<Link {...props} />).toJSON();

//         expect(tree).toMatchSnapshot();
//     })
// })

//------------------------- Snapshots-with-enzyme -------------------------

import React from 'react';
import Link from './../../components/TestingDemo/Link';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

const props = {
    title: 'Default title',
    url: '/link/to/test'
};

describe('Components > Link', () => {
    it('Render a snapshot for Link use enzyme', () => {
        const tree = shallow(<Link {...props} />);

        expect(shallowToJson(tree)).toMatchSnapshot();
    })
})

it('not pass "title" prop to component', () => {
    const wrapper = shallow(<Link url={'/link/to/test'} />);
    expect(wrapper.find('a').text()).toEqual('This is default titile if not have title pass to prop');
})

it('pass "title" prop to component', () => {
    const title = 'Title is passed to component';
    const wrapper = shallow(<Link url={'/link/to/test'} title={title}/>);
    expect(wrapper.find('a').text()).toEqual(title);
})