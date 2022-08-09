import React from 'react';
import { ReactComponent as Logo } from './logo.svg';

import styles from './search.module.scss';

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <input
        value={searchValue }
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        className={styles.root}
        placeholder="Поиск пиццы"
      />
       {searchValue && (<Logo onClick={()=>{setSearchValue('')}} className={styles.icon}/>)}
    </div>
  );
}

export default Search;
