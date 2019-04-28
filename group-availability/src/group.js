import React from 'react';

// Calendar component, showing overlayed availability

// Group members component

// Edit individual availability 

export default class Group extends React.Component {
  constructor(props)
  {
    super(props);
  }

  componentWillMount() {

  }
  
  render() {
    return (
      <h1>{this.props.match.params.groupid}</h1>
    );
  }
}