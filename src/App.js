import { useState, useEffect } from "react";
import "./app.scss";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import SignInModal from "./components/SignInModal";
import AddAnimalModal from "./components/AddAnimalModal";

export default function App() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showAddAnimalModal, setShowAddAnimalModal] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if(loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser)
    }
  }, []);

  return (
    <>
      <Sidenav
        showAddAnimalModal={showAddAnimalModal}
        setShowAddAnimalModal={setShowAddAnimalModal}
      />
      <Header
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
        user={user}
        setUser={setUser}
      />
      <SignInModal
        showModal={showSignInModal}
        setShowModal={setShowSignInModal}
        user={user}
        setUser={setUser}
      />
      <AddAnimalModal
        showModal={showAddAnimalModal}
        setShowModal={setShowAddAnimalModal}
      />
    </>
  );
}
