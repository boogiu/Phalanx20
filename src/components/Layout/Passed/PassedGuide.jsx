import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import { CgChevronDoubleLeft, CgChevronDoubleRight  } from "react-icons/cg";


const PassedGuide = () => {

  return (
    <div>
        <SectionBlock style={{margin :"20vh 0vw 5vh 0vw"}}>
                <ImgComponent 
                    imagePath={"heart5.png"} 
                    top={"00%"} 
                    left={"40%"}
                    rotate={"-20deg"}
                    width={"60%"}/>
                <TextSection>
                  <SubTitle style={{textAlign : "start"}}>
                  전국대학연합 <br/>
                  기획/컨설팅 동아리,</SubTitle>
                  <Title style={{textAlign : "start"}}>클럽 팔랑크스</Title>
                  <SubTitle style={{textAlign : "start"}}>
                  1차 서류 전형에 합격하신 것을 <br/>진심으로 축하드립니다
                    </SubTitle>
                </TextSection> 
                
          </SectionBlock>

          <SectionBlock>
          
            <TextSubGruop2>
                <p>
                보여주신 지원서 내용은 <br/>
                <RedSpan>2인(기본적인 문항 필수 사항)이 1차,</RedSpan> <br/>
                그 뒤로 이번 9기 리뉴얼 운영진들 <br/>
                <RedSpan>6인에 의해 2차</RedSpan>로 검수된 후<br/>
                기준치에 근거하여, <br/>
                합격 여부가 평가되었습니다.<br/>
                <br/>
                정성껏 지원해주신 <br/><PupSpan> 
                모든 지원자님께 감사드리며,<br/></PupSpan>
                <br/>
                면접 과정에서도 좋은 결과를 통해<br/>
                <BlueSpan> <BiggerSpan>최고의 기획 포트폴리오를 <br/>
                확보하는,팔랑크스의 </BiggerSpan></BlueSpan><br/>
                자랑스러운 동문으로 <br/>
                함께 하길 바랍니다. ☺
                </p>
                <JustImg imagePath={"Wellcome2.png"}
                width ={"90%"}
                />
            </TextSubGruop2>
            <ImgComponent 
                    imagePath={"Sina.png"} 
                    top={"-10%"} 
                    left={"70%"}
                    rotate={"-20deg"}
                    width={"40%"}/>
          </SectionBlock>
          <SectionBlock>
            
                <SubTitle style={{textAlign : "start"}}>
                <BiggestSpan>클럽 팔랑크스는, <br/></BiggestSpan>
                </SubTitle>
            <TextSubGruop3>
                <p>
                <GreenSpan>기획/컨설팅 분야의 전국대학연합 <br/>
                동아리로서,</GreenSpan> 지난 7기(23년 6월 종료)의<br/>
                소모임 형태를 끝으로, 이번 9기 리뉴얼을<br/>
                통해 여러 후원사와 연계사들, 그리고 <br/>
                선배 크루분들의 지원 하에,  <br/>
                <YellowSpan>대형 확장, 개편 되었습니다.<br/></YellowSpan>
                </p>
            </TextSubGruop3>
           
          </SectionBlock>

          <SectionBlock>
            <ImgComponent 
                      imagePath={"heart4.png"} 
                      top={"-10%"} 
                      left={"60%"}
                      rotate={"40deg"}
                      width={"30%"}/>
                      
            <TextSubGruop>
                <p>
                <BiggestSpan><GreenSpan>팔랑크스는, </GreenSpan><br/></BiggestSpan>
                대학에 들어와서 <BiggerSpan><YellowSpan>가장 에너지 넘치고, </YellowSpan></BiggerSpan><br/>
                무언가를 <BiggerSpan><YellowSpan>해볼 수 있는 시기</YellowSpan></BiggerSpan>에서<br/>
                <br/>
                그냥 처음에만 <PinkSpan>그럴싸한 슬로건과 <br/></PinkSpan>
                비전으로 우리끼리 <PinkSpan>의욕만 넘치다가,</PinkSpan><br/> 
                친목이나 술자리, 썸, 연애로  <br/>
                <PinkSpan>흐지부지 되는 동아리 활동</PinkSpan>에서 <br/>
                <Dinglediv><BiggestSpan><PinkSpan>환멸을 느끼고!<br/></PinkSpan></BiggestSpan></Dinglediv>
                <br/>

                우리끼리 칭찬하고 대충 놀다가 <br/>
                추억으로만 남는 동아리 활동이 아니라,<br/> 
                <GreenSpan>실제 우리가 나아가고자 하는 <br/>
                ‘기획/컨설팅’ 직무에서<br/></GreenSpan><br/>
                추후 직접적으로 가장 <BiggerSpan><GreenSpan>‘유효한’<br/></GreenSpan></BiggerSpan>
                포트폴리오가 될 수 있는<br/>
                <BiggerSpan><GreenSpan>정량적</GreenSpan></BiggerSpan>이고 &nbsp;
                <BiggerSpan><GreenSpan>실무적인</GreenSpan></BiggerSpan> 스펙을 <br/>
                갖출 수 있는 동아리를 추구하는<br/><br/>

                <BiggerSpan>전국대학연합 <YellowSpan><BiggestSpan>최강!</BiggestSpan> <br/></YellowSpan>
                기획 동아리 입니다. ☺</BiggerSpan>
                </p>
            </TextSubGruop>
            <ImgComponent 
                      imagePath={"BookMark.png"} 
                      top={"80%"} 
                      left={"60%"}
                      rotate={"0deg"}
                      width={"50%"}/>
          </SectionBlock>


          <SectionBlock>          
            <SubTitle style={{textAlign : "start"}}>
                <BiggestSpan>팔랑크스에서는, <br/></BiggestSpan>
                </SubTitle>
            <TextSubGruop4>
                <p>
                우리끼리 대충 기획안 써서, <br/>
                모여서 발표하고<br/>
                <br/>
                <TalkingSpan><GraySpan>
                너 잘했다~ 우와 박수!<br/> 
                이번 주 모임 끝났으니, <br/>
                뒷풀이 가자!! <br/>
                술ㄱㄱ.. <br/>
                나 누구 옆에 앉아야지..ㅎ히히<br/></GraySpan></TalkingSpan>
                <RedSpan><BiggerSpan>이러는 거는 없고요...<br/></BiggerSpan></RedSpan>
                </p>

                <ImgComponent 
                      imagePath={"Magic.png"} 
                      top={"70%"} 
                      left={"60%"}
                      rotate={"0deg"}
                      width={"50%"}/>

              </TextSubGruop4>
              
                    
              </SectionBlock>

              <SectionBlock>
                <ImgComponent 
                      imagePath={"heart1.png"} 
                      top={"80%"} 
                      left={"-10%"}
                      rotate={"-20deg"}
                      width={"100%"}/>
                    
                <TextSubGruop5>
                  <p>
                  내가 진출하고 싶은<br/>
                  <BiggerSpan><GreenSpan>기업/브랜드/서비스들,</GreenSpan><br/></BiggerSpan>
                  <br/>
                  나의 삶 속에서 직접적으로 맞닥뜨리는<br/>
                  <BiggerSpan><GreenSpan>다양한 실제 세상의 산업군들,</GreenSpan><br/></BiggerSpan>
                  <br/>
                  그 중에서 <BiggerSpan><GreenSpan>내가 들어가고 싶은 <br/>
                  기획/컨설팅 직무</GreenSpan></BiggerSpan>에서 필요한<br/>
                  <br/>

                  나의 <BiggerSpan><YellowSpan>역량</YellowSpan></BiggerSpan>과 &nbsp;
                  <BiggerSpan><YellowSpan>경험</YellowSpan></BiggerSpan>들을 <br/>
                  실제적인 지표와 결과물에 맞춰 <br/>
                  <YellowSpan>30주 동안 정량적인 포트폴리오</YellowSpan>를  <br/>
                  쌓아가는 활동을 가장 주된 사항으로 <br/>
                  진행합니다. <br/>
                  <br/>
                  <TalkingSpan><PinkSpan><BiggerSpan>
                    그래서, 좀 뭐랄까요...ㅠ<br/></BiggerSpan></PinkSpan></TalkingSpan>
                  때로는 빡세기도 하고, <br/>
                  얘네 동아리 맞어? 왤케 철저해..<br/>
                  같은 느낌이 들 수도 있을 거구요.<br/>
                  <br/>
                  <RedSpan>
                  <TalkingSpan>아니 세상에, <br/>이렇게 잘난놈들이 
                  많은지</TalkingSpan></RedSpan><br/> 알게 될거고, <br/>
                  <br/>
                  어떨 때는, <br/>
                  <GreenSpan><TalkingSpan>
                  내가 쫌 잘하는 놈이었네? <br/></TalkingSpan></GreenSpan>
                  라는 자신감도 들면서, <br/>
                  <br/>
                  내가 어느정도의 실무 역량을 가졌는지, <br/>
                  그리고 이것을 통해 채용 시장에서 <br/>
                  어느 정도의 가치와 효과를 <br/>
                  받을 수 있을지 알 수 있습니다. 
                  <br/></p>

                  </TextSubGruop5>
                </SectionBlock>
                <SectionBlock>
                <ImgComponent 
                      imagePath={"Hash.png"} 
                      top={"80%"} 
                      left={"60%"}
                      rotate={"0deg"}
                      width={"50%"}/>                   
                  <TextSubGruop5>
                    
                    <SmallBlock>니즈 파악</SmallBlock> 
                    <SmallBlock>내용 구조화 </SmallBlock>
                    <SmallBlock>세부 심화</SmallBlock>
                    <SmallBlock>제안 타진</SmallBlock>
                    <p>
                    <br/>
                    4단계의 기획 과정을<br/>
                    매주 내가 직접 밟아가면서 고민해보고,<br/>
                    다른 선배/동료/후배 크루들, <br/>
                    실무진의 피드백들을 바탕으로, <br/>
                    내가 타겟하는 기업과 브랜드에 <br/>
                    <BiggerSpan>직접 전달, 타진할 거에요<br/></BiggerSpan>
                    </p>
                    <GreenSpan><TalkingSpan><BiggestSpan>“똑똑똑, 기업아 안녕, <br/>
                      이건 내 기획이야! <br/>나랑 해볼래!?”  </BiggestSpan></TalkingSpan></GreenSpan>
                  </TextSubGruop5>  
                </SectionBlock>

                <SectionBlock>
                  <TextSubGruop5>
                  <p>
                  그리고 <br/><br/>
                  <BiggerSpan>수많은 실패와 
                  성공의 결과, 과정을 <br/></BiggerSpan>
                  모두 팔랑크스 티스토리에
                  포스팅하여, <br/>
                  <br/>
                  내가<br/>
                  <YellowSpan>어떤 경험</YellowSpan>과
                  <YellowSpan> 어떤 기획</YellowSpan>을 타진해 온!<br/>
                  <BiggerSpan><YellowSpan>어떤 결과물</YellowSpan></BiggerSpan> 과 
                  <BiggerSpan><YellowSpan> 스토리</YellowSpan></BiggerSpan>를 진행해 온!<br/>

                  <BiggestSpan>기획자다라는 것을!<br/></BiggestSpan>
                  <br/>

                  세상 모두가 알도록 쌓아가는, <br/>
                  가장 <GreenSpan>직접적이고 노골적인 <br/>
                  포트폴리오의 현장</GreenSpan>입니다. ☺<br/>
                  <br/>
                  <YellowSpan>여기 그런거 하는 곳입니다..!<br/></YellowSpan>
                  <br/>
                  최고의 스펙을 가져가는 <br/>
                  팔랑크스에 오신 것을 <br/>
                  다시 한번 환영합니다
                  </p>
                  <ImgComponent 
                      imagePath={"Wellcome.png"} 
                      top={"80%"} 
                      left={"60%"}
                      rotate={"0deg"}
                      width={"50%"}/>
              </TextSubGruop5>

              
            </SectionBlock>


          <SectionBlock>
            <BtnDiv>
              <p>팔랑크스에 대한 설명이 부족하다면,<br/> 아래 공식 페이지를 다시 확인해주세요</p>
              <GradientButton>
                <LinkBtn to={'/DefaultPage'}><CgChevronDoubleLeft/>팔랑크스 공식 안내 페이지</LinkBtn>
            </GradientButton>
            </BtnDiv>
            
            <BtnDiv>
              <p>팔랑크스의 지원 다음 단계(면접 준비)로 <br/>가는 분은
               아래 버튼을 눌러주세요</p>
              <GradientButton>
                <LinkBtn to={'/DocuPass/cal'}>면접 전형 넘어가기<CgChevronDoubleRight/></LinkBtn>
            </GradientButton>
            </BtnDiv>
          </SectionBlock>
      </div>
  );
};

