import "./app.scss";
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardsTable from "./components/CardsTable";
import Header from "./components/Header";
import NewAnimalForm from "./components/NewAnimalForm";

const animalsData = "http://localhost:4000/animals";

function App() {
  const [animals, setAnimals] = useState([]);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    axios.get(animalsData).then(res => {
      setAnimals(res.data)
    });
  }, []);

  return (
    <div className='app'>
      <Header userToken={userToken} setUserToken={setUserToken} />
      <CardsTable animals={animals} />
      <NewAnimalForm animals={animals} setAnimals={setAnimals} />
    </div>
  );
}

export default App;
