import React, { useState } from 'react';
import LinkButton from './LinkButton.js'

function SelectExistingGroup() {

    const [selectedGroupId, setSelectedGroupId] = useState('');

    const textChanged = (event) => setSelectedGroupId(event.target.value);
    
    return (
        <form id="existingGroupSelector">
            <h2>Group already created? Enter the id:</h2>
            <span>.../group/</span>
            <input name="groupid" type="text" value={selectedGroupId} onChange={textChanged} />
            <LinkButton to={"/group/"+selectedGroupId}>Show Group</LinkButton>
        </form>
    )
}

export default SelectExistingGroup;