import React from 'react';
import './Country.css';

export default function CountryCard({ name, image }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img al={name} height="50px" src={image} />
    </div>
  );
}
