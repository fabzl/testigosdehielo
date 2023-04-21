import './App.scss'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint';
//import React from 'react'
//import ReactPlayer from 'react-player'
//import ReactPlayer from 'react-player/lazy'
import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';
import A1 from '../../img/A1.svg'
import A2 from '../../img/A2.svg'
import A3 from '../../img/A3.svg'
import A4 from '../../img/A4.svg'
import A5 from '../../img/A5.svg'
import B1 from '../../img/B1.svg'
import B2 from '../../img/B2.svg'
import B3 from '../../img/B3.svg'
import B4 from '../../img/B4.svg'
import B5 from '../../img/B5.svg'

import About from './About';
import Fotos from './Fotos';
import Videos from './Videos';




import lockupExpo from '../../img/lockup_expo.svg'
import lockupText from '../../img/lockup_text.svg'
import logoTestigos from '../../img/testigos_de_hielo_logo.svg'


import Juncal from '../../img/juncal-nor-oriente.jpg'
import TestAudio from '../../audios/test.mp3'
import AudioGuideLogo from '../../img/audioguide.svg'

import EyeMenu from '../../img/menu_eye.svg'
import { createRoot } from "react-dom/client";

import React, { useState, useEffect } from 'react';
import MobileTimeline from './MobileTimeline';



const WrapQuote = styled.p`
text-align: center;
font-family: 'Oswald', sans-serif;
font-style: italic;
color: #666;
max-width: 70vw;
text-align: center;
margin:  auto;
padding: 10vh 0;
font-size: 2.5rem;
position: relative;
height: auto;
min-height: 80vh;
line-height: 200%;
`

const MainBg = styled.div`
	background-image:url("${Juncal}");
	background-position:cover;
	background-repeat: no-repeat;
	width:100vw;
	height:100vh;
	top:0;
	position:absolute;
`
const AudioPlayer = styled.div`
  padding:20px 0;
  width: 100%;
  background-color: #f1f3f4;
  position: sticky;
  top:350px;
  text-align:center;

`
const EndNav = styled.div`
width: 100%;
position:relative;
display:flex;
justify-content:space-between;
user-select: none;
`
const BackToMain = styled.div`
padding:20px;
width: 40vw;
background-color: #7fbfea;
margin: 40px 0;
a {
color:#FFF;
text-decoration: none;
}
text-align:center;
font-family: 'Oswald', sans-serif;
text-transform: uppercase; 
font-weight: 800;
font-size: 1.5rem;
`
const NextSection = styled.div`
padding:20px;
width: 40vw;
background-color: #7fbfea;
margin: 40px 0;
a {
	color:#FFF;
	text-decoration: none;
	}


text-align:center;
font-family: 'Oswald', sans-serif;
text-transform: uppercase; 
font-weight: 800;
font-size: 1.5rem;
`

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			rootURL: "/",
			activeSection: 0,
			nextSection: 1,
			totalSections: 6,
			menuVisible: false,
			nextSectionURL:"/",
			endNavVisible: true,
			activeSectionHeaderHeight: 120,

		};
	}

	

