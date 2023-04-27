import React from 'react';
import './Timeline.scss';

import TinyTriangle from "../../img/triangle.svg"
import TimelineArrow from "../../img/timeline-arrow.svg"

const TimelineCalor = () => {
	// Define timeline data
	const timelineData = [
	  {
		 "year": 1970,"color": "#F7B9A1"
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
		 "year": 1985,"color": "#FBDFD2"
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
	   "year": 2004,   "color": "#FBDFD2"
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
	  "color": "#FDF4EF"
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
	  "color": "#F18F73"
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
   "year": 2008,   "color": "#F7B9A1"
   },
   {
   "year": 2009,   "color": "#E63C2E"
   },
   {
   "year": 2010,   "color": "#FDF4EF"
   },
   {
   "year": 2011,   "color": "#F7B9A1"
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
   "year": 2017,   "color": "#F18F73"
   },
   {
   "year": 2018,   "color": "#F7B9A1"
   },
   {
   "year": 2019,   "color": "#671414"
   },
   {
   "year": 2020,   "color": "#671414"
   },
   {
   "year": 2021,   "color": "#FBDFD2"
   },
   {
   "year": 2022,   "color": "#FBDFD2"
   }

		];
	// Define timeline elements
	const timelineElements = timelineData.map((item) => (
	<div
	  key={item.year+""+Math.random()}
	  className="timeline-item"
	  title={item.tooltip}>
		
	<div className='tooltip-wrapper'> 
	{(item.tooltip)? <div className={"timeline-tooltip"+((item.down)?" down":'') }>{((!item.down)?"":<img alt="timeline-arrow" className='timeline-arrow' src={TimelineArrow}></img>)} <h4>{item.year}</h4> <p>{item.tooltip}</p>{((item.down)?"":<img alt="timeline-arrow" className='timeline-arrow' src={TimelineArrow}></img>)}   </div>: ""}	
	</div>
		<div className="timeline-color-block" 
	  style={{ backgroundColor: item.color }}>
		</div>
	   <img className="timeline-triangle" src={TinyTriangle} alt="timeline-triangle"></img>
	   <p className='timeline-year'>{item.year}</p> 
	</div >
  ));


// Render timeline
return <div className="timeline-container">
	{timelineElements}
	</div>;
};

export default TimelineCalor;