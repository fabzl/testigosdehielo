import React from 'react';
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
  return (

    <div className="wrapperSection wrapper-2">
   

    <AwesomeSlider
      animation="slide"
      bullets={false}
      organicArrows={false}
      className="slider"
    >
      {sliderImages.map((image, index) => (
        <div key={index} data-src={image} />
      ))}
    </AwesomeSlider>

    </div>
  );
};

export default Fotos;

