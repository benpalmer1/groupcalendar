// button navigation by user "mwieczorek" on Stack Overflow:
// https://stackoverflow.com/a/46347109

import React from "react";
import PropTypes from "prop-types";
import {Route} from 'react-router-dom';

export default class LinkButton extends React.Component {

    render() {
        return (
            <Route render={({history}) => (
                <button {...this.props}
                       onClick={() => {
                           history.push(this.props.to)
                       }}>
                    {this.props.children}
                </button>
            )}/>
        );
    }
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired
};