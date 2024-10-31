export const logoStyles = {
  mt: 3,
  height: 70,
  width: "auto",
  cursor: "pointer",
  opacity: 1,
  backgrundColor: "white",
};

export const drawerStyles = {
  width: "18%",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    mt: 5,
    width: "18%",
    boxSizing: "border-box",
    background: "linear-gradient(-45deg, darkred, orange)",
    borderRadius: "0 50px 20px 0",
    boxShadow: "0 10px 15px 0 rgba(0, 0, 0, 0.8)",
  },
};

export const profileIaconContainer = {
  width: "90%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  mt: 20,
  borderRadius: 10,
  mx: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: " 0 0 10px 0 rgba(225, 225, 225, 0.2)",
};

export const profileIcon = {
  fontSize: 30,
  backgroundColor: "gray",
  color: "white",
  padding: 0.5,
  borderRadius: "50%",
};

export const profileText = { ml: 1, color: "wheat", fontSize: 12 };

export const listItemStyles = {
  fontFamily: "Raleway, sans-serif", // Setting font family
  fontSize: "18px", // Setting font size
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Lighter hover background color
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Darker background color when selected
    color: "#fff", // Lighter text color when selected
  },
};
