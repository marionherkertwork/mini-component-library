import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: { iconSize: 16, fontSize: 14 / 16, borderSize: 1, height: 24 },
  large: { iconSize: 22, fontSize: 18 / 16, borderSize: 2, height: 36 },
};

const TextInput = styled.input`
  appearance: none;
  outline-offset: 2px;
  border: none;
  border-bottom: var(--borderSize) solid ${COLORS.black};
  display: inline-block;
  width: var(--width);
  height: var(--height);
  font-size: var(--fontSize);
  padding-left: var(--height);

  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0em;
  text-align: left;
  color: inherit;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0em;
    text-align: left;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const currentStyle = STYLES[size];
  return (
    <Wrapper
    >
      <VisuallyHidden>
        <label for="icon-input">{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{ "--size": currentStyle["iconSize"] + "px" }}>
        <Icon
          id={icon}
          strokeWidth={currentStyle["borderSize"]}
          size={currentStyle["iconSize"]}
        />
      </IconWrapper>
      <TextInput
        type={icon === "at-sign" ? "email" : "text"}
        id="icon-input"
        placeholder={placeholder}
        style={{
          "--iconSize": currentStyle["iconSize"] + "px",
          "--fontSize": currentStyle["fontSize"] + "rem",
          "--height": currentStyle["height"] + "px",
          "--width": width + "px",
          "--borderSize": currentStyle["borderSize"] + "px",
        }}
      />
    </Wrapper>
  );
};

export default IconInput;
