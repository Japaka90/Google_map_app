export const addLocation = (name, lat, lng) => ({
  type: 'ADD_LOCATION',
  name,
  lat,
  lng
});

export const changeLocation = (index, name, lat, lng) => ({
  type: 'CHANGE_LOCATION',
  index,
  name,
  lat,
  lng
});

export const changeOrder = id => ({
  type: 'CHANGE_ORDER',
  id
});

export const deleteLocation = id => ({
  type: 'DELETE_LOCATION',
  id
});
