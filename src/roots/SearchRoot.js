import React, { Component } from 'react';
import { SearchPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <SearchPage data={data ? data : {}}/>
    }
}

export default Root;