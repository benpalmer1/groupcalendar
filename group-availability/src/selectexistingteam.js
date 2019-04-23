import React from 'react';

export default class SelectExistingTeam extends React.Component {
    render() {
        return (
            <div id="existingTeamSelector">
                <h2>Team already created? Enter the id:</h2>
                <span>.../team/</span>
                <input type="text" />
                <button>Show Team</button>
            </div>
        )
    }
}