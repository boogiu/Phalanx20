import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from './Modal';
import InfiniteBanner from './InfiniteBanner';
import { FcInternal } from "react-icons/fc";

const ImageRoll = () => {
    const bannerImages1 = [
        `${process.env.PUBLIC_URL}/imgData/Slide/slide1.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide2.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide3.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide4.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide5.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide6.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide7.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide8.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide9.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide10.JPG`
       
    ];
    const bannerImages2 = [
        `${process.env.PUBLIC_URL}/imgData/Slide/slide11.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide12.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide13.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide14.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide15.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide16.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide17.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide18.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide19.JPG`,
        `${process.env.PUBLIC_URL}/imgData/Slide/slide20.JPG`
       
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const openModal = (id) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedId(null);
    };
    

    return (
        <BackGroundSrc imagePath={"imgRollBack.png"}>
            <RollContainer>
                <BtnDiv>
                    <Btn id='1' onClick={() => openModal('1')}><Titlespan>수치!</Titlespan></Btn>
                    <Btn id='2' onClick={() => openModal('2')}><Titlespan>구조!</Titlespan></Btn>
                    <Btn id='3' onClick={() => openModal('3')}><Titlespan>표현!</Titlespan></Btn>
                </BtnDiv>
                {isModalOpen && <Modal onClose={closeModal} selectedId={selectedId} />}
                <InfiniteBanner animationSpeed={2} items={bannerImages1}/>
                
                <LinkTitle>
                    <h1 style={{lineHeight:"200%"}}>팔랑크스는</h1>
                    <h1 style={{lineHeight:"200%"}}>
                        <StrongSpan> 이렇게 </StrongSpan>
                        <br/>
                    기획합니다!</h1>
                </LinkTitle>
                <InfiniteBanner animationSpeed={3} items={bannerImages2}/>
            </RollContainer>
        </BackGroundSrc>
        
    );
};

// 이하 스타일은 이전과 동일합니다.

const RollContainer = styled.div`
    height: auto;
    width: 100%;
    color: white;
    overflow: hidden;
    position: relative;
    display : flex;
    flex-flow : column nowrap;
    justify-content : center ;
    align-items : center;
    align-content : center;
    margin: 25vh 0vw 0vh 0vw;
    
`;

const LinkTitle = styled.h1`
    font-family: '워헤븐';
    width : 90%;
    height : auto;
    font-size : 4vmin;
    z-index: 2;
    line-height : 200%;
`;

const StrongSpan = styled.span`
    font-family: '워헤븐';
    width : 40%;
    font-size : 12vmin;
    z-index: 2;
    line-height : 200%;
    color : #27FF97;

`;


const BtnDiv = styled.div`
    display : grid;
    flex-flow : row wrap;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 15vh;
    margin: 1vh 0vw 8vh 0vw;
    grid-template-columns: repeat(3, 1fr);
`;

const Btn = styled.button`
  display : flex;
  justify-content : center;
  align-items : center;
  position: relative;
  background: linear-gradient(45deg, #00FF66, #99FF99);
  border: none;
  color: white;
  width : 100px;
  height : 100px;
  border-radius: 25px;
  cursor: pointer;
  margin : 0% 5% 0% 5%;
  transition: background 0.3s ease;
  box-shadow: 0px 4px 0px 0px #00CC00;
  animation: ding 2s infinite ease-out;

    @keyframes ding {
    50% {
        margin-top: 15px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 0px 0px #088A29;
    }
}
`

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 1), 
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.55), 
    rgba(0, 0, 0, 0.95)
  ),
    url(${({ BackGroundImage }) => BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


export default ImageRoll;

const Titlespan = styled.span`
  font-family: "스윗";
  font-size: 10vmin;
  font-weight : 600;
  color: black;
  text-shadow:0 0 2px #0fa, 0 0 4px #0fa,  0 0 3px #0fa;
  width : 100%;
  
`;