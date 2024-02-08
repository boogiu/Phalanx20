import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FcNext, FcPrevious } from 'react-icons/fc';
import textData from '../Data/HistoryMessageData.json'; 
import imageData from '../Data/PreImageData.json';// JSON 파일을 import 합니다.
import { useNavigate } from 'react-router-dom';
import backimg from '../img/histort.jpg'


const Book = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [filteredTextData, setFilteredTextData] = useState([]);
    const [filteredImgData, setFilteredImgData] = useState([]);
    const [fadeOut, setFadeOut] = useState(false); // 페이지 fade out 상태
    const [fold, setFold] = useState(false); // 페이지 fold 상태

    useEffect(() => {
        const newTextData = textData.filter((text) => text.page === textIndex);
        const sortedTextData = newTextData.sort((a, b) => a.positionX - b.positionX);
        setFilteredTextData(sortedTextData);

        const newImgData = imageData.filter((img) => img.page === textIndex);
        setFilteredImgData(newImgData);
    }, [textIndex]);

    const nextClick = () => {
        if (textIndex === 10) {
            console.log('끝');
        } else {
            setFold(true); // fold 시작
            setFadeOut(true); // fade out 시작
            setTimeout(() => {
                setTextIndex(textIndex + 1);
                setFold(false); // fold 완료 후 unfold
                setFadeOut(false); // fade out 완료 후 fade in
            }, 500); // 0.5초 후에 텍스트 인덱스 업데이트
        }
    };

    const handleClick = () => {
        if (textIndex === 0) {
            console.log('첫 페이지');
        } else {
            setFold(true); // fold 시작
            setFadeOut(true); // fade out 시작
            setTimeout(() => {
                setTextIndex(textIndex - 1);
                setFold(false); // fold 완료 후 unfold
                setFadeOut(false); // fade out 완료 후 fade in
            }, 500); // 0.5초 후에 텍스트 인덱스 업데이트
        }
    };
    return (
        <StyledContainer>
            <BlinkDiv>
                {textIndex !== 0 && <FcPrevious onClick={handleClick} />}
            </BlinkDiv>
            <HookingBox fadeOut={fadeOut} fold={fold}>
                <TextContainer>
                    {filteredTextData.map((text, index) => (
                        <TextComponent key={index} text={text} />
                    ))}
                </TextContainer>
                <ImageContainer >
                    {filteredImgData.map((img, index) => (
                        <ImgComponent key={index} img={img} />
                    ))}
                </ImageContainer>
            </HookingBox>
            <BlinkDiv>
            {textIndex !== 10 && <FcNext onClick={nextClick} />}
            </BlinkDiv>
        </StyledContainer>
    );
};

export default Book;

const StyledContainer = styled.div`
  width: 100%;
  height: 60vh;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

const HookingBox = styled.div`
  width: 70%;
  height: 60%;
  border-radius: 20%; /* border-radius 추가 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-image: linear-gradient( rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4) ) ,url(${backimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  left: ${({ left }) => left}; /* positionX 값을 스타일에 적용 */
  top: ${({ top }) => top}; /* positionY 값을 스타일에 적용 */
  filter: ${({ filter }) => filter}; /* brightness 값을 스타일에 적용 */
  transform: translateY(${({ fold }) => (fold ? '-100%' : '0')}); /* 클릭 이벤트에 따라 translateY 조정 */
  background-color: transparent;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)}; /* 클릭 이벤트에 따라 opacity 조정 */
  transition: opacity 0.5s ease, transform 0.5s ease; /* opacity와 transform에 대한 트랜지션 효과 추가 */
`;

const Blink = keyframes`
  0% { opacity: 0.9; }
  50% { opacity: 0.1; }
  100% { opacity: 0.9; }
`;

const BlinkDiv = styled.div`
  animation: ${Blink} 3s infinite;
  width: 10vmin;
  height: 10vmin;
  background-color: rgba(252, 252, 252, 0.08);
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: red;
  font-size: 8vmin;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
`;
const FormattedText = styled.span`
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color};
    font-style: ${({ fontStyle }) => fontStyle}; // fontStyle 적용
    text-shadow: ${({ textShadow }) => textShadow}; // textShadow 적용
    line-height :  ${({ lineHeight }) => lineHeight}; 
`;


const TextComponent = ({ text }) => {
    const { page, color, size, family, style, shadow, txt,height } = text;

    return (
        <FormattedText
            fontFamily={family}
            fontSize={size}
            color={color}
            fontStyle={style} // fontStyle 추가
            textShadow={shadow} // textShadow 추가
            lineHeight={height}
        >
            {txt}
        </FormattedText>
    );
};

const ImageContainer = styled.div`
width: 100%;
height: 100%;
object-fit:contain;
z-index: 0;
position: absolute;
bottom: 0;
left: ${({ left }) => left}; /* positionX 값을 스타일에 적용 */
top: ${({ top }) => top}; /* positionY 값을 스타일에 적용 */
filter:${({ filter }) => filter}; /* brightness 값을 스타일에 적용 */
transform:${({ transform }) => transform}; /* brightness 값을 스타일에 적용 */
background-color: transparent;
`;

const ImgComponent = ({ img }) => {
    const { left, top, brightness, imagePath,rotate } = img;

    return (
        <ImageContainer 
        
        left={left}
        top={top}
        filter={brightness}
        transform={rotate}>
            <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" 
            style={{height : "50%" }}/>
        </ImageContainer>
    );
};
