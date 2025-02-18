import styled from "styled-components";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav data-aos="fade-up">
        <Logo data-aos="fade-right">
          <img src="./SJCIT-logo.jpg" alt="NavLogo" />
        </Logo>
        <Login data-aos="fade-left" onClick={() => navigate("/login")}>
          Login
        </Login>
      </Nav>
      <Main>Main</Main>
    </>
  );
};

const Nav = styled.nav`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid rgb(0, 0, 0);
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  margin-top: 4px;
  width: 90px;
  max-height: 80px;
  font-size: 0;
  display: inline-block;
  img {
    display: flex;
    width: 100%;
  }
`;

const Login = styled.a`
  background-color: #ec3130;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 8px 16px;
  border-radius: 1px solid #f9f9f9;
  border-radius: 4px;
  transform: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 0, 0);
    color: #f9f9f9;
    border-color: transparent;
  }
`;

const Main = styled.div`
  margin-top: 70px;
`;

export default Landing;
