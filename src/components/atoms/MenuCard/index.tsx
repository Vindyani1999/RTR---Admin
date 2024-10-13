import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  category: string[];
  onAddToCart: () => void;
  onQuantityChange: (increment: boolean) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({
  name,
  description,
  price,
  image,
  quantity,
  onAddToCart,
  onQuantityChange,
  category,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: "250px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
        //position: "relative", // for positioning the front and back
        //perspective: "1000px", // enables the 3D effect
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        sx={{
          position: "relative",
          width: "250px",
          height: hovered ? "0px" : "150px",
          backfaceVisibility: "hidden", // hides the back side when not hovered
          transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s", // smooth transition for rotation
        }}
      >
        <img
          height="110"
          src={image}
          alt={name}
          style={{ marginTop: 15, borderRadius: 8 }}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h6">{name}</Typography>
          <Divider sx={{ backgroundColor: "orange", marginY: 1 }} />
          <Typography variant="body2" sx={{ fontSize: "0.8rem", mt: -0.5 }}>
            {description}
          </Typography>
          <Typography variant="body2">
            {category.map((cat, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#454141", // dark background color for tag
                  color: "#fff", // text color to white
                  padding: "3px 8px", // padding inside the tag
                  borderRadius: "5px", // rounded corners for tag look
                  marginRight: "5px", // spacing between tags
                  display: "inline-block", // inline-block for tag style
                  opacity: 0.5, // slightly transparent tag
                  fontSize: "0.7rem", // small font size,
                  marginTop: 2,
                }}
              >
                {cat}
              </span>
            ))}
          </Typography>
        </CardContent>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: hovered ? "230px" : "100%",
          backfaceVisibility: "hidden", // hides the front side when not hovered
          transform: hovered ? "rotateY(0deg)" : "rotateY(180deg)",
          transition: hovered ? "transform 0.6s" : "none", // smooth transition for rotation
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#a29d9d",
        }}
      >
        {/* Back Side with Quantity and Add to Cart */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton
            onClick={() => onQuantityChange(false)}
            disabled={quantity === 0}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={() => onQuantityChange(true)}>
            <AddIcon />
          </IconButton>
        </Box>

        <IconButton
          onClick={onAddToCart}
          disabled={quantity === 0}
          sx={{
            textAlign: "center",
            background: "linear-gradient(45deg, darkorange, darkred)",
            opacity: quantity === 0 ? 0.8 : 1,
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "8px",
            boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              background: "linear-gradient(45deg, orange, red)",
            },
          }}
        >
          <Typography
            variant="button"
            sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: 12 }}
          >
            <ShoppingCartIcon sx={{ fontSize: 18 }} />
            Add to Cart
          </Typography>
        </IconButton>
      </Box>
    </Card>
  );
};

export default MenuCard;
