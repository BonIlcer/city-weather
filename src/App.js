import React from "react";
import "./App.css";
import AddCityForm from "./components/AddCityForm";
import CityList from "./components/CityList";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <hr />
      <Weather />
      <hr />
      <AddCityForm />
      <hr />
      <CityList />
    </div>
  );
}

export default App;
