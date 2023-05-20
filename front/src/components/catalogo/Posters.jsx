import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action';


export const Posters = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);
  const [hoveredItem, setHoveredItem] = useState(null);

  

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

  const handleHover = (itemId) => {
    setHoveredItem(itemId);
  };

  return (
    // <div>
    //     {data && (
    //     <ul>
    //       {data.map((item) => (
    //         <div>
    //           <li>   Title: {item.title} <br/>Price:{item.price}</li>

    //           <img src={item.image}></img>
    //         </div>
            
    //       ))}
    //     </ul>
    //   )}   
    // </div>

    <div>
      
      {data && (data.map((item) => (
        <div
          key={item.id}
          onMouseEnter={() => handleHover(item.id)}
          onMouseLeave={() => handleHover(null)}
        >
          <img
            src={item.image}
            alt={item.title}
          />
          {hoveredItem === item.id && <span>
              {item.title} <br /> {item.price}
              </span>
            
            }
        </div>
      )))}
    </div>
  );
};

