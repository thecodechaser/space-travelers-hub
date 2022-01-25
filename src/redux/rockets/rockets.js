import Axios from 'axios';

// conts
const FETCH_ROCKET = 'spaceTravelersHub/rockets/FETCH_ROCKET';

// actions
const fetchRocket= (payload) => ({
    type: FETCH_ROCKET,
    payload,
  });

//   apis-functions


// state
const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ROCKET:
            return action.payload;
        default:
          return state;
    }
};

export default reducer;
