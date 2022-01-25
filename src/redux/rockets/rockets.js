import Axios from 'axios';

// conts
const FETCH_ROCKET = 'spaceTravelersHub/rockets/FETCH_ROCKET';

// actions
const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

//   apis-functions

export const fetchRocketApi = () => async (dispatch) => {
  const data = await Axios.get('https://api.spacexdata.com/v3/rockets');
  const rockets = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].rocket_name;
    const { id } = data[i];
    const { description } = data[i];
    const image = data[i].flickr_images[0];
    const object = {
      id, name, description, image,
    };
    rockets.push(object);
  }
  dispatch(fetchRocket(rockets));
};

// state
const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
