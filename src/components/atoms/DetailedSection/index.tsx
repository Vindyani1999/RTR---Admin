import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  descriptionText,
  descriptionTextContainer,
  iconStyle,
  imageStyles,
  mainContainer,
  mainDetailedContainer,
  rotateIcon,
  textContainer,
  titleText,
} from "./style";

interface DetailedSectionProps {
  titleFront: string;
  titleBack: string;
  description: string;
  imageUrl: string;
  isFlipped: boolean; // New prop for flipping
}

const DetailedSection: React.FC<DetailedSectionProps> = ({
  titleFront,
  titleBack,
  description,
  imageUrl,
  isFlipped,
}) => {
  return (
    <Box sx={mainDetailedContainer}>
      <Box
        sx={{
          ...mainContainer,
          flexDirection: isFlipped ? "row-reverse" : "row", // Conditionally set flex direction
        }}
      >
        <Box sx={textContainer}>
          <Box
            sx={{
              display: "flex", // Use flexbox for alignment
              alignItems: "center", // Align items vertically centered
              ml: isFlipped ? 0 : { xs: 3, sm: 5, md: 8, lg: 10, xl: 10 },
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                ...titleText,
              }}
            >
              {titleFront}
            </Typography>
            <Typography sx={{ mx: 1 }} />

            <Typography
              sx={{
                ...titleText,

                backgroundImage: "linear-gradient(to right, orange, darkred)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
              }}
            >
              {titleBack}
            </Typography>
          </Box>

          <Container maxWidth="lg">
            <Box
              sx={{
                ...descriptionTextContainer,
                borderLeft: isFlipped ? "0px solid orange" : "4px solid orange",
                borderRight: isFlipped
                  ? "4px solid orange"
                  : "0px solid orange",
                pr: isFlipped
                  ? { xs: 2, sm: 3, md: 5, lg: 4, xl: 5 }
                  : { xs: 1, sm: 2, md: 3, lg: 4, xl: 7 },
                pl: isFlipped
                  ? { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }
                  : { xs: 2, sm: 3, md: 5, lg: 4, xl: 5 },
                mr: isFlipped ? { xs: 1, sm: 2, md: 8, lg: 7, xl: 8 } : 0,
                ml: isFlipped
                  ? { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }
                  : { xs: 1, sm: 2, md: 8, lg: 7, xl: 7 },
              }}
            >
              <FormatQuoteIcon sx={rotateIcon} />
              <Typography sx={descriptionText}>{description}</Typography>
              <FormatQuoteIcon sx={iconStyle} />
            </Box>
          </Container>
        </Box>

        <Box
          component="img"
          src={imageUrl}
          alt="Detailed"
          sx={{
            ...imageStyles,
            mr: isFlipped ? 0 : { xs: 1, sm: 2, md: 2, lg: 4, xl: 5 },
            ml: isFlipped ? { xs: 1, sm: 2, md: 2, lg: 4, xl: 8 } : 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default DetailedSection;
