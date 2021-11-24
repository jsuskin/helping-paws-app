import React from "react";

export default function Header({ showSignInModal, setShowSignInModal, user, setUser }) {
  const handleLogOut = () => {
    setUser();
    localStorage.clear();
  }
  return (
    <div className='header'>
      {user ? <a href="#" onClick={handleLogOut}>Sign Out</a> : <a href='#' onClick={() => setShowSignInModal(!showSignInModal)}>Sign In/Register</a>}
      
    </div>
  );
}
