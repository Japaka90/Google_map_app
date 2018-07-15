import React, { Component } from 'react';

import './App.css';
import MapWrapper from './components/map/MapWrapper';
import SearchInput from './components/locationList/searchInput';
import LocationList from './components/locationList/locationList';
import Header from './components/common/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div className="listBlock">
            <SearchInput />
            <LocationList />
          </div>
          <MapWrapper />        
        </div>
      </div>
    );
  }
}

export default App;
