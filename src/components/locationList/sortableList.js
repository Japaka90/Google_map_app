import React from 'react';
import { connect } from 'react-redux';
import { arrayMove } from 'react-sortable-hoc';

import LocationList from './locationList';
import { changeOrder } from '../../store/actions';

class SortableComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.markers,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        items: nextProps.markers,
      });
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
    this.props.dispatch(changeOrder(this.state.items));
  };

  shouldCancelStart(e) {
    // Cancel sorting if the event target is an anchor tag (`a`)
    if (e.target.tagName.toLowerCase() === 'span') {
      return true; // Return true to cancel sorting
    }
  }

  render() {
    return (
      <LocationList
        items={this.state.items}
        dispatch={this.props.dispatch}
        onSortEnd={this.onSortEnd}
        shouldCancelStart={this.shouldCancelStart}
      />
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers,
});

const SortableComponentWrapper = connect(mapStateToProps)(SortableComponent);

export default SortableComponentWrapper;
