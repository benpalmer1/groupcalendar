import React from 'react';

// Calendar component, showing overlayed availability

// Group members component

// Edit individual availability 

function Group(props) {
  
    return (
      <h1>{props.match.params.groupid}</h1>
    );
}

export default Group;