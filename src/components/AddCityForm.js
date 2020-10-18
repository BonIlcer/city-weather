import React, { useState } from "react";

function AddCityForm() {
  const [value, setValue] = useState("");
  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    const jsonFormData = JSON.stringify(obj);
    console.log(jsonFormData);

    e.target.city.value = "";
  }

  function changeInputHandler(e) {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
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

export default AddCityForm;
