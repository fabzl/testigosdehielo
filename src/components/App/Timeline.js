import React from 'react';
import './Timeline.scss';

const Timeline = () => {
  // Define timeline data
  const timelineData = [
	{
		"year": 1850,
		"color": "#ff0000",
		"tooltip": "Event in 1850"
	  },
	  {
		"year": 1851,
		"color": "#ff1200",
		"tooltip": "Event in 1851"
	  },
	  {
		"year": 1852,
		"color": "#ff2400",
		"tooltip": "Event in 1852"
	  },
	  {
		"year": 1853,
		"color": "#ff3600",
		"tooltip": "Event in 1853"
	  },
	  {
		"year": 1854,
		"color": "#ff4800",
		"tooltip": "Event in 1854"
	  },
	  {
		"year": 1855,
		"color": "#ff5a00",
		"tooltip": "Event in 1855"
	  },
	  {
		"year": 1856,
		"color": "#ff6c00",
		"tooltip": "Event in 1856"
	  },
	  {
		"year": 1857,
		"color": "#ff7e00",
		"tooltip": "Event in 1857"
	  },
	  {
		"year": 1858,
		"color": "#ff9000",
		"tooltip": "Event in 1858"
	  },
	  {
		"year": 1859,
		"color": "#ffa200",
		"tooltip": "Event in 1859"
	  },
	  {
		"year": 1860,
		"color": "#ffb400",
		"tooltip": "Event in 1860"
	  },
	  {
		"year": 1861,
		"color": "#ffc600",
		"tooltip": "Event in 1861"
	  },
	  {
		"year": 1862,
		"color": "#ffd800",
		"tooltip": "Event in 1862"
	  },
	  {
		"year": 1863,
		"color": "#ffea00",
		"tooltip": "Event in 1863"
	  },
	  {
		"year": 1864,
		"color": "#e5ff00",
		"tooltip": "Event in 1864"
	  },
	  {
		"year": 1865,
		"color": "#cbff00",
		"tooltip": "Event in 1865"
	  },
	  {
		"year": 1866,
		"color": "#b1ff00",
		"tooltip": "Event in 1866"
	  },
	  {
		"year": 1867,
		"color": "#97ff00",
		"tooltip": "Event in 1867"
	  },
	  {
		"year": 1868,
		"color": "#7dff00",
		"tooltip": "Event in 1868"
	  },
	  {
		"year": 1869,
		"color": "#63ff00",
		"tooltip": "Event in 1869"
	  },
	  {
		"year": 1870,
		"color": "#49ff00",
		"tooltip": "Event in 1870"
	  },
	  {
		"year": 1871,
		"color": "#2fff00",
		"tooltip": "Event in 1871"
	  },
	  {
		"year": 1872,
		"color": "#15ff00",
		"tooltip": "Event in 1872"
	  },
	  {
		"year": 1873,
		"color": "#00ff0c",
		"tooltip": "Event in 1873"
		},
		{
		"year": 1874,
		"color": "#00ff26",
		"tooltip": "Event in 1874"
		},
		{
		"year": 1875,
		"color": "#00ff40",
		"tooltip": "Event in 1875"
		},
		{
		"year": 1876,
		"color": "#00ff5a",
		"tooltip": "Event in 1876"
		},
		{
		"year": 1877,
		"color": "#00ff74",
		"tooltip": "Event in 1877"
		},
		{
		"year": 1878,
		"color": "#00ff8e",
		"tooltip": "Event in 1878"
		},
		{
		"year": 1879,
		"color": "#00ffa8",
		"tooltip": "Event in 1879"
		},
		{
		"year": 1880,
		"color": "#00ffc2",
		"tooltip": "Event in 1880"
		},
		{
		"year": 1881,
		"color": "#00ffdc",
		"tooltip": "Event in 1881"
		},
		{
		"year": 1882,
		"color": "#00fff6",
		"tooltip": "Event in 1882"
		},
		{
		"year": 1883,
		"color": "#00e3ff",
		"tooltip": "Event in 1883"
		},
		{
		"year": 1884,
		"color": "#00c7ff",
		"tooltip": "Event in 1884"
		},
		{
		"year": 1885,
		"color": "#00abff",
		"tooltip": "Event in 1885"
		},
		{
		"year": 1886,
		"color": "#008fff",
		"tooltip": "Event in 1886"
		},
		{
		"year": 1887,
		"color": "#0073ff",
		"tooltip": "Event in 1887"
		},
		{
		"year": 1888,
		"color": "#0057ff",
		"tooltip": "Event in 1888"
		},
		{
		"year": 1889,
		"color": "#003bff",
		"tooltip": "Event in 1889"
		},
		{
		"year": 1890,
		"color": "#001fff",
		"tooltip": "Event in 1890"
		},
		{
		"year": 1891,
		"color": "#0c00ff",
		"tooltip": "Event in 1891"
		},
		{
		"year": 1892,
		"color": "#2800ff",
		"tooltip": "Event in 1892"
		},
		{
		"year": 1893,
		"color": "#4400ff",
		"tooltip": "Event in 1893"
		},
		{
		"year": 1894,
		"color": "#6000ff",
		"tooltip": "Event in 1894"
		},
		{
		"year": 1895,
		"color": "#7c00ff",
		"tooltip": ""
		},
		{
		"year": 1896,
		"color": "#9800ff",
		"tooltip": "Event in 1896",
		},
		
  ];

  // Define timeline elements
  const timelineElements = timelineData.map((item) => (
    <div
      key={item.year}
      className="timeline-item"
      style={{ backgroundColor: item.color }}
      title={item.tooltip}
    >
      {item.year}
    </div>
  ));

  // Render timeline
  return <div className="timeline-container">{timelineElements}</div>;
};

export default Timeline;