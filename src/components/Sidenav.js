import React from "react";
import headerImg from "../assets/svg/header_img.svg";

export default function Sidenav({showAddAnimalModal, setShowAddAnimalModal}) {
  const animalCategories = [
    { text: "Dogs" },
    { text: "Cats" },
    { text: "Rabbits" },
    { text: "Birds" },
  ];

  return (
    <div className='sidenav'>
      <div className='sidenav__logo-wrapper'>
        <img
          src={headerImg}
          className='sidenav__logo'
          width='150px'
          height='150px'
          alt='logo'
        />
      </div>
      <hr />
      <div className='sidenav__search'>
        <input type='text' name='search' placeholder='Search' />
        <i className='fas fa-search' />
      </div>
      <div className='sidenav__animal-categories'>
        <ul>
          {animalCategories.map((category) => (
            <li>
              <a href='#'>{category.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className='sidenav__user-actions'>
        <ul>
          <li>
            <a href='#' onClick={() => setShowAddAnimalModal(true)}>List an Animal in Need</a>
          </li>
          <li>
            <a href='#'>Make a Donation</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
