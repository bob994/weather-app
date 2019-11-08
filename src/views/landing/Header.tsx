import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';

export const Header = () => {
  return (
    <header>
      <div className="landing-header-input-group">
        <input type="text" value="Plovdiv" />
        <SearchIcon />
      </div>
      <div className="landing-header-temperature">27&deg;</div>
      <div className="landing-header-type">Sunny</div>
      <button className="landing-header-button" type="button">
        More details
      </button>
    </header>
  );
};
