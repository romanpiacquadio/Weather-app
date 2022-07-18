import './App.css';
import Cards from './components/Cards.jsx';
import Navbar from './components/Navbar.jsx';
import ciudades from './pruebitas.js';
import axios from 'axios'


function App() {

  function onSearch (city) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5348c1f32968b89889de66792ec0dc56&units=metric`) 
      .then(response => response.data)
    
  }

  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>
      <Cards cities={ciudades}/>
    </div>
  );
}

export default App;
