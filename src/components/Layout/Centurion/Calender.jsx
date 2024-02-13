import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"
import { Link } from 'react-router-dom';

const Calender = () => {

  return (
    <BackGroundSrc imagePath={"Cent2.png"}>
 
          <SectionBlock id="Second-section">
                <TitleSection>
                    <TextSection >
                    <SecTitle>캘린더 </SecTitle>
                      <DiscriptionBox>
                        <Discription  style={{textAlign : "start"}}>
                            클럽 팔랑크스가 운용되는 시즌과 주차,<br/> 
                            그리고 <GreenSpan>매주 정해진 일정과 <br/>
                            중앙/세부/특별 활동의 일정이 안내되어,</GreenSpan><br/>
                            모든 크루들은 해당 사항들을 보고 <br/>
                            사전에 준비하거나 개인 일정을 <br/>
                            조율할 수 있습니다. <br/>
                             <br/>
                            기획/컨설팅 분야의 <br/>
                            국내외에서 진행되는 <br/>
                            <StrongSpan>여러 공모전과 행사, <br/>
                            관련 DB들에 대한 정보가<br/>
                            크루들에게 전달되어, <br/></StrongSpan>
                            자신의 파트, 팀 내에 공모를 통해<br/>
                            지원 팀을 구성하여 참여하는<br/>
                           <Strong> 기획/컨설팅 분야의 정보 인프라</Strong><br/>
                           입니다. <br/>
                        </Discription>
                      </DiscriptionBox>
                    </TextSection>
                    <ImgComponent 
                    imagePath={"Calender.png"} 
                    top={"-10%"} 
                    left={"70%"}
                    rotate={"-20deg"}
                    width={"40%"}/>
                </TitleSection>
                <JustImg imagePath={'p.39.png'}/>
          </SectionBlock>
          <SectionBlock>
            
            <GradientButton>
                <LinkBtn to={'/DefaultPage'}>돌아가기</LinkBtn>
            </GradientButton>
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Calender;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.6),
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


const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  

`;

const TitleSection = styled.div`
  display: flex;
  width : 100%;
  flex-flow : row wrap;
  color : white;
  position: relative; /* 부모 요소에 position 추가 */
  
  margin: 13vh 0vw 5vh 0vw;
`;

const TextSection = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
`;

const DiscriptionBox = styled.div`
  width : 90%;
  border-radius: 16px;
  background: rgba(105, 105, 105, 0.20);

/* box2 */
box-shadow: 0px 0px 4px 0px #979797;
backdrop-filter: blur(3px);
`;

const Discription = styled.p`
  font-family : "스윗";
  font-size : 5vmin;
  color : white;
  line-height : 150%;
  margin : 5% 0% 5% 5%;
`;

const ImageContainer = styled.div`

width: ${({ width }) => width};
height: auto;
object-fit: cover;
background-color: transparent;
transform : rotate(${({ rotate }) => rotate});
top:${({ top }) => top};
left: ${({ left }) => left};
position: absolute; /* 겹치는 요소에 position 추가 */
`;

const ImgComponent = ({ imagePath, top, left,rotate,width }) => {
  return (
      <ImageContainer 
        top = {top}
        left = {left}
        rotate={rotate}
        width={width}
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </ImageContainer>
      
  );
};

const Redspan = styled.span`
  font-weight: 500;
  color: #F78181;
  font-size : 5vmin;
`;

const RedStrongSpan = styled.span`
width: 100%;
font-size: 6vmin;
font-family : '스윗';
font-weight : 600;
color : #FF0000;
line-height : 200%;
font-style : italic;
`;

const StrongSpan = styled.span`
  width: 100%;
  font-size: 5.5vmin;
  font-family : '스윗';
  font-weight : 300;
  color : #FFFF00;
  line-height : 200%;
`;

const GreenSpan = styled.span`
  width: 100%;
  font-size: 5vmin;
  font-family : '스윗';
  font-weight : 600;
  color : #74DF00;
`;
const Strong = styled.span`
  font-family : "스윗";
  font-size : 6vmin;
  color: #FE642E;
  line-height:200%;
  font-weight : 600;
  
`;

const SecTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 10vmin;
  color: #FA5882;
  line-height:200%;
  
`;


const ImageBox = styled.div`
  height: auto;
  object-fit: cover;
  background-color: transparent;
  margin : 5% ;
  animation:ani 1s infinite alternate;  
   }
  @keyframes ani{
   
    0%{transform:translate(0,0);}
   100%{transform:translate(0,20px);}
}  
`;

const JustImg = ({ imagePath }) => {
  return (
      <ImageBox 
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
        maxWidth: '100%', 
          maxHeight: '100%',
          borderRadius :"5% 5% 5% 5% " }}/>
      </ImageBox>
      
  );
};

const GradientButton = styled.button`
  background: linear-gradient(45deg, #ff7300, #feac5e);
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 5vmin;
  font-family : '스윗';
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin : 5% 0% 15% 0%;
  box-shadow: 0px 4px 0px 0px #ff7300;
  &:hover {
    background: linear-gradient(45deg, #feac5e, #ff7300);
  }
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  overflow : hidden;
  height : 0;
  transition: all 0.8s ease;
`;