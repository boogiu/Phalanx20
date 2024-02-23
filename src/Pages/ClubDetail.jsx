

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';
import Footer from '../components/common/Footer';
import PassPageData from '../components/Layout/Passed/PassPageData';
import Checkbox from '../components/common/CheckBox';
import SlideContents from '../components/Layout/Passed/SlideContents';
import { FcNext, FcPrevious } from "react-icons/fc";
import { TfiAngleDoubleDown, TfiAngleDoubleUp  } from "react-icons/tfi";
import ReactGA4 from 'react-ga4';

const ClubDeTail = () => {
  const navigate = useNavigate();
  const [isCheckedList, setIsCheckedList] = useState([false, 
  false, false, false, false, false, false, false, false]); // 각 체크박스의 상태를 관리할 배열
  const [finalCheck, setFinalCheck]= useState(false);
  const [goCheck, setGoCheck]= useState(false);
  const [isLastChecked, setIsLastChecked] = useState(false);

  const handleLastCheckboxChange = () => {
    setIsLastChecked(prevState => !prevState); // 마지막 체크박스 상태를 토글
  };

  useEffect(() => {
    // isCheckedList 배열이 변경될 때마다 모든 요소가 true인지 확인하여 finalCheck 갱신
    setFinalCheck(isCheckedList.every(isChecked => isChecked));
  }, [isCheckedList]);

  useEffect(() => {
    // finalCheck 상태가 변경될 때마다 goCheck 갱신
    setGoCheck(isLastChecked);
  }, [isLastChecked]);

  const handleCheckboxChange = (index) => {
    setIsCheckedList(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // 현재 상태의 반대값으로 변경
      return newState;
    });
    ReactGA4.event({
      category: 'InterviewPage',
      action: `9B Check${index}`,
      label: '9B Check'
  });
  };

  const handleLinkClick = () => {
    if (!goCheck) {
      alert('아직 모든 사항에 동의하지 않았습니다.');
    } else {
      navigate('/AboutInterview');
    }
  };

  const handleLinkClick2 = () => {
    navigate('/PreGuide');
  };

  return (
    <BackGroundSrc imagePath={"PassBack4.png"}>
      <StyledContainer>
        <div>
          <PassPageData id={'211'}/>
          <PassPageData id={'212'}/>
          <PassPageData id={'213'}/>
          <PassPageData id={'214'}/>
          <SectionBlock>

            <Slide>
              <Slider>
                <SlideContents id={'101'}/>
                <SlideContents id={'102'}/>
                <SlideContents id={'103'}/>
                <SlideContents id={'104'}/>
                <SlideContents id={'105'}/>
                <SlideContents id={'106'}/>
                <SlideContents id={'107'}/>
                <SlideContents id={'108'}/>
                <SlideContents id={'109'}/>
                <SlideContents id={'110'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                  checked={isCheckedList[0]} 
                  onChange={() => handleCheckboxChange(0)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[0] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>
            
            <Slide>
              <Slider>
                <SlideContents id={'201'}/>
                <SlideContents id={'202'}/>
                <SlideContents id={'203'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                    checked={isCheckedList[1]} 
                    onChange={() => handleCheckboxChange(1)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[1] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>

            <Slide>
              <Slider>
                <SlideContents id={'301'}/>
                <SlideContents id={'302'}/>
                <SlideContents id={'303'}/>
                <SlideContents id={'304'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                      checked={isCheckedList[2]} 
                      onChange={() => handleCheckboxChange(2)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[2] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>

            <Slide>
              <Slider>
                <SlideContents id={'401'}/>
                <SlideContents id={'402'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                      checked={isCheckedList[3]} 
                      onChange={() => handleCheckboxChange(3)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[3] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>

            <Slide>
              <Slider>
                <SlideContents id={'501'}/>
                <SlideContents id={'502'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                      checked={isCheckedList[4]} 
                      onChange={() => handleCheckboxChange(4)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[4] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>

            <Slide>
              <Slider>
                <SlideContents id={'601'}/>
                <SlideContents id={'602'}/>
                <SlideContents id={'603'}/>
                <SlideContents id={'604'}/>
                <SlideContents id={'605'}>
                <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                      checked={isCheckedList[5]} 
                      onChange={() => handleCheckboxChange(5)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[5] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>

            <Slide>
              <Slider>
                <SlideContents id={'701'}/>
                <SlideContents id={'702'}/>
                <SlideContents id={'703'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                      checked={isCheckedList[6]} 
                      onChange={() => handleCheckboxChange(6)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[6] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>

            <Slide>
              <Slider>
                <SlideContents id={'801'}/>
                <SlideContents id={'802'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                      checked={isCheckedList[7]} 
                      onChange={() => handleCheckboxChange(7)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[7] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>

            <Slide>
              <Slider>
                <SlideContents id={'901'}/>
                <SlideContents id={'902'}/>
                <SlideContents id={'903'}/>
                <SlideContents id={'904'}/>
                <SlideContents id={'905'}>
                  <Checkbox label="확인되었어요!&nbsp;&nbsp;" 
                      checked={isCheckedList[8]} 
                      onChange={() => handleCheckboxChange(8)} />
                </SlideContents>
              </Slider> 
              {isCheckedList[8] && <ImgComponent2 
                      imagePath={"Check.png"} 
                      top={"0%"} 
                      left={"00%"}
                      rotate={"-20deg"}
                      width={"30%"}/>
                    }
            </Slide>



            
            <PassPageData id={'215'}/>

            {/* 필요한 만큼 체크박스를 추가할 수 있습니다. */}

            <CheckBoxDiv>
                        <CheckBoxLabel>
                        위와 같은 팔랑크스에 대한 동아리 구성 요소  <br/>
                        <RedSpan>심화 안내를 모두 확인, 동의하였으며, <br/></RedSpan>
                        해당 사항에 이상이 없습니다<br/><br/>
                            <FinalCheckbox 
                              checked={isLastChecked} 
                              onChange={() => {
                                if (!finalCheck) {
                                  alert('아직 모든 사항에 동의하지 않았습니다.')
                                } else {
                                  handleLastCheckboxChange();
                                } 
                              }} 
                            />
                        </CheckBoxLabel>
            </CheckBoxDiv>

            <BtnDiv>
              <p>
                이전 안내 사항에 대한 숙지가 부족하다면,<br /> 
                다시 면밀하게 숙지해주세요.
              </p>
              <GradientButton onClick={handleLinkClick2}>
                <CgChevronDoubleLeft /> 이전 전형 보러가기
              </GradientButton>
            </BtnDiv>
            <BtnDiv>
              <p>팔랑크스 지원 다음 단계로<br/>
              (기타 면접 준비 가이드)<br/>
              가는 분은 아래 버튼을 눌러주세요. <br/>
              (모든 서류 합격자 필수 과정)</p>
              <GradientButton onClick={handleLinkClick}>
              기타 면접 준비 가이드
              <CgChevronDoubleRight />
              </GradientButton>
            </BtnDiv>
          </SectionBlock>
        </div>
        <Footer />
      </StyledContainer>
    </BackGroundSrc>
  );
};

export default ClubDeTail;


// 나머지 스타일 및 컴포넌트 정의는 그대로 유지됩니다.


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

const GradientButton = styled.button`
  
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
  background: linear-gradient(45deg, #ff7300, #feac5e);
  width : 90%;
`;
const BtnDiv = styled.div`
width : 80%;
padding : 5%;
font-family : "스윗";
font-size: 4.5vmin ; 
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
      {children}
      {isOpen && (
          <ToggleBtn1 onClick={handleToggleSlide}/>
        )}
      {!isOpen && (
          <ToggleBtn2 onClick={handleToggleSlide}/>
        )}
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: ${({ isOpen }) => (isOpen ? '70vh' : '110px')};
  overflow: ${({ isOpen }) => (isOpen ? 'auto' : 'hidden')};
  transition: height 0.5s ease;
  margin: 5%;
  position : relative;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 4px 0px #979797;
  backdrop-filter: blur(9.999999046325684px);
  box-shadow: inset 0px 0px 15px 15px rgb(0,0,0,0.08);
  `;

  const ToggleBtn1 = styled(TfiAngleDoubleUp)`
  cursor: pointer;
  position : absolute;
  top : 35px;
  left : 80%;
  font-size : 10vmin;
  border-radius: 50%;
  color : #3DB9B1;
  `
  const ToggleBtn2 = styled(TfiAngleDoubleDown)`
  cursor: pointer;
  position : absolute;
  top : 35px;
  left : 80%;
  font-size : 10vmin;
  border-radius: 50%;
  color : #3DB9B1;
  `

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
  width: 50px;
  height: 50px;
  background: ${(props) => (props.checked ? '#00FF7F' : 'white')};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const FinalCheckbox = ({ className, checked, onChange }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} />
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


const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.4), 
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







const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, React.Children.count(children) - 1));
  };

  return (
    <SliderContainer>
      <SlideContentsWrapper
        style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }} // GPU 가속을 사용하여 부드러운 슬라이드 효과 구현
      >
        {React.Children.map(children, (child, index) => (
          <SlideContent key={index}>{child}</SlideContent>
        ))}
      </SlideContentsWrapper>

      <ButtonContainer>
        {currentSlide !== 0 && (
          <SliderButton1 onClick={handlePrevSlide}/>
        )}
        {currentSlide !== React.Children.count(children) - 1 && (
          <SliderButton2 onClick={handleNextSlide}>다음</SliderButton2> 
        )}
      </ButtonContainer>
      <Counter>
        {React.Children.map(children, (child, index) => (
          <Circle key={index} active={index === currentSlide}/>
        ))}
      </Counter>
    </SliderContainer>
  );
};


const Circle = styled.div`
  width: 2vmin;
  height: 2vmin;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#2EFE2E' : 'grey')};
  margin-right: 5px;
`;

const Counter = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 25%;
  box-shadow: 2px 2px 4px 0px #979797;
  height : 2.5vmin;
  width : auto;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top : 50%;
  left : 0%;
  width: 100%;
  height : 50px;
`;

const SliderButton1 = styled(FcPrevious)`
  font-size : 15vmin;
  background-color: rgba(252, 252, 252, 0.6);
  border-radius: 50%;
  cursor: pointer;
  position : absolute;
  top : 120px;
  left : 5%;
  font-size : 10vmin;
`;

const SliderButton2 = styled(FcNext)`
  font-size : 15vmin;
  background-color: rgba(252, 252, 252, 0.6);
  border-radius: 50%;
  cursor: pointer;
  position : absolute;
  top : 120px;
  left : 75%;
  font-size : 10vmin;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

const SlideContentsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  transition: transform 0.5s ease; /* 부드러운 슬라이드 효과를 위한 transition 추가 */
  will-change: transform; /* GPU 가속을 사용하여 애니메이션 최적화 */
  justify-content: flex-start; /* 시작 정렬로 변경 */
`;

const SlideContent = styled.div`
  flex: 0 0 100%;
  width: 100%; /* 부모 요소인 SlideContentsWrapper에 맞게 크기를 설정 */
  overflow-x: hidden; /* 내용이 부모 요소를 넘치지 않도록 제어 */
  position: relative;
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
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
            borderRadius :"5% 5% 5% 5% "

          }}/>
      </ImageContainer>
      
  );
};
const RedSpan = styled.span`
color : #FA5858;
font-weight : 600;
`