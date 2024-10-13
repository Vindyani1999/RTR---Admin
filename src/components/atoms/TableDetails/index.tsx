import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { tableTypeMapping } from "../../../constants/stringConstants";
import { slideIn } from "./style";

// Define the type for the selected table object
interface SelectedTable {
  id: string;
  chairs: number;
  status: string;
  type: string;
  price: number;
}

// Define the props interface for TableDetails
interface TableDetailsProps {
  selectedTable: SelectedTable;
}

const TableDetails: React.FC<TableDetailsProps> = ({ selectedTable }) => {
  return (
    // Outer Box to apply gradient border using background and padding trick
    <Box
      sx={{
        padding: "4px", // Space for the gradient border
        background: "linear-gradient(45deg, orange, darkred)", // Gradient border
        borderRadius: "10px", // Rounded border
        display: "inline-block", // Ensure the inner box remains constrained
        mt: 15,
        animation: `${slideIn} 0.5s ease-out`,
        width: 400,
      }}
    >
      {/* Inner Box for content with solid background */}
      <Box
        sx={{
          backgroundColor: "#f9f9f9", // Inner box background
          borderRadius: "8px", // Inner box border radius to align with outer
          padding: "16px", // Padding inside the inner box
          animation: `${slideIn} 0.5s ease-out`,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Raleway, sans-serif",
            fontWeight: "bold",
            mt: 1,
          }}
        >
          Table Details
        </Typography>
        <Divider sx={{ my: 1, border: "1px solid orange" }} />

        {/* Table No */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            Table No:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            {selectedTable.id}
          </Typography>
        </Box>

        {/* No of Chairs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            No of Chairs:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            {selectedTable.chairs}
          </Typography>
        </Box>

        {/* Booking Status */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            Booking Status:
          </Typography>
          <Box
            sx={{
              border:
                selectedTable.status === "Seated"
                  ? "1px solid red"
                  : "1px solid green",
              backgroundColor:
                selectedTable.status === "Seated"
                  ? "rgba(206, 31, 22, 0.2)"
                  : "rgba(0, 128, 0, 0.2)",
              borderRadius: 2,
              padding: "0px 10px",
              width: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "bold",
              }}
            >
              {selectedTable.status}
            </Typography>
          </Box>
        </Box>

        {/* Table Type */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            Table Type:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            {
              tableTypeMapping[
                selectedTable.type as keyof typeof tableTypeMapping
              ]
            }
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            Price:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "bold",
            }}
          >
            Rs.${selectedTable.price}.00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TableDetails;
