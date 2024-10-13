import { SxProps } from "@mui/material";

export const downArrowStyle :SxProps= {
    position: "absolute",
    bottom: {xs:"-18px", sm:"-20px",md:"-25px", lg:"-30px",xl:"-30px"},
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#F0F0F0",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#F0F0F0",
    },
}