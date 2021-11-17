import axios from "axios";
import { useState } from "react";

export default function NewAnimalForm({animals,setAnimals}) {
  const [submissionData, setSubmissionData] = useState({
    animalName: "",
    species: "",
    breed: "",
    currentLocation: "",
    age: "",
    sex: 'unk',
    medicalHistory: [],
    description: "",
  });

  const baseUrl = "http://localhost:4000/animals";

  const handleChange = (e) => {
    e.preventDefault();
    const cur = e.target;
    setSubmissionData({ ...submissionData, [cur.name]: cur.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      animalName,
      species,
      breed,
      currentLocation,
      age,
      sex,
      medicalHistory,
      description,
    } = submissionData;
    axios.post(baseUrl, {
      animalName: animalName,
      species: species,
      breed: breed,
      currentLocation: currentLocation,
      age: age,
      sex: sex,
      medicalHistory: medicalHistory,
      description: description,
    }).then(res => setAnimals([...animals, res.data])).catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='animalName'
        placeholder='Enter Animal Name'
        value={submissionData.animalName}
        onChange={handleChange}
      />
      <input
        name='description'
        placeholder='Enter Animal Description'
        value={submissionData.description}
        onChange={handleChange}
      />
      <input
        name='age'
        placeholder='Enter Animal Age'
        value={submissionData.age}
        onChange={handleChange}
      />
      <select
        name='sex'
        value={submissionData.sex}
        onChange={handleChange}
      >
        <option>
          unk
        </option>
        <option>M</option>
        <option>F</option>
      </select>
      <input
        name='species'
        placeholder='Enter Animal Species'
        value={submissionData.species}
        onChange={handleChange}
      />
      <input
        name='breed'
        placeholder='Enter Animal Breed'
        value={submissionData.breed}
        onChange={handleChange}
      />
      <input
        name='currentLocation'
        placeholder="Enter Animal's Current Location"
        value={submissionData.currentLocation}
        onChange={handleChange}
      />
      <button type='submit'>Add Animal</button>
    </form>
  );
}
