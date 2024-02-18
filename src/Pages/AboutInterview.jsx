import React, { useState, useEffect, useRef } from 'react';
import styled, {css} from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { CgChevronDoubleLeft, CgChevronDoubleRight  } from "react-icons/cg";
import PassPageData from '../components/Layout/Passed/PassPageData';
import { TfiAngleDoubleDown, TfiAngleDoubleUp  } from "react-icons/tfi";

const AboutInterview = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
    const handleLinkClick = () => {
      
        if (!isChecked) {
        alert('아직 모든 사항에 동의하지 않았습니다.');
      }
      else if (isChecked) {
        navigate("/DefaultPage");
      }
    };

    const handleLinkClick2 = () => {

        navigate("/ClubDetail");
    };

  return (
    <BackGroundSrc imagePath={"ThirdBack.png"}>
      <StyledContainer>
        <Header/>
            <div>
                <PassPageData id={'310'}/>
                <PassPageData id={'311'}/>
                <PassPageData id={'312'}/>
                <PassPageData id={'313'}/>
                <PassPageData id={'314'}/>
                <PassPageData id={'315'}/>
                <PassPageData id={'316'}/>
                <SectionBlock>
                  <Slide>
                    <PhBox><BiggerSpan><RedSpan>(중요!) </RedSpan></BiggerSpan>
                    <div>
                    공식 페이지나 안내 사항 등이 <br/>
                    <RedSpan>뚜렷하게 적혀있는 사항</RedSpan>을, <br/>
                    <RedSpan>다시 그대로 재문의하는 것은</RedSpan> 제한된 <br/>
                    면접 시간을 낭비할 뿐만 아니라, <br/>
                    <br/>
                    사전 안내된 사항들을 숙지할 의지가 <br/>
                    없는 것으로 평가되어 <RedSpan>부정적 인상을<br/>
                    줄 수 있기 때문에, <br/></RedSpan>
                    <br/>
                    아래 예시를 참고해주시기 바랍니다. 😊<br/>
                    <br/>
                    <BoldSpan><RedSpan>(잘못된 예시)</RedSpan></BoldSpan><br/>​
                    <OrangeSpan>Q. 동아리 활동은 얼마만큼 하는 건가요?<br/></OrangeSpan>
                    <br/>
                    <DeepGreenSpan>
                    A. 안내페이지 및 여러 안내 사항에,<br/>
                    ’30주’ 라는 활동 주차가 명시되어 있기 때문에, <br/>
                    부정적인 평가로 이어지는 질문이 됨.<br/></DeepGreenSpan>
                    <br/><BingFont>
                    (“앗, 당신은 주어진 안내를 제대로 읽지 않아서, <br/>
                    타 크루나 진행 과정에 피해를 입힐 수 있어 <br/>
                    보이는군요..ㅠ“)<br/></BingFont>​
                    <br/>
                    </div>
                    <div>
                    <br/>
                    <BoldSpan><GreenSpan><br/>
                    <br/>(바람직한 예시)<br/></GreenSpan></BoldSpan>​
                    <OrangeSpan>Q. 30주라고 되어 있고, <br/>
                    시즌 중 개인 일정에 따라 휴식 신청을 <br/>
                    할 수 있다고 하는데, 예정된 휴식이 아닌, <br/>
                    불가피하게 급작스러운 휴식이 필요한 <br/>
                    주차가 발생하면 어떻게 해야 되나요?​<br/></OrangeSpan>
                    <DeepGreenSpan><br/>
                    A. 전체 규정이 잘 준수되고 있다는 전제 하에, <br/>
                    클럽 내부 크루들이 수시로 사용하는 <br/>
                    팔랑크스 전용 커뮤니케이션 페이지를 활용하여, <br/>
                    양식에 따라  해당 상황을 남겨주시면, <br/>
                    <br/>
                    추후 팀장 및 파트장 크루들이 최대한 피해가 <br/>
                    가지 않도록 처리해드릴 수 있습니다. <br/></DeepGreenSpan>
                    <BingFont>
                    (단, “그냥 놀고 싶어요!” 같은 이유라면..<br/>
                    처리가 어려울 수 있겠죠 ^^;) ​<br/></BingFont></div>
                  </PhBox>
                  </Slide>
                </SectionBlock>
                <PassPageData id={'317'}/>


                <SectionBlock>
                <CheckBoxDiv>
                        <CheckBoxLabel>
                        <p>
                        위와 같은 팔랑크스에 대한 <br/>
                        기타 면접 준비 가이드를 모두 확인, <br/>
                        <RedSpan><BoldSpan>동의하였으며, ​해당 사항에 이상이 없습니다</BoldSpan></RedSpan>
                        </p>
                        <Checkbox checked={isChecked} 
                              onChange={handleCheckboxChange} />
                        </CheckBoxLabel>
            </CheckBoxDiv>
                
                    <BtnDiv>
                                <p>
                            이전 안내 사항에 대한 숙지가 부족하다면,<br /> 
                            다시 면밀하게 숙지해주세요.
                          </p>
                            <GradientButton onClick={handleLinkClick2}>
                               <CgChevronDoubleLeft />이전 전형 보러가기
                        </GradientButton>
                    </BtnDiv>
                    <BtnDiv>
                            <p>
                            팔랑크스 동아리,면접 과정의  <br/>
                            <OrangeSpan>모든 안내가 종료되었습니다.</OrangeSpan><br/>
                            <br/>
                            많은 것을 나누는 면접 과정에서 <br/>
                            본인을 잘 어필하여, ​좋은 경험과 <br/>
                            성장의 기회가 되시기 바랍니다. <br/>
                            <br/>
                            고생하셨습니다😊
                            </p>
                            <GradientButton onClick={handleLinkClick}>
                               면접 안내 페이지 종료 <CgChevronDoubleRight />
                        </GradientButton>
                    </BtnDiv>
                </SectionBlock>
            </div>
        <Footer/>
      
      </StyledContainer>
    </BackGroundSrc>
    
  );
};
export default AboutInterview;


