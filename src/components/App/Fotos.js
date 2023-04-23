import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const sliderImages = [
  'https://picsum.photos/id/1018/1000/600/',
  'https://picsum.photos/id/1015/1000/600/',
  'https://picsum.photos/id/1019/1000/600/',
  'https://picsum.photos/id/1020/1000/600/',
  'https://picsum.photos/id/1021/1000/600/',
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

