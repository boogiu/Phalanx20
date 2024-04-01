import React, { useState, useEffect,useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { ImArrowDown ,ImBubbles2,ImRocket ,ImHeart,ImMagicWand,ImZoomIn,ImPencil2,ImBooks ,ImUserTie,ImPointUp        } from "react-icons/im";
import { Navigate, useNavigate } from 'react-router-dom';
import ReactGA4 from 'react-ga4';
import { GiClick } from "react-icons/gi";
const TestIntro = () => {
  const [waves, setWaves] = useState([]);
  const navigate = useNavigate();
  // 파도 자동 생성 상태
  const [isCreatingWave, setIsCreatingWave] = useState(false);

  // 파도 생성 함수
  const createWave = () => {
    setWaves((prevWaves) => [
      ...prevWaves,
      {
        // No need for x, y coordinates as waves are centered
      },
    ]);
  };

  // 파도 생성 간격(밀리초)
  const waveInterval = 1000; // 2초마다 파도 생성

  // 파도 자동 생성 토글
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCreatingWave) {
        setIsCreatingWave(true);
        createWave();
        setTimeout(() => {
          setIsCreatingWave(false);
          setWaves((prevWaves) => prevWaves.slice(0, -1));
        }, 550); // 파도 생성 후 0.5초 후에 파도 제거
      }
    }, waveInterval);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, [isCreatingWave, waveInterval]);


  const getBackgroundColor = (index) => {
    switch (index) {
      case 0:
        return '#58FA82'; // 예시: 첫 번째 블록은 파란색 배경
      case 1:
        return '#FFFFFF'; // 예시: 두 번째 블록은 빨간색 배경
      case 2:
        return '#FFFFFF'; // 예시: 두 번째 블록은 빨간색 배경
      case 3:
        return '#FFFFFF'; // 예시: 첫 번째 블록은 파란색 배경
      case 4:
        return '#FFFFFF'; // 예시: 두 번째 블록은 빨간색 배경
      case 5:
        return '#FFFFFF'; // 예시: 두 번째 블록은 빨간색 배경
      case 6:
        return '#FFFFFF'; // 예시: 두 번째 블록은 빨간색 배경\
      case 7:
        return '#FFFFFF'; // 예시: 두 번째 블록은 빨간색 배경
      case 8:
        return 'transparent'; // 예시: 두 번째 블록은 빨간색 배경
      // 이하 추가적인 케이스에 대한 처리
      default:
        return 'green'; // 기본값으로 초록색 배경
    }
  };
  const NavigateTO = (url) => {
    navigate(url);
    ReactGA4.event({
      category: 'User Interaction',
      action: 'GoTo Click',
      label: `Clicked 3rd ID: ${url}`,
    });
    ReactGA4.event({
      category: 'User Interaction',
      action: '3rd IntroSkip',
      label: `Clicked Element ID: ${url}`,
    });
  };
  const gotoLink = (link) => {
    console.log("링크로 갑니다!", link);
    window.location.href = link; // 링크로 이동
    ReactGA4.event({
      category: 'User Interaction',
      action: '3rd IntroSkip',
      label: `Clicked 3rd ID: ${link}`,
    });
  };
  const getBlockContent = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            <Icon>
              <ImHeart />
              <SmallTxt>동아리 소개</SmallTxt>
            </Icon>
            <Txt>팔랑크스의 <br/>소개를 볼래요!</Txt>
            <Btn onClick={() => NavigateTO('/DefaultPage')}>궁금해요!</Btn>
          </>
        );
      case 1:
        return (
          <>
            <Icon>
              <ImRocket  />
              <SmallTxt>훈련 지도</SmallTxt>
            </Icon>
            <Txt>팔랑크스의 <br/>훈련지도가 궁금해요!</Txt>
            <Btn onClick={() => gotoLink('https://abaft-faucet-515.notion.site/1b823d9452624d7285b496675a8aff9d')}>보러갈래요!</Btn>
          </>
        );
      case 2:
        return (
          <>
            <Icon>
              <ImMagicWand />
              <SmallTxt>기획 카페</SmallTxt>
            </Icon>
            <Txt>팔랑크스 크루들의 <br/>카페를 볼래요!</Txt>
            <Btn onClick={() => gotoLink('https://cafe.naver.com/phalanx')}>보러갈래요!</Btn>
          </>
        );
      case 3:
        return (
          <>
            <Icon>
              <ImBooks />
              <SmallTxt>세부팀 소개</SmallTxt>
            </Icon>
            <Txt>팔랑크스 팀들의 <br/>소개가 궁금해요!</Txt>
            <Btn onClick={() => gotoLink('https://cafe.naver.com/phalanx/menu/125')}>궁금해요!</Btn>
          </>
        );
      case 4:
        return (
          <>
            <Icon>
              <ImZoomIn />
              <SmallTxt>아카이빙</SmallTxt>
            </Icon>
            <Txt>팔랑크스 크루들의 <br/>활동이 궁금해요!</Txt>
            <Btn onClick={() => gotoLink('https://phalanx-club.tistory.com/category/%F0%9F%8F%86%EC%9A%B0%EC%88%98%20%EA%B2%B0%EA%B3%BC%20%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4')}>궁금해요!</Btn>
          </>
        );
      case 5:
        return (
          <>
            <Icon>
              <ImPencil2 />
              <SmallTxt>지원하기</SmallTxt>
            </Icon>
            <Txt>팔랑크스에 <br/>지원하고 싶어요!</Txt>
            <Btn onClick={() => gotoLink('https://forms.gle/qR34tcexPR4b5ByD6')}>지원하기!</Btn>
          </>
        );
      case 6:
        return (
          <>
            <Icon>
              <ImBubbles2 />
              <SmallTxt>FAQ</SmallTxt>
            </Icon>
            <Txt>팔랑크스에 <br/>물어보고 싶은 것이 <br/>있어요!</Txt>
            <Btn onClick={() => NavigateTO('/ETCPage')}>FAQ 보기!</Btn>
          </>
        );
      case 7:
        return (
          <>
            <Icon>
              <ImUserTie  />
              <SmallTxt>면접 안내</SmallTxt>
            </Icon>
            <Txt>서류 전형에 <br/> 합격이 되었습니다!</Txt>
            <Btn onClick={() => NavigateTO('/DocuPass')}>면접 안내 보기!</Btn>
          </>
        );
      case 8:
        return '';
      default:
        return 'green';
    }
  };
  const [isClicked, setIsClicked] = useState(false);
  const [subClickedIndex, setSubClickedIndex] = useState(null);
  const BlockRef = useRef(null);
  const SubBlockRef = useRef(null);


  const BlockOutSideClick = (e) => {
    if (BlockRef.current && !BlockRef.current.contains(e.target)) {
      setIsClicked(false);
      setSubClickedIndex(null);
    } else if (BlockRef.current && SubBlockRef.current && SubBlockRef.current.contains(e.target)) {
      handleSubClick();
    } else {
      handleClick();
    }
  };
  
  
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setSubClickedIndex(null);
    }
    
  };
  
  
  const handleSubClick = (index) => {
    if (index === 8) {
      setIsClicked(false);
      setSubClickedIndex(null);
    }
    else if( 0<=index && index<=7 ){
      if(index === subClickedIndex){
        setSubClickedIndex(null)
      }
      else if(index !== subClickedIndex){
        setSubClickedIndex(index)
      }
    }
  };

  return (
    <BackGroundSrc imagePath={"IntroB.png"} >
      <StyledContainer onClick={BlockOutSideClick}>
        <WellcomTxt>
          <p>기획/컨설팅 동아리</p>
          <p>전국대학연합 클럽</p>
          <Head> Phalanx</Head>
          <ImArrowDown />
        </WellcomTxt>
  
        {waves.map((wave, index) => (
          <Wave key={index} />
        ))}
        <SectionBlock>
          <Icon>
            <ClickIcon  />
          </Icon>
        </SectionBlock>
  
        <ClickableBlock 
          isClicked={isClicked} 
          ref={BlockRef}
        >
          {Array.from({ length: 9 }, (_, index) => (
            <InClickableBlock
              ref={SubBlockRef}
              key={index}
              top={index === 0 || index === 1 || index === 2 ? '20%' :  index === 8 || index === 3 || index === 4 ? '50%' : '80%'}
              left={index === 0 || index === 3 || index === 5 ? '20%' : index === 8 || index === 1 || index === 6 ? '50%' : '80%'}
              radius={index === 0 ? '50% 10% 10% 10%' : index===8||index === 1 ? '10% 10% 10% 10%' : index === 2 ? '10% 50% 10% 10%' : index === 3 ? '10% 10% 10% 10%' : index === 4 ? '10% 10% 10% 10%' : index === 5 ? '10% 10% 10% 50%' : index === 6 ? '10% 10% 10% 10%' : '10% 10% 50% 10%'}
              onClick={() => handleSubClick(index)}
              isSubClicked={subClickedIndex === index}
              isClicked={isClicked}
              back={getBackgroundColor(index)} // 각각의 블록에 대한 배경색 설정
            >
              {getBlockContent(index)}
            </InClickableBlock>
          ))}
  
        </ClickableBlock>
        <RecruitState>
          <GreenCirCle/><p>봄 시즌 리크루팅 종료</p>
        </RecruitState>
      </StyledContainer>
    </BackGroundSrc>
  );
}
export default TestIntro;




  
const Head = styled.h1`
font-family : "평창";
font-size :15vmin;
line-height : 150%;
font-style : italic;
color : #2EFE2E;
text-shadow: 3px 1px 0.5px rgba(136, 156, 139);
`   

