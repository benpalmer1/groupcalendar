import React from 'react';
import LinkButton from './linkbutton.js'

 export default class SelectExistingGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroupId: '',
        }
    }

    textChanged = (event) => {
        this.setState({
            selectedGroupId: event.target.value,
        });
    }
    
    render() {
        return (
            <form id="existingGroupSelector">
                <h2>Group already created? Enter the id:</h2>
                <span>.../group/</span>
                <input name="groupid" type="text" value={this.state.selectedGroupId} onChange={this.textChanged} />
                <LinkButton to={"/group/"+this.state.selectedGroupId}>Show Group</LinkButton>
            </form>
        )
    }
}