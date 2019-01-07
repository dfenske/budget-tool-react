import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Analyze } from './components/Analyze';
import { Account } from './components/Account';
import { Expenses } from './components/Expenses';
import { Create } from './components/Create';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/account' component={Account} />
        <Route path='/analyze' component={Analyze} />
        <Route path='/expenses' component={Expenses} />
        <Route path='/create' component={Create} />
      </Layout>
    );
  }
}
