import React, { Component } from 'react';
import { DisclaimerPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <DisclaimerPage data={data ? data : {}}/>
    }
}

export default Root;