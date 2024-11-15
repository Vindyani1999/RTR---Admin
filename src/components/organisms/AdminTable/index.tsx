import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Button,
  Typography,
} from "@mui/material";
import SearchBar from "../../atoms/SearchBar";
import { adminData } from "./mockData"; // Adjust the import path as necessary

const AdminsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [admins, setAdmins] = useState(adminData); // Use state to manage admin data

  const filteredAdminData = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleActiveStatus = (id: string | number) => {
    // Toggle the active status of the admin
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) =>
        admin.id === id
          ? { ...admin, isActive: !admin.isActive } // Toggle isActive
          : admin
      )
    );
  };

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
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "end",
          }}
        >
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </Box>
      </Box>

      {/* Scrollable Table */}
      <Box
        sx={{
          flex: 1,
          maxHeight: "620px",
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
                  width: "120px",
                }}
              >
                Admin ID
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
                  width: "120px", // Set the width for the action column
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAdminData.map((admin) => (
              <TableRow
                key={admin.id}
                sx={{ opacity: admin.isActive ? 1 : 0.5 }} // Change opacity based on status
              >
                <TableCell sx={{ border: "1px solid black" }}>
                  {admin.id}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {admin.name}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {admin.email}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {admin.role}
                </TableCell>

                <TableCell sx={{ border: "1px solid black", width: "120px" }}>
                  <Button
                    variant="contained"
                    color={admin.isActive ? "error" : "success"}
                    onClick={() => toggleActiveStatus(admin.id)}
                    sx={{
                      width: "100px",
                      fontSize: "0.75rem",
                      textTransform: "none",
                    }}
                  >
                    {admin.isActive ? "Deactivate" : "Activate"}
                  </Button>
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
