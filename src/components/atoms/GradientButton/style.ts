// atoms/GradientButton/style.ts
import styled from "styled-components";

export const GradientButtonStyled = styled.button`
  background: linear-gradient(45deg, orange, darkred);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: auto; /* Adjust width based on content */
  white-space: nowrap; /* Prevent the text from wrapping */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
`;
