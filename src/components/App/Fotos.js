import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import Juncal from '../../img/juncal-nor-oriente.jpg'
import Glaciofoto from '../../img/glaciologia_01.jpg'
import Glaciofoto2 from '../../img/glaciologia_02.jpg'
import Erupcion from '../../img/erupcion.png'
import TestigoPedazo from '../../img/testigos_pedazo.png'
import Derretimiento from '../../img/derretimiento01.jpg'
import Derretimiento2 from '../../img/derretimiento02.jpg'








const sliderImages = [
  Juncal,
  Glaciofoto ,
  Glaciofoto2 ,
  Erupcion,
  TestigoPedazo,
  Derretimiento,
  Derretimiento2,
];

const Fotos = () => {

  const [selected, setSelected] = useState(0);

  const handleTransitionRequest = (currentIndex, nextIndex) => {
    setSelected(nextIndex);
  };

  return (

    <div className="wrapperSection wrapper-2">
  
   <h2 className='sticky-text top-black'>Fotos</h2>
   <div className="slider-container">
      <AwesomeSlider
        animation="slide"
    
        play={true}
        infinite={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        buttons={true}
        bullets={false}
        organicArrows={true}
        selected={selected}
        onTransitionRequest={handleTransitionRequest}
        className="slider"
        showThumbnails 
        mobileTouch={true}
      >
        {sliderImages.map((image, index) => (
          <div key={index} data-src={image} />
        ))}
      </AwesomeSlider>
      <div className="slider-controls">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`slider-control ${
              selected === index ? 'active' : ''
            }`}
            onClick={() => setSelected(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Fotos;

