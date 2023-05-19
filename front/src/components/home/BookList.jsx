import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  

  useEffect(() => {
    dispatch(fetchData());
  
    console.log(data)
  }, [dispatch]);

  console.log(data)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>Id:{item.id}  <br />Title: {item.title} <br/>Price:{item.price}</li>
          ))}
        </ul>
      )}  

      
    </div>
  );
};

export default Home;