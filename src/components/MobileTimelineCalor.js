import React, { useRef } from 'react';
import { ReactComponent as Bar } from '../../img/timeline01_bar_valpo.svg';
import './MobileTimeline.scss';
import styled from 'styled-components'
import  Timeline  from './TimelineCalor';

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


const MobileTimelineCalor = () => {
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
        <h3>Número de días</h3>
        <Bar style={barStyles} />    
        <p>Una ola de calor se define como el periodo de tiempo en el cual las temperaturas máximas diarias superan un umbral diario considerado extremo, por tres días consecutivos o más. Este umbral diario corresponde a temperaturas por sobre el 90% de las temperaturas típicas (percentil 90) de distribución para el periodo de referencia entre 1981 y 2010. En esta figura se puede observar el número total de días por año que califican como una “ola de calor”.</p>
        <h3>La ola de calor más extensa registrada en Valparaíso ocurrió hace pocos meses y fue en diciembre de 2022 con una duración de 8 días continuos.</h3>
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

export default MobileTimelineCalor;
