import React from "react";
import AnimalCard from "./AnimalCard";

export default function CardsTable({ animals }) {
  // console.log(animals)
  return (
    <div className='cards-table'>
      <ul className='cards-list'>
        {animals.map((animal) => (
          <AnimalCard key={animal._id} animal={animal} />
        ))}
      </ul>
    </div>
  );
}