const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.3), 
    rgba(0, 0, 0, 0.6), 
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

//콘테이너 디자인//
const StyledContainer = styled.div`
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



// 스타일드 컴포넌트를 활용한 스타일링
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* 이 부분으로 실제 체크박스를 숨깁니다. */
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${(props) => (props.checked ? '#00FF7F' : 'white')};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
   
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    
  </CheckboxContainer>
);

const CheckBoxDiv = styled.div`

border: none;
color: white;
font-size: 5vmin;
font-family : '스윗';
border-radius: 25px;
padding: 5%;
box-shadow: 0px 4px 0px 0px #ff7300;
width : 100%;
display : flex;
justify-content : center;'
border : 2px solid red;
line-height : 130%;

`
const CheckBoxLabel = styled.label`
   
`    
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
  width : 90%;
`;
const BtnDiv = styled.div`
width : 80%;
padding : 5%;
font-family : "스윗";
line-height : 160%;
font-weight : 600;
`
const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  margin: 10vh 0vw 5vh 0vw;

`;

const Slide = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const slideRef = useRef(null);

  const handleToggleSlide = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // 슬라이드가 열릴 때 slideRef.current가 존재하면 해당 위치로 스크롤
    if (isOpen && slideRef.current) {
      window.scrollTo({
        top: slideRef.current.offsetTop - window.innerHeight * 0.1, // 뷰포트 높이의 10%만큼 아래로 스크롤
        behavior: 'smooth',
      });
    }
  }, [isOpen]);

  return (
    <SlideContainer isOpen={isOpen} ref={slideRef}>
      <ToggleBtn1 onClick={handleToggleSlide}>면접 미팅시 질문 예시​</ToggleBtn1>
      {children}
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: ${({ isOpen }) => (isOpen ? '70vh' : '75px')};
  overflow: ${({ isOpen }) => (isOpen ? 'auto' : 'hidden')};
  transition: height 0.5s ease;
  margin: 2%;
  position : relative;
  border-radius: 16px;
  background-color: rgb(50,50,50,0.5);
  box-shadow: 0px 0px 4px 0px #979797;
  backdrop-filter: blur(9.999999046325684px);
  box-shadow: inset 0px 0px 15px 15px rgb(0,0,0,0.08);
  `;

  const ToggleBtn1 = styled.button`
  cursor: pointer;
  width : 100%;
  height : 110px;
  padding : 5%;
  color : #3DB9B1;
  border: none;
  color: white;
  font-size: 7vmin;
  font-family : '스윗';
  background: linear-gradient(45deg, #00FF00, #04B45F);
  box-shadow: 0px 4px 0px 0px #04B45F;
  font-weight : 600;
  `
  const PhBox = styled.div`
  display: flex;
  width : 90%;
  flex-flow : row wrap;
  justify-self: flex-start;
  align-items: center;
  text-align:left;
  padding: 3%;
  overflow-x : hidden;
  border-radius : 20px;
  margin: 2% 0% 0% 0%;
  font-size: 5vmin;
  font-family: '한나';
  text-align : start;
  line-height : 150%;
`;


const GreenSpan =styled.span`
  color : #3DB9B1;
  line-height : 150%;
`
const OrangeSpan = styled.span`
color : #FF8000;
`
const RedSpan = styled.span`
color : #FF0000;
`
const BlueSpan = styled.span`
color : #0040FF;
`
const GraySpan = styled.span`
color : #A4A4A4;
`

const PupSpan = styled.span`
color : #BF00FF;
`

const PinkSpan = styled.span`
color : #FF0080;
`

const DeepGreenSpan =styled.span`
  color : #04B404;
`
const GoldSpan =styled.span`
  color : #AEB404;
`

const BoldSpan =styled.span`
font-weight : 600;
`

const ItalicSpan =styled.span`
font-style : italic;
font-size : 4.5vmin;
`
const BingFont =styled.span`
font-family : 빙자람;
font-weight : 600;
`
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