import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretRight,FaCaretLeft  } from "react-icons/fa";
const Slider = ({ selectedId }) => {
  const [afterState, setAfterState] = useState(false);

  const handleClick = () => {
    setAfterState(!afterState);
  };

  return (
    <SliderContainer>
      <SliderButton onClick={handleClick}>{afterState ? 
      (<> before <FaCaretLeft /></>) : 
      (<> after<FaCaretRight /></>)}
      </SliderButton>
      <SlideContainer slidePosition={afterState ? 'after' : 'before'}>
        <BeforeImgComponent selectedId={selectedId} />
        <AfterImgComponent selectedId={selectedId} />
      </SlideContainer>
      <Text selectedId={selectedId}/>
    </SliderContainer>
  );
};
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 30%;
  right : 0;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 4px;
  cursor: pointer;
  z-index: 1;
  transition: left 0.5s ease-in-out;
  font-size : 5vmin;
  color : white;
  font-family : '스윗';
  display: flex;
  align-items:center;
`;

const SlideContainer = styled.div`
  
  width: 200%; /* 두 이미지를 가로로 나란히 표시하기 위해 */
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.slidePosition === 'after' ? 'translateX(-50%)' : 'translateX(0)')};
`;

const ImageContainer = styled.div`
  margin: 0% 0% 0% 0%;
  width: 50%;
  height: auto;
  overflow: hidden;
  object-fit: contain;
  z-index: 0;
  box-shadow: 0px 1px 3px 2px #A4A4A4;
`;

const ImgComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지를 컨테이너에 맞게 조절 */
`;

const BeforeImgComponent = ({ selectedId }) => {
  return (
    <ImageContainer>
      <ImgComponent src={`${process.env.PUBLIC_URL}/imgData/Slide/${selectedId}Before.JPG`} alt="페이지 이미지" />
    </ImageContainer>
  );
};

const AfterImgComponent = ({ selectedId }) => {
  return (
    <ImageContainer>
      <ImgComponent src={`${process.env.PUBLIC_URL}/imgData/Slide/${selectedId}After.JPG`} alt="페이지 이미지" />
    </ImageContainer>
  );
};


const Modal = ({ onClose, selectedId }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>닫기</CloseButton>
        <Slider selectedId={selectedId}/>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 95%;
  height: 80vh;
  overflow-y : auto;
  
  -webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

`;

const CloseButton = styled.button`
  position: absolute;
  top: 4%;
  right: 10px;
  padding: 5px 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;




export default Modal;


const Text = ({ selectedId }) => {
  const SubTitle = [
    "",
    "수치에 의한,",
    "범위에 의한,",
    "설득을 위한,"
  ]
  const Title = [
    "",
    "정량화!",
    "구조화!",
    "가시화!"
  ]
  
  const Discription =[
    "",
    <p>
      기획을 ‘시작’ 하는 우리들이 자주 범하는 실수 중 <br/>
      <Alert>첫 번째는,</Alert> 우리의 상상과 생각을 ‘형용사’ 로 <br/>
      표현한다는 점입니다.<br/><br/>

      <Alert>“그럴 것 같다”, “높을 것 같다”, “잘 될 것 같다”… </Alert><br/>
      이런 것에서 부터 실무와는 거리가 멀어져요.<br/>
      팔랑크스에서는 형용사 대신 <Bigger>숫자를</Bigger> 씁니다. <br/><br/>
      팔랑크스 크루들의 기획은, <br/>
      형용사에 의한 무책임한 표현이 아닌, <br/><br/>
      
      <Strong>수치에 의한 ‘정량적’ 인 사항과 근거로서 <br/></Strong>
      우리의 실무 기획 가치를 제고합니다. <br/><br/>
    </p>,
    <p>
    기획을 ‘시작’ 하는 우리들이 자주 범하는 실수 중 <br/>
    <Alert>두 번째는,</Alert> 우리의 기획을 두서없이 의식의 흐름으로<br/>
    나열한다는 점입니다.  <br/><br/>

    <Alert>상상과 기획의 차이는,</Alert> 범위와 질서가 갖추어졌는가<br/>
    그리고 그 내용이 확실한 구조로 구축되어 있는가<br/> 에서부터 발생합니다. 
    <br/><br/>

    팔랑크스에서는 의식의 흐름 대신<br/>
    <Bigger>생각의 구조</Bigger>를 만듭니다.  
    <br/><br/>
    팔랑크스 크루들의 기획은, <br/>
    각 개념들이, 범위와 질서를 갖춘 상태에서, <br/>
    나의 생각들을  <Strong>항목과 카테고리로 구조화하여,</Strong> <br/>
    실무 단계에서의 지속성과 현실성을 제고합니다. <br/><br/>

  </p>,
  <p>
  기획을 ‘시작’ 하는 우리들이 자주 범하는 실수 중 <br/>
  <Alert>세 번째는, </Alert>우리의 좋은 기획을 ‘처참한’ 전달력으로<br/>
  보여준다는 점입니다.   <br/>
  <br/>
  <Alert>제대로 보여주지 못하고, <br/>
  아무런 각인이 되지 않는다면<br/></Alert>
  아무리 좋은 기획이어도 쓸모가 없습니다. <br/>
  <br/>
  팔랑크스에서는 설명과 줄글 대신<br/> 
  <Bigger>가장 쉽게 와닿는</Bigger> 표현을 만듭니다. <br/>
  <br/>
  팔랑크스의 크루들은 주저리주저리 긴 글과 <br/>
  전달하기 어려운 설명들이 아닌, <Strong>그래프와 표, <br/>
  효율적인 도식화와 실사들을 통해 </Strong>내가 말하고자 <br/>
  하는 기획안을 한번에, 매력적으로 전달하여<br/>
  내 기획을 ‘설득’ 하는 실무성을 확보합니다. <br/>
  <br/>
  </p>,

  ]
  return (
    <TextContaine>
      <Sub>{SubTitle[selectedId]}</Sub> 
      &nbsp; <Main>{Title[selectedId]}</Main>
      <br/>
      {Discription[selectedId]}
    </TextContaine>
  );
};
const TextContaine = styled.div`
  color: black;
  font-size : 4vmin;
  font-family : '스윗';
  line-height : 150%;
  text-align : left;
  margin: 0% 0% 0% 4%;
`;
const Sub = styled.span`
  font-size : 5vmin;
  line-height : 200%;
  font-weight : 500;
  font-family : '워헤븐';
`;
const Main= styled.span`
  font-family : '워헤븐';
  font-size : 7vmin;
  line-height : 200%;
  font-weight : 600;
  color : #01DF01;
  text-shadow: 0.5px 0.5px 2px #BDBDBD;
`;

const Strong= styled.span`
  color : #01DF01;
  font-weight : 600;
`;

const Alert= styled.span`
  color : #DF0101;
  font-weight : 600;
`;

const Bigger= styled.span`
  color : #DF7401;
  font-size : 5vmin;
  font-weight : 600;
`;