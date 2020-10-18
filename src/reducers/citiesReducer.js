import { CREATE_CITY } from "./types";

const initialState = {
  cities: [],
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CITY:
      return { ...state, cities: state.cities.concat(action.payload) };
    default:
      return state;
  }
};
