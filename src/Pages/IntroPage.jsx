import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import BackGroundImage from '../components/img/introBack.png';
import { FcNext, FcPrevious } from 'react-icons/fc';
import textData from '../components/Data/PreMessageData.json'; 
import imageData from '../components/Data/PreImageData.json';// JSON 파일을 import 합니다.
import { useNavigate } from 'react-router-dom';
import ReactGA4 from 'react-ga4';



const IntroPage = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [filteredTextData, setFilteredTextData] = useState([]);
    const [filteredImgData, setFilteredImgData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const newTextData = textData.filter((text) => text.page === textIndex);
        const sortedTextData = newTextData.sort((a, b) => a.positionX - b.positionX);
        setFilteredTextData(sortedTextData);

        const newImgData = imageData.filter((img) => img.page === textIndex);
        setFilteredImgData(newImgData);
    }, [textIndex]);

    const nextClick = () => {
        if (textIndex === 28) {
            console.log('다음 페이지');
            ReactGA4.event({
                category: 'Intro Navigation',
                action: 'Intro Skipped',
                label: 'Intro Page Skipped'
            });
            navigate('/DefaultPage');
        } else {
            setTextIndex(textIndex + 1);
            console.log('하나 더');
            ReactGA4.event({
                category: 'Intro Navigation',
                action: `Intro Skipped ${textIndex}`,
                label: 'Intro Page Skipped'
            });
        }
    };

    const handleClick = () => {
        if (textIndex === 0) {
            console.log('첫 페이지');
        } else {
            setTextIndex(textIndex - 1);
            console.log('하나 덜');
        }
    };

    return (
        <StyledContainer>
            <BlinkDiv>
                {textIndex !== 0 && <FcPrevious onClick={handleClick} />}
            </BlinkDiv>
            <HookingBox>
                <TextContainer>
                    {filteredTextData.map((text, index) => (
                        <TextComponent key={index} text={text} />
                    ))}
                </TextContainer>
                <ImageContainer>
                    {filteredImgData.map((img, index) => (
                        <ImgComponent key={index} img={img} />
                    ))}
                </ImageContainer>
            </HookingBox>
            <BlinkDiv>
                <FcNext onClick={nextClick} />
            </BlinkDiv>
        </StyledContainer>
    );
};

export default IntroPage;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient( rgba(0, 0, 0, 0.1), 
  rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.55) ) ,url(${BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

const HookingBox = styled.div`
  width: 70%;
  height: 80vh;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
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
