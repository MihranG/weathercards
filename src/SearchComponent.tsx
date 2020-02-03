import React, { FC, useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const SearchComponent: FC<{ handleSearchClick: (string: string) => void }> = ({
  handleSearchClick,
}) => {
  const [city, setCity] = useState<string>('');
  const cityInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const clickHandler = () => {
    handleSearchClick(city);
  };
  return (
    <div className="search_wrapper">
      <TextField
        data-testid="search-input"
        value={city}
        onChange={cityInputHandler}
        label="Write the city name"
      />
      <Button
        data-testid="search-button"
        disabled={!city}
        variant="outlined"
        size="medium"
        color="primary"
        onClick={clickHandler}
      >
        Get the Weather!
      </Button>
    </div>
  );
};

export default SearchComponent;
