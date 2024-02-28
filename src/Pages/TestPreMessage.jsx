import React from 'react';
import { StyledContainer,SectionBlock, BackGroundSrc, HannaTxt, GrenBlock} from '../components/common/GlobalStyle';
import styled from 'styled-components';


const TestPreMessage = () => {
  return (
    <StyledContainer >
      <BackGroundSrc imagePath={"PreBack1.png"}>
         <SectionBlock>

          <HannaTxt>
            전국대학연합, 기획/컨설팅 동아리<br/>
            클럽 팔랑크스
          </HannaTxt>
          <HannaTxt>널 위해 준비했어</HannaTxt>

        </SectionBlock>
      </BackGroundSrc>
      <GrenBlock>
        <HannaTxt>
            기획/컨설팅 분야의 꿈을 키우는 당신이<br/>
            지금껏 이렇게 기획해왔다면
          </HannaTxt>
          
      </GrenBlock>
        

      <BackGroundSrc imagePath={"PassBack4.png"}>
         <SectionBlock>

         <HannaTxt>
          ...왜 이걸 이렇게 하냐?<br/>
          이렇게 하면 더 괜찮을 것 같은데<br/>
          어? 이거를 이렇게 바꾸면 더 좋을 것 같은데<br/>
          여기에는 빨간색보다 파랑색이 이쁘지</HannaTxt>
          <HannaTxt>여태껏 너가 해온 ‘기획’ 이 <br/>이런 것이라면, </HannaTxt>
          <HannaTxt>미안하지만.. <br/>
          이건 그냥 그대의 ‘상상’ 이고, ‘취향’ 입니다.</HannaTxt>

        </SectionBlock>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PassBack4.png"}>
         <SectionBlock>

         
          <HannaTxt>팔랑크스에서는 <br/>이런 기획자는 원하지 않습니다.</HannaTxt>

        </SectionBlock>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PassBack4.png"}>
         <SectionBlock>

         
          <HannaTxt>기획이라는 것은, <br/>사실 그 ‘방법과 단계’ 가 있다는 것</HannaTxt>
          <HannaTxt>그것을 모른다면</HannaTxt>
          <HannaTxt>아니 만약 <br/>당신이 ‘기획’ 의 천재라서,</HannaTxt>
          <HannaTxt>그래서 기획의 방법 따윈 <br/>개나 줘버리라고 한다면</HannaTxt>

        </SectionBlock>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PassBack4.png"}>
         <SectionBlock>

          <HannaTxt>안녕히 가십시오</HannaTxt>

        </SectionBlock>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PassBack4.png"}>
         <SectionBlock>

          <HannaTxt>
            하지만 만약, 당신이<br/>
            기획의 방법과 구조를 알고 싶다면<br/>
            <br/>
            실무에서 사용되는 기획의 단계를<br/>
            미리 엿보고 싶다면<br/>
          </HannaTxt>

        </SectionBlock>
      </BackGroundSrc>
    </StyledContainer>
    
  );
};

export default TestPreMessage;

