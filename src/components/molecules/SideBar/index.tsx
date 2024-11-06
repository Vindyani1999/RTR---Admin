import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import BookingsIcon from "@mui/icons-material/EventAvailable";
import MenuIcon from "@mui/icons-material/RestaurantMenu";
//import TableIcon from "@mui/icons-material/TableChart";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";

import Logo from "../../../assets/icons/Logo/logo.png";
import { ROUTES } from "../../../constants/routeConstants";
import {
  drawerStyles,
  logoStyles,
  profileIaconContainer,
  profileIcon,
  profileText,
} from "./styles";

import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { fetchAdminProfile } from "../../../redux/action/authAction";

const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchAdminProfile());
  }, [dispatch]);

  const admin = useSelector((state: RootState) => state.auth.admin);
  const firstName = admin?.firstName || "User";
  const lastName = admin?.lastName || "";

  const formatName = (firstName: string, lastName: string) => {
    const formattedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return `${formattedFirstName} ${formattedLastName}`;
  };

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "staff", label: "Staff Member" },
    { value: "manager", label: "Manager" },
  ];

  const getRoleLabel = (roleValue: any) => {
    const roleOption = roleOptions.find((option) => option.value === roleValue);
    return roleOption ? roleOption.label : roleValue;
  };

  return (
    <Drawer sx={drawerStyles} variant="permanent" anchor="left">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <Box component="img" src={Logo} alt="Logo" sx={logoStyles} />
        </Typography>
      </Toolbar>

      <List>
        <ListItem
          button
          component={Link}
          to={ROUTES.BOOKINGS}
          selected={location.pathname === ROUTES.BOOKINGS}
        >
          <ListItemIcon>
            <BookingsIcon />
          </ListItemIcon>
          <ListItemText>Bookings</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to={ROUTES.MENU}
          selected={location.pathname === ROUTES.MENU}
        >
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText>Menu</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to={ROUTES.HISTORY}
          selected={location.pathname === ROUTES.HISTORY}
        >
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText>History</ListItemText>
        </ListItem>
        {/* <ListItem
          button
          component={Link}
          to={ROUTES.TABLES}
          selected={location.pathname === ROUTES.TABLES}
        >
          <ListItemIcon>
            <TableIcon />
          </ListItemIcon>
          <ListItemText>Table Setup</ListItemText>
        </ListItem> */}
        <ListItem
          button
          component={Link}
          to={ROUTES.CREATE_ADMIN}
          selected={location.pathname === ROUTES.CREATE_ADMIN}
        >
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText>Create Admin</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to={ROUTES.ADMINS}
          selected={location.pathname === ROUTES.ADMINS}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText>Admin List</ListItemText>
        </ListItem>

        <ListItem
          button
          component={Link}
          to={ROUTES.LOGOUT}
          selected={location.pathname === ROUTES.LOGOUT}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>

      <Box sx={profileIaconContainer}>
        <Box sx={{ ml: 0.4 }}>
          <IconButton>
            <PersonIcon sx={profileIcon} />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ ...profileText, fontSize: 18 }}>
            {formatName(firstName, lastName)} {/* Display formatted name */}
          </Typography>
          <Typography sx={profileText}>{getRoleLabel(admin?.role)}</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
