import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue, displayTextWidth } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const displayedValueWidth = displayTextWidth(displayedValue, '1rem Roboto');

  const DownArrow = styled(Icon)`
   display: inline-block;
   position: relative;
   pointer-events: none;
   left: -33px;
   top: 6px;

  `;

  const StyledSelect = styled.select`
    width: var(--width);
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    color: currentColor;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2rem;
    border: none;
    padding: 12px 52px 12px 16px;
    appearance: none;
    box-sizing: content-box;
  `;

  const Wrapper = styled.div`
    color: ${COLORS.gray700};
    width: min-content;
    white-space: nowrap;

    &:hover{
      color: ${COLORS.black}
    }
  `;

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange} style={{'--width': displayedValueWidth + 'px'}}>
        {children}
      </StyledSelect>
      <DownArrow size="23" id="chevron-down" strokeWidth="2" />
    </Wrapper>
  );
};

export default Select;
