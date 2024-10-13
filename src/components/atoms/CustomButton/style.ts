import styled from "styled-components";

export const CustomButtonStyled = styled.button`
  background: white; /* Set the background to white */
  border: 2px solid transparent; /* Create a transparent border initially */
  border-radius: 5px;
  padding: 10px 20px;
  color: darkred; /* Change text color to match the gradient */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: auto; /* Adjust width based on content */
  white-space: nowrap; /* Prevent the text from wrapping */

  background-clip: padding-box; /* Ensures the gradient doesn't cover the padding area */
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    background: linear-gradient(45deg, orange, darkred); /* Gradient border */
    border-radius: 7px; /* Match the radius with the button */
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
`;
