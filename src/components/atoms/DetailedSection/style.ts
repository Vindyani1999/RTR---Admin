import { SxProps } from "@mui/material";

export const mainContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  pt: { xs: 2, sm: 1, md: 2, xl: 3 },
  pb: { xs: 2, sm: 1, md: 2, xl: 3 },
  bgcolor: "transparent",
};

export const mainDetailedContainer: SxProps = {
  justifyContent: "center",
  boxSizing: "border-box",
  overflow: "hidden",
};

export const textContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: { lg: "60%", xl: "70%" }, // Adjust the width of the text column
  justifyContent: "center",
  overflow: "hidden",
};

export const imageContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: { lg: "40%", xl: "30%" }, // Adjust the width of the image column
  justifyContent: "center",
  alignItems: "center", // Center the image within the column
  boxSizing: "border-box",
  overflow: "hidden",
};

export const descriptionTextContainer: SxProps = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  pl: { xs: 2, sm: 3, md: 5, lg: 4, xl: 5 },
  ml: { xs: 1, sm: 2, md: 8, lg: 7, xl: 10 },
  borderLeft: "4px solid orange",
  boxSizing: "border-box",
  pr: { xs: 0, sm: 3, md: 3, lg: 4, xl: 6 },
  overflow: "hidden",
};

export const titleText: SxProps = {
  fontWeight: "bold",
  fontSize: { xs: "1.2rem", sm: "2rem", md: "2.5rem" },
  marginBottom: "5px",
  textAlign: "center",
  fontFamily: "Raleway, sans-serif",
};

export const descriptionText: SxProps = {
  fontSize: { xs: "0.6rem", sm: "1rem", md: "1.2rem", xl: "1.5rem" },
  marginBottom: "20px",
  textAlign: "justify",
};

export const rotateIcon: SxProps = {
  transform: "rotate(180deg)",
  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
  marginBottom: "10px",
  alignSelf: "flex-start",
};

export const iconStyle: SxProps = {
  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
  marginTop: "5px",
  alignSelf: "flex-end",
};

export const imageStyles: SxProps = {
  width: "100%", // Ensures the image takes full width of the container
  maxWidth: { xs: "120px", sm: "200px", md: "350px", lg: "380px", xl: "500px" }, // Max width to control size
  height: "auto", // Maintain aspect ratio
  objectFit: "cover",
  mx: "auto",
  pt: { xs: 2, sm: 2, md: 4, lg: 5, xl: 5 },
  pb: { xs: 2, sm: 2, md: 4, lg: 5, xl: 5 },
};
