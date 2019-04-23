import React from 'react';

export default class Team extends React.Component {
    constructor(props)
    {
      super(props);
    }
    
    render() {
      return (
        <h1>Welcome to your team page! {this.props.match.params.teamid} </h1>
      );
    }
  }
  