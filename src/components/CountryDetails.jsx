import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();

  const countryFromJson = countries.find(
    (countryFromArr) => countryFromArr.alpha3Code === id
  );

  const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${countryFromJson.alpha2Code.toLowerCase()}.png`;

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <img src={flagUrl} alt="flag" width="200px" />
        <h1 className="fw-bold fs-2 m-5">{countryFromJson.name.official}</h1>
      </div>

      <div className="row text-center">
        <div className="col-md-6">
          <span className="fw-bold fs-4">Capital:</span>
        </div>
        <div className="col-md-6">
          <span>{countryFromJson.capital}</span>
        </div>
        <hr />
      </div>

      <div className="row text-center mb-2">
        <div className="col-md-6">
          <span className="fw-bold fs-4">Area:</span>
        </div>
        <div className="col-md-6">
          <span>{countryFromJson.area} km2 </span>
        </div>
        <hr />
      </div>

      <div className="row text-center">
        <div className="col-md-6">
          <span className="fw-bold fs-4">Borders:</span>
        </div>
        <div className="col-md-6">
          <span>
            {countryFromJson.borders.map((code) => (
              <li key={code}>
                <Link to={`/${code}`}>
                  {
                    countries.find((item) => item.alpha3Code === code).name
                      .official
                  }
                </Link>
              </li>
            ))}
            {countryFromJson.borders.length === 0 ? 'No borders' : ''}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
