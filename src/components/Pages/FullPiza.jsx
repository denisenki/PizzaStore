import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullPiza = () => {
  const [value, setValue] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://626d16545267c14d5677d9c2.mockapi.io/items/${id}`);
        setValue(data);
        console.log(value);
      } catch (error) {
        alert('Server Error');
      }
    }
    fetchPizza();
  }, []);

  if (!value) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <div>
        <img src={value.imageUrl} />
      </div>
    </div>
  );
};
export default FullPiza;
