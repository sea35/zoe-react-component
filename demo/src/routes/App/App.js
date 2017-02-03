import React, {Component} from 'react';
import {IndexPage} from '../../component';
import { config, menu } from '../../utils';
import './App.css';

class App extends Component {
    render() {
        const location=this.props.location;
        return (
            <IndexPage menu={menu} location={location} configText={config} children={this.props.children}></IndexPage>
        );
    }
}

App.propTypes = {};

export default App;
