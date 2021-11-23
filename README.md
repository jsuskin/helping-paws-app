```javascript
// App.js
import "./app.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import CardsTable from "./components/CardsTable";
import Header from "./components/Header";
import NewAnimalForm from "./components/NewAnimalForm";

const animalsData = "http://localhost:4000/animals";

export default function App() {
  const [animals, setAnimals] = useState([]);
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    axios.get(animalsData).then(res => setAnimals(res.data));
  }, []);

  return (
    <div className='app'>
      <Header userToken={userToken} setUserToken={setUserToken} />
      <CardsTable animals={animals} />
      {/* <NewAnimalForm animals={animals} setAnimals={setAnimals} /> */}
    </div>
  );
}

```

```javascript
/// Header.js
import UserArea from "./UserArea";
import headerImg from "../assets/svg/header_img.svg";

export default function Header({ userToken, setUserToken }) {
  return (
    <nav>
      <div className='logo'>
        <h1 className='app-title'>Helping Paws</h1>
        {/* <img src={headerImg} width='10%' height='10%' /> */}
      </div>
      <UserArea userToken={userToken} setUserToken={setUserToken} />
    </nav>
  );
}

```

```javascript
// CardsTable.js
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
```

```javascript
// AnimalCard.js

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

```

```javascript
// NewAnimalForm.js

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

```

```javascript
// UserArea.js

import { useState } from 'react';
import axios from "axios";

export default function UserArea({ userToken, setUserToken }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [signInInfo, setSignInInfo] = useState({ email: "", password: "" });

  const baseUrl = "http://localhost:4000/user";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signInInfo;
    axios
      .post(baseUrl + "/login", { email: email, password: password })
      .then((res) => setUserToken(res.data))
      .catch((err) => console.log(err));
    setSignInInfo({ email: "", password: "" });
    setShowSignIn(!showSignIn);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSignInInfo({ ...signInInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login-logout">
        {userToken.length ? (
          <a href='#' onClick={() => setUserToken("")}>
            logout
          </a>
        ) : (
          <a href='#' onClick={() => setShowSignIn(!showSignIn)}>
            login
          </a>
        )}
      </div>
      {showSignIn ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='email'
            onChange={handleChange}
            placeholder='Enter email'
          />
          <input
            type='text'
            name='password'
            onChange={handleChange}
            placeholder='Enter Password'
          />
          <input type='submit' />
        </form>
      ) : null}
    </>
  );
}

```

```scss
// app.scss

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  // background: #fcf9ed
}

nav {
  // position: absolute;
  // top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px dotted red;
  width: 100%;
  padding: 0;

  .logo, .login-logout { padding: 10px 33px; }
}

li {
  list-style-type: none;
}

.animal-card {
  padding: 3rem;
  margin: 2rem;
  box-shadow: 4px 2.5px 2.5px #020;
  border-radius: 10px;
  border: 1px solid black;
}

form {
  display: flex;
  flex-wrap: wrap;
}
```