import React from 'react';
import './Country.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img alt={name} src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
