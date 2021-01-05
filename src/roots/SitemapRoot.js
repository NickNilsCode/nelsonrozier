import React, { Component } from 'react';
import { SitemapPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <SitemapPage data={data ? data : {}}/>
    }
}

export default Root;