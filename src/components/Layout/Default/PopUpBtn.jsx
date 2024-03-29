import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ModalContents from './ModalContents';


const PopUpBtn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <BtnContainer>
      <PopUpBox onClick={() => setShowModal(true)}>
        팔랑크스란 <br/>무엇인가
        <ImgComponent imagePath={"Zoom.png"} 
                top={"0%"} 
                left={"75%"}
                rotate={"-10deg"}
                width={"30%"}/>
        
        </PopUpBox>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </BtnContainer>
  );
};


const Modal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} >
        <CloseButton onClick={onClose}>Close</CloseButton>
        <ModalContents/>
         
      </ModalContent>
    </ModalOverlay>
  );
};

export default PopUpBtn;

const BtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50vh;
  overflow : hidden;
  margin: 0 0vw 23vh 0vw;
`;

const CloseButton = styled.button`
  width: 15%;
  font-size: 2.5vmin;
  font-family : '스윗';
  font-weight : 600;
  margin-bottom:5%;
  top:0%;
  left : 90%;
  padding: 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  position: -webkit-sticky;
  position: sticky;
  cursor: pointer;
  outline: none;
  z-index:4;
`;

const PopUpBox = styled.div`
  width: 100%;
  height: 60%;
  background: linear-gradient(45deg, #00FF66, #99FF99);
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 15vmin;
  font-family : '스윗';
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 0px 4px 0px 0px #00CC00;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:start;
  animation: heartbeat 5s infinite ;
  
  @keyframes heartbeat {
    
    50% {
      transform: scale(0.9);
    }
    
  }
  
`;

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
  color: black;
  width: 90%;
  height: 80vh;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y : auto;
  position : relative;
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
  //*animation: ${css`${scaleInAnimation}`} 0.3s ease-in-out;*//