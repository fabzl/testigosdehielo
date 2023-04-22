import React from "react";
import styled from "styled-components";
//import { BrowserRouter as Router, Route } from "react-router-dom";

//import logo from "../img/logo_white_simple.svg";
//simport Social from "./Social";
// import { Link, NavLink } from "react-router-dom";
import InstagramIcon from "../../img/instagram-icon.svg";
import ExpoGraphic from "../../img//isometrica_expo.svg";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import About from './About';
import Fotos from './Fotos';
import Videos from './Videos';

const InstaLink = styled.a`

  text-decoration: none;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  display:inline-flex;
  margin-top: 3px;
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
background: url(${ExpoGraphic});
background-color: #282c34;
background-size:cover;
background-position: center left;
background-repeat: no-repeat;
background-scale: 
color: #ffffff;
padding: 2rem 0;
overflow:hidden;

z-index: 50;
  padding: 3.5rem 4rem 2rem;
  min-height: 15rem;
  display: block;
  padding-bottom: 2rem;


  @media (max-width: 740px) {
    padding-bottom: 4rem;
  }
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
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 1rem;
  }
`;

const BackToTop = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: 740px) {
    display: none;
  }
`;

const Links = styled.div`
  margin-top: 1rem;
  @media (max-width: 740px) {
    flex-direction: column;
    text-align: left;
  }
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

   <Content>

      <General>
        <Links>		
        
        <BrowserRouter>
		
    <div className="menu-footer">
      <ul className="cat-links-footer">
        <li className='home-cat'>
          <Link className="linkCat"  to="/">Home</Link>
        </li>
        <li className='about-cat'>
          <Link className="linkCat"  to="/about">About</Link>
        </li>
        <li className='fotos-cat'>
          <Link className="linkCat"  to="/fotos">fotos</Link>
        </li>					
        <li className='videos-cat'>
          <Link className="linkCat"to="/videos">videos</Link>
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
  <Routes>
				<Route exact path="/" />
        <Route exact path={props.routerBoy(1)}  element={<props.Section1 />}/>
        <Route exact path={props.routerBoy(2)}  />
        <Route exact path={props.routerBoy(3)}  />
        <Route exact path={props.routerBoy(4)} />
        <Route exact path={props.routerBoy(5)}  />
        <Route exact path={props.routerBoy(6)}  />
				<Route path="/about"  element={<About />}  href="/about" />
				<Route path="/Fotos" element={<Fotos />} />
				<Route path="/Videos" element={<Videos />} />
 </Routes>


  </BrowserRouter>

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
      <BackToTop>
        <ToTop onClick={() => smoothScroll()}>
          <span>
            <i className="fas fa-angle-up fa-4x" />
          </span>
        </ToTop>
      </BackToTop>

      <p>financiado por : </p>
      

    </Content>
  </Wrap>
);


export default Footer;