const ClickIcon = styled(GiClick)`

font-size :10vmin;
animation: Blink 1.5s infinite;
  @keyframes Blink{

  50% { opacity: 0.6; }

}
`  

const StyledContainer = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow : column nowrap;
  position: relative;
  @media (max-width: 768px) { 
    height: 100vh;
  }

`;

const WellcomTxt = styled.div`
  font-family : "한나프로";
  font-size :8vmin;
  color : #fff;
  width: 100%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  justify-content: center;
  align-items: center;
  flex-flow : column nowrap;
  line-height : 150%;
`
const GreenCirCle = styled.div`
  width:3vmin;
  height:3vmin;
  background: #FF0000;
  border-radius: 50%;
  margin : 10px;
`;
const RecruitState = styled.div`
  font-family : "한나프로";
  font-size :8vmin;
  color : #FF0000;
  width: 100%;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display : flex;
  justify-content: center;
  align-items: center;
  flex-flow : row wrap;
  @keyframes Blink{

  50% { opacity: 0.6; }

}
`
const ClickableBlock = styled.div`
  width: 20vmin;
  height: 20vmin;
  background: transparent;
  opacity: 0;
  position: absolute;
  color :white;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all ease 0.5s;
  ${({ isClicked }) =>
  isClicked &&
  `
  width: 80vmin;
  height: 80vmin;
  opacity: 1;
  top: 50%;
  left: 50%;
  border-radius: 0%;
  transform: translateX(-50%) translateY(-50%);
`}
`;
const Txt = styled.span`
  font-family : "한나프로";
  transition: all ease 1s;

