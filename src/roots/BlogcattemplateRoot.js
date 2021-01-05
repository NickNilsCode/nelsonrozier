import React, { Component } from 'react';
import { BlogcattemplatePage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <BlogcattemplatePage data={data ? data : {}}/>
    }
}

export default Root;