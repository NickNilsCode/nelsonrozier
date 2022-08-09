import React, { Component } from 'react';
import { NotFoundPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <NotFoundPage data={data ? data : {}}/>
    }
}

export default Root;
