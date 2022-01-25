const FETCH_MISSIONS = 'missions/missionSlice/FETCH_MISSIONS';
const FETCH_MISSIONS_SUCCESS = 'missions/missionSlice/FETCH_MISSIONS_SUCCESS';
const FETCH_MISSIONS_ERROR = 'missions/missionSlice/FETCH_MISSIONS_ERROR';
const appUrl = 'https://api.spacexdata.com/v3/missions';

export const getMissions = () => async (dispatch) => {
  dispatch({ type: FETCH_MISSIONS });
  const missions = await fetch(appUrl);
  const myMissions = await missions.json();
  return dispatch({ type: FETCH_MISSIONS_SUCCESS, myMissions });
};

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

const populateMissions = (myMissions) => {
  const arr = [];
  for (let i = 0; i < myMissions.length; i += 1) {
    arr.push({
      id: myMissions[i].mission_id,
      name: myMissions[i].mission_name,
      description: myMissions[i].description,
    });
  }
  return arr;
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, loading: true };
    case FETCH_MISSIONS_SUCCESS:
      populateMissions(action.myMissions);
      return { ...state, loading: false, missions: populateMissions(action.myMissions) };
    case FETCH_MISSIONS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default missionReducer;
