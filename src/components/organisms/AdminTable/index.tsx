import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import SearchBar from "../../atoms/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminsAction } from "../../../redux/action/adminAction";
import { RootState, AppDispatch } from "../../../redux/store";
import { Admin } from "../../../constants/types/adminTableType";

const AdminsTable = () => {
  const dispatch: AppDispatch = useDispatch();

  const { admins } = useSelector((state: RootState) => state.admin); // Assuming you've set up state to track admins

  useEffect(() => {
    dispatch(fetchAdminsAction());
  }, [dispatch]);

  useEffect(() => {
    console.log(admins); // Log to see the structure of the fetched data
  }, [admins]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAdminData = (admins ?? []).filter(
    (admin: Admin) =>
      admin.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          Admin List
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", textAlign: "end" }}
        >
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </Box>
      </Box>
      <Box sx={{ flex: 1, maxHeight: "620px", overflowY: "auto" }}>
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
                ID
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
                Admin Name
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
                Email
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#8b8a8a",
                  zIndex: 1,
                  width: "50px",
                }}
              >
                Role
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid black",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#8b8a8a",
                  zIndex: 1,
                  width: "80px",
                }}
              >
                Contact
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
                Created
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
                Updated
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAdminData.map((admin, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: "1px solid black" }}>
                  {index + 1}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {`${admin.firstName} ${admin.lastName}`}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {admin.email}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {admin.role}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {admin.phoneNumber}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {new Date(admin.createdAt).toLocaleString()}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {new Date(admin.updatedAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default AdminsTable;
