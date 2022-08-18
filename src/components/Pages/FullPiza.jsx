import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

const FullPiza = () => {
  const params = useParams();

  console.log(params);

  return <h2>userId is 👉️ {params.id}</h2>;
};

export default FullPiza;
