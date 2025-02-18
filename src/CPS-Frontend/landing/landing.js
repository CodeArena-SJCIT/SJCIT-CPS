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
      <BgImage />
      <Container>
        <Content>
          <CTA>
            <Title onClick={()=>navigate("/login")} data-aos="flip-up">Credit Point System Faculty Achievement Analytics</Title>
            <Description data-aos="fade-up">
              Track, analyze, and celebrate faculty achievements with our
              comprehensive credit point management system.Transform how you track and analyze faculty accomplishments with our comprehensive Credit Point System.
            </Description>
          </CTA>
        </Content>
      </Container>
    </>
  );
};

const Title = styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: rgb(255, 255, 255);
  font-size: 16px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Nav = styled.nav`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  margin-top: 4px;
  width: 150px;
  max-height: 100px;
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

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/bgImg.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  filter: blur(5px) brightness(0.7); /* Apply blur and reduce brightness */
  opacity: 0.6; /* Reduce opacity */
`;

export default Landing;
