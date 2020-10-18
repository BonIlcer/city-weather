import React, { useState } from "react";
import { connect } from "react-redux";
import { createCity } from "../actions/cityAction";

function AddCityForm({ createCity }) {
  const [value, setValue] = useState("");
  function submitHandler(e) {
    e.preventDefault();

    if (!e.target.city.value.trim()) {
      //pass
    } else {
      createCity({ name: e.target.city.value, id: Date.now() });
    }
    e.target.city.value = "";
  }

  function changeInputHandler(e) {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <h2>City Form</h2>
      <input
        type="text"
        name="city"
        value={value}
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
