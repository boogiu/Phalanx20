import React, { useEffect, useRef } from 'react';
import { StyledContainer, SectionBlock, BackGroundSrc, HannaTxt, GrenBlock } from '../components/common/GlobalStyle';
import styled from 'styled-components';

const TestPreMessage = () => {

  return (
    <StyledContainer>
            
      <BackGroundSrc imagePath={"PreBack1.png"}>
         <SectionBlock>
            <HannaTxt>아아</HannaTxt>
        </SectionBlock>
      </BackGroundSrc>
      
    </StyledContainer>
  );
};

export default TestPreMessage;
