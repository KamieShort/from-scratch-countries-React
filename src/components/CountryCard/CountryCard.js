import React from 'react';
import './Country.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img
        alt={name}
        src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`}
        // width="72"
        // height="54"
      />
    </div>
  );
}
