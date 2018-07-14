import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { addLocation } from '../../store/actions';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        if(e.key === 'Enter') {
            axios.get(`http://maps.googleapis.com/maps/api/geocode/json?&address=${this.state.value}&sensor=false&language=ru`)
            .then(res => {
              const location = res.data.results;
              if (location.length === 0) {
                //   TODO: добавить обработку несуществующего или ненайденного адреса
                console.log('no address');
                return null
              }
               console.log(location, 777);
               const name = location[0].formatted_address;
               const lat = location[0].geometry.location.lat;
               const lng = location[0].geometry.location.lng;
               this.props.dispatch(addLocation(name, lat, lng));
               this.setState({value: ''});
            })
        }      
    }

    render() {
        return(
            <input 
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
            />
        )
    }
}  

const mapDispatchToProps = (dispatch) => ({
    dispatch
  });

const SearchInputContainer = connect(mapDispatchToProps)(SearchInput);

export default SearchInputContainer