// here are the main urls for the project
	routerBoy = (num) => {
		
		switch (num) {
			case 1: 
			return "/CAMBIO-CLIMATICO-1";
			case 2: 
			return "/VARIABILIDAD-E-HISTORIA-DEL-CLIMA-2" ;
			case 3: 
			return "/IMPORTANCIA-DE-LA-MONTANA-COMO-RESERVA-HIDRICA-3" ;
			case 4: 
			return "/GLACIOLOGIA:-QUE-ESTUDIA-Y-COMO-SE-ESTUDIA-ADEMAS-DE-LA-IMPORTANCIA-DE-ESTA-CIENCIA-4" ;
			case 5: 
			return "/QUE-SON-LOS-TESTIGOS-DE-HIELOS-Y-PARA-QUE-SIRVEN-5";
			case 6: 
			return "/MODELAMIENTO-DEL-FUTURO-PRESENTE-PROXIMO-SIGLO-6";
		   default: 
		   return "/";
		   
			}
		 } 


	
	onClickBackToMain = () => {
		return (
				Route.path="/"
				)
	  };

	  onClickNextSection = () => {
		
		// añade una section , si es mayor que el total de Secciones . vuelve al inicio. 
		let currentSection = this.state.activeSection
		
		let nextSection;

		if(nextSection > this.state.totalSections) {
			nextSection = currentSection+1;
		}else {
			nextSection = 1;
		}

		
		this.setState({ activeSection : nextSection }, () => {
			this.setLocation();		
 		})

	  }; 	

	
	handleClick = () => {
		if(this.state.menuVisible === false ){
			this.setState({ menuVisible : true })
		}else {
			this.setState({ menuVisible : false })
		}
	  };

	resizeStickyHeader = () => {
		
		const collection = document.getElementsByClassName("sticky-text");
		console.log("get sticky header heigth",collection[this.state.activeSection].offsetHeight);
		//collection.log("alto: ",collection[this.state.activeSection].offsetHeight);
		const targetAudioPlayer = document.getElementsByClassName("wrapper-"+this.state.activeSection);

	}


	  SectionIntro = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);

		return (
		<div>	
			<div className='wrapMain'>

			<h1 className="mainTitle">Testigos de Hielo</h1>
			<div>
				<img className="lockupText"src={lockupText}  alt="26 de abril" />
			</div>
			<img className="logoTestigos" src={logoTestigos}  alt="Testigos de hielo" />

				<MainBg/>
		</div>

		<WrapQuote>
			Durante la historia reciente de nuestro planeta ha sido testigo de muchos cambios en sus condiciones del clima y del ambiente. El hielo almacenado en los glaciares, ha visto y ha sufrido estos cambios, los que están almacenados en las capas que va almacenando año a año. Estos cambios se han traducido en el aumento de la temperatura a escala global, que han traído grandes cambios en las condiciones en que vivimos, y que nos han afectado directamente en nuestra vida cotidiana.
		</WrapQuote> 

		{ this.state.activeSection === 0 ? null :  	this.Section1() }
		{ this.state.activeSection === 1 ? null :  	this.Section1() }
		{ this.state.activeSection === 2 ? null :   this.Section2() }
		{ this.state.activeSection === 3 ? null :   this.Section3() }
		{ this.state.activeSection === 4 ? null :   this.Section4() }
		{ this.state.activeSection === 5 ? null :   this.Section5() }
		{ this.state.activeSection === 6 ? null :  	this.Section6() }


			</div>
			);
		};


	Section1 = () => {
		


		useEffect(() => {
			window.scrollTo(0, 0);

			this.setLocation();

		}, []);
		
		return (
			<div className="wrapperSection wrapper-1">
				<Waypoint
					onEnter={this.onSectionEnter(1)}
				//	onLeave={this.onSectdioguideTextionLeave(1)}
				/>
				<h2 className='sticky-text top-1'>1. Cambio climático</h2>
				
				<p>De acuerdo con la Naciones Unidas, el cambio climático se define como:  “Los cambios a largo plazo de las temperaturas y los patrones climáticos. Estos cambios pueden ser naturales, por ejemplo, a través de las variaciones del ciclo solar. Pero desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles como el carbón, el petróleo y el gas” (https://www.un.org/es/climatechange/what-is-climate-change)</p>
				

				<AudioPlayer >
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>
				
				<p>Gráfico de concentración en partes por millón (ppm) de moléculas de dióxido de carbono en la atmósfera global entre el año 0 y el año 2022 de la era actual. Fuente: https://ourworldindata.org/atmospheric-concentrations. </p>
				<p>Gráfico concentración de gases de efecto invernadero a escala global,  desde el año 1750 a 2022. Fuente: Gráfico de elaboración propia basado en los datos de: https://ourworldindata.org/atmospheric-concentrations</p>
				<p>La quema de combustibles fósiles genera emisiones de gases de efecto invernadero que actúan como una manta que envuelve a la Tierra, atrapando el calor del sol y elevando las temperaturas (https://www.un.org/es/climatechange/what-is-climate-change)</p>
				<p>Esquema explicativo del balance de energía generado por los gases de efecto invernadero en la atmósfera. Fuente: http://antarctica.cl/divulgacion/
					El cambio climático es una variación de las condiciones ambientales del planeta, ocasionado directa o indirectamente por la actividad humana, el cual está alterando la composición de la atmósfera. Manifestándose en un aumento de las temperaturas medias y alteraciones del clima a escala mundial.</p>

				<img src={A2} alt="Gases de Efecto Invernadero" />
				<p>El clima es un estado característico propio de una zona en un largo periodo de tiempo, incluyendo aspectos como la temperatura, precipitaciones, humedad y viento. Mientras que la atmósfera está formada por una mezcla de gases y participa en la regulación del clima.</p>
			</div>
		);
	};

	Section2 = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
			this.setLocation();

		}, []);

		return (

			<div className="wrapperSection wrapper-2">
				
				
				
				<Waypoint
					onEnter={this.onSectionEnter(2)}
			//		onLeave={this.onSectionLeave(2)}
					/>
				<h2 className='sticky-text top-2'>2. Variabilidad e historia del clima</h2>

				<MobileTimeline></MobileTimeline>
				
				<p>Uno de los efectos más tangibles del cambio climático en nuestra región, se está observando en la disminución de precipitaciones y el aumento de fenómenos extremos como sequías extensas y eventos de lluvias intensas. Estos fenómenos se encuentran asociados a procesos naturales como la corriente del Niño/a, pero desde inicios del siglo XX se ha observado una clara relación con el incremento de la concentración de gases de efecto invernadero, que ha modificado los patrones de circulación atmosférica (Morales et al., 2020).</p>

				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>


				<img src={B3} alt="Variacion de Precipitaciones en la Región de Valparaiso" />
				<p> Precipitaciones y temperaturas históricas a nivel país, además de la región de Valparaíso (ca. 1400 - presente). Anomalías y tendencias en el clima.</p>
				<p>Gráfico de la variación de precipitaciones a nivel local en la región de Valparaíso (índice de sequías) desde el año 1750 a 2019. Fuente: elaboración propia basado en datos del “Atlas de Sequía Sudamericano” (Morales et al., 2020; https://sada.cr2.cl/)</p>

				<p>De acuerdo con el informe anual de la Dirección Meteorológica de Chile (DMC): La temperatura media nacional en 2021 fue de 13.5 °C, 0.76°C más cálido que el promedio 1961- 1990 y 0.5°C respecto al promedio 1981-2010. El informe continúa aclarando que: La tendencia de la temperatura media es de 0.15°C por década. Se suman 11 años cálidos consecutivos y ha sido la más cálida desde hace 61 años, duplicando la década inmediatamente anterior (2000-2010). (Gutiérrez et al., 2022).</p>

				<p>Gráfico de anomalía de temperaturas (respecto al promedio entre 1971-1990) para Chile entre 1901 y 2021 tomado de https://showyourstripes.info/l/southamerica/chile</p>
				<p>Gráfico de anomalía (respecto al promedio entre 1961-1990) de temperaturas para Valparaíso entre 1880 y 2021 tomado de http://berkeleyearth.lbl.gov/locations/32.95S-71.81W# </p>

				<img src={B5} alt="Anomalias de la Temperatura a escala global" />

				<p>A escala global el año 2021 fue el 6to año más cálido desde 1880, estimándose la temperatura media global (tierra más océano) de 14.7 °C, siendo 0.84 °C sobre el promedio del siglo XX. Con este año se completan 45 años consecutivos (desde 1977) más cálidos que el promedio. De los 10 años más cálidos, 9 están dentro del 2013 al 2021. La temperatura global terrestre y oceánica anual ha aumentado en 0.08°C por década desde 1880, mientras que desde 1981 la tasa de aumento es más del doble con 0.18°C por década</p>

				<p>Gráfico de anomalía (respecto al promedio entre 1961-1990) de temperaturas a escala global entre los años 1850 y 2021. Fuente: El gráfico es elaboración propia basado en los datos de HadCRUT5  (Morice et al., 2021)(https://www.metoffice.gov.uk/hadobs/hadcrut5/)
				</p>
				<p>Gráfico anomalía (respecto al promedio entre 1961-1990) de la temperatura media global entre 1850 y 2021. Fuente: Tomado de https://showyourstripes.info/c/globe</p>

				<p>Anomalías de temperatura usando como periodo de referencia el promedio entre 1961 y 1990 para ser comparado con el promedio de 2021. Fuente: GISS Surface Temperature Analysis (https://data.giss.nasa.gov/gistemp/maps/)
				</p>
				<p>De acuerdo con el reporte de la Dirección Meteorológica de Chile para el año 2021 (Gutiérrez et al., 2022): En Chile continental la temperatura media durante el 2021 fue de 13.5°C, lo que fue levemente más frío que el año anterior (-0.12°C) pero de igual forma se convirtió en el 4to año más cálido en 61 años, siendo +0.76°C más cálida que el promedio climatológico 1961-1990.</p>
				<p>Una de las consecuencias del aumento de las temperaturas máximas, es el incremento de eventos extremos de temperaturas que se denominan “olas de calor” que corresponden a eventos de altas temperaturas que persisten por tres días continuos o más (cuando la temperatura máxima del día está en el 10% superior de las temperaturas históricas registradas). De acuerdo con la DMC: “Los eventos meteorológicos extremos como las olas de calor han aumentado durante el último siglo de manera significativa, producto del evidente aumento de las temperaturas lo que representa un peligro para la salud de las personas, la agricultura y el medio ambiente” (Gutiérrez et al., 2022)
				</p>
				<p>Gráfico de olas de calor de la zona central de Chile (Regiones de Valparaíso y Metropolitana) desde el año 1970 hasta 2022. Fuente: elaboración propia basada en datos de la dirección Meteorológica de Chile (DMC) (0)</p>
			</div>

		);
	};
	Section3 = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
			this.setLocation();

		}, []);

		return (

			<div className="wrapperSection wrapper-3">
				<Waypoint
					onEnter={this.onSectionEnter(3)}
					onLeave={this.onSectionLeave(3)}
				/>
				<h2 className='sticky-text top-3'>3.Importancia de la montaña como reserva hídrica</h2>

			
				<p>
					En Chile el 70% de la población se abastece de agua proveniente de la cordillera (Bórquez et al., 2006), además nuestro país alberga más del 80% de los glaciares existentes de Sudamérica (Barcaza et al., 2017), la Cordillera de Los Andes aloja a gran cantidad de estos glaciares, los cuales son parte importante de las reservas de agua dulce (torres de agua), fundamentales para la vida y el ecosistema. Los glaciares emplazados en la cordillera contribuyen de gran manera a los flujos de agua superficial como subterráneos, llegando a aportar el 67% del agua dulce en años con bajas precipitaciones (Peña and Nazarala, 1987), sin embargo la principal fuente de recarga sigue siendo la precipitación de nieve y lluvia para las cuencas de Chile central. En particular para la región de Valparaíso, la cuenca del Aconcagua, se alimenta entre de fusión de nieve y lluvia (~50%), fuentes glaciares (~30%) y de aguas subterráneas`y formas periglacieres (~20%) (Crespo et al., 2020).
				</p>

				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>


				<img src={A4} alt="Importancia de la Montana como reserva hidrica" />

				<p>
					En el presente las consecuencias del proceso de cambio climático son más tangibles que nunca, las que hemos observado concretamente en nuestro territorio. En Chile (y en gran parte de Sudamérica) hemos estado experimentando uno de los periodos de sequías jamás visto a escala histórica (Morales et al., 2020; Bustos et al., 2015), presentándose un déficit importante en la cubierta de nieve para los últimos años que alcanzó un 34% de la cobertura de nieve, respecto al periodo promedio entre 2000 y 2021, en la cuenca del río Aconcagua que surte directamente de agua a la región de Valparaíso (IANIGLA-CONICET y (CR)²; web Observatorio de Nieve en los Andes de Argentina y Chile). Esta condición extrema ha acarreado nefastas consecuencias, como incendios forestales y urbanos, que han afectado directamente a los habitantes de ciudades densamente pobladas como la ciudad de Valparaíso (Sapiains y otros., 2019).
				</p>

				<p>
					Mapa de glaciares y redes hidricas, zona central de Chile. Fuente: elaboración propia.
				</p>
				<p>
					Fotografía con orientación nor-oriente del glaciar Juncal Sur, octubre 2022. Fuente: elaboración propia.
				</p>
				<p>
					Fotografía con orientación sur-poniente del glaciar Juncal Sur, octubre 2022. Fuente: elaboración propia.
				</p>
				<p>
					En Chile el 70% de la población se abastece de agua proveniente de la cordillera (Bórquez et al., 2006), además nuestro país alberga más del 80% de los glaciares existentes de Sudamérica (Barcaza et al., 2017), la Cordillera de Los Andes aloja a gran cantidad de estos glaciares, los cuales son parte importante de las reservas de agua dulce (torres de agua), fundamentales para la vida y el ecosistema. Los glaciares emplazados en la cordillera contribuyen de gran manera a los flujos de agua superficial como subterráneos, llegando a aportar el 67% del agua dulce en años con bajas precipitaciones (Peña and Nazarala, 1987), sin embargo la principal fuente de recarga sigue siendo la precipitación de nieve y lluvia para las cuencas de Chile central. En particular para la región de Valparaíso, la cuenca del Aconcagua, se alimenta entre de fusión de nieve y lluvia (~50%), fuentes glaciares (~30%) y de aguas subterráneas`y formas periglacieres (~20%) (Crespo et al., 2020).
				</p>
				<p>
					Ilustración del ciclo del agua. Fuente: Servicio Geológico de Estados Unidos (https://www.usgs.gov/media/images/el-ciclo-del-agua-water-cycle-spanish-png)
				</p>

				<div>

				</div>
			</div>
		);
	};

	Section4 = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
			this.setLocation();

		}, []);

		return (

			<div className="wrapperSection wrapper-4">
				<Waypoint
					onEnter={this.onSectionEnter(4)}
					onLeave={this.
						onSectionLeave(4)}
				/>
				<h2 className='sticky-text top-4'>4. Glaciología: que estudia y cómo se estudia, además de la importancia de esta ciencia.
				</h2>



				<p>La glaciología es una disciplina científica encargada de estudiar los glaciares, las glaciaciones y la criósfera en general, a través de monitoreos del comportamiento y formación, realizando mediciones en terreno o mediciones remotas.</p>
				<p>La criósfera se define como todos los componentes congelados naturales que se encuentran sobre o debajo de la superficie terrestre u oceánicas. Incluyendo nieve, glaciares, casquetes de hielo icebergs, hielo marino, lagos y ríos congelados, además de suelos congelados. Tiene un rol importante en la regulación del clima a escala local y global, influyendo en la hidrología, nubes, precipitaciones y la circulación de la atmósfera y los océanos. El cambio climático está ocasionando una gran pérdida de la criósfera, mediante el derretimiento de grandes extensiones de hielo.
				</p>

				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>

				<p>Componentes de la Criósfera que se estudian comúnmente en los procesos de balance de masa por la glaciología (Fuente: “El Atlas de Glaciares y Aguas Andinos: el impacto del retroceso de los glaciares sobre los recursos hídricos” (Johansen et al., 2019))
				</p>
				<p>Los estudios en terreno incluyen normalmente expediciones en condiciones muy adversas, en donde investigadores hombres y mujeres deben exponerse a condiciones ambientales complejas. Una buena preparación de la expedición y buen equipamiento asegura que los científicos puedan trabajar de buena forma en la montaña o regiones polares. Muchas veces las expediciones ocurren en zonas muy remotas (zonas de acumulación de hielo), que deben ser accedidas caminando por largas rutas sobre glaciares o por medios de transporte como helicóptero o avión.
				</p>
				<p>Trabajo en terreno de un grupo de glaciólogos que están determinando las tasas de derretimiento de verano en una zona de ablación del glaciar Juncal Norte (Fuente propia).
				</p>
			</div>

		);
	};
	Section5 = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
			this.setLocation();

		}, []);

		return (
			<div className="wrapperSection wrapper-5">
				<Waypoint
					onEnter={this.onSectionEnter(5)}
					onLeave={this.
						onSectionLeave(5)}
				/>

				<h2 className='sticky-text top-5'>5. Qué son los testigos de hielos y para qué sirven</h2>
				
				<p>Los testigos de hielo representan una verdadera diamante de las técnicas científicas, y son una herramienta importante para el estudio glaciar, estos son perforaciones hechas en un glaciar de forma cilíndrica en una capa de hielo o glaciar, realizadas en profundidad desde la superficie. Los glaciares acumulan capas de nieve, que lentamente se transforman en hielo por efecto de la presión y dinámica del glaciar. 
				</p>
				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>
				<img src={A1} alt="Testigos de hielo" />
				<p>
			Cada una de estas capas “captura” las condiciones ambientales del lugar donde el glaciar crece y avanza (temperatura del aire), pero también es un registro único de condiciones ambientales escala global (burbujas de aire que atrapan los gases de la atmósfera), también al ser como una verdadera sábana blanca, los glaciares acumulan impurezas (naturales y generadas por el hombre) que son transportadas desde grandes distancias y que se acumulan con cada nueva precipitación de nieve. Los eventos de erupciones volcánicas son identificados relativamente fácil a lo largo de los testigos de hielo y nos dan una idea de la edad del hielo.


					Fotografía la erupción del volcán Calbuco, año 2015. Fuente: (https://nuestroclima.com/la-erupcion-del-calbuco-en-4k/)

					Fotografía de una sección de testigo de hielo de 200 m de profundidad extraído en 2013, en un punto cercano a la cumbre del monte Hunter, Alaska, Estados Unidos  Fuente: Lecavalier y Markle (2016)

					De esta forma la metodología científica utilizada en el análisis de los testigos de hielo ha permitido reconstruir el clima y las condiciones ambientales de hasta 800 mil años (Wolf et al., 2010) que muestran la transición de ciclos glaciares (épocas de climas fríos) e interglaciares (épocas de climas cálidos) y que muestran que el proceso de calentamiento actual no tiene precedentes en el registro del clima del pasado y solo se compara al clima de hace millones de años (




					Figura resumen de la variación de CO2 reconstruida a partir de datos de testigos de hielo y observaciones actuales (Fuente: https://ourworldindata.org/atmospheric-concentrations )





					Figura panel superior: resumen de la variación de CO2 y Metano (CH4 reconstruida a partir de datos de testigos de hielo comparadas con observaciones actuales.

					Figura panel inferior: resumen de la variación de CO2 comparada con la temperatura atmosférica del planeta reconstruida a partir de información de testigos de hielo y observaciones actuales.

					(Fuente: https://www.bas.ac.uk/data/our-data/publication/ice-cores-and-climate-change/ )

					Por lo tanto los testigos aportan información sobre las condiciones ambientales y sus variaciones en el tiempo en cada capa de hielo que compone un glaciar, plasmando información sobre la composición atmosférica y antecedentes de cómo era el ambiente en la época que cayeron las precipitaciones que formaron y forman parte del glaciar, pudiendo así modelar y reconstruir climas pasados.



					Fotografía a escala que muestra un evento de derretimiento en una sección de testigo de hielo de 20 cm de largo en total proveniente del Norte de Chile, representando eventos como olas de calor. Fuente: elaboración propia.



					Fotografía de una sección de testigo de hielo del Norte de Chile, representando transformación o transición de nieve a neviza y finalmente a hielo. Fuente: elaboración propia.



					Ejemplo de infografía de un testigo de hielo de la Antártica relacionado a eventos históricos. Fuente: British Antarctic Survey (https://www.bas.ac.uk/)

				</p>
			</div>
		);
	};



	Section6 = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
			this.setLocation();

		}, []);

		
		return (

			<div className="wrapperSection wrapper-6">
				<Waypoint
					onEnter={this.onSectionEnter(6)}
					onLeave={this.onSectionLeave(6)}
				/>
				<h2 className='sticky-text top-6'>6. Modelamiento del futuro (presente próximo siglo)</h2>
	
				<p>Los efectos del cambio climático descritos hasta ahora continuaran en el futuro, a no ser que se tomen medidas urgentes en cuanto a la forma de usar los recursos naturales (Rojas et al., 2019; IPCC, 2021). De esta forma sabemos que las precipitaciones disminuirán entre un 5% y un 15% en la zona centro y sur de Chile (Stehr et al., 2019), lo que inevitablemente repercutirá en la perdida de masa glaciar a lo largo de Chile. En la zona central se proyecta una perdida de masa de hielo de entre un 12% y 37% (Glaciar Universidad) (Escanilla-Minchel et al., 2020) dependiendo de las decisiones socio-políticas que se lleguen a tomar en el futuro. El IPCC (2021) ha fijado como meta un calentamiento no superior a 1.5°C para el presente siglo, de manera de evitar efectos irreversibles en nuestro ambiente debido al cambio climático. Si esta meta se cumple, los efectos del cambio climático, podrián ser moderados pero no desapareceran. Las simulaciones, muestran que en todos los escenarios la precipitación de la zona central disminuirá y la temperatura aumentará (como efectos tangibles del cambio climático).</p>
				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>
				<p>  Figura panel superior modelo de las tendencias de precipitaciones (IPCC, 2021) para el mundo en caso de un aumento de 1.5°C, 2°C y 4°C</p>
				<p>
					Figura panel superior modelo de las tendencias de temperaturas regionales (IPCC, 2021) para el mundo en caso de un aumento promedio de 1.5°C, 2°C y 4°C de la temperartura.
				</p>
				<p>  Modelamiento de la temperatura a escala global bajo distintos escenarios socio-económicos. Fuente: http://antarctica.cl/divulgacion/
				</p>
				<p>
					De acuerdo con las palabras del Dr. Raul Cordero (www.antarctica.cl): El clima del futuro depende de las decisiones que tomemos hoy. Si nos comprometemos con los objetivos del Acuerdo de París podríamos limitar el alza de la temperatura global a alrededor de 1.5°C y lograríamos conservar gran parte de la biodiversidad del planeta. Si no lo hacemos y no redoblamos esfuerzos para mitigar nuestras emisiones, el planeta podría ser a fines de siglo hasta 4°C en promedio más cálido que hoy, condenando a la extinción a muchas especies animales y vegetales. Es  nuestra tarea exigir que se cumplan estos acuerdos, de lo contrario, ya conocemos los posibles escenarios futuros.
				</p>


				<img src={A3} alt="Precipitaciones y Sequia" />


				<img src={B1} alt="Precipitaciones Anuales sobre el glaciar juncal sur" />
				<img src={B2} alt="Concentracion de Dioxido de carbono en" />

				<img src={B4} alt="Olas de Calor de la Zona central de Chile" />
			</div>
		);
	};

	// apaga y prende la navegacion por seccion
	hideEndNavMenu =() => {
		if (this.state.activeSection <= 1 
			) {
				this.setState({ endNavVisible : false })
				console.log("endNav: ", this.state.endNavVisible)	
	}
		if(this.state.rootURL === this.routerBoy(1)) {
			this.setState({ endNavVisible : true })
		}
	
}

	insertTimeLine = () => {

	}


	// funcion de principal de routeo para useffect
	// se ejecuta para todas las Secciones
	setLocation = () => {


		//Tomo la URL
		const fullURL = window.location.href;
		
		// tmb la divido con un regex y tomo el reglon final.
		const bits = fullURL.split("/");
		let theBit = bits[bits.length-1]
		
		// si es home la asigno como /

		if( theBit === "") {
			theBit = "/"
		}

		// para que el header cambie activamente modifico la propiedad. 
		this.resizeStickyHeader();

		// seteamos el estado del Root y esperamos para seguir .
		this.setState({rootURL: theBit }, () => {

			
				// nos informa de estado actualizado
				console.log("section: ", this.state.activeSection,"root: " ,this.state.rootURL,
				)
			
				// verifica si la url base es distinta al indice que tiene y corrige el valor. 
				 if( "/"+this.state.rootURL !== this.routerBoy(this.state.activeSection)
					){
					// obtengo el numero de la URL . 
					let sectionNum = Number( this.state.rootURL.replace(/\D/g,''));
				
						// si la navegacion es mas q el total se vuelve a 1 
					if(this.state.activeSection >= this.state.totalSections) {
						sectionNum = 1;
						
					}
					
					this.setState({ activeSection : sectionNum }, () => {

						console.log("sectionNum reseted to ", this.state.activeSection)
						// esconde la nav
						this.hideEndNavMenu();

					 })
					}


		})

		


	}

	onSectionEnter = (nombre) => {
	//	console.log("section ", nombre)
	//	this.performRedirect(nombre)
	
	}
	
	onSectionLeave = (numero) => {
		
		

	}
	performRedirect = (nombre) => {
		console.log("perform redirect", nombre, this.props.history)
		// const { history } = this.props;
		//history.push("/"+nombre)
	}
	render() {
		return (
			<div>

			<div className='burgerWrap'>

				<a className="burger" onClick={this.handleClick}>	
					<img src={lockupExpo}  className="lockupExpo" alt="Testigos de hielo" />
				</a>
				</div>
					<BrowserRouter>
					<ul className="cat-links">
					<li className='about-cat'>
							<Link className="linkCat" to="/">Home</Link>
						</li>
						<li className='about-cat'>
							<Link className="linkCat" to="/about">About</Link>
						</li>
						<li className='fotos-cat'>
						<Link className="linkCat" to="/fotos">fotos</Link>
						</li>					
						<li className='videos-cat'>
							<Link className="linkCat"to="/videos">videos</Link>
						</li>					
					</ul>	
				


					{this.state.menuVisible && <div>
					<ul className="nav-links">
					<li className='top-1'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(1)} activeclassname="active">1.Cambio Climático</NavLink></li>
					<li className='top-2'>
						<NavLink onClick={this.handleClick}to={this.routerBoy(2)} activeclassname="active">2. Variabilidad e historia del Clima</NavLink></li>
					<li className='top-3'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(3)} activeclassname="active">3.Importancia de la Montaña como reserva Hídrica</NavLink>
					</li>

					<li className='top-4'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(4)} activeclassname="active">4. Glaciología: que estudia y cómo se estudia.</NavLink>
					</li>
					<li className='top-5'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(5)} activeclassname="active">5. Qué son los testigos de hielos y para qué sirven</NavLink>
					</li>
					<li className='top-6'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(6)} activeclassname="active">6. Modelamiento del futuro (presente próximo siglo)</NavLink>
					</li>


				<li className='about'>
						<NavLink onClick={this.handleClick} to={"/Home"} activeclassname="active">about</NavLink>
					</li>
					<li className='fotos'>
						<NavLink onClick={this.handleClick} to={"/Videos"} activeclassname="active">fotos</NavLink>
					</li>
					<li className='videos'>
						<NavLink onClick={this.handleClick} to={"/About"} activeclassname="active">videos</NavLink>
					</li>
				</ul>

		
				
				</div>}
					
				<Routes>
				
				<Route exact path="/" element={<this.SectionIntro />} />
                    <Route exact path={this.routerBoy(1)} element={<this.Section1 />} />
                    <Route exact path={this.routerBoy(2)} element={<this.Section2 />} />
                    <Route exact path={this.routerBoy(3)} element={<this.Section3 />} />
                    <Route exact path={this.routerBoy(4)} element={<this.Section4 />} />
                    <Route exact path={this.routerBoy(5)} element={<this.Section5 />} />
                    <Route exact path={this.routerBoy(6)} element={<this.Section6 />} />
					<Route path="/about" element={<About />} />
                </Routes>

				{ this.state.rootURL !== "/" && 
				<EndNav>
					<BackToMain onClick={this.onClickBackToMain}>
						<NavLink to="/" >Volver al Menu Principal</NavLink>
					</BackToMain>
					<NextSection onClick={this.onClickNextSection}>
						<NavLink to={this.routerBoy(this.state.activeSection+1)} >Ir a la siguiente sección</NavLink>
					</NextSection>
				</EndNav>
				}
			
				</BrowserRouter>
				
				


				<Footer>

				</Footer>

			</div>


		)
	}
}

export default App
