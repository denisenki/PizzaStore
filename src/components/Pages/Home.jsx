import React from 'react';
import qs from 'qs';
// import { useNavigate } from 'react-router-dom';

// Импорт из redux
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setFilters } from '../../features/Category/CategorySlice';
import { fetchPizza } from '../../features/PizzaSlice/PizzaSlice';

//импорт компонентов
import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock';
import Sort from '../Sort';
import Sceleton from '../PizzaBlock/Sceleton';
// import Search from '../Search';
import Pagination from '../Pagination/Index';
import { sortIthem } from '../Sort';
import { SelectCategory } from '../../features/Category/CategorySlice';

const Home = ({ searchValue, setSearchValue }) => {
  const { items, status } = useSelector((state) => state.pizza);
  console.log(items);
  // const [ithems, setItems] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  const categoryId = useSelector(SelectCategory);
  console.log('Катерогории', categoryId);

  const [sort, setSort] = React.useState({ name: 'популярности', sortType: 'rating' });
  const [currentPage, setCurrentPage] = React.useState(1);

  //  параметры для поиска
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sorty = `&sortBy=${sort.sortType}&order=asc`;
  const searching = searchValue ? `&search=${searchValue}` : '';

  // Диспетчер для редакса
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  React.useEffect(() => {
    if (window.location.search) {
      // удаляем первый вопросительный знак
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortIthem.find((obj) => obj.sortType === params.sort.sortType);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
    }
  }, []);

  React.useEffect(
    () => {
      dispatch(fetchPizza({ category, sorty, searching, currentPage }));
  
      // Подняться вверх при первом рендере
      window.scrollTo(0, 0);
    },
    [categoryId, sort, searchValue, currentPage]
  );

  //generate URL string
  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //     categoryId,
  //     sort,
  //     currentPage,
  //   });
  //   navigate(`?${queryString}`);
  // }, [categoryId, sort, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => <Sceleton key={index} />);

  // const pizazz = '';
  const pizazz = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  // const pizazz = function (items) {
  //   if (items) {
  //     return items.map((obj) => {
  //       <PizzaBlock key={obj.id} {...obj} />;
  //     });
  //   } else {
  //     return 'Ошибка загрузки';
  //   }
  // };

  const clickCat = (id) => {
    dispatch(setCategory(id));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          OnClickCategory={(id) => {
            clickCat(id);
          }}
        />
        <Sort sort={sort} OnChangeSort={(id) => setSort(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{status === 'loading' ? skeletons : pizazz}</div>
      <Pagination
        onPageChange={(number) => {
          setCurrentPage(number);
        }}
      />
    </>
  );
};

export default Home;
