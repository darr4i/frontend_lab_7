import React from 'react';

function Image(props) {
  return (
    <div className="city-photo">
      <img
        src={props.src}
        alt="Львів, Ринкова площа"
        width="500"
      />
    </div>
  );
}

export default Image;
