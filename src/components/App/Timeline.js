import React from 'react';
import './Timeline.scss';

import TinyTriangle from "../../img/triangle.svg"
import TimelineArrow from "../../img/timeline-arrow.svg"

const Timeline = () => {
	// Define timeline data
	const timelineData = [
		{"year": 1850, "color": "#124E8B",
		"tooltip":"Desde este año aumentaron en un 48% las emisiones de dióxido de carbono, producto de la actividad humana"
	},
		{"year": 1851, "color": "#3DBFEF"},
		{"year": 1852, "color": "#3DBFEF"},
		{"year": 1853, "color": "#3DBFEF"},
		{"year": 1854, "color": "#3D80C2"},
		{"year": 1855, "color": "#3D80C2"},
		{"year": 1856, "color": "#3D80C2"},
		{"year": 1857, "color": "#124E8B"},
		{"year": 1858, "color": "#3D80C2"},
		{"year": 1859, "color": "#3DBFEF"},
		{"year": 1860, "color": "#3D80C2"},
		{"year": 1861, "color": "#124E8B"},
		{"year": 1862, "color": "#3D80C2"},
		{"year": 1863, "color": "#124E8B",down:true, tooltip:"Se inaugura el tren entre Santiago y Valparaíso"},
		{"year": 1864, "color": "#3D80C2"},
		{"year": 1865, "color": "#3D80C2"},
		{"year": 1866, "color": "#3D80C2"},
		{"year": 1867, "color": "#3D80C2"},
		{"year": 1868, "color": "#3D80C2"},
		{"year": 1869, "color": "#3D80C2"},
		{"year": 1870, "color": "#3D80C2"},
		{"year": 1871, "color": "#3D80C2"},
		{"year": 1872, "color": "#3D80C2"},
		{"year": 1873, "color": "#3D80C2"},
		{"year": 1874, "color": "#124E8B"},
		{"year": 1875, "color": "#B5DEE8"},
		{"year": 1876, "color": "#F4F9FB"},
		{"year": 1877, "color": "#3D80C2"},
		{"year": 1878, "color": "#3D80C2"},
		{"year": 1879, "color": "#3DBFEF"},
		{"year": 1880, "color": "#3D80C2"},
		{"year": 1881, "color": "#3D80C2"},
		{"year": 1882, "color": "#124E8B"},
		{"year": 1883, "color": "#124E8B",tooltip:"Inicios del alumbrado eléctrico, Santiago, Chile"},
		{"year": 1884, "color": "#124E8B",down:true,tooltip:"Se crea la empresa de ferrocarriles del Estado"},
		{"year": 1885, "color": "#124E8B"},
		{"year": 1886, "color": "#3D80C2"},
		{"year": 1887, "color": "#3DBFEF"},
		{"year": 1888, "color": "#124E8B"},
		{"year": 1889, "color": "#124E8B"},
		{"year": 1890, "color": "#124E8B"},
		{"year": 1891, "color": "#124E8B"},
		{"year": 1892, "color": "#3DBFEF"},
		{"year": 1893, "color": "#3DBFEF"},
		{"year": 1894, "color": "#124E8B"},
		{"year": 1895, "color": "#3D80C2"},
		{"year": 1896, "color": "#3DBFEF"},
		{"year": 1897, "color": "#3D80C2"},
		{"year": 1898, "color": "#124E8B"},
		{"year": 1899, "color": "#124E8B"},
		{"year": 1900, "color": "#3D80C2",tooltip:"Se inaugura la Estación Central de Santiago"},
		{"year": 1901, "color": "#124E8B"},
		{"year": 1902, "color": "#124E8B"},
		{"year": 1903, "color": "#3DBFEF"},
		{"year": 1904, "color": "#3DBFEF"},
		{"year": 1905, "color": "#124E8B"},
		{"year": 1906, "color": "#124E8B"},
		{"year": 1907, "color": "#3D80C2",down:true,tooltip: "Se realiza el VIII censo de población, el que arroja 3.231.022 habitantes, Chile"},
		{"year": 1908, "color": "#3D80C2"},
		{"year": 1909, "color": "#3DBFEF"},
		{"year": 1910, "color": "#3D80C2",tooltip:"Se inaugura el Ferrocarril Transandino entre Los Andes y Mendoza"},
		{"year": 1911, "color": "#3D80C2"},
		{"year": 1912, "color": "#3D80C2"},
		{"year": 1913, "color": "#3DBFEF"},
		{"year": 1914, "color": "#B5DEE8"},
		{"year": 1915, "color": "#3DBFEF"},
  {"year": 1916, "color": "#3DBFEF"},
  {"year": 1917, "color": "#3D80C2"},
  {"year": 1918, "color": "#B5DEE8"},
  {"year": 1919, "color": "#B5DEE8"},
  {"year": 1920, "color": "#B5DEE8",down:true, tooltip: "Se realiza el IX censo de población. Sus resultados indican que la población de Chile es de 3.720.235 habitantes"},
  {"year": 1921, "color": "#3D80C2"},
  {"year": 1922, "color": "#B5DEE8"},
  {"year": 1923, "color": "#3DBFEF"},
  {"year": 1924, "color": "#B5DEE8"},
  {"year": 1925, "color": "#F4F9FB"},
  {"year": 1926, "color": "#F4F9FB"},
  {"year": 1927, "color": "#F4F9FB"},
  {"year": 1928, "color": "#FFFFFF"},
  {"year": 1929, "color": "#FFFFFF"},
  {"year": 1930, "color": "#F4F9FB"},
  {"year": 1931, "color": "#F4F9FB"},
  {"year": 1932, "color": "#FBF4EB"},
  {"year": 1933, "color": "#FFFFFF"},
  {"year": 1934, "color": "#FFFFFF", tooltip: "Tromba marina en región del BioBío, Chile. 27 fallecidos y 599 heridos"},
			  {"year": 1935, "color": "#B5DEE8"},
			  {"year": 1936, "color": "#B5DEE8"},
			  {"year": 1937, "color": "#B5DEE8"},
			  {"year": 1938, "color": "#B5DEE8"},
			  {"year": 1939, "color": "#3DBFEF"},
			  {"year": 1940, "color": "#F4F9FB"},
			  {"year": 1941, "color": "#F4F9FB"},
			  {"year": 1942, "color": "#FFFFFF"},
			  {"year": 1943, "color": "#B5DEE8"},
			  {"year": 1944, "color": "#3DBFEF"},
			  {"year": 1945, "color": "#3DBFEF"},
			  {"year": 1946, "color": "#F4F9FB",down:true,tooltip:"Se crea la Compañía de Acero del Pacífico"},
			  {"year": 1947, "color": "#F4F9FB"},
			  {"year": 1948, "color": "#F4F9FB"},
			  {"year": 1949, "color": "#B5DEE8"},
			  {"year": 1950, "color": "#F4F9FB",tooltip:"Fundación de ENAP - Empresa Nacional del Petróleo"},
			  {"year": 1951, "color": "#F4F9FB"},
			  {"year": 1952, "color": "#F4F9FB"},
			  {"year": 1953, "color": "#3D80C2"},
			  {"year": 1954, "color": "#3DBFEF"},
			  {"year": 1955, "color": "#B5DEE8",down:true,tooltip:"Fundación de CODELCO - La Corporación Nacional del Cobre de Chile"},
			  {"year": 1956, "color": "#B5DEE8"},
			  {"year": 1957, "color": "#B5DEE8"},
			  {"year": 1958, "color": "#F4F9FB"},
			  {"year": 1959, "color": "#B5DEE8"},
			  {"year": 1960, "color": "#3DBFEF"},
			  {"year": 1961, "color": "#B5DEE8"},
			  {"year": 1962, "color": "#FFFFFF"},
			  {"year": 1963, "color": "#B5DEE8"},
			  {"year": 1964, "color": "#B5DEE8"},
			  {"year": 1965, "color": "#3DBFEF"},
			  {"year": 1966, "color": "#FFFFFF"},
			  {"year": 1967, "color": "#F4F9FB"},
			  {"year": 1968, "color": "#FFFFFF"},
			  {"year": 1969, "color": "#FBF4EB"},
			  {"year": 1970, "color": "#F8C1A3"},
			  {"year": 1971, "color": "#F4F9FB"},
			  {"year": 1972, "color": "#FBF4EB"},
			  {"year": 1973, "color": "#FFFFFF",tooltip:"Calentamiento global: Relación CO2 calentamiento sugerido por Lorius"},
			  {"year": 1974, "color": "#FFFFFF"},
			  {"year": 1975, "color": "#FFFFFF"},
			  {"year": 1976, "color": "#FBF4EB"},
			  {"year": 1977, "color": "#F8C1A3"},
			  {"year": 1978, "color": "#F8C1A3"},
			  {"year": 1979, "color": "#EB645A"},
			  {"year": 1980, "color": "#F8C1A3"},
			  {"year": 1981, "color": "#FFFFFF"},
			  {"year": 1982, "color": "#FBF4EB"},
			  {"year": 1983, "color": "#FBF4EB"},
			  {"year": 1984, "color": "#EB645A"},
			  {"year": 1985, "color": "#F8C1A3"},
			  {"year": 1986, "color": "#EB645A"},
			  {"year": 1987, "color": "#E63230"},
			  {"year": 1988, "color": "#F8C1A3"},
			  {"year": 1989, "color": "#F8C1A3"},
			  {"year": 1990, "color": "#E73C3C"},
			  {"year": 1991, "color": "#E73C3C"},
			  {"year": 1992, "color": "#E73C3C"},
			  {"year": 1993, "color": "#E73C3C"},
			  {"year": 1994, "color": "#E63230"},
			  {"year": 1995, "color": "#E63230",down:true,tooltip:"Eliminación del plomo de los combustibles"},
			  {"year": 1996, "color": "#E63230"},
			  {"year": 1997, "color": "#E73C3C"},
			  {"year": 1998, "color": "#E63230"},
			  {"year": 1999, "color": "#D12626"},
			  {"year": 2000, "color": "#E73C3C"},
			  {"year": 2001, "color": "#E63230"},
			  {"year": 2002, "color": "#E63230"},
			  {"year": 2003, "color": "#E63230"},
			  {"year": 2004, "color": "#8F2713"},
			  {"year": 2005, "color": "#8A1A1A"},
			  {"year": 2006, "color": "#8F2713"},
			  {"year": 2007, "color": "#D12626"},
			  {"year": 2008, "color": "#8F2713"},
			  {"year": 2009, "color": "#8A1A1A"},
			  {"year": 2010, "color": "#D12626"},
			  {"year": 2011, "color": "#8F2713"},
			  {"year": 2012, "color": "#8A1A1A"},
			  {"year": 2013, "color": "#8A1A1A"},
			  {"year": 2014, "color": "#8A1A1A"},
			  {"year": 2015, "color": "#8A1A1A"},
			  {"year": 2016, "color": "#8A1A1A",tooltip:"Año más cálido de Chile hasta la fecha"},
			  {"year": 2017, "color": "#8A1A1A",down:true,tooltip:"Tornado en Quillota, región de Valparaíso, Chile. Alcanzando al menos 80 km/hr"},
			  {"year": 2018, "color": "#8A1A1A"},
			  {"year": 2019, "color": "#8A1A1A"},
			  {"year": 2020, "color": "#8A1A1A",tooltip:"Se registró la temperatura más alta en el continente antártico, llegando a los 18°C"},
			  {"year": 2021, "color": "#8A1A1A", down:true,tooltip:"Tornados en la región de la Araucanía, Los Lagos y Biobío, Chile"},

	];
	// Define timeline elements
	const timelineElements = timelineData.map((item) => (
	<div
	  key={item.year+" "+Math.random()}
	  className="timeline-item"
	  title={item.tooltip}>
		
	<div className='tooltip-wrapper'> 

	{(item.tooltip && !item.down)? <div className={(Number(item.year) > 1950)?"timeline-tooltip  reverse" : "timeline-tooltip"}>

		<img  alt='timeline-arrow' className='timeline-arrow' src={TimelineArrow}/>
		<div className='info-tooltip-up'>
			<h4>{item.year}</h4> 
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
					<h4 >{item.year}</h4> 
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

export default Timeline;