import React from 'react';
import PropTypes from 'prop-types'

class Link extends React.Component {
    handleClick = () => {
        alert('clicked!');
    };
   
    render() {
        const {url} = this.props;
        const title = this.props.title ? this.props.title : 'This is default titile if not have title pass to prop';
        // const {title, url} = this.props;
        return <a href={url} onClick={this.handleClick}>{title}</a>;
    }
}

Link.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
};

Link.defaultProps = {
    title: '',
    url: ''
};

export default Link;