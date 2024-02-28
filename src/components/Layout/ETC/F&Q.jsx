import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const FAQ = () => {

  return (
    <BackGroundSrc imagePath={"FQBanck.png"}>
        <SectionBlock>
            <OnloadGroup>
                <ImgComponent2 imagePath={"good.png"} 
                top={"20%"} 
                left={"50%"}
                rotate={"0deg"}
                width={"40%"}/>
                <TextSection>
                  
                  <Title style={{textAlign : "start"}}>
                    F&Q</Title>
                  <SubTitle style={{textAlign : "start"}}>
                  질문이 들어왔던 <br/>사항을 나열해봤어요!  
                  </SubTitle>
                </TextSection>
            </OnloadGroup>  
          </SectionBlock>

          <SectionBlock>
            <Imagediv2>
              <ImgComponent2 imagePath={"ChatIcon2.png"} 
                  top={"20%"} 
                  left={"50%"}
                  rotate={"0deg"}
                  width={"40%"}/>
            </Imagediv2>
            <TextSubGruop2>
              
                     <Main >
                      <BigNum>Q1</BigNum><br/>
                      내부 학년과 성별 비율이 어떻게 되나요?
                     </Main>
                     <BoxinBox>
                        <Txt>
                        지난 7기까지의 소모임은 최대 평균 <br/>
                        20~30명 내외였으며, 
                        이번 9기와 <br/>같이 여러 후원/연계사들의 시스템을 <br/>
                        수반하지
                        않은 형태였다보니, <br/><br/>
                        지금 9기와는 다르겠지만, <br/>그간의 
                        경험상 <YellowSpan>남녀 비율은 4대 6에서<br/>
                         5대 5 정도이며, </YellowSpan>기획 직무와<br/>
                        직접적으로 연관되는 스펙과 포트폴리오를 챙겨가는 
                        과정이다보니, 학년은<br/> <YellowSpan>당장 취업을 위한 경력이 바로 
                        필요한 <br/>3, 4학년이 압도적으로 많았습니다.</YellowSpan> <br/><br/>
                        1, 2, 3, 4 학년 비율은 그대로 10 / 20 / 30 / 40 
                        정도였다고 느낍니다.😊 (전체 100 기준) 
                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>
            <TextSubGruop2>
                     <Main >
                      <BigNum>Q2</BigNum><br/>
                      1학년인데, 못 따라가거나 너무 어렵지는 않을까요?
                     </Main>
                     <BoxinBox>
                        <Txt>
                        전국 최고 수준의 브레인들이 모인다는, <br/>
                        기획 직무의 클럽 팔랑크스 동아리를 <br/>
                        직접 해본 결과, 학년과 나이는 실력,<br/>
                         <GreenSpan>노력과는 아무 상관이 없었다고 단연코<br/>
                        말씀드릴 수 있습니다. (자신있음)</GreenSpan> <br/><br/>

                        1학년인데도 차츰 하나씩 해보며 <br/>
                        성장하여, 한 개 파트를 이끌어  <br/>
                        실무제휴/연계까지 진출, 압도적인 <br/>
                         포트폴리오를 챙겨가는 분이 있는가 <br/>하면,
                          4학년 혹은 
                        <RedSpan> 졸업생인데도<br/> 기본적인 커뮤니케이션에서부터<br/>
                          미스가 터져 </RedSpan>주변 사람들에게 좋지 못한 <br/>평판과
                          성장이 도저히 이루어지지 않는<br/> 분도 있었습니다.<br/>
                          <Bigger><GreenSpan>
                          <br/>중요한 건 노력과 배우려는 자세 <br/>
                          그리고 끈기 입니다. </GreenSpan></Bigger>

                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>
            <Imagediv2>
              <ImgComponent2 imagePath={"ChatIcon.png"} 
                  top={"20%"} 
                  left={"50%"}
                  rotate={"0deg"}
                  width={"40%"}/>
            </Imagediv2>
            <TextSubGruop2>
                     <Main >
                      <BigNum>Q3</BigNum><br/>
                      내부 분위기는 어떤가요?
                     </Main>
                     <BoxinBox>
                        <Txt>
                        아무래도 내부 피드백과 상호간의 <br/>
                        기획에 대한 평가, 의견들이 자유롭게<br/>
                         교환됩니다.<br/>
                         <br/> 그리고 내부 활동 자체가 <YellowSpan>매주 다양한<br/>
                          공지/안내/커리큘럼/실제 결과물들을<br/>
                           본인이 직접 하면서 </YellowSpan>다양한 피드백과<br/>
                            의사소통을 전제로 하다보니, 메신저나 <br/>
                            온라인 상으로 정말 많은 대화가 오고 <br/>
                            가게 되기 때문에<RedSpan> 본인이 온라인 <br/>
                            디바이스에 익숙하지 않거나 아직<br/>
                            사회적 커뮤니케이션 수준에 이르지 <br/>
                            못한</RedSpan> 분의 경우에는 정말 <br/>
                            곤혹을 치를 수 있습니다. <br/><br/>
                        <YellowSpan>좀 .. 웃긴데..상호간의 칭찬과<br/>
                         디스가 격렬하게 공존합니다…  </YellowSpan>
                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>
            <TextSubGruop2>
                     <Main >
                      <BigNum>Q4</BigNum><br/>
                      매주 확인해야 하는 공지나 <br/>메시지가 너무 많은데, <br/>어떻게 줄일 수 없을까요?
                     </Main>
                     <BoxinBox>
                        <Txt><Bigger><RedSpan>
                        죄송하지만 줄일 수 없습니다ㅠ.. <br/><br/></RedSpan></Bigger>
                        팔랑크스는 기획/컨설팅 분야에서 <br/>
                        타 학회나 동아리 대비 압도적인 <br/>
                        퀄리티와 활동량 그리고 <GreenSpan>확실한 <br/>
                        실무 결과물을 메인 가치로</GreenSpan> 하고 <br/>
                        있습니다. <br/><br/>
                        그러다보니, 이미 사전에 준비된 <br/>
                        내부 진행 과정들이나, 실무진들의 <br/>
                        자문으로 구성된 여러 커리큘럼 등<br/> 
                        <RedSpan>다양한 활동들을 필수적으로 <br/>
                        전제합니다. <br/></RedSpan>
                        <br/>
                        이 부분이 클럽 팔랑크스의 <br/>
                        정체성과도 같은 부분이어서, <br/>
                        이러한 빈도와 강도를 통해 <br/>
                        진짜 실무 기획의 역량을 쌓고,<br/>
                        유의미한 포트폴리오를 가져가는 것이<br/>
                        <RedSpan>현재 시점에서의 1순위가 아닌 분</RedSpan>의 <br/>
                        경우에는 여기서 하는 모든 것들이 <br/>
                        엄청난 귀찮음으로 다가올 수 밖에 없습니다. <br/>
                        <br/>
                        꼭 본인의 니즈와 필요를 철저히 <br/>
                        확인해보시기 바랍니다. <br/>
                        <YellowSpan>(나는 아직, <br/>좀 더 놀아야 하는 시기가 아닐까?) <br/>
                        <br/></YellowSpan>
                        지난 6, 7기 경험상 평균 역량의 <br/>
                        크루 1명당 1주(7일) 기준, 주 4시간<br/>
                         정도가 소요되었다고 들었는데,<br/>
                        이번 9기 리뉴얼에서 추가되는 여러 <br/>
                        extra 등을 포함하였을 때 <YellowSpan>주 5시간 <br/>
                        내외가 소요</YellowSpan>되지 않을까 합니다. 

                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>
            <Imagediv2>
              <ImgComponent2 imagePath={"heart3.png"} 
                  top={"20%"} 
                  left={"50%"}
                  rotate={"0deg"}
                  width={"40%"}/>
            </Imagediv2>
            <TextSubGruop2>
                     <Main >
                      <BigNum>Q5</BigNum><br/>
                      졸업자나 대학생이 아니어도 활동이 가능한가요?
                     </Main>
                     <BoxinBox>
                        <Txt>
                        가능합니다만, <br/>
                        전체 일정과 시즌, 주차 등이<br/>
                       <Bigger><GreenSpan> 모두 대학생 일정에 <br/>맞추어져 있습니다.</GreenSpan></Bigger><br/>
                        예를 들어, <br/>
                        봄 시즌 6, 7, 8주(4월 중하순),<br/>
                         14, 15, 16 주차(6월 중하순) <br/>
                        같은 경우에는, 중간/기말고사로 <br/>
                        모든 운영진/일반/심화 크루 등이 <br/>
                        <RedSpan>공식 휴식 주차</RedSpan>에 들어갑니다.<br/>
                        <br/> 
                        그래서 졸업생 분들도 이러한 대학생 <br/>
                        위주의 일정에 따라 동아리가 운영된다 <br/>
                        는 사항을 인지해주셔야 합니다.<br/>
                        <YellowSpan>(하긴 근데.. 졸업생 분들은 이런 일정은<br/>
                        별로 신경 안쓰고 되게 잘 따라오시긴 해요)<br/></YellowSpan>
                        <br/> 
                        <RedSpan>즉, 활동은 가능하지만 <br/> 
                        전체 클럽 일정은 2/4년제 <br/>
                        학사 대학생 일정에 맞추어져 있고,<br/>
                        이를 준수해야 합니다.</RedSpan>
                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>
            <TextSubGruop2>
                     <Main >
                      <BigNum>Q6</BigNum><br/>
                      30주 이후에도 졸업하지 않고, 계속 포트폴리오를 쌓을 수 있나요?

                     </Main>
                     <BoxinBox>
                        <Txt>
                        지난 7기에서 계속 나온 질문이었는데, <br/>
                        <Bigger><YellowSpan>그때는 안되었고, <br/>지금은 가능합니다.</YellowSpan></Bigger> <br/><br/>
                        해당 시기에는 30주 이후에 커리큘럼이<br/>
                        준비되어 있지 않았고, 통제/관리할<br/>
                        규정이나 해당 사항이 없었는데, <br/>
                        <GreenSpan>이번 9기 리뉴얼 부터 해당 사항이 <br/>
                        가능하게 되는 동아리 규정이 추가되어</GreenSpan><br/>
                         가능 해졌습니다. <br/><br/>

                        단, 30주 이후에 활동을 계속 할 <br/>
                        때에도 동일하게, <RedSpan>팔랑크스 공식 <br/>
                        규정은 모두 적용되며, 규정을 어겨<br/>
                         제명당할 시에는</RedSpan> 30주 까지의 <br/>
                         포트폴리오만 인정/발급됩니다.<br/> 


                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>
            <TextSubGruop2>
                     <Main >
                      <BigNum>Q7</BigNum><br/>
                      활동비는 어떻게 책정되나요?
                     </Main>
                     <BoxinBox>
                        <Txt>
                        팔랑크스는 시즌별로 <GreenSpan>시즌 활동비</GreenSpan>와<br/>
                        <YellowSpan>보증금</YellowSpan> 형식으로 크루들의 <br/>
                        시즌 활동 등록을 진행합니다. <br/>
                        <br/>
                        <YellowSpan>보증금은 3만원으로 1회 납부 후 <br/>
                        30주 졸업 후 반환</YellowSpan>되며, <GreenSpan>시즌 활동비는 <br/>
                        각 시즌 시작 시마다</GreenSpan> 주차 기준에 따라 <br/>
                        지속 조정됩니다. 시즌 활동비는 시즌의 <br/>
                        운영 예상 비용에 따라 달라지지만, <br/>
                        <br/>
                        <RedSpan>어떤 상황에서도</RedSpan> 하루에, 최대 <br/>
                        <RedSpan>테이크아웃 커피 한 잔 정도의 <br/>
                        비용</RedSpan>을 유지하게 하는 것이 기준입니다 <br/>
                        <br/>
                        팔랑크스 클럽의 <br/>
                        이번 9기 리뉴얼의 목표 자체가 <br/>
                        다양한 후원/연계사의 자문과 <br/>
                        선배들의 재능 기부 등을 통해, <br/>
                        기획/컨설팅이라는 분야에서 <br/>
                        <GreenSpan>대학생들이 실무 역량을 성장</GreenSpan>시키고 <br/>
                        <RedSpan>개별적으로는 확보할 수 없는</RedSpan> <br/>
                        <GreenSpan>다양한 실무 스펙, 포트폴리오를 <br/>
                        확보</GreenSpan>하여 채용에 직접적으로 <br/>
                        도움이 되고자 하는 것이 <br/>
                        목적이기 때문에, <br/>
                        <br/>
                        <YellowSpan>일정 금액이 넘어가지 않도록</YellowSpan> <br/>
                        운영비를 책정하는 것이 <br/>
                        대원칙으로 적용됩니다. <br/>
                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>

            <TextSubGruop2>
                     <Main >
                      <BigNum>Q8</BigNum><br/>
                      모이는 요일/시간은 <br/>언제인가요?
                     </Main>
                     <BoxinBox>
                        <Txt>
                        팔랑크스에서 오프라인으로 모이는 <br/>
                        요일/시간은 <RedSpan>각 파트마다 정말 <br/>
                        다릅니다.</RedSpan> <br/>
                        <br/>
                        클럽 전체가 모이는 <YellowSpan>세션 <br/>
                        ‘올림피아 기획 대전‘ </YellowSpan>은 <br/>
                        2월 말과 8월 말, 연 2회 <br/>
                        개최되며, <GreenSpan>연계되어 있는 <br/>
                        다양한 공기관과 제휴사</GreenSpan>의 <br/>
                        도움을 받아 진행합니다. <br/>
                        <br/>
                        그리고 팀과 파트 혹은 <br/>
                        실무 연계가 확정된 <br/>
                        기획 프로젝트의 경우에는 <br/>
                        <RedSpan>해당 프로젝트에 선별된 <br/>
                        구성원들끼리의 일정을 <br/>
                        취합하여 진행</RedSpan>되기 때문에 <br/>
                        현재로서는 확정할 수 없습니다.<br/> 
                        <br/>
                        팔랑크스는 <br/>
                        기본적으로 <YellowSpan>전국대학연합을 <br/>
                        모토로 하고 있기에</YellowSpan>, 교통과 <br/>
                        이동 시간에 제약이 없는 <YellowSpan>온라인 <br/>
                        활동을 메인으로</YellowSpan> 진행합니다. <br/>
                        <br/>
                        <GreenSpan>운영 채널</GreenSpan>은 ‘카페’ 와 ‘노션’, <br/>
                        ‘자체 시스템’ 등을 통해, <br/>
                        모든 크루에게 활동에 대한 브리핑과 <br/>
                        진행 체크 및 팔랑크스 활동 내용이 <br/>
                        이루어지며, <br/><YellowSpan>아카이빙 채널</YellowSpan>은 <br/>
                        ‘티스토리’ 를 활용하고 있습니다. <br/>
                        <br/>
                        즉, 체계적인 커뮤니케이션을 <br/>
                        통한 <RedSpan>온라인 기반으로 움직이되, <br/>
                        오프라인 모임은 자신의 팀, 파트, <br/>
                        조별 상황에 따라 달라집니다.</RedSpan> <br/>
                        <br/>
                        (오프라인 모임은 기본적으로 <br/>
                        주차 활동 인정에 필수 조건은 <br/>
                        아니기 때문에 이에 대해서 부담 <br/>
                        가지지 않으셔도 됩니다.😁) 
                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>

            <TextSubGruop2>
                     <Main >
                      <BigNum>Q9</BigNum><br/>
                      활동 시 유의해야 할 점은<br/> 무엇인가요?
                     </Main>
                     <BoxinBox>
                        <Txt>
                        <GreenSpan>‘사회화’</GreenSpan> 와 <YellowSpan>‘커뮤니케이션’</YellowSpan> 입니다. <br/>
                        팔랑크스의 기획 실무 포트폴리오 <br/>
                        특성상 <RedSpan>실제 다양한 대기업/중견기업<br/>
                        중소기업/스타트업 등 사회 선배, <br/>
                        실무자들과 다양한 커뮤니케이션이</RedSpan> <br/>
                        빈번하게 이루어질 수 있는데, <br/>
                        <br/>
                        이런 부분에서 각 크루들이 <br/>
                        사회적인 예의나 기본적인 <br/>
                        커뮤니케이션을 지키지 않을 경우, <br/>
                        <RedSpan>본인의 평판이 안좋게 될 수 있습니다.</RedSpan><br/>
                        <br/> 
                        아무리 기획을 잘하는 사람이더라도 <br/>
                        그 사람이 <RedSpan>기본적인 커뮤니케이션에서 <br/>
                        미스가 나거나, 필수 예의를 지키지 <br/>
                        못하는 사람이라면, </RedSpan>아무도 그 사람과 <br/>
                        일을 하고자 하지 않을겁니다. 😥😥<br/>
                        <br/>
                        기획/컨설팅 직무에서 <GreenSpan>남들보다 빠르게<br/>
                         실무 커리어 및 포트폴리오를 시작할<br/>
                         수 있기 때문에 </GreenSpan>이에 대한 부주의가<br/>
                         발생하지 않도록 유의해야 합니다. <br/>
                        <br/>
                        (어려운 일이 생기거나 할 때는 바로, <br/>
                        운영진이나 팀장/파트장과 공유하여야<br/>
                         적절한 대처를 할 수 있습니다!)<br/>
                        <br/>
                        지난 기수들에서 <br/>
                        본인이 열심히 4주 동안 기획해서,<br/>
                        실제 제안서로 발송을 했는데, <br/>
                        <RedSpan>그 회신이 오는 것을 체크하지 <br/>
                        못해</RedSpan> 놓쳐버린 무수한 케이스를 <br/>
                        봐왔습니다. <br/>
                        <br/>
                        그러한 기본적인 것부터 <br/>
                        확실히 챙겨가는 경험을 하는 <br/>
                        팔랑크스가 되어야 합니다.😊

                        </Txt>
                     </BoxinBox>
            </TextSubGruop2>
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default FAQ;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.95)
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
  margin: 13vh 0vw 0vh 0vw;

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
  color :#F8E0F1;
  width : 80%;
  line-height : 150%;
 
`;
const Title = styled.h1`
  font-family: "워헤븐";
  font-size: 13vmin;
  color: white;
  text-shadow:0 0 2px #FA58D0, 0 0 4px #FA58D0,  0 0 3px #FA58D0;
  width : 80%;
  line-height : 200%;
  
`;

const OnloadGroup = styled.section`
    animation: ${fadeInFromLeft} 1s ease forwards;
    width : 100%;
`;




const TextSubGruop2 = styled.div`
    display: flex;
    width : 80%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(0,0,0,0.8);
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    padding: 2%;
    overflow-x : hidden;
    box-shadow: inset 0px 0px 15px 15px rgb(204,204,204,0.2);
    border-radius : 20px;
    margin: 5vh 0vw 5vh 0vw;
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

const Imagediv2 = styled.div`
  width : 100%;  
  height : 1vh; 
  position : relative;
`;

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
            maxWidth: '80%', maxHeight: '80%' ,
            borderRadius :"5% 5% 5% 5% "
          }}/>
      </ImageContainer>
      
  );
};

const Main = styled.h2`
  font-family : '한나';
  font-size : 7.5vmin;
  font-weight : 600;
  color :#FBEFF5;
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
line-height : 150%;
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
    background-color: rgb(255,255,255,0.3);
    overflow-y: auto;
    text-align:left;
    padding: 3%;
    overflow-x : hidden;
    border-radius : 20px;
    margin: 2% 0% 0% 0%;
`;
