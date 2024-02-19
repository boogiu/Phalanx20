import React, { useState } from 'react';
import styled from 'styled-components';

const PassCa = () => {

  return (
    <div>
        <SectionBlock>
                <ImgComponent2 imagePath={"Sina.png"} 
                top={"70%"} 
                left={"70%"}
                rotate={"20deg"}
                width={"30%"}/>

                <TextSection>
                  <SubTitle style={{textAlign : "start"}}>
                  첫 안내 사항은, <br/>팔랑크스의 지원 과정 <br/>일정입니다.
                  </SubTitle>
                </TextSection> 

                <ImgComponent2 imagePath={"Sina.png"} 
                top={"90%"} 
                left={"75%"}
                rotate={"10deg"}
                width={"30%"}/>

          </SectionBlock>

          <SectionBlock>
            <TextSubGruop2>
              <Main >
              <BigNum>01.</BigNum><br/>
              합격 인원에게는 <br/>고유 코드가 부여됩니다

              <ImgComponent2 imagePath={"RunningGirl.png"} 
                top={"-5%"} 
                left={"60%"}
                rotate={"10deg"}
                width={"30%"}/>
              </Main>

              <BoxinBox>
                <Txt>
                  1차 서류 전형을 <GreenSpan>합격한 지원자는,</GreenSpan> <br/>
                  그 다음 안내를 위한 <YellowSpan>개별 고유 코드</YellowSpan>를  <br/>
                  부여 받아, 면접 안내 페이지로 <br/>
                  들어옵니다.🤗 <br/>
                  <br/>
                  <GraySpan>(❗지금 이 단계이며, 본 메시지를 보는 <br/>
                  모든 분은 이미 이 1단계가 이행되었습니다.)<br/></GraySpan>
                </Txt>
              </BoxinBox>
           </TextSubGruop2>
          </SectionBlock>

          <SectionBlock>
            <TextSubGruop2>
              <Main >
              <BigNum>02.</BigNum><br/>
               면접 안내 페이지에선 <br/>
               다음의 안내가 진행됩니다.
              
              </Main>
              
              <BoxinBox>
              <ImgComponent2 imagePath={"heart1.png"} 
                top={"60%"} 
                left={"60%"}
                rotate={"0deg"}
                width={"30%"}/>
                <Txt>
                본 페이지<GraySpan>(지금 안내되는 <br/>
                이 페이지 단계)</GraySpan>를 <GreenSpan>‘면접 안내 페이지’</GreenSpan>라 <br/>
                하며, 이 페이지에서는 다음 사항이 <br/>
                안내됩니다. 😊<br/>
                <br/><BiggerSpan>
                ㄱ. 지원 <BlueSpan>진행 과정과 참고 사항</BlueSpan> <br/><br/>
                ㄴ. 면접 상황 시 <BlueSpan>구성 순서와 <br/>
                후보 질문군</BlueSpan> <br/><br/>
                ㄷ. 동아리에 대한 <br/>
                <BlueSpan>세부 구성 요소</BlueSpan> 안내 <br/></BiggerSpan>
                <GraySpan>(면접 시 이를 물어보는 별도의 시간이 <br/>
                준비되어 있으니, 필요하신 분은 <br/>
                적극 활용해주세요!)<br/><br/></GraySpan>
                <BiggerSpan>
                ㄹ. 그 외 <BlueSpan>기타 안내</BlueSpan> 사항<br/> </BiggerSpan>
                <GraySpan>(유의 사항, 면접 시간 재확인 등)</GraySpan>
                </Txt>
              </BoxinBox>
              <ImgComponent2 imagePath={"BallGirl.png"} 
                top={"-13%"} 
                left={"45%"}
                rotate={"0deg"}
                width={"80%"}/>
           </TextSubGruop2>
           
          </SectionBlock>

          <SectionBlock>
          <ImgComponent2 imagePath={"good.png"} 
                top={"0%"} 
                left={"0%"}
                rotate={"0deg"}
                width={"30%"}/>

            <ImgComponent2 imagePath={"Mic.png"} 
                            top={"46%"} 
                            left={"60%"}
                            rotate={"0deg"}
                            width={"50%"}/>
            <TextSubGruop2>
              <Main >
              <BigNum>03.</BigNum><br/>
              
                이후 지원 일정은 <br/>
                다음과 같이 진행됩니다. <br/>
              </Main>
              <ImgComponent2 imagePath={"Arrow.png"} 
                top={"10%"} 
                left={"80%"}
                rotate={"-180deg"}
                width={"20%"}/>
              <BoxinBox>
                <Txt>
                  <BiggerSpan>STEP 01. <br/></BiggerSpan>
                  <BlueSpan>서류 합격 및 면접 안내 <br/></BlueSpan>
                  <br/>
                  *1차 서류 전형에 합격한 지원자에 대한<br/>
                  <PinkSpan>면접 준비 안내</PinkSpan>를 확인합니다.<br/>
                  (본 페이지 내용)

                </Txt>
              </BoxinBox>
              <BoxinBox>
                <Txt>
                <BiggerSpan>STEP 02.<br/></BiggerSpan>
                <BlueSpan>면접 안내 확인 및 메시지 발송 <br/></BlueSpan>
                <br/>
                *본 면접 준비 안내를 확인 후 <br/>
                <PinkSpan>확인 메시지를 플친(카톡 채널)으로 <br/>
                발송</PinkSpan>합니다. (양식 준수 필수)


                </Txt>
              </BoxinBox>
              <ImgComponent2 imagePath={"ChatIcon.png"} 
                top={"26%"} 
                left={"80%"}
                rotate={"0deg"}
                width={"20%"}/>
              <BoxinBox>
                <Txt>
                <BiggerSpan>STEP 03.<br/> </BiggerSpan>
                <BlueSpan>면접 진행 (온라인 줌)<br/></BlueSpan>
                <br/>
                *지원자가 <PinkSpan>선택한 일시 중 문자로<br/> 
                안내된 일시</PinkSpan>에 면접이 진행됩니다. <br/>
                <br/>
                *지원자가 선택한  면접 일시가 <br/>
                지원(서류)일로부터 <PinkSpan>최대 3주를 <br/>
                넘어가는 경우,</PinkSpan> 전체 일정상 <br/>
                <PinkSpan>면접에서 제외됨</PinkSpan>을 양해 바랍니다.  <br/>
                <br/>
                *불가피하게 <PinkSpan>면접 일정에 대한 조정이 <br/>
                필요한 경우, 플친으로 면접 하루 <br/>
                전날까지</PinkSpan> 조정 요청 바랍니다. 

                </Txt>
              </BoxinBox>

              <BoxinBox>
                <Txt>
                <BiggerSpan>STEP 04. <br/></BiggerSpan>
                  <BlueSpan>면접 결과 및 최종 합격 여부<br/></BlueSpan>
                  <br/>
                  *지원자가 면접을 본 <PinkSpan>‘주차’ 의 <br/>
                  토요일까지</PinkSpan> 최종 합불 결과와 <br/>
                  이후 안내 사항이 발송됩니다.<br/>
                  <br/>
                  *서류 지원 단계에서의 <br/>
                  불합격자에게는 별도의 통보가<br/>
                  없지만, <YellowSpan>면접 단계의 불합격자에게는<br/>
                  별도로 통보</YellowSpan>드립니다. 
                </Txt>
              </BoxinBox>
              <ImgComponent2 imagePath={"BoxIcon.png"} 
                            top={"70%"} 
                            left={"68%"}
                            rotate={"0deg"}
                            width={"30%"}/>
              <BoxinBox>
                <Txt>
                <BiggerSpan>STEP 05.</BiggerSpan> <br/>
                  <BlueSpan>클럽 온보딩 과정 진입 <br/></BlueSpan>
                  (팔랑크스 클럽 1주차)<br/>
                  <br/>
                  *별도의 안내를 받아 동아리의 시즌을 <br/>
                  등록한  <YellowSpan>최종 합격자</YellowSpan>는 클럽 팔랑크스의 <br/>
                  크루로서 1주차 과정인 신입OT 단계, <br/>
                  <YellowSpan>‘클럽 온보딩’ 주차💛</YellowSpan>에 돌입합니다. 
                </Txt>
              </BoxinBox>
              
              <BoxinBox>
                <Txt>
                <BiggerSpan>STEP 06.<br/></BiggerSpan>
                <BlueSpan>세부 팀 배정 ~ <br/></BlueSpan>
                (팔랑크스 클럽 2주차 ~ )<br/>
                <br/>
                *클럽 온보딩 과정 중 크루가 지원한 <br/>
                <GreenSpan>세부 팀 중 1개에, 2주차부터 배정</GreenSpan>되어 <br/>
                클럽 팔랑크스의 진행 과정 속에서 <br/>
                <GreenSpan>나의 ✨기획 포트폴리오✨</GreenSpan>를 쌓아갑니다. <br/>
                (이후 지속 유지)
                </Txt>
              </BoxinBox>
           </TextSubGruop2>
           <ImgComponent2 imagePath={"heart5.png"} 
                            top={"95%"} 
                            left={"50%"}
                            rotate={"0deg"}
                            width={"50%"}/>
          </SectionBlock>

          <SectionBlock>
          <ImgComponent2 imagePath={"Flash1.png"} 
                top={"-10%"} 
                left={"0%"}
                rotate={"-40deg"}
                width={"50%"}/>
            <TextSubGruop2>
              <Main >
              <BigNum>04.</BigNum><br/>
              
                지원 과정에대한 일정은 <br/>
                다음 주의사항을 확인하세요 
              </Main>

              <BoxinBox>
                <Txt>
                ❗위 과정과 <RedSpan>다른 순서로 진행되거나 <br/>
                오류가 생긴 것 같은 경우</RedSpan>에는 <br/>
                플친으로 알려주시기 바랍니다. <br/>
                <br/>
                *각 단계별 <RedSpan>정해진 양식을 준수하지 않고,</RedSpan><br/>
                임의로 작성하거나 회신이 없는 경우에는 <br/>
                <RedSpan>지원 과정이 자동 중단</RedSpan>될 수 있습니다.😅<br/>
                <br/>
                *지원 과정이 모두 정상적으로 진행되어, <br/>
                <PupSpan>최종 합격 후</PupSpan> 동아리 시즌 등록까지 <br/>
                <PupSpan>클럽 시스템 상에서 완료된 이후</PupSpan>부터는, <br/>
                팔랑크스 동아리의 <GreenSpan>정식 크루로서,</GreenSpan> <br/>
                내부 크루들만 사용하는 별도 채널과 <br/>
                커뮤니케이션 페이지, 시스템의 사용 및 <br/>
                드라이브 활용 권한이 부여되오니 <br/>
                이를 활용해주시기 바랍니다.  
                </Txt>
              </BoxinBox>
              
           </TextSubGruop2>
           <ImgComponent2 imagePath={"heart2.png"} 
                top={"70%"} 
                left={"60%"}
                rotate={"30deg"}
                width={"60%"}/>
          </SectionBlock>
    </div>
  );
};

