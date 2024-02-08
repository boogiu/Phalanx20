import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Header from '../components/common/Header';
import Wisdom from '../components/Layout/Centurion/Wisdom'
import Calender from '../components/Layout/Centurion/Calender';
import Session from '../components/Layout/Centurion/Session';
import Footer from '../components/common/Footer';
const CenturionPage = () => {

  return (
    <StyledContainer>
      <Header/>
      <div>
        <Wisdom/>
        <Session/>
        <Calender/>
      </div>
      <Footer/>
    </StyledContainer>
   
  );
};

export default CenturionPage;



  //콘테이너 디자인//
const StyledContainer = styled.div`
  width: 100%;
  height:auto;
  background-color: black;
  display: flex;
  flex-flow : column nowrap;
  justify-content:center;
  align-content: center;
  overflow: hidden;
  background-color: black;
  margin : 0;
  position : relative;
  `;
