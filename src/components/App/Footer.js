import React from "react";
import styled from "styled-components";
//import { BrowserRouter as Router, Route } from "react-router-dom";

//import logo from "../img/logo_white_simple.svg";
//simport Social from "./Social";
// import { Link, NavLink } from "react-router-dom";

const Mailto = styled.a`

  text-decoration: none;
  color: #ffffff;
  margin-top: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
    
  @media (max-width: 840px) {
    font-size: 0.7rem;
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
background-color: #282c34;
color: #ffffff;
padding: 2rem 0;


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
{/*         <Router>
      <Route to="/">
          <Manifest>Testigos de Hielo</Manifest>
      </Route>
    </Router>
 */}
          <Mailto
            href={
              "mailto:contacto@testigosdehielo.cl?subject=Contacto%20desde%20TestigosdeHIelo"
            }
          >
            <i className="far fa-envelope fa-2x" />
            <h2>contacto@testigosdehielo.cl</h2>
            </Mailto>
        </Links>
      </General>
      <BackToTop>
        <ToTop onClick={() => smoothScroll()}>
          <span>
            <i className="fas fa-angle-up fa-4x" />
          </span>
        </ToTop>
      </BackToTop>
    </Content>
  </Wrap>
);


export default Footer;
