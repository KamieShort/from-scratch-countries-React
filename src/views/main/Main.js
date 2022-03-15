import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/countries';
import CountryCard from '../../components/CountryCard/CountryCard';
// import Filter from '../../components/Controls/Filter';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [continent, setContinent] = useState('All');

  const options = [
    'All',
    'Oceania',
    'Europe',
    'Africa',
    'North America',
    'Antarctica',
    'South America',
    'Asia',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        console.log(resp);
      } catch (e) {
        setErrorMessage('Woops...something is wrong, please refresh the page.');
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  return (
    <>
      <p className="error">{errorMessage}</p>
      <Filter options={options} callback={setContinent} />
      <div className="main">
        {countries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </>
  );
}
