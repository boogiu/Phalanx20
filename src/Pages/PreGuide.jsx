

import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PassPageData from '../components/Layout/Passed/PassPageData';

const PreGuide = () => {
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
      navigate("/ClubDetail");
    }
  };
  const handleLinkClick2 = () => {

      navigate("/cal");
  };

  return (
    <BackGroundSrc imagePath={"PassBack3.png"}>
      <StyledContainer>
            <Header />
            <div>
              <PassPageData id={'111'}/>
              <PassPageData id={'112'}/>
              <PassPageData id={'113'}/>
              <PassPageData id={'114'}/>
              <PassPageData id={'115'}/>
              <PassPageData id={'116'}/>
              <PassPageData id={'117'}/>
              <PassPageData id={'118'}/>
              <PassPageData id={'119'}/>
              <PassPageData id={'120'}/>

              <CheckBoxDiv>
                          <CheckBoxLabel>
                              위와 같은 팔랑크스에 대한 지원 일정 과정을 <br/>
                              <RedSpan>모두 확인, 동의하였으며, </RedSpan><br/>
                              해당 사항에 이상이 없습니다&nbsp;<br/><br/>
                              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                          </CheckBoxLabel>
              </CheckBoxDiv>
              <SectionBlock>
                {/* 필요한 만큼 체크박스를 추가할 수 있습니다. */}
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
                  <p>팔랑크스의 지원 <RedSpan>다음 단계<br />
                  (동아리 구성 요소 심화 안내)</RedSpan>로<br /> 
                  가는 분은 아래 버튼을 눌러주세요. <br />
                  (모든 서류 합격자 필수 과정)
                  </p>
                  <GradientButton onClick={handleLinkClick}>
                  동아리 구성 요소 심화 안내 <CgChevronDoubleRight />
                  </GradientButton>
                </BtnDiv>
              </SectionBlock>
            </div>
            <Footer />
        </StyledContainer>
    </BackGroundSrc>
    
  );
};

export default PreGuide;


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




const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.55),
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

const RedSpan = styled.span`
color : #FA5858;
font-weight : 600;
`