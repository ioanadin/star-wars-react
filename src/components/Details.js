import React from 'react';
import { withRouter } from 'react-router-dom';


function Details(props) {
    const details = props.history.location.state;
    return <div>
        <h1>{details.title}</h1>
    </div>
}

export default withRouter(Details);