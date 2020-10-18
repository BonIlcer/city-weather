import React from "react";
import { connect } from "react-redux";
import CityItem from "./CityItem";

function CityList({ cities }) {
  if (!cities.length) {
    return <h2>No cities!</h2>;
  }
  const list = cities.map((city) => <CityItem city={city} key={city} />);
  return (
    <div className="city-list">
      <h2>City List</h2>
      {list}
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    cities: state.rootCities.cities,
  };
};

export default connect(mapStateToProps, null)(CityList);
