import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  FormControl,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Divider,
} from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import MenuCard from "../../atoms/MenuCard";
import { menuItems } from "./mockData";
import { categories } from "../../../constants/stringConstants";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  bounceIn,
  cartContainer,
  cartIconStyle,
  cartImage,
  cartRow,
  categoryCeckbox,
  categoryLable,
  filterContainer,
  mainContainer,
  menuItemContainer,
  quantityIcon,
  searchbarStyle,
  sliderStyle,
} from "./styles";
import { MenuItemType } from "../../../constants/types/menuItemType";

interface MenuItemsProps {
  selectedMenuItems: MenuItemType[];
  onMenuItemsChange: (menuItems: MenuItemType[]) => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  onMenuItemsChange,
  selectedMenuItems,
}) => {
  const maxPrice = Math.max(...menuItems.map((item) => item.price));

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, maxPrice]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [cartItems, setCartItems] = useState<MenuItemType[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory.length > 0
        ? selectedCategory.some((category) => item.category.includes(category))
        : true;
    const matchesPrice =
      item.price >= priceRange[0] && item.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleQuantityChange = (id: number, increment: boolean) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) + (increment ? 1 : -1), 0),
    }));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const addToCart = (item: any) => {
    const quantity = quantities[item.id] || 1;

    const itemWithCategoryAsArray = {
      ...item,
      category: Array.isArray(item.category) ? item.category : [item.category],
      quantity,
    };

    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === itemWithCategoryAsArray.name
    );

    let updatedCartItems = [];

    if (existingItemIndex >= 0) {
      updatedCartItems = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? {
              ...cartItem,
              quantity: (cartItem.quantity || 1) + quantity,
            }
          : cartItem
      );
    } else {
      updatedCartItems = [...cartItems, itemWithCategoryAsArray];
    }

    setCartItems(updatedCartItems); // Update cartItems state first
    onMenuItemsChange(updatedCartItems); // Then, call onMenuItemsChange with the updated cart items
  };

  useEffect(() => {
    if (selectedMenuItems) {
      setCartItems(selectedMenuItems);
    }
  }, [selectedMenuItems]);

  const updateCartQuantity = (id: number, increment: boolean) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                (item.quantity || 1) + (increment ? 1 : -1),
                1
              ),
            }
          : item
      )
    );
  };

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  const handleToggle = () => {
    setShowCart((prev) => !prev);
  };

  const deleteCartItem = (id: number) => {
    // Implement your logic to remove the item from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems); // or however you're updating the cart state
  };

  return (
    <Box sx={mainContainer}>
      <ShoppingCartIcon
        sx={{
          ...cartIconStyle,
          animation: `${bounceIn} 1s infinite`,
        }}
        onClick={handleToggle}
      />
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "orange", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {showCart && (
        <Box sx={cartContainer}>
          <Typography variant="h6">Cart Items</Typography>
          <Divider sx={{ my: 1, border: "1px solid orange" }} />
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Box key={item.id} sx={cartRow}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={cartImage}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: 14 }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    {item.quantity} x Rs.{item.price} = Rs.
                    {item.price * (item.quantity || 1)}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    onClick={() => updateCartQuantity(item.id, false)}
                    size="small"
                  >
                    <Remove sx={quantityIcon} />
                  </IconButton>
                  <Typography sx={{ mx: 1, fontSize: 12 }}>
                    {item.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => updateCartQuantity(item.id, true)}
                    size="small"
                  >
                    <Add sx={quantityIcon} />
                  </IconButton>
                </Box>
                <IconButton
                  onClick={() => deleteCartItem(item.id)} // Add delete handler here
                  size="small"
                  sx={{ ml: 2 }}
                >
                  <Delete
                    sx={{
                      backgroundColor: "none",
                      fontSize: 16,
                    }}
                  />{" "}
                  {/* Add delete icon */}
                </IconButton>
              </Box>
            ))
          ) : (
            <Typography>No items in cart</Typography>
          )}

          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Typography variant="h6" sx={{ mb: 2, mr: 2 }}>
              Total: Rs.{getTotalCost()}
            </Typography>
            {/* <GradientButton
              onClick={() => onMenuItemsChange(cartItems)} // Ensure cartItems is passed
              label="Proceed to Checkout"
              disabled={cartItems.length === 0}
            /> */}
          </Box>
        </Box>
      )}
      {/* Menu Items Section */}
      <Box sx={menuItemContainer}>
        <Grid container spacing={2}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <MenuCard
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={
                  Array.isArray(item.category) ? item.category : [item.category]
                }
                quantity={quantities[item.id] || 0}
                onQuantityChange={(increment) =>
                  handleQuantityChange(item.id, increment)
                }
                onAddToCart={() => addToCart(item)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={filterContainer}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Filter Options
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={searchbarStyle}
        />

        <Typography variant="h6">Price Range</Typography>
        <Box sx={{ mx: 1 }}>
          <Typography>
            Rs.{priceRange[0]} - Rs.{priceRange[1]}
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            max={maxPrice}
            min={0}
            sx={sliderStyle}
          />
        </Box>

        <Typography variant="h6">Categories</Typography>
        <FormControl>
          <FormGroup>
            <Grid container>
              {categories.map((category) => (
                <Grid item xs={4} key={category}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCategory.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        name={category}
                        sx={categoryCeckbox}
                      />
                    }
                    label={category}
                    sx={categoryLable}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MenuItems;
