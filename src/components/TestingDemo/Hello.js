import React from 'react';
import Link from './Link';

const props = {
    title: 'Default title',
    url: '/link/to/test'
};

export default class Hello extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Hello
                </h1>
                <Link {...props} />
            </div>
        );
    }
};