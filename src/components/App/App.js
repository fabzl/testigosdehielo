
import React, { useEffect } from 'react';
import './App.scss'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint';
import LazyLoad from 'react-lazy-load';

import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import Footer from './Footer';
import A1 from '../../img/A1.svg'
import A2 from '../../img/A2.svg'
import A4 from '../../img/A4.svg'

import About from './About';
import Fotos from './Fotos';
import Videos from './Videos';

import sequiaValpo from '../../img/sequia_valpo.svg'
import sequiaValpo2 from '../../img/sequia_valpo_02.svg'
import Calent from '../../img/calent_2.svg'
import Gases from '../../img/gases.svg'
import Precipitaciones from '../../img/precipitaciones.svg'
import MundoCalent from  '../../img/mundo_calent.jpg'
import MundoGases from '../../img/mundo_gases.jpg'
import MundoSequia from '../../img/mundo_sequia.jpg'
import isoExpo from '../../img/isometrica_expo.svg'
import lockupExpo from '../../img/lockup_expo.svg'
import lockupText from '../../img/lockup_text.svg'
import logoTestigos from '../../img/testigos_de_hielo_logo.svg'
import Juncal from '../../img/juncal-nor-oriente.jpg'
import JuncalSurMapa from '../../img/juncalsurfoto.jpg'
import JuncalSur from '../../img/juncal-sur-mapa-01.jpg'
import TestigosMain from '../../img/TestigoMain.svg'
import Glaciofoto from '../../img/glaciologia_01.jpg'
import Glaciofoto2 from '../../img/glaciologia_02.jpg'
import Erupcion from '../../img/erupcion.png'
import TestigoPedazo from '../../img/testigos_pedazo.png'
import Reservahidrica from '../../img/resevahidrica2.svg'
import CicloDeAgua from '../../img/ciclodeagua.svg'
import CicloDeAguaText from '../../img/ciclo_deagua.svg'
import Derretimiento from '../../img/derretimiento01.jpg'
import Derretimiento2 from '../../img/derretimiento02.jpg'


import TestAudio from '../../audios/test.mp3'
import AudioGuideLogo from '../../img/audioguide.svg'


import MobileTimeline from './MobileTimeline';
import MobileTimelineValpo from './MobileTimelineValpo';
import MobileTimelineCO2 from './MobileTimelineCO2';
import MobileTimelineCalor from './MobileTimelineCalor';

const WrapQuote = styled.p`
text-align: center;
font-family: 'Fabriga', sans-serif;
font-weight: 900;
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
letter-spacing :80%;
background-color:#EEE;
`


const Menu = styled.div`

	background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%), url(${Derretimiento});
	background-size:cover;
	background-position:top;
	background-repeat: no-repeat;
	z-index: 999;
	width:100vw;
	height:100vh;
	top:0;
	position:fixed;
`

