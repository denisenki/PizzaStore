import React from 'react';

export const sortIthem = [
  { name: 'популярности', sortType: 'rating' },
  { name: 'цене', sortType: 'price' },
  { name: 'алфавиту', sortType: 'title' },
];

function Sort({ sort, OnChangeSort }) {
//  ссылка на окно с сортировкой
  const SortRef = React.useRef();

  // Стейт для окна с сортировкой
  const [isOpen, setIsOpen] = React.useState(0);

  // Проверка: если клик был не на окно с сортировкой, то закрываем окно
  React.useEffect(() => {
    const HandleClickOutside = (event) => {
        if (!event.path.includes(SortRef.current)) {
          setIsOpen(false);
        }
    }

    document.body.addEventListener('click',HandleClickOutside)

    return ()=>{
      document.body.removeEventListener('click',HandleClickOutside)
    }
  }, []);

  const OnClickSort = (index) => {
    // console.log(index);
    OnChangeSort(index);
    // Закрываем окно
    setIsOpen(!isOpen);
  };

  return (
    <div ref={SortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{sort.name}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortIthem.map((obj, i) => (
              <li
                onClick={() => OnClickSort(obj)}
                className={sort.sortType === obj.sortType ? 'active' : ''}>
                {obj.name}
              </li>
              // console.log(obj)
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
