import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Season from '../components/Layout/Directing/Season'
const DirectingPage = () => {

  return (
    <StyledContainer>
      <Header/>
      <div>
        <Season/>
      </div>
      <Footer/>
    </StyledContainer>
   
  );
};

export default DirectingPage;



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
