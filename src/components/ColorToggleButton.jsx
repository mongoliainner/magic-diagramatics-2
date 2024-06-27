// src/components/ColorToggleButton.jsx
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
`;

const ColorToggleButton = ({ onClick }) => {
  return <Button onClick={onClick}>Toggle Text Color</Button>;
};

export default ColorToggleButton;
