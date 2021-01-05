import React, { Component } from 'react';
import { BlogtemplatePage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <BlogtemplatePage data={data ? data : {}}/>
    }
}

export default Root;