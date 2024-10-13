import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { FormData } from "../../organisms/PersonalDetailsForm";
import { tableTypeMapping } from "../../../constants/stringConstants";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface SummaryProps {
  selectedDate: string | null;
  startTime: string | null;
  endTime: string | null;
  personalDetails: FormData;
  selectedTable: any;
  selectedMenuItems: any[];
}

const Summary: React.FC<SummaryProps> = ({
  selectedDate,
  startTime,
  endTime,
  personalDetails,
  selectedTable,
  selectedMenuItems,
}) => {
  const totalMenuCost = selectedMenuItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalBookingCost = selectedTable.price + totalMenuCost;

  // Custom style for left-right alignment
  const detailRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    marginLeft: "2px",
    textAlign: "left",
  };

  const iconStyle = { marginRight: "8px" };

  return (
    <Box sx={{ mt: 6, ml: 4 }}>
      <Box
        sx={{
          background: "linear-gradient(to right, orange, darkred)", // Use "background" instead of "backgroundColor"
          padding: 0.5, // Add some padding if needed to space around the text
          borderRadius: 2, // Optional: Add border radius for rounded corners
          display: "inline-block",
          paddingX: 2,
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 36,
            color: "#fff", // Set the text color to white or another color that works with the gradient
          }}
        >
          Rs.{totalBookingCost}.00
        </Typography>
      </Box>

      <Box
        sx={{
          maxHeight: "40vh",
          overflowY: "auto",
          pr: 3,
          border: "2px solid gray",
          pl: 2,
          pt: 1,
          pb: 1,
          borderRadius: 4,
          borderRight: "none",
        }}
      >
        {/* Date and Time Section */}
        <Typography sx={{ fontSize: 18 }}>Booking Details</Typography>
        <Box sx={detailRowStyle}>
          <CalendarMonthIcon sx={{ ...iconStyle, ml: 2 }} />

          <Typography>{selectedDate || "N/A"}</Typography>
        </Box>
        <Box sx={detailRowStyle}>
          <AccessTimeIcon sx={{ ...iconStyle, ml: 2 }} />

          <Typography>
            {startTime} - {endTime}
          </Typography>
        </Box>
        <Box sx={detailRowStyle}>
          <PersonIcon sx={{ ...iconStyle, ml: 2 }} />
          <Typography>
            {personalDetails.firstName} {personalDetails.lastName}
          </Typography>
        </Box>
        <Box sx={detailRowStyle}>
          <LocalPhoneIcon sx={{ ...iconStyle, ml: 2 }} />
          <Typography>{personalDetails.phoneNumber}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Table Details Section */}
        <Typography sx={{ fontSize: 18 }}>Table Details</Typography>
        {selectedTable ? (
          <Box>
            <Box sx={detailRowStyle}>
              <Typography sx={{ ml: 2 }}>Table Number</Typography>
              <Typography>{selectedTable.id}</Typography>
            </Box>
            <Box sx={detailRowStyle}>
              <Typography sx={{ ml: 2 }}>No of Chairs</Typography>
              <Typography>{selectedTable.chairs}</Typography>
            </Box>
            <Box sx={detailRowStyle}>
              <Typography sx={{ ml: 2 }}>No of People</Typography>
              <Typography>{personalDetails.numberOfPeople}</Typography>
            </Box>
            <Box sx={detailRowStyle}>
              <Typography sx={{ ml: 2 }}>Table Type</Typography>
              <Typography>
                {
                  tableTypeMapping[
                    selectedTable.type as keyof typeof tableTypeMapping
                  ]
                }
              </Typography>
            </Box>

            <Box sx={detailRowStyle}>
              <LocalOfferIcon sx={{ ...iconStyle, ml: 2 }} />

              <Typography>Rs.{selectedTable.price}.00</Typography>
            </Box>
          </Box>
        ) : (
          <Typography>No table selected.</Typography>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Selected Menu Items Section */}
        <Typography sx={{ fontSize: 18 }}>Food Items Details</Typography>
        {selectedMenuItems.length > 0 ? (
          selectedMenuItems.map((item, index) => (
            <Box key={index} sx={detailRowStyle}>
              <Typography sx={{ ml: 2 }}>{item.name} </Typography>
              <Typography>{item.quantity}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No menu items selected.</Typography>
        )}
        {selectedMenuItems.length > 0 && (
          <Box sx={detailRowStyle}>
            <LocalOfferIcon sx={{ ...iconStyle, ml: 2 }} />

            <Typography>Rs.{totalMenuCost}.00</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Summary;
