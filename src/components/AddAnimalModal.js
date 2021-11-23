import { useState } from "react";
import AddAnimalForm from "./AddAnimalForm";
import axios from "axios";

export default function AddAnimalModal({ showModal, setShowModal }) {
  const [formData, setFormData] = useState({
    animalName: "",
    age: "",
    species: "",
    breed: "",
    sex: "",
    currentLocation: "",
    description: "",
  });

  const baseUrl = "http://localhost:4000/animals";

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {animalName, age, species, breed, sex, currentLocation, description} = formData;
    axios
      .post(baseUrl, {
        animalName: animalName,
        age: age,
        species: species,
        breed: breed,
        sex: sex,
        currentLocation: currentLocation,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setFormData({
      animalName: "",
      age: "",
      species: "",
      breed: "",
      sex: "",
      currentLocation: "",
      description: "",
    });
    setShowModal(false);
  };

  return (
    <div
      className='add-animal-modal modal'
      style={showModal ? { display: "flex" } : { display: "none" }}
    >
      <div className='modal-content'>
        <span className='close' onClick={() => setShowModal(false)}>
          &times;
        </span>
        <div className='user-action-form'>
          <AddAnimalForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
