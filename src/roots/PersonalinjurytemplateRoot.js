import React, { Component } from 'react';
import { PersonalinjurytemplatePage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <PersonalinjurytemplatePage data={data ? data : {}}/>
    }
}

export default Root;