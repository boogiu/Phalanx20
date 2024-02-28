
import {styled, keyframes,css} from 'styled-components';
import React, { useState, useEffect } from 'react';


const ModalContents = () => {


    return (

        <ContentsContainer>
            <HookingBox>
                <TextContainer>
                  <p><StrongSpan>1. 팔랑크스는</StrongSpan><br/> 
                  우리들의 아이디어를,이제는 대학생들의<br/>
                  상상에 그치지 말고, 산업단의 자문과<br/> 
                   커리큘럼을 배워서, 진짜 실무 기획으로<br/>
                  바꿔보는 것에 가장 주요한 가치를 둡니다.<br/>
                  <br/>
                  <GreenSpan>세상아 기다려라!!!  <br/>
                  본때를 보여주자!</GreenSpan> 
                  <br/><br/>
                  <JustImg imagePath={"Px1.png"}/>
                  <br/>
                  <StrongSpan>2. 팔랑크스는</StrongSpan><br/> 
                  클럽형 동아리로서, 타 클럽의 운영진들의 <br/>
                  허가를 받아 운영 구조를 벤치마킹하고  <br/>
                  이를 증빙하는 여러 후원사들과 자문단의 <br/>
                  지원을 받기에,  운영 방식을 사전에 고지하고, <br/>
                  <RedSpan>모든 구성원의 ‘확인’ 을 필수로 전제합니다. </RedSpan>
                  <br/><br/>
                  <JustImg imagePath={"Px2.png"}/>
                  <br/>
                  <StrongSpan>3. 팔랑크스는</StrongSpan><br/>
                  30주의 활동 동안, 총 7개의 실제 기업에게 <br/>
                  나의 실무 기획안을 발송하고, 그 전 과정을<br/>
                  나의 기획 포트폴리오로 쌓아 졸업하는 <br/>
                  동아리이며, 매주 여러 진행되는 <GreenSpan>다양한 <br/>
                  활동 과정들을 카페, 티스토리 채널 등에<br/>
                  공고합니다. </GreenSpan>
                  <br/><br/>
                  <JustImg imagePath={"Px3.png"}/>
                  <br/>
                  <StrongSpan>4. 팔랑크스는</StrongSpan><br/>
                  가볍게 들어와서 잠깐 하고 나가는 일시적인<br/>
                  과정의 가치가 보잘것 없다는 것을 잘 알고<br/> 
                  있습니다. 누구나 할 수 있는 잠깐의 객기가<br/>
                  아닌, <GreenSpan>채용 시장에서 가장 주요하게 꼽히는 <br/>
                  스펙인 '지속성'을 신뢰받을 수 있는 30주로</GreenSpan> <br/>
                  구성됩니다. 
                  <br/><br/>
                  <JustImg imagePath={"Px4.png"}/>
                  <br/>
                  <StrongSpan>5. 팔랑크스는</StrongSpan> <br/>
                  동아리 내부 활동 특성상, 불가피하게 다양한<br/> 
                  파트 크루들, 기업들과의 직접적인 콜드메일, <br/>
                  소통 및 커뮤니케이션이 잦기 때문에 이러한 <br/>
                  <RedSpan>직접적인 사회와의 실무 연결, 경력의 부분이<br/>
                  필요한 분이 아니라면, 적합하지 않습니다.</RedSpan>
                  <br/><br/>
                  <JustImg imagePath={"Px5.png"}/>
                  <br/>
                  <StrongSpan>6. 팔랑크스는</StrongSpan> <br/>
                  모든 지원자에게 <RedSpan>사전에 고지되는,</RedSpan> 체계화된<br/>
                  규정과 내부 운영 방식에 의해 움직이며, <br/>
                  졸업 후 증빙되는 결과물 역시 다양한 검수와<br/>
                  과정을 거쳐 수반되기 때문에 안내나 규정,<br/>
                  공지 그리고 이에 대한  <br/>
                  <RedStrongSpan>확인이 매우 중시됩니다.</RedStrongSpan>
                  <br/><br/>
                  <JustImg imagePath={"Px6.png"}/>
                  <br/>
                  <StrongSpan>7. 팔랑크스의</StrongSpan> <br/>
                  핵심은, 그간 실무와는 동떨어지거나 <br/>
                  <RedSpan>별다른 의미가 없는 방식으로 ‘기획’ 분야의<br/> 
                  스펙을 쌓아오던 기존의 과정</RedSpan>들을 경계하고,<br/>
                  실무 기획 후 모든 크루가 스스로 <GreenSpan>직접 해당<br/>
                  기업에게 자신 혹은 파트의 기획을 ‘제안’하여</GreenSpan> <br/>
                  그 성공과 실패, 그리고 그 전 과정에서 오는 <br/>
                  모든 인싸이트와 성장을 가장 중시합니다. <br/><br/>
                  <JustImg imagePath={"Px7.png"}/>
                  <br/>

                </p>
                </TextContainer>
            </HookingBox>
        </ContentsContainer>

        
    );
};

export default ModalContents;


const ContentsContainer = styled.div`
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

const HookingBox = styled.div`
  width: 90%;
  height: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    overflow-y:auto;
    text-align : left;
    font-size: 4vmin;
`;
const RedSpan = styled.span`
  width: 100%;
  font-family : '스윗';
  font-weight : 600;
  color : #FF0000;
`;

const RedStrongSpan = styled.span`
width: 100%;
font-size: 4.6vmin;
font-family : '스윗';
font-weight : 600;
color : #FF0000;
line-height : 200%;
font-style : italic;
`;
const StrongSpan = styled.span`
  width: 100%;
  font-size: 6vmin;
  font-family : '워헤븐';
  font-weight : 600;
  color :#868A08;
  line-height : 200%;
`;

const GreenSpan = styled.span`
  width: 100%;
  font-family : '스윗';
  font-weight : 600;
  color : #298A08;
`;

const ImageBox = styled.div`npm
  height: auto;
  object-fit: cover;
  background-color: transparent;
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
