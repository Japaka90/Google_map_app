import React, { Component } from 'react';
import './App.css';
import MapWrapper from './components/map/MapWrapper';
import SearchInput from './components/locationList/searchInput';
import LocationList from './components/locationList/locationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchInput />
        <LocationList />
        <MapWrapper />
      </div>
    );
  }
}

export default App;
