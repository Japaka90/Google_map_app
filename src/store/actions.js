const locationId = {
  currentId: 0
};

const countNextId = () => {
  locationId.currentId += 1;
  return locationId.currentId;
};

export const addLocation = (name, lat, lng) => ({
  type: 'ADD_LOCATION',
  id: countNextId(),
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

export const changeOrder = (arr) => ({
  type: 'CHANGE_ORDER',
  arr
});

export const deleteLocation = id => ({
  type: 'DELETE_LOCATION',
  id
});
