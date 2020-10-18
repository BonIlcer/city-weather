import { CREATE_CITY } from "../reducers/types";

export function createCity(city) {
  return {
    type: CREATE_CITY,
    payload: city,
  };
}
