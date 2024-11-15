import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { fetchPastBookings } from "../../../redux/action/historyAction"; // Import correct action
import { RootState, AppDispatch } from "../../../redux/store";
import SearchBar from "../../atoms/SearchBar";

const BookingsTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const { pastBookings, loading, error } = useSelector(
    (state: RootState) => state.history // Ensure slice name matches bookingSlice
  );

  const [searchTerm, setSearchTerm] = useState("");
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    dispatch(fetchPastBookings()); // Dispatch action to fetch bookings
  }, [dispatch]);

  const filteredData = Array.isArray(pastBookings)
    ? pastBookings.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : [];

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

  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
          padding: "10px 0",
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700, ml: 3 }}>
          Past Bookings
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", textAlign: "end" }}
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

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ maxWidth: "xs", display: "flex", flexDirection: "column" }}
      >
        <Box
          p={2}
          sx={{ fontSize: 12, display: "flex", flexDirection: "column" }}
        >
          {Object.keys(visibleColumns).map((column) => (
            <FormControlLabel
              key={column}
              control={
                <Checkbox
                  checked={
                    visibleColumns[column as keyof typeof visibleColumns]
                  }
                  onChange={() =>
                    handleColumnToggle(column as keyof typeof visibleColumns)
                  }
                />
              }
              label={column.replace(/([A-Z])/g, " $1").toUpperCase()}
            />
          ))}
        </Box>
      </Popover>

      <Box sx={{ flex: 1, maxHeight: "580px", overflowY: "auto" }}>
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
                  width: "30px",
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
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={100} sx={{ textAlign: "center" }}>
                  Loading...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={100} sx={{ textAlign: "center" }}>
                  Error: {error}
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid black" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.selectedDate}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.startTime} - {row.endTime}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.firstName} {row.lastName}
                  </TableCell>

                  <TableCell sx={{ border: "1px solid black" }}>
                    {row.tableNumber}
                  </TableCell>

                  <TableCell sx={{ border: "1px solid black" }}>
                    {(row.cartItems
                      ? row.cartItems.reduce(
                          (total: any, item: any) =>
                            total + item.quantity * item.price,
                          0
                        )
                      : 0) + (row.tablePrice || 0)}
                  </TableCell>

                  {visibleColumns.tableType && (
                    <TableCell sx={{ border: "1px solid black" }}>
                      {row.tableType}
                    </TableCell>
                  )}
                  {visibleColumns.numPeople && (
                    <TableCell sx={{ border: "1px solid black" }}>
                      {row.numberOfPeople}
                    </TableCell>
                  )}
                  {visibleColumns.numChairs && (
                    <TableCell sx={{ border: "1px solid black" }}>
                      {row.numberOfChairs}
                    </TableCell>
                  )}
                  {visibleColumns.tablePrice && (
                    <TableCell sx={{ border: "1px solid black" }}>
                      {row.tablePrice}
                    </TableCell>
                  )}
                  {visibleColumns.menuItems && (
                    <TableCell sx={{ border: "1px solid black" }}>
                      {row.cartItems.map((item: any) => item.name).join(", ")}
                    </TableCell>
                  )}
                  {visibleColumns.totalMenuPrice && (
                    <TableCell sx={{ border: "1px solid black" }}>
                      {row.cartItems
                        ? row.cartItems.reduce(
                            (total: any, item: any) =>
                              total + item.quantity * item.price,
                            0
                          )
                        : "N/A"}
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default BookingsTable;
