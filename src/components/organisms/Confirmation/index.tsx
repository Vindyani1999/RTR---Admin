import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../atoms/CustomButton"; // Assuming you have a custom button component
import { useNavigate } from "react-router-dom";
import confirmVideo from "../../../assets/icons/Confirmation/confirm.mp4"; // Import the edited local video file

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null); // Create a reference for the video element

  const handleBackToHome = () => {
    navigate("/"); // Navigate back to home when called
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play(); // Start playing the video after 3 seconds
        videoRef.current.playbackRate = 0.5; // Set playback speed to 0.5
      }
    }, 3000); // Wait for 3 seconds before starting the video

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []); // Run effect once on mount

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "61vh",
        padding: 3,
      }}
    >
      {/* Video Box */}
      <Box
        sx={{
          width: "400px", // Adjust width as needed
          height: "240px", // Set a specific height for cropping
          position: "relative",
          overflow: "hidden", // Crop the video if it's too large
          borderRadius: 2, // Optional: adds rounded corners
        }}
      >
        <video
          ref={videoRef} // Set the ref for the video element
          src={confirmVideo} // Path to your video file
          muted // Mute the video for autoplay
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Crop the content to fit the container
          }}
          controls={false} // Hide controls if not needed
        />
      </Box>

      <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
        Your Reservation is Successful!
      </Typography>

      <Typography variant="body1" sx={{ mt: 1 }}>
        Thank you for your reservation. A receipt has been generated. Please
        bring it when you visit.
      </Typography>

      <Box sx={{ mt: 1 }}>
        <CustomButton label="Back to Home" onClick={handleBackToHome} />
      </Box>
    </Box>
  );
};

export default ConfirmationPage;
