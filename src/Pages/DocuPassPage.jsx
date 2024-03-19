import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Footer from '../components/common/Footer';
import WaitModal from '../components/Layout/Passed/WaitModal'
import PassedGuide from '../components/Layout/Passed/PassedGuide';
import ReactGA4 from 'react-ga4';
import { useNavigate } from 'react-router-dom';
// 인풋 박스 테두리 플래시 애니메이션


const Modal = ({ onClose, passcode }) => {
  const [inputValue, setInputValue] = useState('');
  const [incorrectPass, setIncorrectPass] = useState(false);


  const handleClose = () => {
    if (inputValue === passcode) {
      onClose();
    } else {
      setIncorrectPass(true);
      setTimeout(() => {
        setIncorrectPass(false);
      }, 1000); // 1초 후에 플래시 애니메이션을 해제합니다.

      ReactGA4.event({
        category: 'InterviewPage',
        action: `CodeWrong`,
        label: 'PassCode Wrong'
      });
    }
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent onClick={e => e.stopPropagation()}>
        <WaitModal />
        <Inputdiv>
          <PassInput
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Passcode를 입력하세요"
            incorrectPass={incorrectPass}
          />
          <CloseButton onClick={handleClose}>SubMit</CloseButton>
        </Inputdiv>
        <TxtDiv>
        <TxT>*이전 기수에서, 필수 커리큘럼 <br />수료 후 재지원 하시는 경우,<br />
        본 코드가 아닌 별도 안내된 사항을 <br />참고 바랍니다.</TxT>
        </TxtDiv>
      </ModalContent>
    </ModalOverlay>
  );
};

const DocuPassPage = () => {
  const PassCode = "#pxwsdp1";
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false); // 모달을 닫음
  };

  return (
    <BackGroundSrc imagePath={"PassBack1.png"} >
      <StyledContainer>

          {!showModal ? <PassedGuide /> : null}
          {showModal && <Modal onClose={handleCloseModal} 
          passcode={PassCode} />}
        <Footer/>
      </StyledContainer>
    </BackGroundSrc>
  );
};

export default DocuPassPage;

  //콘테이너 디자인//
const StyledContainer = styled.div`
  width: 100%;
  height:300vh;
  display: flex;
  flex-flow : column nowrap;
  justify-content:center;
  align-content: center;
  overflow: hidden;
  margin : 0;
  position : relative;
  background-color: black;
  @media (max-width: 768px) {
    height:150vh;
  }
  `;




const ModalOverlay = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;

`;
const ModalContent = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: black;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: visible;
  position: relative;
  box-shadow: 0px 0px 4px 0px #979797;
  text-align: left;
  height: auto;
  display: flex;
  flex-flow : column wrap;
  justify-content: center;
  align-items: flex-start;
`;

const Inputdiv = styled.div`
width: 100%;
display: flex;
flex-flow : row wrap;
justify-content: center;
align-items: center;
`
const TxtDiv = styled.div`
  margin : 0% 10%;
  width: 80%;
  display: flex;
  flex-flow : row wrap;
  justify-content: flex-start;

`
const PassInput = styled.input`
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  outline: none;
  height:90px;
  width: 900px;
  @media (max-width: 768px) {
    height:30px;
    width: 200px;
  }
  &:focus {
    border-color: #27FF97;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #aaa;
  }
  animation: ${({ incorrectPass }) => (incorrectPass ? `shake 0.3s ease-in-out 1 alternate` : 'none')};

  border-color: ${({ incorrectPass }) => (incorrectPass ? 'red' : '')}; 

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
}
`;
const CloseButton = styled.button`
height:90px;
width: 300px;
  @media (max-width: 768px) {
    height:30px;
    width: 90px;
  }
font-size: 4vmin;
font-family : '스윗';
font-weight : 600;
background-color: white;
color: black;
border: none;
border-radius: 5px;
outline: none;
`;
const TxT = styled.p`
 color : white;
 font-family : '한나';
 font-size: 5vmin;
 
`;
const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.8),
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