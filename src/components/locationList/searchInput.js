import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { addLocation, changeMapCenter } from '../../store/actions';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: null,
    };
  }

  handleChange = e => {
    this.state.errorMessage !== null
      ? this.setState({ errorMessage: null })
      : null;
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    if (e.key === 'Enter') {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA303zw7b0DOavsL0vRzVSgDC_BqYzIdQI&address=${
            this.state.value
          }&sensor=false&language=en`
        )
        .then(res => {
          const location = res.data.results;
          if (location.length === 0) {
            this.setState({
              errorMessage:
                'Address is not found. Try again or enter another location name.',
            });
            return null;
          }
          const name = location[0].formatted_address;
          const lat = location[0].geometry.location.lat;
          const lng = location[0].geometry.location.lng;
          this.props.dispatch(addLocation(name, lat, lng));
          this.props.dispatch(changeMapCenter(lat, lng));
          this.setState({
            value: '',
            errorMessage: null,
          });
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <input
          className="appInput"
          type="text"
          placeholder="Add new waypoint"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
        />
        {this.state.errorMessage && (
          <p className="errorMessage">{this.state.errorMessage}</p>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
});

SearchInput.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const SearchInputContainer = connect(mapDispatchToProps)(SearchInput);

export default SearchInputContainer;
