import React from "react";

export default function AnimalCard({ animal }) {
  const {
    animalName,
    species,
    breed,
    currentLocation,
    age,
    medicalHistory,
    description,
  } = animal;
  return (
    <li className='animal-card'>
      <div className='animal-container'>
        <div className='animal-name'>
          <h2>{animalName}</h2>
        </div>
        <div className='animal-demo-info-container'>
          <ul className='animal-demo-info' style={{display: 'flex', justifyContent: "space-between"}}>
            <li>{`Age: ${age}`}</li>
            <li>{`Species: ${species}`}</li>
            <li>{`Breed: ${breed}`}</li>
          </ul>
        </div>
        <h3>{`Currently At: ${currentLocation}`}</h3>
        <div className='animal-description'>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
