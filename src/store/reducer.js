function markers(state = [
    { id: -1, name: 1, lat: -34.397, lng: 150.644 },
    { id: -2, name: 2, lat: -33.397, lng: 150.544 }
  ], action) {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [ ...state,
        { id: action.id,
          name: action.name,
          lat: action.lat,
          lng: action.lng
        }
      ];
    case 'CHANGE_LOCATION':
      return state.map(
        (marker, index) =>
        index === action.index ? { ...marker, name: action.name, lat: action.lat, lng: action.lng } : marker
      );
    case 'CHANGE_ORDER':
      return [ ...action.arr];
    case 'DELETE_LOCATION':
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.id) {
          return [...state.slice(0, i), ...state.slice(i + 1)];
        }
      } 
      return state;
    default:
      return state;
  }
}

export default markers;
