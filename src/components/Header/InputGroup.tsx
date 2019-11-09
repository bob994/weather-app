import React, { ChangeEvent, FunctionComponent } from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';
import { ReactComponent as Spinner } from '../../assets/icons/Spinner.svg';

interface Props {
  city: string;
  isFetching: boolean;
  isFocused: boolean;
  handleCityChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleBlur: () => void;
}

export const InputGroup: FunctionComponent<Props> = ({
  city,
  isFetching,
  isFocused,
  handleCityChange,
  handleBlur,
  handleFocus,
}) => {
  return (
    <div className="header-input-group">
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Insert city"
      />
      {isFetching ? <Spinner /> : !isFocused ? <SearchIcon /> : null}
    </div>
  );
};
