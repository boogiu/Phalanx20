import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import FAQ from '../components/Layout/ETC/F&Q'
import Footer from '../components/common/Footer';
import SnsFooter from '../components/Layout/SnsFooter';
const ETCPage = () => {

  return (
    <StyledContainer>
      <div>
        <FAQ/>
        <SnsFooter/>
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
