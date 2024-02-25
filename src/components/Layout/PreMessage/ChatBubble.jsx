import React from 'react';
import { SectionBlock,HannaTxt } from '../../common/GlobalStyle';
import styled from 'styled-components';



const ChatBubble = () => {
  return (
    <SectionBlock >
   
      <TalkBubble>
        <HannaTxt>기획이 뭐야?</HannaTxt>
      </TalkBubble>
    </SectionBlock>
  );
};

export default ChatBubble;


const TalkBubble = styled.div`
  z-index :100;
  position: relative;
  width: 60%;
  height: 250px;
  background: linear-gradient( #01DF01 , #006633);// 칸을 나눔
  color: white;
  border-radius: 15px;
  padding: 12px 12.8px;
  margin-bottom:60px; /* example 간격을 위해 넣음  */

  //after은 말풍선 꼬리를 위해 만듦
  &:after {
    border-top: 50px solid #006633;//말풍선 길이
    border-left: 0px solid transparent;
    border-right: 40px solid transparent; //말풍선 너비 조정
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 95%;//말풍선 꼬리 위치 조정(width+90px)
    left: 10%;//말풍선 꼬리 위치 조정
    border-radius: 5px;
  }
  
`;


const TalkBubble2 = styled.div`
  z-index :100;
  position: relative;
  width:  80%;
  height: auto;
  background: linear-gradient( #01DF01 , #006633);// 칸을 나눔
  color: white;
  border-radius: 20px;
  padding: 12px 12.8px;
  margin-bottom:60px; /* example 간격을 위해 넣음  */

  //after은 말풍선 꼬리를 위해 만듦
  &:after {
    border-top: 30px solid #006633;//말풍선 길이
    border-left: 15px solid transparent;
    border-right:  0px solid transparent; //말풍선 너비 조정
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 90%;//말풍선 꼬리 위치 조정(width+90px)
    left: 90%;//말풍선 꼬리 위치 조정
    border-radius: 20px;
  }
`;