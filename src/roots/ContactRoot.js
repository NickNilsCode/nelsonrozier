import React, { Component } from 'react';
import { ContactPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ContactPage data={data ? data : {}}/>
    }
}

export default Root;