const MainBg = styled.div`
	background-image:url("${Juncal}");
	background-size:cover;
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
  top:200px;
  text-align:center;
  z-index:60;
  display:none;
  
@media screen and (max-width: 750px) {
	top:150px;
}

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
font-family: 'Fabriga', sans-serif;
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
font-family: 'Fabriga', sans-serif;
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
			return "/GLACIOLOGIA:-QUE-ESTUDIA-Y-COMO-SE-ESTUDIA-ADEMAS-DE-LA-IMPORTANCIA-DE-ESTA-CIENCIA-1";
			case 2: 
			return "/QUE-SON-LOS-TESTIGOS-DE-HIELOS-Y-PARA-QUE-SIRVEN-2" ;
			case 3: 
			return "/VARIABILIDAD-E-HISTORIA-DEL-CLIMA-3" ;
			case 4: 
			return "/CAMBIO-CLIMATICO-4" ;
			case 5: 
			return "/IMPORTANCIA-DE-LA-MONTANA-COMO-RESERVA-HIDRICA-5";
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

	handleClickFooter = () => {

			this.setState({ menuVisible : false })
			useEffect(() => {
				window.scrollTo(0, 0);
			}, []);
	  };


	  SectionIntro = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);

		return (
		<div>	
			<div className='wrapMain'>

			<h1 className="mainTitle">Testigos de Hielo</h1>
			<div>
				
					<img className="lockupText"src={lockupText}  alt="28 de abril" />
				
			</div>
			
				<img className="logoTestigos" src={logoTestigos}  alt="Testigos de hielo" />
			
			<MainBg/>
		</div>

		<div className='wrapQuoteBg'>
			<WrapQuote>
				
					<img src={isoExpo}  className="isExpo" alt="Testigos de hielo" />
				
				Durante la historia reciente de nuestro planeta ha sido testigo de muchos cambios en sus condiciones del clima y del ambiente. El hielo almacenado en los glaciares, ha visto y ha sufrido estos cambios, los que están almacenados en las capas que va almacenando año a año. Estos cambios se han traducido en el aumento de la temperatura a escala global, que han traído grandes cambios en las condiciones en que vivimos, y que nos han afectado directamente en nuestra vida cotidiana.
			</WrapQuote> 
		</div>
		{ this.state.activeSection === 0 ? null :  	this.Section1() }
		{ this.state.activeSection === 1 ? null :  	this.Section1() }
		{ this.state.activeSection === 2 ? null :   this.Section2() }
		{ this.state.activeSection === 3 ? null :   this.Section3() }
		{ this.state.activeSection === 4 ? null :   this.Section4() }
		{ this.state.activeSection === 5 ? null :   this.Section5() }
		{ this.state.activeSection === 6 ? null :  	this.Section6() }

			</div>
			);
	  }
	Section1 = () => {
		
		useEffect(() => {
			window.scrollTo(0, 0);

			this.setLocation();

		}, []);
		
		return (
			<div className="wrapperSection wrapper-1">
	
			<Waypoint
					onEnter={this.onSectionEnter(1)}
					onLeave={this.onSectionLeave(1)}
				/>
				<h2 className='sticky-text top-4'>1. Glaciología: que estudia y cómo se estudia.
				</h2>

				<img src={Glaciofoto} className="big-foto" alt="Glaciologos en Acción"/>
				
				<p className='wideRead'>La glaciología es una disciplina científica encargada de estudiar los glaciares, las glaciaciones y la criósfera en general, a través de monitoreos del comportamiento y formación, realizando mediciones en terreno o mediciones remotas.</p>

				<p className='wideRead'>La criósfera se define como todos los componentes congelados naturales que se encuentran sobre o debajo de la superficie terrestre u oceánicas. Incluyendo nieve, glaciares, casquetes de hielo icebergs, hielo marino, lagos y ríos congelados, además de suelos congelados. Tiene un rol importante en la regulación del clima a escala local y global, influyendo en la hidrología, nubes, precipitaciones y la circulación de la atmósfera y los océanos. El cambio climático está ocasionando una gran pérdida de la criósfera, mediante el derretimiento de grandes extensiones de hielo.
				</p>


				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>

				<p className='wideRead'>Los estudios en terreno incluyen normalmente expediciones en condiciones muy adversas, en donde investigadores hombres y mujeres deben exponerse a condiciones ambientales complejas. Una buena preparación de la expedición y buen equipamiento asegura que los científicos puedan trabajar de buena forma en la montaña o regiones polares. Muchas veces las expediciones ocurren en zonas muy remotas (zonas de acumulación de hielo), que deben ser accedidas caminando por largas rutas sobre glaciares o por medios de transporte como helicóptero o avión.
				</p>
				<img src={Glaciofoto2} className="big-foto" alt="Glaciologos en Acción 2"/>

				<p className='wideRead'>Trabajo en terreno de un grupo de glaciólogos que están determinando las tasas de derretimiento de verano en una zona de ablación del glaciar Juncal Norte.<br></br> <span className='fuente' >Fuente: Elaboración propia.</span>
				</p>

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
				<h2 className='sticky-text top-2'>3. Variabilidad e historia del clima</h2>
				<p className='wideRead'>Uno de los efectos más tangibles del cambio climático en nuestra región, se está observando en la disminución de precipitaciones y el aumento de fenómenos extremos como sequías extensas y eventos de lluvias intensas. Estos fenómenos se encuentran asociados a procesos naturales como la corriente del Niño/a, pero desde inicios del siglo XX se ha observado una clara relación con el incremento de la concentración de gases de efecto invernadero, que ha modificado los patrones de circulación atmosférica <br/><span className="fuente">Fuente:  Morales et al., 2020. </span></p>
				
				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					<ReactAudioPlayer src={TestAudio}
						controls
					/>
				</AudioPlayer>
				<h2 className="big-title sequia" alt="Anomalias de tempratura a escala global" >Precipitaciones y sequía</h2>
				
				<img src={sequiaValpo} className="sequiaValpo" alt="sequiaValpo" />
				
				<img src={sequiaValpo2} className="sequiaValpo2" alt="sequiaValpo2" />
				
	
				<h2 className="big-title sequia" alt="Anomalias de tempratura a escala global" >VARIACIÓN DE PRECIPITACIONES EN LA REGIÓN DE VALPARAÍSO<br></br><span>(desde 1750 a 2022)</span></h2>
				<MobileTimelineValpo></MobileTimelineValpo>

				<p className='wideRead'>Gráfico de la variación de precipitaciones a nivel local en la región de Valparaíso (índice de sequías) desde el año 1750 a 2019.  <br/><span className="fuente">Fuente: elaboración propia basado en datos del “Atlas de Sequía Sudamericano </span><br/> </p>

				<h2 className="big-title gases" alt="Olas de calor de la zona Central de Chile"  >
				OLAS DE CALOR DE LA ZONA CENTRAL DE CHILE*<span>(desde 1970 a 2022)</span>
				</h2>

				<MobileTimelineCalor></MobileTimelineCalor>

				<p className='wideRead'>Gráfico de olas de calor de la zona central de Chile (Regiones de Valparaíso y Metropolitana) desde el año 1970 hasta 2022.<br></br> <span className="fuente">Fuente: elaboración propia basada en datos de la dirección Meteorológica de Chile (DMC) (0)</span></p>

				<p className='wideRead'>De acuerdo con el informe anual de la Dirección Meteorológica de Chile (DMC): La temperatura media nacional en 2021 fue de 13.5 °C, 0.76°C más cálido que el promedio 1961- 1990 y 0.5°C respecto al promedio 1981-2010. El informe continúa aclarando que: La tendencia de la temperatura media es de 0.15°C por década. Se suman 11 años cálidos consecutivos y ha sido la más cálida desde hace 61 años, duplicando la década inmediatamente anterior (2000-2010).<br/> <span className='fuente'>Fuente Gutiérrez et al., 2022.</span></p>

				<h2 className="big-title anomalia" alt="Anomalias de tempratura a escala global "  >Anomalías de Temperaturas a Escala Global</h2>
				<MobileTimeline></MobileTimeline>
				
				<p className='wideRead'><span className="fuente"> Fuente: Gráfico de anomalía de temperaturas (respecto al promedio entre 1971-1990) para Chile entre 1901 y 2021.<br/><a  rel='noopener noreferrer' target="_blank" href="https://showyourstripes.info/l/southamerica/chile">
					 https://showyourstripes.info/l/southamerica/chile</a><br/>
					 Fuente: Gráfico de anomalía (respecto al promedio entre 1961-1990) de temperaturas para Valparaíso entre 1880 y 2021 <br/> <a  rel='noopener noreferrer' target="_blank" href="https://berkeleyearth.lbl.gov/locations/32.95S-71.81W#"> </a>https://berkeleyearth.lbl.gov/locations/32.95S-71.81W# </span>
				<span className="fuente">
					Gráfico de anomalía (respecto al promedio entre 1961-1990) de temperaturas a escala global entre los años 1850 y 2021. Fuente: El gráfico es elaboración propia basado en los datos de HadCRUT5  (Morice et al., 2021) <br/><a  rel='noopener noreferrer' target="_blank" href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">https://www.metoffice.gov.uk/hadobs/hadcrut5/</a>
				<br/>
				
				Gráfico anomalía (respecto al promedio entre 1961-1990) de la temperatura media global entre 1850 y 2021. Fuente: Tomado de <br/><a  rel='noopener noreferrer' target="_blank" href="https://showyourstripes.info/c/globe"> https://showyourstripes.info/c/globe</a>
				<br/>
				Anomalías de temperatura usando como periodo de referencia el promedio entre 1961 y 1990 para ser comparado con el promedio de 2021.<br/> Fuente: GISS Surface Temperature Analysis <a  rel='noopener noreferrer' target="_blank" href="https://showyourstripes.info/c/globe" >https://data.giss.nasa.gov/gistemp/maps/</a>

				</span></p>
				
				<p className='wideRead'>A escala global el año 2021 fue el 6to año más cálido desde 1880, estimándose la temperatura media global (tierra más océano) de 14.7 °C, siendo 0.84 °C sobre el promedio del siglo XX. Con este año se completan 45 años consecutivos (desde 1977) más cálidos que el promedio. De los 10 años más cálidos, 9 están dentro del 2013 al 2021. La temperatura global terrestre y oceánica anual ha aumentado en 0.08°C por década desde 1880, mientras que desde 1981 la tasa de aumento es más del doble con 0.18°C por década</p>
				

				<p className='wideRead'>De acuerdo con el reporte de la Dirección Meteorológica de Chile para el año 2021 (Gutiérrez et al., 2022): En Chile continental la temperatura media durante el 2021 fue de 13.5°C, lo que fue levemente más frío que el año anterior (-0.12°C) pero de igual forma se convirtió en el 4to año más cálido en 61 años, siendo +0.76°C más cálida que el promedio climatológico 1961-1990.</p>
				<p className='wideRead'>Una de las consecuencias del aumento de las temperaturas máximas, es el incremento de eventos extremos de temperaturas que se denominan “olas de calor” que corresponden a eventos de altas temperaturas que persisten por tres días continuos o más (cuando la temperatura máxima del día está en el 10% superior de las temperaturas históricas registradas). De acuerdo con la DMC: “Los eventos meteorológicos extremos como las olas de calor han aumentado durante el último siglo de manera significativa, producto del evidente aumento de las temperaturas lo que representa un peligro para la salud de las personas, la agricultura y el medio ambiente” <span className='fuente'>Fuente:(Gutiérrez et al., 2022)
				</span></p>
							

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
				
				onEnter={this.onSectionEnter(1)}
			//	onLeave={this.onSectdioguideTextionLeave(1)}
			/>
			<h2 className='sticky-text top-1'>4. Cambio climático</h2>
			
			<p className="wideRead">De acuerdo con la Naciones Unidas, el cambio climático se define como:  “Los cambios a largo plazo de las temperaturas y los patrones climáticos. Estos cambios pueden ser naturales, por ejemplo, a través de las variaciones del ciclo solar. Pero desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles como el carbón, el petróleo y el gas”.<br/><span className='fuente'> Fuente: <a rel='noopener noreferrer' target="_blank"  href="https://www.un.org/es/climatechange/what-is-climate-change">https://www.un.org/es/climatechange/what-is-climate-change</a></span></p>
			<img className="info-a4" src={A4} alt="Gráfico de concentración en partes por millón" />
			
			
			<p className="wideRead">Gráfico de concentración en partes por millón (ppm) de moléculas de dióxido de carbono en la atmósfera global entre el año 0 y el año 2022 de la era actual. <br/><span className="fuente">Fuente: <a  rel='noopener noreferrer' target="_blank"  href="https://ourworldindata.org/atmospheric-concentrations"> https://ourworldindata.org/atmospheric-concentrations</a></span></p>
	
			<h2 className="big-title gases" alt="Anomalias de tempratura a escala global" >CONCENTRACIÓN DE CO²* EN LA ATMÓSFERA A ESCALA GLOBAL <span>(desde 1750 a 2022)</span></h2>
			<h3 className='wideRead subtitle gases'>*Dióxido de carbono = Gas de efecto invernadero</h3>
			<MobileTimelineCO2></MobileTimelineCO2>
			<p className="wideRead">Gráfico concentración de gases de efecto invernadero a escala global,  desde el año 1750 a 2022.<br/><span className="fuente">Fuente: <a  rel='noopener noreferrer' target="_blank"  href="https://ourworldindata.org/atmospheric-concentrations">https://ourworldindata.org/atmospheric-concentrations</a></span></p>

			<AudioPlayer >
				<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
				
				<ReactAudioPlayer src={TestAudio}
					controls
					
				/>
			</AudioPlayer>
	
			<img src={A1} alt="Gases de Efecto Invernadero" />
			
			<img src={A2} alt="Gases de Efecto Invernadero" />
			
			<p className="wideRead">La quema de combustibles fósiles genera emisiones de gases de efecto invernadero que actúan como una manta que envuelve a la Tierra, atrapando el calor del sol y elevando las temperaturas
			<br/><span className="fuente"> Fuente: <a  rel='noopener noreferrer' target="_blank" href="https://antarctica.cl/divulgacion"> https://antarctica.cl/divulgacion</a></span></p>
			<p className="wideRead">
			El cambio climático es una variación de las condiciones ambientales del planeta, ocasionado directa o indirectamente por la actividad humana, el cual está alterando la composición de la atmósfera. Manifestándose en un aumento de las temperaturas medias y alteraciones del clima a escala mundial.</p>

			<p  className="wideRead">El clima es un estado característico propio de una zona en un largo periodo de tiempo, incluyendo aspectos como la temperatura, precipitaciones, humedad y viento. Mientras que la atmósfera está formada por una mezcla de gases y participa en la regulación del clima.</p>
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
					onLeave={this.onSectionLeave(5)}
				/>
				<h2 className='sticky-text top-3'>5.Importancia de la montaña como reserva hídrica</h2>	

				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>

				<h3 className='wideRead subtitle'>FOTOGRAFÍA GLACIAR JUNCAL SUR</h3>

				<img className='big-foto' src={JuncalSurMapa} alt="mapa"></img>
				
				<p className='wideRead'>Orientación nor-oriente, Octubre 2022.
				<br></br><span className='fuente'>Fotografía: Francisco García / UNAB</span></p>

				<img className='big-foto' src={Juncal} alt="mapa"></img>
				
				<p className='wideRead'>Fotografía con orientación sur-poniente del glaciar Juncal Sur, Octubre 2022. <br></br><span className='fuente'>Fuente: elaboración propia.</span> 
				</p>
				
				<img className='big-foto' src={Reservahidrica} alt="mapa"></img>
						
				<p className='wideRead'>En Chile el 70% de la población se abastece de agua proveniente de la cordillera (Bórquez et al., 2006), además nuestro país alberga más del 80% de los glaciares existentes de Sudamérica (Barcaza et al., 2017), la Cordillera de Los Andes aloja a gran cantidad de estos glaciares, los cuales son parte importante de las reservas de agua dulce (torres de agua), fundamentales para la vida y el ecosistema. Los glaciares emplazados en la cordillera contribuyen de gran manera a los flujos de agua superficial como subterráneos, llegando a aportar el 67% del agua dulce en años con bajas precipitaciones (Peña and Nazarala, 1987), sin embargo la principal fuente de recarga sigue siendo la precipitación de nieve y lluvia para las cuencas de Chile central. En particular para la región de Valparaíso, la cuenca del Aconcagua, se alimenta entre de fusión de nieve y lluvia (~50%), fuentes glaciares (~30%) y de aguas subterráneas y formas periglacieres (~20%). <span className='fuente'>Fuente: <a  rel='noopener noreferrer' target="_blank" href="https://showyourstripes.info/c/globe" >Crespo et al., 2020.</a></span></p>

				<img  className='big-foto' src={JuncalSur} alt="Juncal Sur" />

				<p className='wideRead'>Mapa de glaciares y redes hidricas, zona central de Chile.<br></br><span className='fuente'>Fuente: elaboración propia.</span> </p>
				<img className='big-foto' src={CicloDeAguaText} alt="mapa"></img>
				
				<p className='wideRead'>En el presente las consecuencias del proceso de cambio climático son más tangibles que nunca, las que hemos observado concretamente en nuestro territorio. En Chile (y en gran parte de Sudamérica) hemos estado experimentando uno de los periodos de sequías jamás visto a escala histórica (Morales et al., 2020; Bustos et al., 2015), presentándose un déficit importante en la cubierta de nieve para los últimos años que alcanzó un 34% de la cobertura de nieve, respecto al periodo promedio entre 2000 y 2021, en la cuenca del río Aconcagua que surte directamente de agua a la región de Valparaíso (IANIGLA-CONICET y (CR)²; web Observatorio de Nieve en los Andes de Argentina y Chile). Esta condición extrema ha acarreado nefastas consecuencias, como incendios forestales y urbanos, que han afectado directamente a los habitantes de ciudades densamente pobladas como la ciudad de Valparaíso. <br></br><span className="fuente">Fuente: Sapiains y otros., 2019.</span>
				</p>
				<img className='big-foto' src={CicloDeAgua} alt="Ciclo de Agua"></img>
				
				<p className='wideRead'> Ilustración del ciclo del agua.<br></br> <span className="fuente">Fuente: Servicio Geológico de Estados Unidos
				<br></br><a  rel='noopener noreferrer' target="_blank" href="https://www.usgs.gov/media/images/el-ciclo-del-agua-water-cycle-spanish-png" >https://www.usgs.gov/media/images/el-ciclo-del-agua-water-cycle-spanish-png </a>
				</span>
				</p>

				<div>

				</div>		
		
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
	
				<p className='wideRead'>Los efectos del cambio climático descritos hasta ahora continuaran en el futuro, a no ser que se tomen medidas urgentes en cuanto a la forma de usar los recursos naturales (Rojas et al., 2019; IPCC, 2021). De esta forma sabemos que las precipitaciones disminuirán entre un 5% y un 15% en la zona centro y sur de Chile (Stehr et al., 2019), lo que inevitablemente repercutirá en la perdida de masa glaciar a lo largo de Chile. En la zona central se proyecta una perdida de masa de hielo de entre un 12% y 37% (Glaciar Universidad) (Escanilla-Minchel et al., 2020) dependiendo de las decisiones socio-políticas que se lleguen a tomar en el futuro. El IPCC (2021) ha fijado como meta un calentamiento no superior a 1.5°C para el presente siglo, de manera de evitar efectos irreversibles en nuestro ambiente debido al cambio climático. Si esta meta se cumple, los efectos del cambio climático, podrián ser moderados pero no desapareceran. Las simulaciones, muestran que en todos los escenarios la precipitación de la zona central disminuirá y la temperatura aumentará (como efectos tangibles del cambio climático).</p>
				<h2 className="big-title calentamiento" alt="Anomalias de tempratura a escala global" >Calentamiento Global</h2>

				<img src={Calent} className="big-foto" alt="Calentamiento Global" />

				<img src={MundoCalent} className="big-foto" alt="Mundo Calentamiento Global" />

				<h2 className="big-title sequia" alt="Anomalias de tempratura a escala global" >Precipitaciones y sequía</h2>

				<img src={Precipitaciones} className="big-foto" alt="Precipitacion" />

				<img src={MundoSequia} className="big-foto" alt="Mundo Sequia" />

				<h2 className="big-title gases" alt="Anomalias de tempratura a escala global" >Gases de Efecto Invernadero</h2>

				<img src={Gases} className="big-foto" alt="Gases" />

				<img src={MundoGases} className="big-foto" alt="Mundo Gases" />





				<AudioPlayer>
					<img src={AudioGuideLogo} className="audioguide-logo" alt="AudioGuide" />
					
					<ReactAudioPlayer src={TestAudio}
						controls
						
					/>
				</AudioPlayer>
{/* 				<p className='wideRead'>  Figura panel superior modelo de las tendencias de precipitaciones (IPCC, 2021) para el mundo en caso de un aumento de 1.5°C, 2°C y 4°C</p>
				<p className='wideRead'>
					Figura panel superior modelo de las tendencias de temperaturas regionales (IPCC, 2021) para el mundo en caso de un aumento promedio de 1.5°C, 2°C y 4°C de la temperartura.
				</p>
				<p className='wideRead'>  Modelamiento de la temperatura a escala global bajo distintos escenarios socio-económicos. Fuente: http://antarctica.cl/divulgacion/
				</p>
 */}
					<p className='wideRead'>
					De acuerdo con las palabras del Dr. Raul Cordero (www.antarctica.cl): El clima del futuro depende de las decisiones que tomemos hoy. Si nos comprometemos con los objetivos del Acuerdo de París podríamos limitar el alza de la temperatura global a alrededor de 1.5°C y lograríamos conservar gran parte de la biodiversidad del planeta. Si no lo hacemos y no redoblamos esfuerzos para mitigar nuestras emisiones, el planeta podría ser a fines de siglo hasta 4°C en promedio más cálido que hoy, condenando a la extinción a muchas especies animales y vegetales. Es  nuestra tarea exigir que se cumplan estos acuerdos, de lo contrario, ya conocemos los posibles escenarios futuros.
				</p>

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
			<LazyLoad>
			<div>
			
				<div className='burgerWrap'>

			<a href className={`burger${this.state.menuVisible ? ' activeMenu' : ''}`} onClick={this.handleClick}><img src={lockupExpo}  className="lockupExpo" alt="Testigos de hielo" />
				</a>
				</div>
					<BrowserRouter>
		
			
					<Menu className={this.state.menuVisible ? 'menu active' : 'menu'} >

					<img className="logoTestigos logo-menu" src={logoTestigos}  alt="Testigos de hielo" />

						<ul className="cat-links">
							<li className='home-cat'>
								<Link className="linkCat" onClick={this.handleClick} to="/">Home</Link>
							</li>
							<li className='about-cat'>
								<Link className="linkCat" onClick={this.handleClick} to="/about">About</Link>
							</li>
							<li className='fotos-cat'>
								<Link className="linkCat" onClick={this.handleClick} to="/fotos">fotos</Link>
							</li>					
							<li className='videos-cat'>
								<Link className="linkCat"to="/videos">videos</Link>
							</li>					
						</ul>
					<ul className={this.state.menuVisible ? 'nav-links show' : 'nav-links'}>
						<li className='menu-link'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(1)} activeclassname="active">1.	Glaciología: que estudia y cómo se estudia</NavLink></li>
					<li className='menu-link'>
						<NavLink onClick={this.handleClick}to={this.routerBoy(2)} activeclassname="active">2. Qué son los testigos de hielos y para qué sirven</NavLink></li>
					<li className='menu-link'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(3)} activeclassname="active">3.	Variabilidad e historia del Clima</NavLink>
					</li>
					<li className='menu-link'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(4)} activeclassname="active">4. Cambio Climático	</NavLink>
					</li>
					<li className='menu-link'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(5)} activeclassname="active">5. Importancia de la Montaña como reserva Hídrica</NavLink>
					</li>
					<li className='menu-link'>
						<NavLink onClick={this.handleClick} to={this.routerBoy(6)} activeclassname="active">6.	Modelamiento del futuro (presente próximo siglo)</NavLink>
					</li>
				</ul>

		
				
				</Menu>}
					
				<Routes>
						<Route exact path="/" element={<this.SectionIntro />} />
						<Route exact path={this.routerBoy(1)} element={<this.Section1 />} />
						<Route exact path={this.routerBoy(2)} element={<this.Section2 />} />
						<Route exact path={this.routerBoy(3)} element={<this.Section3 />} />
						<Route exact path={this.routerBoy(4)} element={<this.Section4 />} />
						<Route exact path={this.routerBoy(5)} element={<this.Section5 />} />
						<Route exact path={this.routerBoy(6)} element={<this.Section6 />} />
						<Route path="/about" element={<About />} />
						<Route path="/Fotos" element={<Fotos />} />
						<Route path="/Videos" element={<Videos />} />
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

				<Footer routerBoy={this.routerBoy} SectionIntro={this.SectionIntro} Section1={this.Section1} Section2={this.Section2} Section3={this.Section3} Section4={this.Section4} Section5={this.Section5} Section6={this.Section6}   handleClickFooter={this.handleClickFooter}>

</Footer>
			
				</BrowserRouter>
				
				



		
			</div>
		
			</LazyLoad>
		)
	}
}

export default App
