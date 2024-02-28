import React, { useEffect, useRef } from 'react';
import { StyledContainer, SectionBlock, BackGroundSrc, HannaTxt, GrenBlock } from '../components/common/GlobalStyle';
import styled from 'styled-components';
const TestPreMessage = () => {
  const lineRef = useRef(null);
  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      const height = line.getBoundingClientRect().height;
  
      line.style.strokeDasharray = height + ' ' + height;
      line.style.strokeDashoffset = height/2 ;
  
      function scrollHandler() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
    
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        const drawLength = height * scrollPercentage;
    
        line.style.strokeDashoffset = height - drawLength;
      }
    
      window.addEventListener('scroll', scrollHandler);
    
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);
  return (
    <StyledContainer>
      <StyledSVG>
        <StyledPath ref={lineRef} 
        d="M237 1L1 197C79.6667 230.5 237 321.7 237 418.5C237 539.5 205 1403 127.5 1552.5C50 1702 280.5 2436.5 260 2603C239.5 2769.5 -56.5 3509.5 35.5 3624.5C109.1 3716.5 202.167 3777.83 239.5 3797"/>
      </StyledSVG>
      <BackGroundSrc imagePath={"PreBack1.png"}>
         <SectionBlock>
         <StyledSVG>
        
      </StyledSVG>
        </SectionBlock>
      </BackGroundSrc>
      <BackGroundSrc imagePath={"PreBack1.png"}>
         <SectionBlock>
         
        </SectionBlock>
      </BackGroundSrc>
    </StyledContainer>
  );
};

export default TestPreMessage;

const StyledSVG = styled.svg`
  position: absolute;
  top: 50;
  left: 50;
  width: 50%;
  height: 100%;
  z-index: 1; /* 다른 요소들보다 뒤에 렌더링됩니다. */
`;

const StyledPath = styled.path`
  /* 원하는 스타일을 여기에 추가합니다. */
  fill: none;
  stroke: green;
  stroke-width: 4px;
`;