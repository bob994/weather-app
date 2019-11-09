import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';

export const Header = () => {
  return (
    <header>
      <div className="header-input-group">
        <input type="text" value="Plovdiv" />
        <SearchIcon />
      </div>
      <div className="header-temperature">27&deg;</div>
      <div className="header-type">Sunny</div>
      <button className="header-button" type="button">
        More details
      </button>
    </header>
  );
};
