import theme from "../../../theme/theme";
import { SxProps } from "@mui/system";

const bgColor = theme.palette.secondary.dark;

export const sliderImageStyle: SxProps = {
  objectFit: "fill",
  opacity: 0.8,
};

export const homePageContainer: SxProps = {
  position: "relative",
  backgroundColor: bgColor,
};
