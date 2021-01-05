import React, { Component } from 'react';
import { AttorneytemplatePage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <AttorneytemplatePage data={data ? data : {}}/>
    }
}

export default Root;