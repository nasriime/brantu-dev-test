import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Products from './components/Products';
import SearchForm from './components/SearchForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div>
          <SearchForm />
          <Products />
        </div>
      </Provider>
    );
  }
}

export default App;
