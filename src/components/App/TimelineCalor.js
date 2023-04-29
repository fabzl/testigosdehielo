import React from 'react';
import './Timeline.scss';

import TinyTriangle from "../../img/triangle.svg"
import TimelineArrow from "../../img/timeline-arrow.svg"

const TimelineCalor = () => {
	// Define timeline data
	const timelineData = [
	  {
		 "year": 1970,"color": "#F7B9A1",tooltip:"Plan de acción de Mar del Plata, se acordó el derecho al agua potable, en cantidad y calidad para todos los pueblos."
	   },
	   {
		 "year": 1971,"color": "#FDF4EF"
	   },
	   {
		 "year": 1972,"color": "#FDF4EF"
	   },
	   {
		 "year": 1973,"color": "#FDF4EF"
	   },
	   {
		 "year": 1974,"color": "#FBDFD2"
	   },
	   {
		 "year": 1975,"color": "#FDF4EF"
	   },
	   {
		 "year": 1976,"color": "#FDF4EF"
	   },
	   {
		 "year": 1977,"color": "#FDF4EF"
	   },
	   {
		 "year": 1978,"color": "#FDF4EF"
	   },
	   {
		 "year": 1979,"color": "#FBDFD2"
	   },
	   {
		 "year": 1980,"color": "#FBDFD2"
	   },
	   {
		 "year": 1981,"color": "#FBDFD2"
	   },
	   {
		 "year": 1982,"color": "#FDF4EF"
	   },
	   {
		 "year": 1983,"color": "#FDF4EF"
	   },
	   {
		 "year": 1984,"color": "#FBDFD2"
	   },
	   {
		 "year": 1985,"color": "#FBDFD2",tooltip:"Declaración de agotamiento de la primera sección del río Aconcagua, Chile."
	   },
	   {
		 "year": 1986,"color": "#F18F73"
	   },
	   {
		 "year": 1987,"color": "#FBDFD2"
	   },
	   {
		 "year": 1988,"color": "#FDF4EF"
	   },
	   {
		 "year": 1989,"color": "#FDF4EF"
	   },
	   {
		 "year": 1990,"color": "#FBDFD2"
	   },
	   {
		 "year": 1991,"color": "#FBDFD2"
	   },
	   {
		 "year": 1992,"color": "#FDF4EF"
	   },
	   {
		 "year": 1993,"color": "#FBDFD2"
	   },
	   {
		 "year": 1994,"color": "#FBDFD2"
	   },
	   {
		 "year": 1995,"color": "#FBDFD2"
	   },
	   {
		 "year": 1996,"color": "#FBDFD2"
	   },
	   {
		 "year": 1997,"color": "#F18F73"
	   },
	   {
		 "year": 1998,"color": "#FBDFD2"
	   },
	   {
		 "year": 1999,"color": "#FDF4EF"
	   },
	   {
		 "year": 2000,"color": "#FDF4EF"
	   },
	   {
		 "year": 2001,"color": "#FBDFD2"
	   },
	   {
		 "year": 2002,"color": "#CB181E"
	   },
	   {
		 "year": 2003,"color": "#F18F73"
	   },
	   {
	   "year": 2004,   "color": "#FBDFD2",tooltip:"Declaración de agotamiento del río Putaendo y sus afluentes, Chile. "
   },
   {
	  "year": 1970,
	  "color": "#F7B9A1"
	},
	{
	  "year": 1971,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1972,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1973,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1974,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1975,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1976,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1977,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1978,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1979,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1980,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1981,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1982,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1983,
	  "color": "#FDF4EF",
	  down:"true",
	  tooltip:"Declaración de agotamiento de la primera sección del río Mapocho y sus afluentes, Chile.",
	},
	{
	  "year": 1984,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1985,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1986,
	  "color": "#F18F73"
	},
	{
	  "year": 1987,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1988,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1989,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1990,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1991,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1992,
	  "color": "#FDF4EF"
	},
	{
	  "year": 1993,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1994,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1995,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1996,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1997,
	  "color": "#F18F73",
	  tooltip:"Se declara como agotada la cuenca de Petorca, Chile.",
	  down: "true",
	},
	{
	  "year": 1998,
	  "color": "#FBDFD2"
	},
	{
	  "year": 1999,
	  "color": "#FDF4EF"
	},
	{
	  "year": 2000,
	  "color": "#FDF4EF"
	},
	{
	  "year": 2001,
	  "color": "#FBDFD2"
	},
	{
	  "year": 2002,
	  "color": "#CB181E"
	},
	{
	  "year": 2003,
	  "color": "#F18F73"
},
{
"year": 2004,
"color": "#FBDFD2"
},
{
   "year": 2005, "color": "#FDF4EF"
   },
   {
   "year": 2006,   "color": "#F18F73"
   },
   {
   "year": 2007,   "color": "#FBDFD2"
   },
   {
   "year": 2008,   "color": "#F7B9A1", down: "true", tooltip: "Declaración de zona de escasez hídrica, cuenca del río  Aconcagua, Chile" 
   },
   {
   "year": 2009,   "color": "#E63C2E"
   },
   {
   "year": 2010,   "color": "#FDF4EF",tooltip:"Se declara zona de escasez hídrica la comuna de Quilpué, cuencas de Ligua-Petorca y Aconcagua"
   },
   {
   "year": 2011, down: "true",  "color": "#F7B9A1",tooltip:"Declaración zona de escasez hídrica la comuna de Quilpué, Aconcagua, Til-Til y provincia de Petorca y la Ligua"
   },
   {
   "year": 2012,   "color": "#F18F73"
   },
   {
   "year": 2013,   "color": "#CB181E"
   },
   {
   "year": 2014,   "color": "#E63C2E"
   },
   {
   "year": 2015,   "color": "#671414"
   },
   {
   "year": 2016,   "color": "#E63C2E"
   },
   {
   "year": 2017,   "color": "#F18F73",
   },
   {
   "year": 2018,  down: true, "color": "#F7B9A1",tooltip:"Se declara como zona de prohibición la cuenca de Petorca, Chile"
   },
   {
   "year": 2019,   "color": "#671414",tooltip:"2.000 millones de personas viven en países que sufren escasez de agua"
   },
   {
   "year": 2020,   "color": "#671414"
   },
   {
   "year": 2021, down: "true",  "color": "#FBDFD2",tooltip:"Déficit de precipitaciónde un 63% en Valparaíso, Chile"
   },
   {
   "year": 2022,   "color": "#FBDFD2",tooltip:"Declaración de zona de escasez las regiones de Santiago y Valparaíso."   }

		];
	// Define timeline elements
	const timelineElements = timelineData.map((item) => (
	<div
	  key={item.year+""+Math.random()}
	  className="timeline-item"
	  title={item.tooltip}>
		
		<div className='tooltip-wrapper'> 

{(item.tooltip && !item.down)? <div className={(Number(item.year) > 2000)?"timeline-tooltip  reverse" : "timeline-tooltip"}>

	<img  alt='timeline-arrow' className='timeline-arrow' src={TimelineArrow}/>
	<div className='info-tooltip-up'>
					<h4 >{item.year}</h4> 
					<p>{item.tooltip}</p>
				</div>
</div>: ""}

</div>
	<div className="timeline-color-block" 
  style={{ backgroundColor: item.color }}>
	</div>
	<div className='tooltip-wrapper down-wrapper'> 
	   <img className="timeline-triangle" src={TinyTriangle} alt="timeline-triangle"></img>
		<p className='timeline-year'>{item.year}</p>

		{(item.tooltip && item.down)? <div className={(Number(item.year) > 1950)?"timeline-tooltip down reverse" : "timeline-tooltip down"}>

			<img  alt='timeline-arrow' className='timeline-arrow' src={TimelineArrow}/>
			<div className='info-tooltip'>
			<h4>{item.year}</h4> 
			<p>{item.tooltip}</p>
		</div>
		</div>: ""}
   </div> 
</div >
  ));


// Render timeline
return <div className="timeline-container">
	{timelineElements}
	</div>;
};

export default TimelineCalor;