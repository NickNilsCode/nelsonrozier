import React, { Component } from 'react';
import { HomePage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <HomePage data={data ? data : {}}/>
    }
}

export default Root;