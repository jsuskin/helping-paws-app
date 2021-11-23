import {useState} from 'react';
import axios from 'axios';

export default function AddAnimalModal({showModal, setShowModal}) {
  return (
    <div
      className='add-animal-modal modal'
      style={showModal ? { display: "flex" } : { display: "none" }}
    >
      <div className='modal-content'>
        <span className='close' onClick={() => setShowModal(false)}>
          &times;
        </span>
        <form>
          <input type="text" name="animalName" placeholder="Enter Animal Name" />
          <input type="text" name="age" placeholder="Enter Animal Age" />
          <input type="text" name="species" placeholder="Enter Animal Species" />
          <input type="text" name="breed" placeholder="Enter Animal Breed" />
          <input type="text" name="sex" placeholder="Enter Animal Sex" />
          <input type="text" name="currentLocation" placeholder="Enter Animal Current Location" />
          <input type="text" name="description" placeholder="Enter Animal Description" />
        </form>
      </div>
    </div>
  );
}
