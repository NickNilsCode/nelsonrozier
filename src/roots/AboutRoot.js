import React, { Component } from 'react';
import { AboutPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <AboutPage data={data ? data : {}}/>
    }
}

export default Root;