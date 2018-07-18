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
          `http://maps.googleapis.com/maps/api/geocode/json?&address=${
            this.state.value
          }&sensor=false&language=ru`
        )
        .then(res => {
          const location = res.data.results;
          if (location.length === 0) {
            this.setState({
              errorMessage:
                'Адрес не найден. Попробуйте ещё раз или введите другое название',
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
          placeholder="Новая точка маршрута"
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

const SearchInputContainer = connect(mapDispatchToProps)(SearchInput);

export default SearchInputContainer;
