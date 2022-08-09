import React from 'react';

let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
// console.log(categories);

function Categories({ value, OnClickCategory }) {

  // const OnClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => ( 
          <li key={i} onClick={() => OnClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
