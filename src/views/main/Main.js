import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/countries';
import CountryCard from '../../components/CountryCard/CountryCard';

import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);

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
        // console.log(resp);
        setCountries(resp);

        setTimeout(() => {
          setLoading(false);
        }, 750);
      } catch (e) {
        setErrorMessage('Woops...something went wrong. Please refresh the page.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <>
      <p className="error">{errorMessage}</p>
      <select onChange={(e) => setContinent(e.target.value)}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <div className="main">
        {filterCountries().map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </>
  );
}
