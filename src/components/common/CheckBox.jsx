import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <CheckboxLabel>
        {label}
        <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
    display: flex;
    width :100%;
    height : 50px;
    background: linear-gradient(45deg, #ff7300, #feac5e);
    border: none;
    color: white;
    font-size: 5vmin;
    font-family : '스윗';
    border-radius: 25px;
    margin : 5% 0% 5% 0%;
    box-shadow: 0px 4px 0px 0px #ff7300;
    width : 90%;
    justify-content : center;'
    border : 2px solid red;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  /* 이 부분으로 실제 체크박스를 숨깁니다. */
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${(props) => (props.checked ? '#00FF7F' : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 8px;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export default Checkbox;