export default PassedGuide;




const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  margin: 10vh 0vw 5vh 0vw;
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



const ImageBox = styled.div`
  width : 90%;
  height: auto;
  object-fit: cover;
  background-color: transparent;
  margin: 10% 0% 0% 0%;;
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
  font-weight : 600;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin : 5% 0% 15% 0%;
  box-shadow: 0px 4px 0px 0px #ff7300;
  width : 90%;
  vertical-align: middle;
`;
const LinkBtn = styled(Link)`
  text-decoration: none;
  color:black;
  overflow : hidden;
  height : 0;
  transition: all 0.8s ease;
  text-align : center;
  vertical-align: middle;
`;
const BtnDiv = styled.div`
width : 80%;
padding : 5%;
font-family : "스윗";
line-height : 160%;
font-weight : 600;
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
color : #00FF00;

`
const BlueSpan = styled.span`
color : #9400D3;
font-weight : 600;
`

const PupSpan = styled.span`
color : #0000CD;
font-weight : 600;
`

const TalkingSpan = styled.span`
font-family : "경북대";
line-height : 160%;
`
const GraySpan = styled.span`

color : #228B22;
`


const Dinglediv = styled.div`
  animation: dingleAnimation 0.3s ease infinite; /* 애니메이션을 적용합니다. */

  @keyframes dingleAnimation{
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const SubTitle = styled.h2`
  font-family: "테나다";
  font-size: 6vmin;
  width : 80%;
  line-height : 150%;
 