`
const Icon = styled.span`
  font-family : "한나프로";
  transition: all ease 1s;
  font-size :6vmin;
  justify-content: center;
  align-items: center;
  flex-flow : column nowrap;
`
const SmallTxt = styled.p`
  font-family : "한나프로";
  transition: all ease 1s;
  font-size :3vmin;
`
const Btn = styled.button`
  border: none;
  color: black;
  padding: 10px 10px;
  font-size: 5vmin;
  font-family : '한나';
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin : 15%;
  box-shadow: 0px 4px 0px 0px #01DF3A;
  background: linear-gradient(45deg, #01DF3A, #00FF40);
  width : 60%;
  display : flex;
  justify-content: center;
  align-items: center;
  flex-flow : row wrap;
  text-align : center;
`
const InClickableBlock = styled.div`
  width: 15vmin;
  height: 15vmin;
  opacity:0.8;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  transition: all ease 0.5s;
  border-radius: ${(props) => props.radius}; // props로 받은 radius 속성을 적용
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: ${(props) => props.back};
  z-index: 0; // 초기에는 다른 요소 위에 놓이지 않도록 z-index를 0으로 설정
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow : column nowrap;
  box-shadow: 0 2px 8px -1px #{rgba(#121621, .04)};
  pointer-events: none;
  > ${Txt} {
    // 버튼 텍스트에 대한 스타일
    color: black; // 텍스트 색상을 흰색으로 지정
    opacity: 0;
    display : none;
    font-size :0.1vmin;
  }
  > ${Icon} {
    color: black; // 텍스트 색상을 흰색으로 지정
    display : flex;
    pointer-events: none;
   
  }
  > ${Btn} {
    display : none;
  }

  ${({ isClicked }) =>
  isClicked &&
    `
    pointer-events: auto;
    `}
  ${({ isSubClicked }) =>
    isSubClicked &&
    `
    width: 60vmin;
    height: 60vmin;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
    z-index: 520; // 확대된 서브메뉴가 다른 요소 위에 올라오도록 z-index를 높게 설정
    > ${Txt} {
      display : flex;
      color: black; // 텍스트 색상을 흰색으로 지정
      opacity: 1;
      font-size :5vmin;
      
    }
    > ${Icon} {
      pointer-events: auto;
      > ${SmallTxt} {
        display : none;
      }
    }
    > ${Btn} {
      display : flex;
    }
   
    `}
`;


const ClickTxt = styled.p`
  font-family: "한나";
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const waveAnimation = keyframes`
  to {
    opacity: 0;
    transform: scale(1.5);
  }
`;
const SectionBlock = styled.div`
  width:20vmin;
  height:20vmin;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity:1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wave = styled.div`
  position: absolute;
  background: radial-gradient( #FFFFFF 10%, #2EFE2E 100px, #01DF01 50% );
  border-radius: 50%;
  width:20vmin;
  height: 20vmin;
  animation: ${waveAnimation} 0.5s linear;
  transform-origin: center;
  pointer-events: none;
  top: 50%;
  left: 50%;
  margin-top: -10vmin;
  margin-left: -10vmin;
  opacity:0.3;
`;
const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.75)
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

