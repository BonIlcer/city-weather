import { act } from "react-dom/test-utils";
import { CREATE_CITY, DELETE_CITY } from "./types";

const initialState = {
  cities: [
    { name: "New York", id: 0 },
    { name: "Moscow", id: 1 },
  ],
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CITY:
      return { ...state, cities: state.cities.concat(action.payload) };
    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload.id),
      };
    default:
      return state;
  }
};
