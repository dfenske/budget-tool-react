import React, { Component } from 'react';

export class Analyze extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], loading: true };

    fetch('api/SampleData/GetCategories')
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data, loading: false });
      });
  }

  static renderCategories(categories) {
    return (
      <div>
        {categories.map(category =>
          <div key={category.name}>{category.name}</div>
        )}
        </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Analyze.renderCategories(this.state.categories);

    return (
      <div>
        <h1>Analyze</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
