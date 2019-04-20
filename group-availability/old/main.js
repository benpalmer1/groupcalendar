import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "main.css";

class TitleBlock extends React.Component {
    render() {
        <h1>When are you free?</h1>
        <h2>Figure out when your team is available.</h2>
    }
}

class CalendarSelector extends React.Component {
    render() {

    }
}

handleChange(date) {
    this.setState({
      startDate: date
    });
  }

render() {
    return (
        <TitleBlock />
        <h2></h2>
        <DatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="Pp"
        />
        {document.getElementById("root")}
    );
}