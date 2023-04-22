import React, { useRef } from 'react';
import { ReactComponent as Bar } from '../../img/timeline01_bar.svg';
import { ReactComponent as Timeline } from '../../img/timeline_01.svg';
import './MobileTimeline.scss';
import styled from 'styled-components'


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


const MobileTimeline = () => {
  const timelineContainerRef = useRef(null);

  const handleScroll = (deltaX) => {
    if (timelineContainerRef.current) {
      console.log('scrollBy executed');
      timelineContainerRef.current.scrollBy({
        left: deltaX,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mobile-timeline-container">
      <div className="mobile-timeline-wrapper" ref={timelineContainerRef}>
        <div className="timeline-circle">
        <h3>Grados Celsius (°C)</h3>
        <Bar style={barStyles} />    
        <p>Una "anomalía" de temperatura nos indica una desviación obre un periodo de referencia significativo (30 años) . En este caso el periodo de referencia es la media de temperaturas entre 1961 y 1990. Lo que quiere decir que un valor de +1.0, implica que la temperatura promedio anual de un sitio (enero a diciembre) estaría +1.0ºC sobre la media de referencia.</p>
        <h3>¿Qué tan caluroso o frío fue el año en que naciste? </h3>
        <Circle/>

        </div>
        <Timeline className="timeline-graphics" onClick={() => handleScroll(-2000)} />
      </div>
    </div>
  );
};

export default MobileTimeline;
