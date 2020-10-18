import React, { useState } from "react";
import { connect } from "react-redux";
import { createCity } from "../actions/cityAction";

function AddCityForm({ createCity }) {
  const [value, setValue] = useState({ city: "" });
  function submitHandler(e) {
    e.preventDefault();

    if (!e.target.city.value.trim()) {
      //pass
    } else {
      createCity({ name: e.target.city.value, id: Date.now() });
    }
    setValue({ city: "" });
  }

  function changeInputHandler(e) {
    const key = e.target.name;
    const val = e.target.value;

    setValue((prevState) => ({
      ...prevState,
      [key]: val,
    }));
  }
  return (
    <form onSubmit={submitHandler}>
      <h2>City Form</h2>
      <input
        type="text"
        name="city"
        value={value.city}
        onChange={changeInputHandler}
      />
      <button type="submit">Add city</button>
    </form>
  );
}

const mapDispatchToProps = {
  createCity,
};

export default connect(null, mapDispatchToProps)(AddCityForm);
