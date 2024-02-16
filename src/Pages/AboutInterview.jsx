import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PassCa from '../components/Layout/Passed/PassCa'
import { useNavigate } from 'react-router-dom';
import { CgChevronDoubleLeft, CgChevronDoubleRight  } from "react-icons/cg";

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
        navigate("/DocuPass/PreGuide");
      }
    };

    const handleLinkClick2 = () => {

        navigate("/DocuPass/cal");
    };

  return (
    <BackGroundSrc imagePath={"DiBack.png"}>
      <StyledContainer>
        <Header/>
            <div>
                <PassCa/>
                
                <SectionBlock>
                <CheckBoxDiv>
                    <CheckBoxLabel>
                        모든 사항 이상 없이 확인했습니다.<br/>
                        모든 사항 이상 없이 확인했습니다. &nbsp;
                        <Checkbox checked={isChecked} 
                        onChange={handleCheckboxChange} />
                    </CheckBoxLabel>
                </CheckBoxDiv>
                
                    <BtnDiv>
                            <p>
                            팔랑크스에 대한 설명이 부족하다면,<br /> 아래 공식 페이지를 다시 확인해주세요
                            </p>
                            <GradientButton onClick={handleLinkClick2}>
                               <CgChevronDoubleLeft />이전 전형 보러가기
                        </GradientButton>
                    </BtnDiv>
                    <BtnDiv>
                            <p>
                            팔랑크스에 대한 설명이 부족하다면,<br /> 아래 공식 페이지를 다시 확인해주세요
                            </p>
                            <GradientButton onClick={handleLinkClick}>
                               팔랑크스 공식 안내 페이지 <CgChevronDoubleRight />
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
    rgba(0, 0, 0, 0), 
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.87),
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
background: linear-gradient(45deg, #ff7300, #feac5e);
border: none;
color: white;
font-size: 5vmin;
font-family : '스윗';
border-radius: 25px;
margin : 5% 0% 5% 0%;
box-shadow: 0px 4px 0px 0px #ff7300;
width : 90%;
display : flex;
justify-content : center;'
border : 2px solid red;

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