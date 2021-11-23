import React from "react";

export default function Header({ showSignInModal, setShowSignInModal, token }) {
  return (
    <div className='header'>
      {token.length ? <p>logged in</p> : <a href='#' onClick={() => setShowSignInModal(!showSignInModal)}>Sign In/Register</a>}
      
    </div>
  );
}
