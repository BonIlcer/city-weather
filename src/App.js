import React from "react";
import "./App.css";
import AddCityForm from "./components/AddCityForm";
import CityList from "./components/CityList";

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <AddCityForm />
      <CityList />
    </div>
  );
}

export default App;
