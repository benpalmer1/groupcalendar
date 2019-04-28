import React from 'react';

export default class CreateNewGroup extends React.Component {

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

  onSubmitCreateForm(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <form className="groupCreator" onSubmit={this.onSubmitCreateForm}>
          <h2>Create a new group:</h2>
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
            <label>Group name: <br></br><input name="groupname" type="text"></input></label>
            <br></br>
            <label>Your name: <br></br><input name="name" type="text"></input></label>
            <br></br>
            <label>Your password: <br></br><input name="password" type="password" placeholder="Leave blank for no password."></input></label>
            <h5>If no password, the group's schedule is public but requires the unique group id to access.</h5>
            <hr></hr>
          </div>

          <h3>All done?</h3>
          <button type="submit">Create Group</button>
      </form>
    );
  }
}