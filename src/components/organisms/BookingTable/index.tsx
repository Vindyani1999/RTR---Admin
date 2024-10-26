import React, { useState } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  FormControlLabel,
  Box,
  Button,
  Popover,
} from "@mui/material";
import { tableData } from "./mockData";
import SearchBar from "../../atoms/SearchBar";

const BookingsTable = () => {
  // State to manage which columns are visible
  const [visibleColumns, setVisibleColumns] = useState({
    tableNumber: false,
    tableType: false,
    numPeople: false,
    numChairs: false,
    tablePrice: false,
    menuItems: false,
    totalMenuPrice: false,
    finalAmount: false,
  });

  // State to manage the popover open/close
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const handleColumnToggle = (column: keyof typeof visibleColumns) => {
    setVisibleColumns((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
          padding: "10px 0", // Adjust padding as necessary
        }}
      >
        <h2>Current Bookings</h2>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "end",
          }}
        >
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </Box>

        <Box sx={{ textAlign: "end", mr: 5 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            aria-describedby={id}
          >
            View Columns
          </Button>
        </Box>
      </Box>

      {/* Popover for column checkboxes */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          maxWidth: "xs",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          p={2}
          sx={{ fontSize: 12, display: "flex", flexDirection: "column" }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.tableNumber}
                onChange={() => handleColumnToggle("tableNumber")}
              />
            }
            label="Table No"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.tableType}
                onChange={() => handleColumnToggle("tableType")}
              />
            }
            label="Table Type"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.numPeople}
                onChange={() => handleColumnToggle("numPeople")}
              />
            }
            label="No of People"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.numChairs}
                onChange={() => handleColumnToggle("numChairs")}
              />
            }
            label="No of Chairs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.tablePrice}
                onChange={() => handleColumnToggle("tablePrice")}
              />
            }
            label="Table Price"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.menuItems}
                onChange={() => handleColumnToggle("menuItems")}
              />
            }
            label="Menu Items"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.totalMenuPrice}
                onChange={() => handleColumnToggle("totalMenuPrice")}
              />
            }
            label="Menu Price"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={visibleColumns.finalAmount}
                onChange={() => handleColumnToggle("finalAmount")}
              />
            }
            label="Final Amount"
          />
        </Box>
      </Popover>

      {/* Scrollable Table */}
      <Box
        sx={{
          flex: 1,

          maxHeight: "580px",
          overflowY: "auto",
        }}
      >
        <Table sx={{ borderCollapse: "collapse", tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  border: "1px solid black",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#8b8a8a",
                  zIndex: 1,
                }}
              >
                No
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#8b8a8a",
                  zIndex: 1,
                }}
              >
                Booking Date
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#8b8a8a",
                  zIndex: 1,
                }}
              >
                Booking Time Slot
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#8b8a8a",
                  zIndex: 1,
                }}
              >
                Person Name
              </TableCell>

              {visibleColumns.tableNumber && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  Table Number
                </TableCell>
              )}
              {visibleColumns.tableType && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  Table Type
                </TableCell>
              )}
              {visibleColumns.numPeople && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  No. of People
                </TableCell>
              )}
              {visibleColumns.numChairs && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  No. of Chairs
                </TableCell>
              )}
              {visibleColumns.tablePrice && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  Table Price
                </TableCell>
              )}
              {visibleColumns.menuItems && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  Menu Items
                </TableCell>
              )}
              {visibleColumns.totalMenuPrice && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  Total Menu Price
                </TableCell>
              )}
              {visibleColumns.finalAmount && (
                <TableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#8b8a8a",
                    zIndex: 1,
                  }}
                >
                  Final Amount
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: "1px solid black" }}>
                  {index + 1}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {row.date}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {row.timeSlot}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {row.name}
                </TableCell>

                {visibleColumns.tableNumber && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.tableNumber}
                  </TableCell>
                )}
                {visibleColumns.tableType && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.tableType}
                  </TableCell>
                )}
                {visibleColumns.numPeople && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.numPeople}
                  </TableCell>
                )}
                {visibleColumns.numChairs && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.numChairs}
                  </TableCell>
                )}
                {visibleColumns.tablePrice && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.tablePrice}
                  </TableCell>
                )}
                {visibleColumns.menuItems && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {Array.isArray(row.menuItems)
                      ? row.menuItems.join(", ")
                      : row.menuItems}
                  </TableCell>
                )}
                {visibleColumns.totalMenuPrice && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.totalMenuPrice}
                  </TableCell>
                )}
                {visibleColumns.finalAmount && (
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.finalAmount}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default BookingsTable;
