import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

interface SearchBoxProps {
  onSearch: (query: string) => void; 
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const classes = useStyles(); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
      setSearchValue(value);
      onSearch(value); 

  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSearch(searchValue);
    }
  };

  return (
    <div className={classes.searchBoxContainer}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
        className={classes.inputField}
      />
    </div>
  );
};

const useStyles = createUseStyles(
    {
  searchBoxContainer: {
    position: 'relative',
    maxWidth: '100%',
    margin: '10px 0',
  },
  inputField: {
    width: '100%',
    padding: '12px 20px',
    fontSize: '16px',
    border: '1px solid #333',
    borderRadius: '8px',
    backgroundColor: '#171E2b', 
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
    position: 'absolute',
    bottom: '-20px',
  },
});

export default SearchBox;
