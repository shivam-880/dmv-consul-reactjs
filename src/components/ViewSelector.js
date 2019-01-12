import React, { Component } from 'react';
import { selectorNodeIcon, selectorServiceIcon, selectorMpsIcon } from '../icons';

class ViewSelector extends Component {
    render() {
        return (
            <div>
                <i className={selectorNodeIcon}></i>
                <i className={selectorServiceIcon}></i>
                <i className={selectorMpsIcon}></i>
            </div>
        );
    }
}

export default ViewSelector;
