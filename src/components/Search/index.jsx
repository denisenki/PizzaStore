import React from 'react';
import { ReactComponent as Close } from './close.svg';

import styles from './search.module.scss';

function Search({ searchValue, setSearchValue }) {
  console.log(searchValue, 'search value');
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        className={styles.root}
        placeholder="Поиск пиццы"
      />
      {searchValue && (
        <Close
          onClick={() => {
            setSearchValue('');
          }}
          className={styles.icon}
        />
      )}
    </div>
  );
}

export default Search;
