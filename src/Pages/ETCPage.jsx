import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Header from '../components/common/Header';
import FAQ from '../components/Layout/ETC/F&Q'
import Footer from '../components/common/Footer';
const ETCPage = () => {

  return (
    <StyledContainer>
      <Header/>
      <div>
        <FAQ/>
      </div>
      <Footer/>
    </StyledContainer>
   
  );
};

export default ETCPage;



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