import { useState } from "react";
import "./app.scss";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import SignInModal from "./components/SignInModal";
import AddAnimalModal from "./components/AddAnimalModal";

export default function App() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showAddAnimalModal, setShowAddAnimalModal] = useState(false);
  const [token, setToken] = useState("");

  return (
    <>
      <Sidenav showAddAnimalModal={showAddAnimalModal} setShowAddAnimalModal={setShowAddAnimalModal} />
      <Header
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
        token={token}
      />
      <SignInModal
        showModal={showSignInModal}
        setShowModal={setShowSignInModal}
        setToken={setToken}
      />
      <AddAnimalModal
        showModal={showAddAnimalModal}
        setShowModal={setShowAddAnimalModal}
      />
    </>
  );
}
