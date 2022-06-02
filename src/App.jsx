import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesListJson from './countries.json';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <CountriesList countries={countriesListJson} />
          </div>
          <div className="col-md-8">
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countriesListJson} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
