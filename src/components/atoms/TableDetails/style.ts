import { keyframes } from "@mui/system";

// Define the slideIn animation
export const slideIn = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;
