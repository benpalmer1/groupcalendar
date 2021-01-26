import React from "react";
import {Route} from 'react-router-dom';

function LinkButton(props) {
    return (
        <Route render={({history}) => (
            <button {...props} onClick={() => { history.push(props.to) }}>
                {props.children}
            </button>
        )}/>
    );
}

export default LinkButton