
import {styled, keyframes,css} from 'styled-components';
import React, {useState, useEffect } from 'react';


const WaitModal = () => {


    return (

        <ContentsContainer>
          <p>dkdkk</p>
            <HookingBox>
                <TextContainer>
                  <p>해당 페이지는, <br/> 
                  전국대학연합 기획/컨설팅 동아리 <br/>
                  <RedSpan>팔랑크스의 지원 서류 전형(1차) 합격자분들을  <br/>
                  대상으로 발급되는, 보안 페이지 입니다.</RedSpan>  <br/><br/>
                  본 페이지에서는, 다음 사항들을 안내드립니다.  <br/><br/>
                  - 이후 지원 일정과 참고 사항 <br/>
                  - 면접 전형(2차)에서의 순서와 예상 문항들 <br/>
                  - 팔랑크스 운영 과정과 포트폴리오 <br/>
                  &nbsp;&nbsp; 누적에 대한 구체적인 방식과 사항들 <br/>
                  - 그 외 면접 시간 확인 및 관련 종합 지원 사항 <br/><br/>
                 
                  <GreenSpan>아래에, 별도 안내 받은 코드를 입력해주세요. <br/></GreenSpan>

                </p>
                <JustImg imagePath={"StopSign.png"}/>
                </TextContainer>

            </HookingBox>
            
        </ContentsContainer>

        
    );
};

export default WaitModal;


const ContentsContainer = styled.div`
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column;
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
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin: 10vh 0vw 0vh 0vw;
  
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    overflow-y:auto;
    text-align : left;
    font-size: 4vmin;
    color : white;  
    font-family : '스윗';
    line-height : 150%;
`;
const RedSpan = styled.span`
  width: 100%;
  font-family : '스윗';
  font-weight : 600;
  color : #FF0000;
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
const GreenSpan = styled.span`
color:#40FF00;
font-style: normal;
`
