import React, { Component } from 'react';
import { CaseresultsPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <CaseresultsPage data={data ? data : {}}/>
    }
}

export default Root;