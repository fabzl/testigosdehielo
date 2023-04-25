import React, { useRef } from 'react';
import { ReactComponent as Bar } from '../../img/timeline01_bar_valpo.svg';
import './MobileTimeline.scss';
import styled from 'styled-components'
import  Timeline  from './TimelineCO2';

const Circle = styled.div`
	background-color:white;
	width:100%;
	height:100%;
  border-radius:50%;
  top:0;
  position:absolute;
  z-index:-1;
`

const barStyles = {
  width: '80%',
  margin: '0 auto',
};


const MobileTimelineCO2 = () => {
  const timelineContainerRef = useRef(null);

  const handleScroll = (deltaX) => {
    if (timelineContainerRef.current) {
      console.log('scrollBy executed: ', deltaX);
      timelineContainerRef.current.scrollBy({
        left: deltaX,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="wrap-timeline">
      <div className="timeline-circle">
        <h3>Concentración de moléculas de CO2</h3>
        <Bar style={barStyles} />    
        <p>Concentración anual promedio de moléculas de dióxido de carbono (CO2) en la atmósfera. La concentración se mide en moléculas de CO2 contenidas por cada millón de moléculas de gases  atmosféricos. La atmósfera es una mezcla de distintos tipos de gases, los principales componentes son: el nitrógeno 78% de N2), oxígeno (21% de O2), argón (0,93% de Ar) y muchos otros gases en concentraciones menores o niveles traza.</p>
        <h3>¿Qué tan “pura” era la atmósfera antes y después de la primera guerra mundial?</h3>
        <Circle/>
        </div>
    <div className="mobile-timeline-container" onClick={() => handleScroll()}>
    
      <div className="mobile-timeline-wrapper" ref={timelineContainerRef}>
      
        <Timeline className="timeline-graphics"  />
      </div>
    </div>
    </div>
  );
};

export default MobileTimelineCO2;
