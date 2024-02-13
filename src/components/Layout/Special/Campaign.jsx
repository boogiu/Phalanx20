import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Campaign = () => {

  return (
    <BackGroundSrc imagePath={"Spb.png"}>
          <SectionBlock>
            <TextSubGruop2><Imagediv2>
                    <ImgComponent2 imagePath={"idea.png"} 
                    top={"-200%"} 
                    left={"-40%"}
                    rotate={"-90deg"}
                    width={"80%"}/>              
                </Imagediv2>
                     <Main style={{textAlign : "right"}}>
                      특별행사
                     </Main>
                     
                     <Txt>
                     팔랑크스에서는 <br/>
                     시즌 중 다양한 후원/연계사와의 교류를 통해 <br/>
                     <Bigger><RedSpan>실무진들의 특강, 공모전 참가, <br/> 관련 정보 공유,
                     채용 캐스팅 제안 등의  <br/>행사가</RedSpan> </Bigger>개최됩니다.<br/>
                     <br/>
                    해당 특별행사는, 클럽 팔랑크스와의 제휴로<br/>
                    연계사들의 다양한 지원/후원 하에 이루어지는 <br/>
                    것이며, 실제 기업들과의 채용 연계도 <br/>
                    이루어지오니, <br/>
                    <Bigger><GreenSpan>기획/컨설팅을 위시한 여러 직무로의 <br/>
                    취업에서의 기회 역시 잡아가세요!<br/></GreenSpan></Bigger>
                    <br/>
                    <YellowSpan>특강, 행사 뒤에는 항상 뒷풀이와 <br/>
                    술자리가 있으니, 재밌게 노는 건 덤!<br/>
                    고생한 사람들끼리 마시는 술자리는..캬~</YellowSpan>

                     </Txt>
                     <Imagediv>
                    <ImgComponent imagePath={"Moim1.png"} 
                    top={"0%"} 
                    left={"50%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim2.png"} 
                    top={"70%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim3.png"} 
                    top={"10%"} 
                    left={"-40%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim4.png"} 
                    top={"80%"} 
                    left={"40%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim5.png"} 
                    top={"50%"} 
                    left={"20%"}
                    rotate={"0deg"}
                    width={"50%"}/>
                </Imagediv>
            </TextSubGruop2>
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Campaign;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
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
  margin: 0vh 0vw 10vh 0vw;

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