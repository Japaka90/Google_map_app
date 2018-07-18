import { combineReducers } from 'redux';

const InitialState = [
  {
    id: -1,
    name: 'Сидней Нов. Юж. Уэльс, Австралия',
    lat: -33.86215333513014,
    lng: 151.2152890625,
  },
  {
    id: -2,
    name: 'Канангра Нов. Юж. Уэльс 2787, Австралия',
    lat: -33.959256246559214,
    lng: 150.08806738281248,
  },
];

function markers(state = InitialState, action) {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          lat: action.lat,
          lng: action.lng,
        },
      ];
    case 'CHANGE_LOCATION':
      return state.map(
        (marker, index) =>
          index === action.index
            ? { ...marker, name: action.name, lat: action.lat, lng: action.lng }
            : marker
      );
    case 'CHANGE_ORDER':
      return [...action.arr];
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

function mapCenter(state = { lat: -34.397, lng: 150.644 }, action) {
  switch (action.type) {
    case 'CHANGE_MAP_CENTER':
      return { lat: action.lat, lng: action.lng };
    default:
      return state;
  }
}

const mapReducer = combineReducers({
  markers,
  mapCenter,
});

export default mapReducer;