export default PassCa;



const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  margin: 6vh 0vw 5vh 0vw;
  position : relative;

`;


const TextSection = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    margin: 13vh 0vw 0vh 0vw;
`;

const SubTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 7vmin;
  color :#CEF6CE;
  width : 100%;
  line-height : 150%;
  margin : 5%;
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

const ImgComponent2 = ({ imagePath, top, left,rotate,width }) => {
  return (
      <ImageContainer 
        top = {top}
        left = {left}
        rotate={rotate}
        width={width}
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" 
          style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </ImageContainer>
      
  );
};


const TextSubGruop2 = styled.div`
    display: flex;
    width : 90%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(204,255,204,0.2);
    text-align:left;
    padding: 2%;
    overflow-x : hidden;
    box-shadow: inset 0px 0px 15px 15px rgb(204,204,204,0.2);
    border-radius : 20px;
    margin: 5vh 0vw 5vh 0vw;
    font-family : '한나';
    font-weight : 400;
    z-index : 1;
    position : relative;
    line-height : 160%;
`;

const Main = styled.h2`
  font-family : '스윗';
  font-size : 8vmin;
  font-weight : 600;
  color :#FBEFF5;
  margin: 5% 0% 5% 0%;
  text-shadow:0 0 2px #FF4000,  0 0 3px #FF4000;
  width : 100%;
  line-height : 200%;
`
const Txt = styled.p`
  font-family : '한나';
  font-size : 5vmin;
  line-height : 160%;
`

const BigNum = styled.span`
font-size : 13vmin;
color : #FE9A2E;
font-family : '자이언츠';
font-weight : 600;
`
const BoxinBox = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-self: flex-start;
    align-items: center;
    background-color: rgb(0,0,0,0.6);
    overflow-y: auto;
    text-align:left;
    padding: 3%;
    overflow-x : hidden;
    border-radius : 20px;
    margin: 2% 0% 0% 0%;
    line-height : 160%;
`;



const BiggerSpan = styled.span`
font-size : 6vmin;
font-weight : 600;
line-height : 150%;
`

const RedSpan = styled.span`
color : #FF0000;
font-weight : 600;
`
const PinkSpan = styled.span`
color : #FF4500;
font-weight : 600;
`

const YellowSpan = styled.span`
color : #FFFF00;

`

const GreenSpan = styled.span`
color : #58FAF4;
font-weight : 600;

`
const BlueSpan = styled.span`
color : #DA81F5;
font-weight : 600;
`

const PupSpan = styled.span`
color : #8181F7;
font-weight : 600;
`

const GraySpan = styled.span`

color : #A4A4A4;
`