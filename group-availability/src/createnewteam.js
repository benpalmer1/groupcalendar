import React from 'react';

export default class CreateNewTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      selectedDays: []
    }
  }

  onChangeSelectedDays(day, isChecked) {
    let arrCopy = this.state.selectedDays.slice();
    if(isChecked) {
      arrCopy.push(day);
    }
    else { // has been unchecked
      arrCopy.splice(arrCopy.indexOf(day), 1);
    }

    this.setState({
      selectedDays: arrCopy
    });
  }

  onSubmitCreateForm() {

  }

  render() {
    return (
      <form class="teamCreator" onSubmit={this.onSubmitCreateForm}>
          <h2>Create a new team:</h2>
          <div id="myAvailability">
            <h3>My Availability</h3>
            <div>
              {this.state.weekdays.map((day, i) => (
                <label key={i}>
                  <input type="checkbox" onChange={(e) => this.onChangeSelectedDays(day, e.target.checked)} />
                  {day}
                  <br></br>
                </label>
              ))}
            </div>
            <hr></hr>
          </div>

          <div id="groupDetails">
            <h3>Details</h3>
            <label>Your name: <br></br><input type="text"></input></label>
            <br></br>
            <label>Group name: <br></br><input type="text"></input></label>
            <br></br>
            <label>Group password: <br></br><input type="password" placeholder="Leave blank for no password."></input></label>
            <h5>If no password, the group's schedule is public but requires the unique team id to access.</h5>
            <hr></hr>
          </div>

          <h3>All done?</h3>
          <button type="submit">Create Group</button>
      </form>
    );
  }
}