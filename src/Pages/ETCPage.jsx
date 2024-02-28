import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import FAQ from '../components/Layout/ETC/F&Q'
import Footer from '../components/common/Footer';
import SnsFooter from '../components/Layout/Default/SnsFooter';
import { useAppContext } from '../AppContext';
const ETCPage = () => {
  const { scrollToRef } = useAppContext();
  const sectionDefault = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    if (scrollToRef === 'section1' && section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (scrollToRef === 'section2' && section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (scrollToRef === 'section3' && section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (scrollToRef === 'default' && sectionDefault.current) {
      sectionDefault.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToRef, section1Ref, section2Ref, section3Ref,sectionDefault]); // ref들도 의존성 배열에 추가해주어야 합니다.
  
  return (
    <StyledContainer>
      <div>
        <div ref={section2Ref}/>
        <FAQ/>
        <div ref={section3Ref}/>
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
