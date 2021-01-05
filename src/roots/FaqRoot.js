import React, { Component } from 'react';
import { FaqPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <FaqPage data={data ? data : {}}/>
    }
}

export default Root;