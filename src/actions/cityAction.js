import { CREATE_CITY, DELETE_CITY } from "../reducers/types";

export function createCity(city) {
  return {
    type: CREATE_CITY,
    payload: city,
  };
}

export function deleteCity(cityId) {
  return {
    type: DELETE_CITY,
    payload: cityId,
  };
}
