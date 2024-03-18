import React from 'react';
import styled from 'styled-components';
import ReactGA4 from 'react-ga4';
import GenderGraph from '../components/Data/GenderGraph';
import CollegeGraph from '../components/Data/CollegeGraph';
import MajorGraph from '../components/Data/MajorGraph';

const ApplicantData = () => {


  return (
  <BackGroundSrc imagePath={"modalback.png"}>
    <StyledContainer>
        <AllGraphDiv>
            <GraphDiv> 
                <BoxDiv>
                지원자 대학 통계
                </BoxDiv>
                <BoxDiv>
                    <CollegeGraph/>
                </BoxDiv>
            </GraphDiv>
            <GraphDiv> 
                <BoxDiv>
                지원자 학부 통계
                </BoxDiv>
                <BoxDiv>
                  <MajorGraph/>       
                </BoxDiv>
            </GraphDiv>
            <GraphDiv> 
                <BoxDiv>
                지원자 성별 통계
                </BoxDiv>
                <BoxDiv>
                <GenderGraph/>            
                </BoxDiv>
            </GraphDiv>
        </AllGraphDiv>
    </StyledContainer>
  </BackGroundSrc>
   
  );
};

export default ApplicantData;


const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.98), 
    rgba(0, 0, 0, 0.85)
  ),
    url(${({ BackGroundImage }) => BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
`;

const BackGroundSrc = ({ imagePath, children }) => {
  return (
    <BackGroundGroup
      BackGroundImage={`${process.env.PUBLIC_URL}/imgData/${imagePath}`}
    >
      {children}
    </BackGroundGroup>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height:auto;
  display: flex;
  flex-flow : column nowrap;
  justify-content:center;
  align-items: center;
  overflow: hidden;
  margin : 0;
  position : relative;
 
`;

const AllGraphDiv = styled.div`
    margin : 23vh 0;
    width: 100%;
    height:auto;
    flex-flow : row wrap;
    justify-content:center;
    align-items: center;
    position : relative;
    color : white;
    @media (max-width: 768px) {
        margin : 19vh 0;
    }
    
`;
const GraphDiv = styled.div`
    width: 100%;
    height:1500px;
    display: grid;
    grid-template-rows: 1fr 9fr;
    place-items: center;
    position : relative;
    color : white;
    @media (max-width: 768px) {
        height:500px;
    }
    
`;

const BoxDiv = styled.div`
width: 100%;
height:100%;
display: flex;
flex-flow : row nowrap;
justify-content:center;
align-items: center;
border : 1px solid red;
`