import React, { useState } from 'react';

function CreateNewGroup() {
  
  const [weekdays, setWeekdays ] = useState([
    { day: "Monday", isChecked: false },
    { day: "Tuesday", isChecked: false },
    { day: "Wednesday", isChecked: false },
    { day: "Thursday", isChecked: false },
    { day: "Friday", isChecked: false },
    { day: "Saturday", isChecked: false },
    { day: "Sunday", isChecked: false }
  ]);

  function weekdaysMap() {
    return (
      weekdays.map((day) => (
        <label key={day.day}>
          <input type="checkbox" checked={day.isChecked} onChange={() => {onChangeWeekdays(day); }} />
          {day.day}
          <br></br>
        </label>
      ))
    )
  }

  function onChangeWeekdays(day) {
    setWeekdays((prevWeekdays) => {
      return prevWeekdays.map((tempDay) => ({
          day: (day.day === tempDay.day) ? day.day : tempDay.day,
          isChecked: (day.day === tempDay.day) ? !day.isChecked : tempDay.isChecked
      }))
    })
  }

  function onSubmitCreateForm(e) {
    e.preventDefault();
    console.log(weekdays);
  }

  return (
    <form className="groupCreator" onSubmit={onSubmitCreateForm}>
        <h2>Create a new group:</h2>
        <div id="myAvailability">
          <h3>My availability</h3>
          <div>
            {weekdaysMap()}
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
        </div>

        <hr></hr>

        <h3>All done?</h3>
        <button type="submit">Create Group</button>
    </form>
  );
}

export default CreateNewGroup;