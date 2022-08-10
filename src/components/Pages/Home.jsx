import React from 'react';

import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock';
import Sort from '../Sort';
import Sceleton from '../PizzaBlock/Sceleton';
import Search from '../Search';

const Home = ({ searchValue, setSearchValue }) => {
  console.log(searchValue, 'home search');
  const [ithems, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setcategoryId] = React.useState(0);
  const [sort, setSort] = React.useState({ name: 'популярности', sortType: 'rating' });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://626d16545267c14d5677d9c2.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ``}&sortBy=${sort.sortType}&order=asc`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    // Подняться вверх при первом рендере
    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  const skeletons = [...new Array(6)].map((_, index) => <Sceleton key={index} />);
  // const pizazz = ithems.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const pizazz = ithems
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} OnClickCategory={(id) => setcategoryId(id)} />
        <Sort sort={sort} OnChangeSort={(id) => setSort(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* {
                pizzas.map(obj => <PizzaBlock title={obj.title} price={obj.price} imageUrl={obj.imageUrl} sizes={obj.sizes} types={obj.types}/>)
              } */}
        {isLoading ? skeletons : pizazz}
      </div>
    </>
  );
};

export default Home;
