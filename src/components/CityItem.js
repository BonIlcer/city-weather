import React from "react";
import { useDispatch } from "react-redux";
import { deleteCity } from "../actions/cityAction";

function CityItem({ city, id }) {
  const dispatch = useDispatch();
  return (
    <div className="city-item">
      <span>{id}:</span>
      <h4 style={{ display: "inline", margin: "20px" }}>{city}</h4>
      <button onClick={() => dispatch(deleteCity({ id: id }))}>✖</button>
    </div>
  );
}

export default CityItem;
