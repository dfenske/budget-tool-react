import React, { Component } from 'react';
import '../styles/expenses.css';
import numeral from 'numeral';

function SortIcon(props) {
  return (
    <div className="sort" onClick={props.onClick} >
      <i className="icon-sort-up" />
      <i className="icon-sort-down shift-left" />
    </div>
  );
};

export class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { sortedBy: '', expenses: [], loading: true };

    fetch('api/SampleData/expenses')
      .then(response => response.json())
      .then(data => {
        this.setState({ expenses: data, loading: false });
      });
  }

  getFormattedMonth = (month) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[month + 1];
  }

  format = (value) => {
    return `$${numeral(value).format('0,0')}`;
  }

  sortBy = (property) => {
    let { expenses, sortedBy } = this.state;
    
    if (sortedBy === property) {
      this.setState({
        expenses: expenses.reverse()
      });
    } else {
      switch (property) {
        case 'amount':
          expenses.sort((a, b) => a.amount > b.amount);
          break;
        case 'date':
          expenses.sort((a, b) => a.date > b.date);
          break;
        case 'notes':
          expenses.sort((a, b) => a.notes.toLowerCase() > b.notes.toLowerCase());
          break;
        case 'category':
          expenses.sort((a, b) => a.category.toLowerCase() > b.category.toLowerCase());
          break;
        default:
          break;
      }

      this.setState({
        expenses,
        sortedBy: property
      });
    }
  }

  render() {
    let { expenses } = this.state;
    return (
      <div>
        <h1>Expenses</h1>

        <div className="add-expense">
          <div>Date</div>
          <div><input type="date" /></div>
          <div>Amount</div>
          <div><input /></div>
          <div>Category</div>
          <div><input /></div>
          <div>Notes</div>
          <div><input /></div>
          <div className="pxl-btn pxl-btn--secondary btn-square">+</div>
        </div>

        <div className="expenses-table">
          <div className="expenses-table__headers">
            <div>
              Date
              <SortIcon onClick={() => this.sortBy('date')} />
            </div>
            <div>
              Amount
              <SortIcon onClick={() => this.sortBy('amount')} />
            </div>
            <div>
              Category
              <SortIcon onClick={() => this.sortBy('category')} />
            </div>
            <div>
              Notes
              <SortIcon onClick={() => this.sortBy('notes')} />
            </div>
          </div>
          <div className="expenses-table__entries">
            {expenses.map((e, id) => {
              const date = new Date(e.date);
              return (
                <div className="expenses-table__row" key={`entry-${id}`}>
                  <div>{`${this.getFormattedMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`}</div>
                  <div>{this.format(e.amount)}</div>
                  <div>{e.category}</div>
                  <div>{e.notes}</div>
                </div>
                );
              }
            )}
          </div>
        </div>

      </div>
    );
  }
}
