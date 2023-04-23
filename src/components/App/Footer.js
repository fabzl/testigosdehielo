import React from "react";
import styled from "styled-components";
//import { BrowserRouter as Router, Route } from "react-router-dom";

//import logo from "../img/logo_white_simple.svg";
//simport Social from "./Social";
// import { Link, NavLink } from "react-router-dom";
import InstagramIcon from "../../img/instagram-icon.svg";
import ExpoGraphic from "../../img/isometrica_expo.svg";
import { NavLink } from 'react-router-dom';
import About from './About';
import Fotos from './Fotos';
import Videos from './Videos';

//logos 
import CienciaPublica from "../../img/LogoConcurso_CP_trazoblanco.png";

import Lai from "../../img/LAI_LetrasBlanco.png";
import Unab from "../../img/logo-unab-cc.svg";
import Vice from "../../img/VRID.png";


import Parque from "../../img/parque.svg";
import Museo from "../../img/Blanco_MCAP+MHNV_RGB.png";
import Tecno from "../../img/logo-tecno.svg";

import Juncal from '../../img/juncal-nor-oriente.jpg'
import Bar from '../../img/timelin01_bar-01.svg'


const InstaLink = styled.a`

  text-decoration: none;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  display:inline-flex;
  text-align:center;
  justify-content: center;
  @media (max-width: 840px) {
  }

  `;



const Manifest = styled.p` 
   font-size: 1rem;
   align-self: center;
   font-weight: 750;
`;


const Icons = styled.div`
align-self: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
  .x {
    margin: 1.5rem;
    text-transform: uppercase;
  }

`;


const Image = styled.img` 


`;

const Logo = styled.img`
  width: 68%;
  @media (min-width: 500px) {
    min-width: 15rem;
    width: 50%;
  }
  margin: 0 auto;
  display: flex;
  max-width: 30rem;
`;

const Wrap = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%), url(${Juncal});
background-color: #282c34;
background-size:cover;
background-position: center left;
background-repeat: no-repeat;
background-scale: 
color: #ffffff;
overflow:hidden;
z-index: 50;
  padding: 3.5rem 4rem 2rem;
  min-height: 15rem;
  display: block;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  position:relative;
 
`;

const General = styled.div`
  flex: 3;
  text-align: center;
  color: #1d1d1b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 1rem;
  }
`;

const Links = styled.div`
  margin-top: 1rem;
`;

const ToTop = styled.a`
  color:white;
  font-size: 1rem;
  display: inline-block;
  overflow: hidden;
  font-weight: 200;
  text-align: center;
  cursor: pointer;
  margin: 2rem 0;
  text-decoration: none;

  > span {
    display: block;
  }

  transition: 1s all;
  &:hover {
    color:blue;
  }
`;





export const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};

const Footer = props => (


  <Wrap>
        <img className="heatBar"src={Bar} alt="Heat Bar"/>

   <Content>

      <General>
        <Links>		
        
		
    <div className="menu-footer">
      <ul className="cat-links-footer">
        <li className='home-cat'>
          <NavLink className="linkCat"  to="/">Home</NavLink>
        </li>
        <li className='about-cat'>
          <NavLink className="linkCat"  to="/about">About</NavLink>
        </li>
        <li className='fotos-cat'>
          <NavLink className="linkCat"  to="/fotos">fotos</NavLink>
        </li>					
        <li className='videos-cat'>
          <NavLink className="linkCat"to="/videos">videos</NavLink>
        </li>					
      </ul>
    <ul className='nav-links-footer'>
      <li >
      <NavLink  to={props.routerBoy(1)} onClick={props.handleClickFooter} >Cambio Climático</NavLink></li>
    <li >
      <NavLink to={props.routerBoy(2)} onClick={props.handleClickFooter} >Variabilidad e historia del Clima</NavLink></li>
    <li >
      <NavLink  to={props.routerBoy(3)} onClick={props.handleClickFooter}>Importancia de la Montaña como reserva Hídrica</NavLink>
    </li>
    <li >
      <NavLink  to={props.routerBoy(4)} onClick={props.handleClickFooter}>Glaciología: que estudia y cómo se estudia.</NavLink>
    </li>
    <li >
      <NavLink  to={props.routerBoy(5)} onClick={props.handleClickFooter} >¿Qué son los testigos de hielo?</NavLink>
    </li>
    <li >
      <NavLink  to={props.routerBoy(6)} onClick={props.handleClickFooter} >Modelamiento del futuro </NavLink>
    </li>
  </ul>

  </div>


          <InstaLink
            href={
              "https://www.instagram.com/testigosdehielo/"
            }
            rel='noopener noreferrer'
            target="_blank"
          >          

          	<img className="instagramIcon"src={InstagramIcon} alt="Instagram Icon" />
            <h2  className="instaIconText">  instagram.com/testigosdehielo
              
            </h2>
            </InstaLink>
        </Links>
      </General>
      <div className="logos-bar">
      <p>Financiado por : </p>
      <img className="logo-footer ciencia"src={CienciaPublica} alt="CienciaPublica" />
      <p>Organiza por : </p>
      <img className="logo-footer lai"src={Lai} alt="Lai" />

      <img className="logo-footer vice" src={Vice} alt="Vicerrectoria de Investigacion y Doctorado" />

      <img className="logo-footer unab"src={Unab} alt="Universidad Andres Bello campus creativo" />


      <p>Colaboran por : </p>
      <img className="logo-footer parque"src={Parque} alt="CienciaPublica" />
      <img className="logo-footer museo"src={Museo} alt="CienciaPublica" />
      <img className="logo-footer tecno"src={Tecno} alt="CienciaPublica" />
      <p className="lafabulosa">2023 | 28 de abril al 28 de julio | Explanada Central Parque Cultural de Valparaíso |  Sitio web  <a     rel='noopener noreferrer'
            target="_blank"href="https://www.lafabulosa.org">la fabulosa</a></p>
      </div>
    </Content>
  </Wrap>
);


export default Footer;
