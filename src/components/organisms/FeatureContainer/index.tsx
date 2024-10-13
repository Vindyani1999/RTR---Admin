import React from "react";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer"; // Import useInView
import DetailedSection from "../../atoms/DetailedSection";
import { featuresData } from "../../../constants/featuresData";
import { featureContainerStyle, animationStyles } from "./styles";

const FeaturePage: React.FC = () => {
  return (
    <Box sx={featureContainerStyle}>
      {featuresData.map((feature, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { ref, inView } = useInView({
          threshold: 0.1, // Trigger when 10% of the element is visible
          triggerOnce: true, // Trigger only once
        });

        // Choose the direction based on the index (even/odd)
        const animationStyle =
          index % 2 === 0
            ? animationStyles.hiddenLeft
            : animationStyles.hiddenRight;

        return (
          <Box
            ref={ref}
            key={index}
            sx={{
              ...(inView ? animationStyles.visible : animationStyle), // Apply visibility styles
              marginBottom: 4, // Add spacing between components
            }}
          >
            <DetailedSection
              titleFront={feature.titleFront}
              titleBack={feature.titleBack}
              description={feature.description}
              imageUrl={feature.imageUrl}
              isFlipped={feature.isFlipped} // Keep this if you still need it for other logic
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default FeaturePage;
