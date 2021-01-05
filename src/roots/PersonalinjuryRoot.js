import React, { Component } from 'react';
import { PersonalinjuryPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <PersonalinjuryPage data={data ? data : {}}/>
    }
}

export default Root;