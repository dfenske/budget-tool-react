import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>fi.nance</h1>
        <h2>a budgeting tool</h2>
        <div>Welcome back, Dani!</div>
        <div>You have saved $15,201 so far.</div>
        <div>CHART HERE -- pie chart for how much saved towards goal?</div>
        <div>CHART HERE -- average expenses over past few months</div>

        <div className="actions">
          <div>Record Expenses</div>
          <div>Analyze</div>
          <div>Edit Budget</div>
        </div>
      </div>
    );
  }
}
