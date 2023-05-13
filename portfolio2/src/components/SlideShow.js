import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import prototype2 from '../assets/prototype2.png'
import prototype1 from '../assets/prototype1.png'

export default function SlideShow(props) {
  const images = [prototype1, prototype2]
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (


      <div>
      <Carousel activeIndex={index} onSelect={handleSelect} className = "slideShow">

        {props.items.map (item => {
          return (
            <Carousel.Item>
            <img
              className={item.style}
              src={images[item.img]}
              alt={item.tag}
            />
          </Carousel.Item>

          )})}

      </Carousel>
      </div>

  );
}

