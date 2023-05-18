import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action';
import myBooks from '../../../../json-Liboros.json'

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  

  useEffect(() => {
    dispatch(fetchData());
    
    console.log(myBooks)
    console.log(data)
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
       {myBooks && (
        <ul>
          {myBooks.map((item) => (
            <li key={item.id}>Id:{item.id}  <br />Title: {item.title} <br/>Price:{item.price}</li>
          ))}
        </ul>
      )} 

      {/* {data.title} */}
    </div>
  );
};

export default Home;