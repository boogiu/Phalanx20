import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Header from '../components/common/Header';
import Team from '../components/Layout/Detail/Team'
import Curriculum from '../components/Layout/Detail/Curriculum';
import DetailAct from '../components/Layout/Detail/DetailAct';
import Footer from '../components/common/Footer';
const DetailPage = () => {

  return (
    <StyledContainer>
      <Header/>
      <div>
        <Team/>
        <Curriculum/>
        <DetailAct/>
      </div>
      <Footer/>
      
    </StyledContainer>
   
  );
};

export default DetailPage;



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
