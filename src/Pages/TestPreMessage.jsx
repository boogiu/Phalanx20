import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  color : white;
  position : relative;
`;

const Door= styled.div`
  width: 70%;
  height: 80%;
  background-color: green;
  display: flex;
  align-items: center;
  overflow: hidden;
  color : white;
  position : absolute;
  top : 50;
  left : 50;
`;

const DoorShadow= styled.div`
  width: 70%;
  height: 80%;
  background-color: green;
  display: flex;
  align-items: center;
  overflow: hidden;
  color : white;
  position : absolute;
  top : 50;
  left : 50;
  border-bottom: 36px solid #666666;
  border-left: 18px solid transparent;
  border-right: 48px solid transparent;
`;


const TestPreMessage = () => {
  return (
    <StyledContainer >
      <Door></Door>
      <DoorShadow></DoorShadow>
    </StyledContainer>
  );
};

export default TestPreMessage;


