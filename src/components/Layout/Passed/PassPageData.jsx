import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CgArrowLongRight } from "react-icons/cg";

const PassPageData = ({ id }) => {
  let content = null;

  if (id === '111') {
    content = (

       <SectionBlock>
            <ImgComponent2 imagePath={"Mic.png"} 
            top={"20%"} 
            left={"65%"}
            rotate={"0deg"}
            width={"50%"}/>
                
            <TextSection>
                <SubTitle style={{textAlign : "start"}}>
                두 번째 안내 사항은, <br/>
                팔랑크스의 면접 과정 <br/>
                및 후보 질문군 안내입니다.
                </SubTitle>
            </TextSection> 
        </SectionBlock>

    );
  } else if (id === '112') {

    content = (
      <>
       <SectionBlock>
        <ImgComponent2 imagePath={"heart3.png"} 
              top={"-10%"} 
              left={"10%"}
              rotate={"0deg"}
              width={"50%"}/>
            <PhBox>
                <ImgComponent
                imagePath={"001.png"}
                width={"30%"}/>
                <div>
                  <YellowSpan><BiggerSpan>면접은!</BiggerSpan></YellowSpan> <br/>
                  <BlueSpan>온라인(구글 줌)으로 진행</BlueSpan>되며, <br/>
                  면접관은 이전 기수 선배 크루, <br/>
                  현재 기수 운영진, 관련 앰배서더 <br/>
                  및 동아리 <GreenSpan>연관 구성원 중 일정에 <br/>
                  맞는 분이 배정</GreenSpan>됩니다. 
                </div>
                <ImgComponent2 imagePath={"Hello.png"} 
                top={"-10%"} 
                left={"60%"}
                rotate={"210deg"}
                width={"50%"}/>
            </PhBox>
        </SectionBlock>
      </>
    );
  }else if (id === '113') {

    content = (
      <>
        <SectionBlock>
          
            <PhBox>
              <ImgComponent2 imagePath={"GlassHedge.png"} 
                top={"5%"} 
                left={"55%"}
                rotate={"0deg"}
                width={"40%"}/>
                <ImgComponent
                imagePath={"002.png"}
                width={"30%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 진행 방식은!</BiggerSpan></YellowSpan> <br/>
                  모든 서류 지원자에게 <BlueSpan>공통으로 적용되는 <br/>
                  ‘공통의 포맷’ </BlueSpan>을 중심으로 진행하되, <br/>
                  각 <OrangeSpan>면접관들이 준비한 개별 문항들에서 <br/>
                  차이</OrangeSpan>가 있을 수 있습니다. 
                </div>
                
            </PhBox>
            
        </SectionBlock>
      </>
    );
  }else if (id === '114') {

    content = (
      <>
       <SectionBlock>
       <ImgComponent2 imagePath={"RunningGirl2.png"} 
                top={"-15%"} 
                left={"55%"}
                rotate={"0deg"}
                width={"40%"}/>
            <PhBox>
                <ImgComponent
                imagePath={"003.png"}
                width={"30%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 미팅은!</BiggerSpan></YellowSpan> <br/>
                  해당 일시 <OrangeSpan>하루 전 리마인딩</OrangeSpan> 되며, <br/>
                  해당 시간 <OrangeSpan>10분 전에 면접 줌 링크가 <br/>
                  발송</OrangeSpan>되오니, 이에 따라 준비해주시기 <br/>
                  바랍니다. 
                </div>
                


            </PhBox>
        </SectionBlock>
      </>
    );
  }else if (id === '115') {

    content = (
      <>
        <SectionBlock>
            <PhBox>
                <ImgComponent
                imagePath={"004.png"}
                width={"30%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 미팅은!</BiggerSpan></YellowSpan> <br/>
                평균 <GreenSpan>지원자 4명 내외 기준 40~50분 정도</GreenSpan> <br/>
                소요되며, 면접관의 안내와 질답에 의해 <br/>
                진행됩니다. 
                </div>
            </PhBox>
            <ImgComponent2 imagePath={"Alarm.png"} 
                top={"-15%"} 
                left={"55%"}
                rotate={"0deg"}
                width={"40%"}/>
        </SectionBlock>
      </>
    );
  }else if (id === '116') {

    content = (
      <>
        <SectionBlock>
        <ImgComponent2 imagePath={"heart4.png"} 
                  top={"30%"} 
                  left={"70%"}
                  rotate={"-20deg"}
                  width={"40%"}/>
                  <ImgComponent2 imagePath={"heart2.png"} 
                  top={"50%"} 
                  left={"30%"}
                  rotate={"-20deg"}
                  width={"40%"}/>
                   <ImgComponent2 imagePath={"heart5.png"} 
                  top={"70%"} 
                  left={"70%"}
                  rotate={"-20deg"}
                  width={"40%"}/>
                  <ImgComponent2 imagePath={"Flag1.png"} 
                  top={"90%"} 
                  left={"70%"}
                  rotate={"-80deg"}
                  width={"40%"}/>
            <PhBox>
                <ImgComponent
                imagePath={"005.png"}
                width={"30%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 미팅은</BiggerSpan></YellowSpan> <br/>
                <YellowSpan><BiggerSpan>다음의 순서로 구성됩니다!<br/></BiggerSpan></YellowSpan>
                  <br/>
                  <BiggerSpan><BlueSpan>1) 면접 미팅 참가자 확인 <br/>
                  및 동아리 간략 소개</BlueSpan></BiggerSpan> (5m 내외)<br/>
                  <br/>
                  시작과 함께 전국대학연합 기획/컨설팅 <br/>
                  분야의 <GreenSpan>최고 동아리, 팔랑크스에 대한 <br/>
                  간략한 개요</GreenSpan>를 재확인합니다. <br/>
                  <br/>
                  <BiggerSpan><BlueSpan>2) 지원자의 간단 소개 <br/>
                  및 자기 어필</BlueSpan></BiggerSpan> (1명당 3m 내외)<br/>
                  <br/>
                  모든 지원자가 간단하게 <GreenSpan>자신을 소개하고, <br/>
                  동아리 지원 동기 등을 어필</GreenSpan>합니다. <br/>
                  <br/>
                  <BiggerSpan><BlueSpan>3) 동아리 구성 요소 <br/>
                  언급 및 문의 타임 <br/></BlueSpan></BiggerSpan>
                  (별다른 문의가 없는 경우는 생략)<br/>
                  <br/>
                  자료로 사전 안내된 동아리의 <GreenSpan>중요한 <br/>
                  구성 요소에 대해 확인 후, 문의</GreenSpan>하는 시간을 <br/>
                  갖습니다. <br/>
                  <br/>
                  <BiggerSpan><BlueSpan>4) 지원자 개별 심화 질문<br/></BlueSpan></BiggerSpan>
                  (1인당 2~3개씩, 5m내외)<br/>
                  <br/>
                  각 지원자의 활동 지원서(구글 지원서 폼)에 <br/>
                  적힌 사항들을 토대로, <GreenSpan>지원자의 의지와 <br/>
                  생각</GreenSpan>을 가능한 자세하게 알고자 하는 <br/>
                  질문으로 구성됩니다. <br/>
                  <br/>
                  <BiggerSpan><BlueSpan>5) 공통 질문 답변 <br/></BlueSpan></BiggerSpan>
                  (모두 공통 1개, 3m 내외)<br/>
                  <br/>
                  아래 <GreenSpan>공통 질문 4개 중 택 1하여 질문</GreenSpan>하며, <br/>
                  사전 준비한 답변을 듣습니다. <br/>
                  <br/>
                  <BoxinBox>
                    <SemiBiggerSpan><GreenSpan>공통 질문 1)</GreenSpan></SemiBiggerSpan> <br/>
                    <div>
                    “기획이라는 직무/분야가 <br/>
                    <YellowSpan>왜 본인에게 매력적으로</YellowSpan> 다가오나요?”</div>
                  </BoxinBox>
                    
                  <br/>
                  <BoxinBox>
                  <SemiBiggerSpan><GreenSpan>공통 질문 2)</GreenSpan></SemiBiggerSpan><br/>
                  <div><YellowSpan>기획과 가장 반대되는 단어</YellowSpan>가 <br/> 
                  있다면, 어떤 단어일까요? <br/>그리고 왜 그렇게
                  생각하시나요?”</div></BoxinBox>
                  <br/>
                  <BoxinBox>
                  <SemiBiggerSpan><GreenSpan>공통 질문 3)</GreenSpan></SemiBiggerSpan> <br/>
                  <div>
                  내가 다니던 기업이 망했고, 사장님이 <br/>
                  갑자기 이 <YellowSpan>회사의 소유를 나에게<br/> 
                  넘겼습니다.</YellowSpan><br/> 
                  <br/>
                  자, 첫 출근을 한 당신은 <YellowSpan>어떤 것을 <br/>
                  ‘기획’ 할 것이며, 그 ‘기획’ 에 대해<br/>
                  3분 이내로 설명</YellowSpan>해주세요.<br/></div></BoxinBox>
                  <br/> 
                  <BoxinBox>
                  <SemiBiggerSpan><GreenSpan>공통 질문 4)</GreenSpan></SemiBiggerSpan><br/>
                  <div>
                  당신에게 <YellowSpan>쪽지가 하나 도착했습니다.</YellowSpan> <br/>
                  쪽지에는 이렇게 쓰여있습니다. <br/>
                  <br/>
                  <SemiBiggerSpan><RedSpan>"주먹을 기획하세요" </RedSpan><br/></SemiBiggerSpan>
                  <br/>
                  이 허무맹랑한 요구에 대한 생각을, <br/>
                  자유롭게 답해주세요.</div><br/></BoxinBox>
                  <br/>

                  <BiggerSpan><BlueSpan>6) 면접 종료 안내 <br/>
                  및 이후 일정 안내 </BlueSpan></BiggerSpan>(5m 내외) <br/>
                  <br/>
                  <OrangeSpan>면접 내용을 마무리</OrangeSpan>하고, 이후 일정과 <br/>
                  참고 사항에 대해 안내합니다.<br/>
                  <br/>
                  <SemiBiggerSpan><RedSpan>(주의!)</RedSpan> </SemiBiggerSpan><br/>
                  위 공통 <RedSpan>질문 4개 중 지원자가 <br/>
                  1개를 택하는 것이 아니라,</RedSpan> 해당 <br/>
                  면접 미팅에서 <BlueSpan>면접관이 1개를 골라</BlueSpan> <br/>
                  모든 지원자에게 <BlueSpan>공통으로 질문</BlueSpan>하며, <br/>
                  지원자는 본 안내 페이지를 바탕으로 <br/>
                  모든 질문들에 대해 사전 준비할 수 <br/>
                  있습니다. 
                </div>
                <ImgComponent2 imagePath={"Mail.png"} 
                  top={"18%"} 
                  left={"80%"}
                  rotate={"0deg"}
                  width={"20%"}/>
            </PhBox>
            <ImgComponent2 imagePath={"MegaPhone.png"} 
                  top={"-0%"} 
                  left={"50%"}
                  rotate={"-20deg"}
                  width={"40%"}/>
        </SectionBlock>
      </>
    );
  }
  else if (id === '117') {

    content = (
      <>
        <SectionBlock>
            <PhBox>
            <ImgComponent2 imagePath={"Alarm2.png"} 
                  top={"-10%"} 
                  left={"60%"}
                  rotate={"-140deg"}
                  width={"40%"}/>
                <ImgComponent
                imagePath={"006.png"}
                width={"30%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 미팅은!</BiggerSpan></YellowSpan> <br/>
                소요 시간이 다소 <OrangeSpan>차이가 날 수 있기 때문에</OrangeSpan><br/>
                사전에 여유 시간(10~20m 내외)을<br/>
                확보해주시기 바랍니다. 
                </div>

            </PhBox>
        </SectionBlock>
      </>
    );
  }
  else if (id === '118') {

    content = (
      <>
        <SectionBlock>
            <PhBox>
            <ImgComponent2 imagePath={"Speech.png"} 
                  top={"3%"} 
                  left={"68%"}
                  rotate={"0deg"}
                  width={"25%"}/>
                <ImgComponent
                imagePath={"007.png"}
                width={"30%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 미팅은!</BiggerSpan></YellowSpan> <br/>
                <BlueSpan>지원자로서 본인을 드러낼 수 있는 <br/>
                가장 중요한 자리</BlueSpan>이며, 운영진은 준비된<br/>
                팔랑크스의 커리큘럼, 중앙/세부/특별 <br/>
                과정을 함께 하며, <BlueSpan>실제 기업들과의 다양한 <br/>
                연계 프로젝트, 기획안 타진 </BlueSpan>등을 진행하는 <br/>
                것에 대한 의사소통, 예절, 준비에 노력을 <br/>
                기울일 수 있는지를 평가하여, 같이 하는 <br/>
                많은 동료/선배/후배 <RedSpan>크루들에게 피해를 <br/>
                입히지 않을 수 있는지</RedSpan>를 주요한 요소로 <br/>
                구성합니다. 
                </div>
            </PhBox>
        </SectionBlock>
      </>
    );
  }else if (id === '119') {

    content = (
      <>
        <SectionBlock>
            <PhBox>
                <ImgComponent
                imagePath={"008.png"}
                width={"30%"}/>
                <ImgComponent2 imagePath={"Shut.png"} 
                  top={"0%"} 
                  left={"68%"}
                  rotate={"0deg"}
                  width={"40%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 미팅은!</BiggerSpan></YellowSpan> <br/>
                사전 안내된 사항에 따라 <OrangeSpan>조용하고 미팅에 <br/>
                집중할 수 있는 환경을 조성</OrangeSpan>해주셔야 하며, <br/>
                간혹 주변이 시끄러워 커뮤니케이션이 <br/>
                원활하지 않거나, 본인 스스로도 집중이 <br/>
                어려운 상황 등 확실히 <RedSpan>사전에 준비가 <br/>
                되어 있지 않은 경우, 면접관의 판단에 <br/>
                따라 퇴장</RedSpan>될 수 있습니다. 
                </div>
            </PhBox>
        </SectionBlock>
      </>
    );
  }else if (id === '120') {

    content = (
      <>
        <SectionBlock>
        <ImgComponent2 imagePath={"Px4.png"} 
                  top={"0%"} 
                  left={"-50%"}
                  rotate={"-30deg"}
                  width={"200%"}/>
            <PhBox>
                <ImgComponent
                imagePath={"009.png"}
                width={"30%"}/>
                <div>
                <YellowSpan><BiggerSpan>면접 미팅의 질문은!</BiggerSpan></YellowSpan> <br/>
                <RedSpan>전문적이거나 깊은 실무적 역량을 <br/>
                요구하지 않습니다.</RedSpan> 그러한 부분을 <br/>
                염려하기보다는, 클럽의 의도와 목적을<br/>
                확실히 인지하고, 기획/컨설팅 직무에서 <br/>
                본인의 정량적 포트폴리오를 쌓아가는, <br/>
                <GreenSpan>배움과 노력의 자세를 많이 어필하는 <br/>
                것이 유리</GreenSpan>합니다.<br/>
                <br/> 
                (즉, 이미 뛰어난 기획자로서 <br/>
                스펙만 더 늘리려고 와서 연락도 <br/>
                안되는 등 타 크루들에게 피해를 <br/>
                입히는 분보다는, 아직은 잘 못하더라도 <br/>
                팔랑크스의 진행 과정을 <YellowSpan>천천히 잘 따라오며 <br/>
                하나하나 성장해가는 분</YellowSpan>을 <br/>
                더 높이 평가합니다.)
                </div>
            </PhBox>
        </SectionBlock>
      </>
    );
  }
  else if (id === '211') {

    content = (
      <>
        <SectionBlock>
            <ImgComponent2 imagePath={"Puzzle.png"} 
            top={"20%"} 
            left={"60%"}
            rotate={"0deg"}
            width={"30%"}/>
                
            <TextSection>
                <SubTitle style={{textAlign : "start"}}>
                세 번째 안내 사항은, <br/>
                팔랑크스의 동아리 구성 요소<br/>
                심화 안내입니다.
                </SubTitle>
            </TextSection> 
        </SectionBlock>
      </>
    );
  }
  else if (id === '212') {

    content = (
      <>
       <SectionBlock>
            <PhBox>
                <ImgComponent
                imagePath={"001.png"}
                width={"30%"}/>
                <div>
                본 사항은 <GreenSpan>팔랑크스 공식 안내 페이지</GreenSpan>의 <br/>
                내용 중 타 동아리와는 차별되는 <GreenSpan>중요한 <br/>
                부분들을</GreenSpan> 다시 한번 정리하여 자세하게 <br/>
                안내하는 것으로서,<br/> 
                <br/>
                아래의 <OrangeSpan>총 9개의 사항</OrangeSpan>으로 구성됩니다. 
                </div>
            </PhBox>
        </SectionBlock>
      </>
    );
  }
  else if (id === '213') {

    content = (
      <>
       <SectionBlock>
            <PhBox>
                <ImgComponent
                imagePath={"002.png"}
                width={"30%"}/>
                <div>
                각 카드 사항마다, <RedSpan>확인 후 ‘체크’ 표시를<br/>
                하여야</RedSpan> 다음 단계로 넘어갈 수 있으니 <br/>
                유의해주세요 
                </div>
            </PhBox>
        </SectionBlock>
      </>
    );
  }
  else if (id === '214') {

    content = (
      <>
       <SectionBlock>
            <PhBox>
                <ImgComponent
                imagePath={"003.png"}
                width={"30%"}/>
                <div>
                본 9개의 사항을 여기서 자세히 확인하신 후 <br/>
                안내된 사항들 중 <BlueSpan>궁금한 점이 있는 경우, <br/>
                면접 미팅 중</BlueSpan> 별도로 마련되어 있는 <br/>
                <BlueSpan>문의 시간에 문의해주시기 바랍니다.  </BlueSpan> 
                </div>
            </PhBox>
        </SectionBlock>
      </>
    );
  }
  else if (id === '215') {

    content = (
      <>
       <SectionBlock>
            <PhBox>
                <ImgComponent
                imagePath={"SpearGirl.png"}
                width={"100%"}/>
                <div>
                위 사항들은, 우리 전국대학연합 <br/>
                <GreenSpan>기획/컨설팅 동아리, 클럽 팔랑크스가<br/></GreenSpan>
                타 동아리들과 <OrangeSpan>완전히 다른, 체계적이고 <br/>
                철저한 운영 시스템 과정</OrangeSpan>이기 때문에<br/>
                <br/>
                처음 지원하시는 지원자분들은 <BiggerSpan><RedSpan>‘꼭’ </RedSpan></BiggerSpan><br/>
                면밀히 확인하여 어떤 과정으로 <br/>
                움직이는지에 대해 <RedSpan>상세히 확인 후 </RedSpan><br/>
                최종 등록하셔야 합니다. <br/>
                <br/>
                위 사항들에 대해 모든 지원자들이 <br/>
                알 수 있도록 하기 위해, <OrangeSpan>면접 미팅 중 <br/>
                별도의 문의 시간을 가지기 때문에</OrangeSpan> <br/>
                필요하신 분의 경우, <br/>
                <br/>
                적극 활용해주시기 바랍니다. <br/>
                (면접 미팅당 최대 10분) 
                </div>
            </PhBox>
        </SectionBlock>
      </>
    );
  }
  // 이렇게 id에 따라 다른 내용을 결정하고 그에 맞는 JSX를 반환할 수 있습니다.

  return (
    <Container>
        <Txt>{content}</Txt>
    </Container>
  );
};

export default PassPageData;


const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    overflow: hidden;
    margin: 0;
    position: relative;
`;


const Txt = styled.p`
  width: 100%;
  font-size: 5vmin;
  font-family: '한나';
  text-align : start;
  line-height : 150%;
`;


const SectionBlock = styled.div`
  width: 90%;
  padding : 5%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: flex-start;
  align-content: center;
  color : white;
  margin: 6vh 0vw 5vh 0vw;
  position : relative;
  z-index : 1;
`;

const TextSection = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    margin: 13vh 0vw 0vh 0vw;
`;



const ImageContainer2 = styled.div`

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
      <ImageContainer2 
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
      </ImageContainer2>
      
  );
};


const PhBox = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-self: flex-start;
    align-items: center;
    background-color: rgb(50,50,50,0.5);
    overflow-y: auto;
    text-align:left;
    padding: 3%;
    overflow-x : hidden;
    border-radius : 20px;
    margin: 2% 0% 0% 0%;
    backdrop-filter: blur(9.999999046325684px);
    box-shadow: inset 0px 0px 15px 15px rgb(204,204,204,0.2);
`;

const BoxinBox = styled.div`
    display: flex;
    width : 90%;
    flex-flow : row wrap;
    justify-self: center;
    align-items: center;
    background-color: rgb(0,0,0,0.28);
    overflow-y: auto;
    text-align:left;
    padding: 3%;
    overflow-x : hidden;
    border-radius : 20px;
    box-shadow: inset 0px 0px 15px 15px rgb(0,0,0,0.2);
`;

const ImageContainer = styled.div`

width: ${({ width }) => width};
height: auto;
object-fit: cover;
background-color: transparent;
`;



const ImgComponent = ({ imagePath,width }) => {
  return (
      <ImageContainer 
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

const SemiBiggerSpan = styled.span`
font-size : 5.5vmin;
font-weight : 600;
line-height : 200%;
`
const BiggerSpan = styled.span`
font-size : 6vmin;
font-weight : 600;
line-height : 200%;
`
const BiggestSpan = styled.span`
font-size : 7vmin;
font-weight : 600;
line-height : 200%;
`

const RedSpan = styled.span`
color : #FA5858;

`
const OrangeSpan = styled.span`
color : #F79F81;

`

const YellowSpan = styled.span`
color : #FFFF00;

`

const GreenSpan = styled.span`
color : #00FF00;

`
const BlueSpan = styled.span`
color : #81F7F3;

`


const GraySpan = styled.span`
color : #228B22;
`

const SubTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 7vmin;
  color :#CEF6CE;
  width : 100%;
  line-height : 150%;
`;

