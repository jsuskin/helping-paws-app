import { useState } from "react";

export default function AddAnimalForm({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='animalName'
        placeholder='Enter Animal Name'
        onChange={handleChange}
      />
      <input
        type='text'
        name='age'
        placeholder='Enter Animal Age'
        onChange={handleChange}
      />
      <input
        type='text'
        name='species'
        placeholder='Enter Animal Species'
        onChange={handleChange}
      />
      <input
        type='text'
        name='breed'
        placeholder='Enter Animal Breed'
        onChange={handleChange}
      />
      <input
        type='text'
        name='sex'
        placeholder='Enter Animal Sex'
        onChange={handleChange}
      />
      <input
        type='text'
        name='currentLocation'
        placeholder='Enter Animal Current Location'
        onChange={handleChange}
      />
      <input
        type='text'
        name='description'
        placeholder='Enter Animal Description'
        onChange={handleChange}
      />
      <input type='submit' value='submit' />
    </form>
  );
}
