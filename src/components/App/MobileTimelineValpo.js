import React, { useRef } from 'react';
import { ReactComponent as Bar } from '../../img/timeline01_bar_valpo.svg';
import './MobileTimeline.scss';
import styled from 'styled-components'
import  Timeline  from './TimelineValpo';

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


const MobileTimelineValpo = () => {
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
        <h3>Índice PDSI</h3>
        <Bar style={barStyles} />    
        <p>Las reconstrucciones de precipitaciones se realizan en base a un índice de sequías estandarizado, conocido por las siglas PDSI (Palmer drought severity index), que nos indica que tan lluvioso o seco fue un periodo de tiempo. Un valor sobre 4 se considera un año muy lluvioso, mientras que un valor de -4 o inferior corresponde a un año extremadamente seco.</p>
        <h3>¿Qué tan húmedo o seco fue el año en que se realiza el cruce de los Andes por parte de la Expedición libertadora durante el periodo de la Independencia?</h3>
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

export default MobileTimelineValpo;
