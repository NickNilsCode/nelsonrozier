import React, { Component } from 'react';
import { PrivacypolicyPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <PrivacypolicyPage data={data ? data : {}}/>
    }
}

export default Root;