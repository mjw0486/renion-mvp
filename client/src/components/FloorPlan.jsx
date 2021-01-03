import React from 'react';
import Room from './Room.jsx';

const FloorPlan = function() {
  const rooms = [1, 2, 3, 4]
  return (
    rooms.map((room, index) => {
      console.log(index);
      return(
        <Room key={index} roomNumber={index}/>
      )
    })
  );
};

export default FloorPlan;