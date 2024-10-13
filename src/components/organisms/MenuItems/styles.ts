import { keyframes } from "@emotion/react";

export const bounceIn = keyframes`
  0% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  30% {
    transform: scale(1.2);
    animation-timing-function: ease-out;
  }
  50% {
    transform: scale(0.9);
    animation-timing-function: ease-in;
  }
  70% {
    transform: scale(1.1);
    animation-timing-function: ease-out;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

export const mainContainer = {
  display: "flex",
  flexDirection: "row",
  pl: 3,
  mt: 10,
};

export const cartIconStyle = {
  fontSize: 50,
  position: "absolute",
  top: 710,
  left: 40,
  zIndex: 10,
  cursor: "pointer",
  stroke: "black",
  strokeWidth: 0.5,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent", // To ensure the original color doesn't interfere
  "& path": {
    fill: "url(#gradient1)", // Apply the gradient to the SVG path
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 0px 10px 5px rgba(255, 165, 0, 0.5)", // Shine effect
    zIndex: -1,
    // Apply bounce animation when bounce is true
  },
};

export const cartContainer = {
  position: "absolute",
  width: "20%",
  p: 2,
  border: "2px solid gray",
  borderRadius: 4,
  maxHeight: "40vh",
  overflowY: "auto",
  zIndex: 1,
  backgroundColor: "white",
  bottom: 300,
};

export const cartRow = {
  display: "flex",
  alignItems: "center",
  p: 1,
  borderBottom: "1px solid lightgray",
};

export const cartImage = {
  width: 35,
  height: 35,
  borderRadius: "50%",
  objectFit: "cover",
  mr: 2,
};

export const quantityIcon = {
  fontSize: 14,
  bgcolor: "orange",
  borderRadius: "50%",
  padding: "1px",
};

export const menuItemContainer = {
  width: "75%",
  overflowY: "auto",
  height: "50vh",
};

export const filterContainer = {
  width: "20%",
  mx: 2,
  p: "20px 20px 20px 20px",
  border: "2px solid red",
  borderRadius: 4,
  height: "40vh",
};

export const searchbarStyle = {
  mb: 2,
  height: "40px",
  borderRadius: "12px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      borderRadius: "12px",
    },
    "&:hover fieldset": {
      borderColor: "orange",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 12px",
    textAlign: "center",
  },
  "& .MuiInputBase-input::placeholder": {
    textAlign: "center",
  },
};

export const sliderStyle = {
  mb: 2,
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.2)",
    border: "2px solid orange",
    backgroundColor: "orange",
    borderRadius: "50%",
  },
  "& .MuiSlider-track": {
    background: "linear-gradient(to right, orange, red)",
    borderColor: "transparent",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#f11818aa",
  },
};

export const categoryCeckbox = {
  "&.Mui-checked": {
    color: "transparent",

    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "40%",
      height: "40%",
      border: "2.5px solid #363431",
      background: "linear-gradient(to right, orange, red)",
      borderRadius: "15%",
      opacity: 0.7,
      fontSize: "0.7rem",
    },
    "&:after": {
      content: '"✓"',
      position: "absolute",
      color: "#fff",
      fontSize: "0.7rem",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      fontWeight: "bold",
    },
  },
  position: "relative",
  pl: -1,
};

export const categoryLable = {
  "& .MuiFormControlLabel-label": {
    fontSize: 12,
  },
};
