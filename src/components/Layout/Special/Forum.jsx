import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Forum = () => {

  return (
    <BackGroundSrc imagePath={"Spb.png"}>
          <SectionBlock>
            <TextSubGruop2>
                     <Main style={{textAlign : "center"}}>
                      포럼
                      <Imagediv2>
                    <ImgComponent2 imagePath={"file.png"} 
                    top={"-200%"} 
                    left={"60%"}
                    rotate={"30deg"}
                    width={"30%"}/>              
                </Imagediv2>
                     </Main>
                     <Txt>
                     팔랑크스의 포럼에서는, <br/>
                     선배/졸업/동료 크루들 중 해당 부분에서 <br/>
                     <Bigger><YellowSpan>최고의 역량을 가지고 있는 크루가
                      </YellowSpan></Bigger><br/>
                     기획/컨설팅 분야에서 주요한 프로그램과<br/>
                     스킬에 대한 사용 방식이나, 기초적이지만 <br/>
                     <br/>
                    <RedSpan>한번도 누가 알려주지 않았던</RedSpan> 실무 사항들의<br/>
                    실제 진행 방식과 팁을 직접 보여주며, <br/>
                    <YellowSpan>클럽 크루  전체의 역량으로 진화할 수 있게<br/>
                    됩니다.<br/></YellowSpan>
                    <br/>
                    매월 평균 1~2회에 걸쳐, <br/>
                    선배/졸업/동료 크루들이 기획 분야의 팁을 <br/>
                    주제로 포럼이 개최되며 모든 크루들은 <br/>
                    자유롭게 참가할 수 있습니다. <br/>
                    <br/><Bigger><GreenSpan>
                    너무나도 쉽고, 다 아는것 같은데 <br/>
                    나만 모르는 스킬, 기술, 팁 등을 <br/>
                    포럼에서 얻어가세요! <br/></GreenSpan></Bigger>

                     </Txt>

                     <Imagediv>
                    <ImgComponent imagePath={"Forum.png"} 
                    top={"-0%"} 
                    left={"-20%"}
                    rotate={"0deg"}
                    width={"130%"}/>
                    <ImgComponent imagePath={"Forum1.jpg"} 
                    top={"75%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                    <ImgComponent imagePath={"Forum2.jpg"} 
                    top={"40%"} 
                    left={"30%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                    
                </Imagediv>
            </TextSubGruop2>

            
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Forum;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.7),
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
  margin: 0vh 0vw 0vh 0vw;

`;




const TextSubGruop2 = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(255, 204, 204, 0.2);
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    padding: 5%;
    overflow : hidden;
`;






const Imagediv = styled.div`
  width : 100%;  
  height : 40vh; 
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  margin : 15% ;
  position : relative;
`;

const Imagediv2 = styled.div`
  width : 100%;  
  height : 4vh; 
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  margin : 15% ;
  position : relative;
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
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
            borderRadius :"5% 5% 5% 5% ",
            boxShadow : " 0px 3px 3px 1px gray" 
          }}/>
      </ImageContainer>
      
  );
};


const ImgComponent2 = ({ imagePath, top, left,rotate,width }) => {
  return (
      <ImageContainer 
        top = {top}
        left = {left}
        rotate={rotate}
        width={width}
        
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
            borderRadius :"5% 5% 5% 5% "
          }}/>
      </ImageContainer>
      
  );
};

const Main = styled.h2`
  font-family : '워헤븐';
  font-size : 11vmin;
  color :#F6E3CE;
  margin: 5% 0% 5% 0%;
  text-shadow:0 0 2px #FF4000,  0 0 3px #FF4000;
  width : 100%;
`
const Txt = styled.p`
  font-family : '스윗';
  font-size : 5vmin;
`

const RedSpan = styled.span`
    color : #F5A9A9;
`

const YellowSpan = styled.span`
    color : #F2F5A9;
`
const GreenSpan = styled.span`
    color : #BCF5A9;
`
const Bigger = styled.span`
font-size : 6vmin;
`