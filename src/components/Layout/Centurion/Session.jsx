import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Session = () => {

  return (
    <BackGroundSrc imagePath={"Cent3.png"}>
 
          <SectionBlock id="Second-section">
            <OnloadGroup>
                <TitleSection>
                    <TextSection >
                    <SecTitle>올림피아 기획 대전 </SecTitle>
                      <DiscriptionBox>
                      <Discription  style={{textAlign : "start"}}>
                            현재 우리가 사는 세상 속 다양한 기업과 <br/>
                            서비스, 산업 실무에서의 <Redspan>실제 기획 <br/>
                            레퍼런스를 바탕으로</Redspan> 크루들의 인싸이트를<br/>
                             나누는 위즈덤과, 에세이가 진행됩니다. <br/>
                             <br/>
                            <Strong>위즈덤을 통해서</Strong>, 모든 크루들은 <br/>
                            매주 정해진 기획 분야의 이슈/트렌드를 <br/>
                            전달받고, <Redspan>자신의 인싸이트를 다른 크루들과 <br/>
                            간단하게 나누며,</Redspan> 실무진에게 피드백 받습니다. <br/>
                            <br/>
                            <Strong>에세이에서는</Strong> 보다 더 <Redspan>심화적인 <br/>
                            기획 이슈를 소재로,</Redspan> 우리의 기획력을 <br/>
                            각자 블로그와 티스토리 등 개인 채널에 <br/>
                            아카이빙 한 후, 크루들과 공유합니다. 

                        </Discription>
                      </DiscriptionBox>
                    </TextSection>
                    <ImgComponent 
                    imagePath={"MegaPhone.png"} 
                    top={"00%"} 
                    left={"50%"}
                    rotate={"-20deg"}
                    width={"20%"}/>
                </TitleSection>
            </OnloadGroup>  
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Session;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8), 
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
  
  margin: 13vh 0vw 0vh 0vw;
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
const OnloadGroup = styled.section`
    animation: ${fadeInFromLeft} 1s ease forwards;
    width : 100%;
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
  font-size : 5.5vmin;
`;

const Bold = styled.span`

  color: #FFFF00;
  
`;

const Strong = styled.span`
  font-family : "워헤븐";
  font-size : 10vmin;
  color: #F78181;
  line-height:200%;
  
`;

const SecTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 10vmin;
  color: #2EFE2E;
  line-height:200%;
  
`;