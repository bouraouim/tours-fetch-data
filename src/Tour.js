import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className=" rounded-2xl bg-[#FEFEFF] drop-shadow-lg  pb-2  mb-2 hover:drop-shadow-2xl">
      <img src={image} alt={name} className="rounded-t-2xl object-cover w-full h-1/2" />
      <footer>
        <div className=" flex justify-between items-center my-2 mx-2">
          <h4 className=' font-bold'>{name}</h4>
          <h4 className="bg-[#F8E9E2] px-2 font-medium py-1 rounded-lg">${price}</h4>
        </div>
        <p className='mb-2 mx-2 text-gray-500 text-left'>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className=' text-blue-300' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : '  Read More'}
          </button>
        </p>
        <div className='flex justify-center  '>
        <button className=" w-1/4 bg-gradient-to-r   from-[#FA3C66] to-[#FA9639] px-2 py-1 rounded-lg" onClick={() => removeTour(id)}>
          not interested
        </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;