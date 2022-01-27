import Axios from 'axios';

// conts
const FETCH_ROCKET = 'spaceTravelersHub/rockets/FETCH_ROCKET';
const BOOK_ROCKET = 'spaceTravelersHub/rockets/BOOK_ROCKET';

// actions
const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

//   APIs-functions

export const fetchRocketApi = () => async (dispatch) => {
  const returnValue = await Axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = returnValue;
  const rockets = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].rocket_name;
    const { id } = data[i];
    const { description } = data[i];
    const image = data[i].flickr_images[0];
    const reserved = false;
    const object = {
      id, name, description, image, reserved,
    };
    rockets.push(object);
  }
  dispatch(fetchRocket(rockets));
};

// rocket-booking

const reserveCancelRocket = (state, payload) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return newState;
};

// state
const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    case BOOK_ROCKET:
      return reserveCancelRocket(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
