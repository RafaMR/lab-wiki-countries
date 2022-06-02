import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <section>
      <h1 style={{ textAlign: 'center' }}>Countries List</h1>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              to={`/${country.alpha3Code}`}
              className="text-decoration-none
                cardCountries list-group-item d-flex flex-column
                justify-content-center align-items-center"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="flag"
              />
              <p className="mb-0"> {country.name.official} </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CountriesList;
