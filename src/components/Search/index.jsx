import React from 'react';
import { ReactComponent as Close } from './close.svg';
import debounce from 'lodash.debounce';

import styles from './search.module.scss';


function Search({ searchValue, setSearchValue }) {
  const [value, setValue]= React.useState('')
  const inputRef = React.useRef();

  const Debounce = debounce((event) => {
    setSearchValue(event.target.value);
  }, 1000);

  const onchangeHandler = (event) => {
    setValue(event.target.value)
    Debounce(event)
  };

  const OnclickSearch = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  // console.log(searchValue, 'search value');
  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onchangeHandler}
        className={styles.root}
        placeholder="Поиск пиццы"
      />
      {searchValue && <Close onClick={OnclickSearch} className={styles.icon} />}
    </div>
  );
}

export default Search;
