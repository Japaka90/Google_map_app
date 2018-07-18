import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import PropTypes from 'prop-types';

class MarkerWithInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { item, onDragEnd } = this.props;
    return (
      <Marker
        position={{ lat: item.lat, lng: item.lng }}
        onClick={this.handleToggle}
        draggable
        onDragEnd={onDragEnd}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.handleToggleClose}>
            <h1 className="infoWindowText">{item.name}</h1>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

MarkerWithInfo.propTypes = {
  key: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default MarkerWithInfo;
