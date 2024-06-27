import React from "react";
import styled from "styled-components";

const UploadButton = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  padding: 10px;
  box-sizing: border-box;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: 1px solid black;
  background-color: transparent;
  font-family: Arial;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;

const UploadImageButton = ({ onImageUpload }) => {
  return (
    <UploadLabel>
      Upload Background
      <UploadButton type="file" accept="image/*" onChange={onImageUpload} />
    </UploadLabel>
  );
};

export default UploadImageButton;
