
import styled from 'styled-components';
import ImageMap from "image-map"
import { useRef,useEffect } from 'react';

const MapLink = () => {

    useEffect(() => { 
        ImageMap('img[usemap]') //ImageMap 삽입코드
    }, [])

    const clickHandler = (titile) => {
        alert("현재 준비 중입니다😁")
    }

  return (
    <BackGroundSrc imagePath={"MapBack.png"}>
        <MapLinkContainer>
            <Title>팔랑크스 훈련지도</Title>
            <Txt>보고 싶은 훈련 지도를 클릭!</Txt>
            
            <MapContainer>
            <Mapimg
                ProfilePicture
                src={`${process.env.PUBLIC_URL}/imgData/Map2.png`}
                alt="팔랑크스 훈련지도"
                useMap="#image-map"/>
                    <map name='image-map'>
                        <area onClick={() => clickHandler('클럽 온보딩')} target="_self" alt="클럽온보딩" title="클럽온보딩" 
                        href="" coords="311,326,37,208" shape="rect"></area>
                        <area  target="_self" alt="중앙 활동" title="중앙 활동" 
                        href="/CenturionPage" coords="196,478,454,627" shape="rect"></area>
                        <area  target="_self" alt="세부 활동" title="세부 활동" 
                        href="/DetailPage" coords="785,453,1058,590" shape="rect"></area>
                        <area  target="_self" alt="특별 활동" title="특별 활동" 
                        href="/SpecialPage" coords="695,744,965,870" shape="rect"></area>
                        <area  target="_self" alt="졸업" title="졸업" 
                        href="/DirectingPage" coords="98,909,380,1052" shape="rect"></area>
                        <area onClick={() => clickHandler('감독')} target="_self" alt="감독" title="감독" 
                        href="" coords="704,85,984,224" shape="rect"></area>
                    </map>
            </MapContainer> 
        </MapLinkContainer>
    </BackGroundSrc>
    
  );
};

export default MapLink;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.8), 
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

const Title=styled.h1`
    color:white;
    font-size:9vmin;
    font-family:'워헤븐';
`

const MapLinkContainer=styled.div`
    width :92%;
    height : auto;
    display : flex;
    flex-flow: column wrap;
    justify-content :center;
    align-items : center;
    margin: 25vh 0vw 3vh 0vw;
`

const MapContainer=styled.div`
    width :100%;
    height :auto;

`
const Mapimg=styled.img`
    width :100%;
    height :auto;
`

const Txt = styled.p`
    font-size:7vmin;
    color : white;
    font-family:'스윗';
    margin: 6vh 0vw 3vh 0vw;
`