`;
const Title = styled.h1`
  font-family: "테나다";
  font-size: 11vmin;
  color: white;
  width : 80%;
  line-height : 200%;
`;


const TextSubGruop2 = styled.div`
    display: flex;
    width : 80%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;  
    text-align:left;
    padding: 5%;
    overflow : hidden;
    color : black;
    font-family : "스윗";
    font-size: 5vmin;
    box-shadow: 0px 4px 0px 0px #32CD32;
    line-height : 150%;
    border-radius: 16px;
    border: 1px solid #585858;
    background: #F4F3E5;

    /* box2 */
    box-shadow: 0px 0px 4px 0px #979797;
    backdrop-filter: blur(10px);
    `;

    const TextSubGruop3 = styled.div`
    display: flex;
    width : 80%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;  
    padding: 5%;
    overflow : hidden;
    text-align:left;
    color : white;
    font-family : "스윗";
    font-size: 5vmin;
    line-height : 150%;
    border-radius: 16px;
    background: #232323;
    `;
    
    const TextSubGruop = styled.div`
    display: flex;
    width : 80%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;  
    padding: 5%;
    overflow : hidden;
    border-radius: 12px;
    background: rgba(25,25,112,0.3);
    text-align:left;
    color : white;
    font-family : "스윗";
    font-size: 5vmin;
    line-height : 150%;
    box-shadow: 0px 0px 4px 0px #979797;
    backdrop-filter: blur(10px);  
    `;

    const TextSubGruop4 = styled.div`
    display: flex;
    width : 80%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;  
    text-align:left;
    padding: 5%;
    color : black;
    font-family : "스윗";
    font-size: 5vmin;
    box-shadow: 0px 4px 0px 0px #32CD32;
    line-height : 150%;
    border-radius: 16px;
    background: 
    linear-gradient(0deg, rgba(255, 255, 255, 0.40) 0%, 
    rgba(255, 255, 255, 0.40) 100%), 
    linear-gradient(92deg, #C3E9C2 -6.3%, #D4E5C2 96.81%);

    /* box2 */
    box-shadow: 0px 0px 4px 0px #979797;
    backdrop-filter: blur(10px);
    position : relative;
    z-index : 1;
    `;

    const TextSubGruop5 = styled.div`
    display: flex;
    width : 80%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;  
    z-index : 1;
    text-align:left;
    padding: 5%;
    overflow : hidden;
    color : white;
    font-family : "스윗";
    font-size: 5vmin;
    line-height : 150%;
    position : relative;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 0px 4px 0px #979797;
    backdrop-filter: blur(9.999999046325684px);
    `;
    
    const SmallBlock = styled.div`
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 36px;
    background: #FE8600;
    backdrop-filter: blur(2px);
    margin : 3% 3% 3% 0%;
    `

    
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


