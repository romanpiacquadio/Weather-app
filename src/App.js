import './App.css';
import Cards from './components/Cards.jsx';
import Navbar from './components/Navbar.jsx';
import axios from 'axios'
import { useState } from 'react';


function App() {
  let [cities, setCities] = useState([]) 

  function onSearch (city) {
    let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5348c1f32968b89889de66792ec0dc56&units=metric`) 
      .then(response => response.data)
      .then(r => setCities([...cities, r]))
      .catch(r => ("Ciudad no encontrada"))
  }

  function onFilter (city) {
    setCities(cities.filter(c => c.name.toLowerCase() !== city.toLowerCase()))
  }

  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>
      <Cards cities={cities} onFilter={onFilter}/>
      {console.log(cities)}
    </div>
  );
}

export default App;
